var express = require('express');
var router = express.Router();
var MongoDB = require('../db');
var commonmarkLibrary = require('commonmark');
var dbConnection = MongoDB.getDB();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog/:username', function(req, res, next) {
  console.log(req.params.username);
  var startID = parseInt(req.query.start) || 1;
  console.log(startID);
  var perPage = 5;

  const db = dbConnection.db('BlogServer');

  //Load db & colletions
  const postsCollection = db.collection('Posts').find({ username: req.params.username }).skip(startID-1).limit(perPage);
  var postsArray = postsCollection.toArray().then(function(result) {

    var reader = new commonmarkLibrary.Parser();
    var writer = new commonmarkLibrary.HtmlRenderer();
    
    var count = 1;
    for(i=0; i< result.length; i++){
      var parsedTitle = reader.parse(result[i].title);
      result[i].title = writer.render(parsedTitle);
      var parsedBody = reader.parse(result[i].body);
      result[i].body = writer.render(parsedBody);
      count += 1;
    }

    
    if(result.length < 5){
      count = 0;
    }
    res.render('blog', { username: req.params.username, posts: result, nextStartingID: count });
  })
  .catch(function(err){
    console.log(err);
  });

});

router.get('/blog/:username/:postid', function(req, res, next) {
  console.log(req.params.username);
  console.log(req.params.postid, typeof(req.params.postid));
  const db = dbConnection.db('BlogServer');

  //Load db & colletions
  const postsCollection = db.collection('Posts').find({ postid: parseInt(req.params.postid), username: req.params.username });
  var postsArray = postsCollection.toArray().then(function(result) {
    var reader = new commonmarkLibrary.Parser();
    var writer = new commonmarkLibrary.HtmlRenderer();
    
    var parsedTitle = reader.parse(result[0].title);
    result[0].title = writer.render(parsedTitle);
    var parsedBody = reader.parse(result[0].body);
    result[0].body = writer.render(parsedBody);

    res.render('blog', { title: req.params.username, posts: result });
  })
  .catch(function(err){
    console.log(err);
  });

});


router.get('/login', function(req, res, next) {
  console.log(req.query.username);
  console.log(req.query.password);
  res.render('login', { title: 'Login' });
  // res.send('Response send to client::'+req.query.username);
});


module.exports = router;
