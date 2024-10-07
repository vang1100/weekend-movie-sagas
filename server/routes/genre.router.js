const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Stretch goal
router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

module.exports = router;