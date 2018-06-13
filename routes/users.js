var express = require('express');
var router = express.Router();
var SqlString = require('sqlstring');


const table = 'users'
/* GET users listing. */
router.get('/all', (req, res, next) => {
  const query = 'SELECT * from ' + table;
  res.locals.connection.query(query, function(error, results,fields){
    if (error) throw error;
    console.log(results);
    res.send(JSON.stringify(results));
  });
});

router.post('/add', (req, res, next) => {
  const name = SqlString.escape(req.body.name);
  const email = SqlString.escape(req.body.email);
  const phone = SqlString.escape(req.body.phone);

  const query = `INSERT INTO ${table} (name, email, phone) VALUES (${name},${email},${phone})`;
  console.log(query);

  res.locals.connection.getConnection((err, conn) => {
    conn.query(query, function(error, results, fields) {
      if (error) {
        res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
          //If there is error, we send the error in the error section with 500 status
      } else {
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
          //If there is no error, all is good and response is 200OK.
      }
    });
    conn.release();
  });
});

module.exports = router;
