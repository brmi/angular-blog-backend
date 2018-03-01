var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  console.log(req.query.username);
  console.log(req.query.password);
  res.render('login', { title: 'Login' });
  // res.send('Response send to client::'+req.query.username);
});
























module.exports = router;
