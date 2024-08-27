const express = require("express");
const {handleGenerateNewUrl, handleGetAnalytics} = require("./../controllers/url");
const router = express.Router();

router.post('/',handleGenerateNewUrl);

router.get('/analytics/:id',handleGetAnalytics);

module.exports = router;