const express = require("express");
const cors = require('cors');
const { connectDB } = require("./dbconnect");
const URL = require("./models/url");
const urlRoute = require("./routes/urlroute");

const app = express();
const PORT = 3003;

// CORS for Cross Origin Requests
app.use(cors());

app.use(express.json());
app.use('/url', urlRoute);

//Route Redirect
app.get('/:shortId', async (req, res) => {
    try {
        const shortID = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortID },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    }
                },
            },
            { new: true } // Ensure that the updated document is returned
        );

        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send('URL not found');
        }
    } catch (error) {
        console.error('Error processing redirection:', error);
        res.status(500).send('Server Error');
    }
});

connectDB('mongodb://localhost:27017/shorturl-db')
    .then(() => console.log('MongoDB connected Successfully!'))
    .catch((err) => console.log('MongoDB connection error: ', err));

app.listen(PORT, () => 
    console.log(`Server is listening at PORT ${PORT}`));
