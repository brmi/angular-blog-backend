var express = require('express');
var router = express.Router();
var MongoDB = require('../db')
var dbConnection = MongoDB.getDB();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog/:username', function(req, res, next) {
  console.log(req.params.username);
  const db = dbConnection.db('BlogServer');

  //Load db & colletions
  const postsCollection = db.collection('Posts').find({ username: req.params.username });
  var postsArray = postsCollection.toArray();
  
  console.log('Posts: ', postsArray);
  
  res.render('blog', { title: req.params.username, posts: postsArray });

});

router.get('/login', function(req, res, next) {
  console.log(req.query.username);
  console.log(req.query.password);
  res.render('login', { title: 'Login' });
  // res.send('Response send to client::'+req.query.username);
});


module.exports = router;
