const shortid = require('shortid');
const URL = require('../models/url');

async function GenerateNewShortUrl(req, res) {
    const body = req.body;

    if (!body || !body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortID = shortid.generate(); // Generate a unique shortID

    try {
        const newUrl = await URL.create({
            shortID: shortID, // Ensure shortID is included
            redirectURL: body.url,
            visitHistory: [],
        });
        return res.json({ id: shortID });
    } catch (error) {
        console.error('Error creating URL:', error);
        return res.status(500).json({ error: 'Failed to create short URL' });
    }
}



module.exports = {
    GenerateNewShortUrl,
};
