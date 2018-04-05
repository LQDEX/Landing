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

router.post('/add', (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  const query = `INSERT INTO ${table} (name, email, phone, message) VALUES ('${name}','${email}','${phone}','${message}')`;
  
  res.locals.connection.query(query, function(error, results, fields) {
    if (error) {
      res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
    }
  });
});

module.exports = router;
