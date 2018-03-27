var express = require('express');
var router = express.Router();

const table = 'messages'
/* GET users listing. */
router.get('/all', (req, res, next) => {
  const query = 'SELECT * from ' + table;
  res.locals.connection.query(query, function(error, results,fields){
    if (error) throw error;
    console.log(results);
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
