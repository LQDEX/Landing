const express = require('express');
const router = express.Router();
const url = require('url');


router.all('/', (req, res, next) => {
  res.redirect(`/`);
});

module.exports = router;
