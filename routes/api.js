const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('/keys', (req, res) => {
  res.json({
    environment: config.env,
    etherscan: config.apiKeys.etherscan,
    bscscan: config.apiKeys.bscscan,
  });
});

module.exports = router;
