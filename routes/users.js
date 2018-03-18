var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.locals.connection.query('SELECT * from users', function(error, results,fields){
  //   if (error) throw error;
  //   console.log(results);
  //   res.send(JSON.stringify(results));
  // });
  res.json([
    {id:1, username:'paco'},
    {id:2, username:'maria'}
  ]);
});

module.exports = router;
