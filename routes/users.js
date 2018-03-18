var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.send([
    {id:1, username:'paco'},
    {id:2, username:'maria'}
  ]);
});

module.exports = router;
