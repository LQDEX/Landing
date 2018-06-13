var express = require('express');
var router = express.Router();
var SqlString = require('sqlstring');

const table = 'messages'
/* GET users listing. */
router.get('/all', (req, res, next) => {
  const query = 'SELECT * from ' + table;
  res.locals.connection.query(query, function(error, results, fields){
    if (error) throw error;
    console.log(results);
    res.send(JSON.stringify(results));
  });
});

router.post('/add', (req, res, next) => {
  const name = SqlString.escape(req.body.name);
  const email = SqlString.escape(req.body.email);
  const phone = SqlString.escape(req.body.phone);
  const message = SqlString.escape(req.body.message);

  const query = `INSERT INTO ${table} (name, email, phone, message) VALUES (${name},${email},${phone},${message})`;
  console.log(query);

	res.locals.connection.getConnection((err, conn) => {
    conn.query(query, function(error, results, fields) {
      if (error) {
        // If there is error, we send the error in the error section with 500 status
        res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
      } else {
        // If there is no error, all is good and response is 200OK.
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      }
    });
    conn.release();
  });
});

module.exports = router;
