var express = require('express');
var router = express.Router();

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
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  const query = `INSERT INTO ${table} (name, email, phone) VALUES ('${name}','${email}','${phone}')`;
  console.log(query);
  
  res.locals.connection.query(query, function(error, results,fields){
     if (error) throw error;
     console.log(results);
  res.send(results);
  // });
  // res.send(req.body);
  });
});

module.exports = router;
