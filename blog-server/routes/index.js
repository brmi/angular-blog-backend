var express = require('express');
var router = express.Router();
var commonmarkLibrary = require('commonmark');
var db = require('../db');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');  
var cookieParser = require('cookie-parser');

mongoConnection = db.connectDB( function( err ) {

  var dbConnection = db.getDB();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.redirect('/edit');
  });



  router.get('/blog/:username', function(req, res, next) {
    var startID = parseInt(req.query.start) || 1;
    var perPage = 6;
    const db = dbConnection.db('BlogServer');


    //Load db & colletions
    const postsCollection = db.collection('Posts').find({ username: req.params.username }).skip(startID-1).limit(perPage);
    const getLength = db.collection('Posts').find({ username: req.params.username }).skip(startID-1).count()
    .then(function(numItems) {
      console.log(numItems); // Use this to debug
      // callback(numItems);


      console.log("num posts: ", numItems);
      var postsArray = postsCollection.toArray().then(function(result) {

        var reader = new commonmarkLibrary.Parser();
        var writer = new commonmarkLibrary.HtmlRenderer();
        
        var count = 0;
        
        for(i=0; i< result.length; i++){
          var parsedTitle = reader.parse(result[i].title);
          result[i].title = writer.render(parsedTitle);
          var parsedBody = reader.parse(result[i].body);
          result[i].body = writer.render(parsedBody);
          count += 1;
        }

        if(result.length > 5){
          console.log('more than 5...');
          count = startID + 5;
        // } else if (numItems%5 == 0){
        //   count = numItems - 4;
        // } else {
        //   count = startID + 5;
        } else {
          count = 0;
        }
        console.log("next startingID: ", count);
        length = Math.min(5, result.length);
        res.render('blog', { username: req.params.username, posts: result, nextStartingID: count, length: length });
      })
      .catch(function(err){
        console.log(err);
      });

    });

  });

  router.get('/blog/:username/:postid', function(req, res, next) {
    console.log(req.params.username);
    console.log(req.params.postid, typeof(req.params.postid));
    const db = dbConnection.db('BlogServer');

    //Load db & colletions
    const postsCollection = db.collection('Posts').find({ postid: parseInt(req.params.postid), username: req.params.username });
    var postsArray = postsCollection.toArray().then(function(result) {
      console.log("result in /username/postid", result);
      var reader = new commonmarkLibrary.Parser();
      var writer = new commonmarkLibrary.HtmlRenderer();
      
      var parsedTitle = reader.parse(result[0].title);
      result[0].title = writer.render(parsedTitle);
      var parsedBody = reader.parse(result[0].body);
      result[0].body = writer.render(parsedBody);

      res.render('blog', { username: req.params.username, posts: result, nextStartingID: 0, length: 1 });
    })
    .catch(function(err){
      console.log(err);
    });

  });


  router.get('/login', function(req, res, next) {
    console.log("login username: ", req.query.username);
    console.log("login password: ", req.query.password);
    console.log("login redirect: " , req.query.redirect);
    console.log("login redirect p? : ", req.params.redirect);
    
    const db = dbConnection.db('BlogServer');
    const minutesToAdjust = 120;
    const millisecondsPerMinute = 60000;
    const key = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';

    const user = db.collection('Users').find({ username: req.query.username });
    var userArray = user.toArray().then(function(result) {
      if (result.length > 0) {
        let hash = result[0].password;
        bcrypt.compare(req.query.password, hash, function(err, res2) {
          if (res2 == false ){
            console.log("Passwords did not match.");
            res.render('login', { title: 'Login', uname: req.query.username });
          }
          else {
            console.log("Passwords matched!");
            const payload = {
              "exp": Math.floor(Date.now() / 1000) + (120 * 60), 
              "usr": req.query.username
            };

            var token = jwt.sign(payload, key);
            console.log(token);
            res.cookie('jwt', token);

            // Redirection
            if (!req.query.redirect){
              console.log("No redirection provided");
              res.locals.username = req.query.username;
              res.locals.password = req.query.password;
              res.redirect('/edit/');
            }
            else {
              console.log("Redirecting....");
            res.redirect(req.query.redirect);
            }
          }
        });
      }
      else {
        console.log("No user with that name found.")
        res.render('login', { title: 'Login', uname: req.query.username });
      }
    })
    .catch(function(err){
      console.log(err);
    });
  });

});



module.exports = router;
