const express = require('express');
const { GenerateNewShortUrl } = require("../controllers/urlcontroller");
const router = express.Router();

router.post('/', GenerateNewShortUrl);

router.get('/analytics/:shortId');

module.exports = router;