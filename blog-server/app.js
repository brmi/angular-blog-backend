var db = require('./db')

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');  
var express = require('express');
var app = express();
var routes = require('./routes/index');
var key = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';

//app.user(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
// var originsWhitelist = [
//   'http://localhost:4200',      //this is my front-end url for development
//    'http://www.myproductionurl.com'
// ];
// var corsOptions = {
//   origin: function(origin, callback){
//         var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//         callback(null, isWhitelisted);
//   },
//   credentials:true
// }
// //here is the magic
// app.use(cors(corsOptions));

/* Connect to Mongo */ 
mongoConnection = db.connectDB( function( err ) {
  var dbConnection = db.getDB();
  var index = require('./routes/index');
  var users = require('./routes/users');

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use('/edit', function(req, res, next) {
    var cookie = req.cookies['jwt'];
    jwt.verify(req.cookies['jwt'], key, function(err, decoded) {
     if (err){
       res.redirect('/login?redirect=/edit/');
     }
     else {
       res.locals.username = decoded.usr;
       next();
     }
    });
   });

  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', index);
  app.use('/users', users);

  app.use(routes);

  app.use(function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
      }
  });


  app.use('/api/:username', function(req, res, next) {
    console.log("BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH");
    console.log("my cookies: " + req.cookies);
    var cookie = req.cookies['jwt'];
    if (!cookie) {
      console.log("Authentication error: No cookie");
      res.render('login', { title: 'Login', uname: req.params.username });
    }
    else {
      jwt.verify(req.cookies['jwt'], key, function(err, decoded) {
        if (decoded) {
          console.log(decoded);
          console.log(decoded.usr);
          if (decoded.usr != req.params.username){
            // bad
            res.status(401);
            console.log("Authentication error: cookie and login do not match. Attempt to access: " + req.params.username + ", but token is: " + decoded.usr);
            res.render('login', { title: 'Login', uname: req.params.username });
          }
          else {
            // good
            console.log("Successful authentication!");
            next();
          }
        }
        else { 
          // Invalid token
          console.log("Authentication error: invalid token, " + cookie);
          res.status(401);
          res.render('login', { title: 'Login', uname: req.params.username });
        }
      });
    }
  });

  app.get('/api/:username', function(req, res, next){
    
    const db = dbConnection.db('BlogServer');

    //Load db & collections
    const postsCollection = db.collection('Posts').find({ username: req.params.username });
    var postsArray = postsCollection.toArray().then(function(result) {
      // console.log(result);
        // check that each post has five fields: postid, title, body, created, and modified
        response = [];
        for(i=0; i< result.length; i++){
          if(result[i].postid && result[i].title && result[i].body && result[i].created && result[i].modified){
            response.push(result[i]);
          }
        }
        console.log("response: ", response);
        res.status(200).send(response);
        // return;
        })
      .catch(function(err){
        res.status(400).send();
        console.log(err);
      });      
  });

  app.get('/api/:username/:postid', function(req, res, next){
    
    const db = dbConnection.db('BlogServer');
    
    //Load db & collections
    const postsCollection = db.collection('Posts').find({ username: req.params.username, postid: parseInt(req.params.postid) });
    var postsArray = postsCollection.toArray().then(function(result) {

        // check that each post has five fields: postid, title, body, created, and modified
        response = [];
        
        for(i=0; i< result.length; i++){
          if(result[i].title && result[i].body && result[i].created && result[i].modified){
            response.push(result[i]);
          } else {
            res.status(404).send("One or more posts were corrupted");
            return;
          }
        }
        if (response.length == 0){
          res.status(404).send(response);
        } else {
          res.status(200).send(response);
        }
        
        })
      .catch(function(err){
        console.log(err);
      });

  });

  app.post('/api/:username/:postid', function(req, res, next){
    
    const db = dbConnection.db('BlogServer');
    
    //Load db & collections
    console.log("inside post api");
    
    const postsCollection = db.collection('Posts').find({ username: req.params.username, postid: parseInt(req.params.postid) });
    var postsArray = postsCollection.toArray().then(function(result) {
      
      if(!req.body.title || !req.body.body){
        console.log("You must include title and body in a post body");
        res.status(400).send({'responseMessage': 'You must include title and body in a post body'});
      } else {
        console.log("title is: ", req.body.title, " body is: ", req.body.body);
      }

      if(result.length !== 0){
        // post already exists
        console.log("post already exists: ", result[0].postid, result[0].title, result[0].body);
        res.status(400).send({'responseMessage': 'post already exists'});
      } else {
        // post does not exist

        db.collection('Posts').insert({
          postid: parseInt(req.params.postid),
          username: req.params.username,
          title: req.body.title,
          body: req.body.body,
          created: new Date().getTime(),
          modified: new Date().getTime()
        }, function(err, result){
          if (err) {
            console.log ("Error ", err);
          } else {
            console.log("Successfully inserted into posts database");
            res.status(201).send({'responseMessage': 'successfully inserted into posts database'});
          }
        });
      }
        
      })
      .catch(function(err){
        console.log("Error: ", err);
      });

  });

  app.put('/api/:username/:postid', function(req, res, next){
    
    const db = dbConnection.db('BlogServer');
    
    //Load db & collections

    
    const postsCollection = db.collection('Posts').find({ username: req.params.username, postid: parseInt(req.params.postid) });
    var postsArray = postsCollection.toArray().then(function(result) {
      
      if(result.length !== 0){
        // post already exists
        if(!req.body.title && !req.body.body){
          console.log("no title or body");
          res.status(400).send();
          return;
        }

        db.collection('Posts').update({username: req.params.username, postid: parseInt(req.params.postid)}, {$set: {
          title: req.body.title,
          body: req.body.body,
          modified: new Date().getTime()
        }}).then(function(result){
          res.status(200).send();
          return;
        })
        .catch(function(err){
          console.log(err);
        });

      } else {
        // post does not exist
        console.log("post does not exist...");
        res.status(400).send();
      }
        
      })
      .catch(function(err){
        console.log(err);
      });

  });

  app.delete('/api/:username/:postid', function(req, res, next){
    
    const db = dbConnection.db('BlogServer');
    
    //Load db & collections

    
    const postsCollection = db.collection('Posts').find({ username: req.params.username, postid: parseInt(req.params.postid) });
    var postsArray = postsCollection.toArray().then(function(result) {
      
      if(result.length !== 0){
        // post already exists
        
        db.collection('Posts').remove({username: req.params.username, postid: parseInt(req.params.postid)})
          .then(function(result){
            res.status(204).send();
            return;
        })
        .catch(function(err){
          console.log(err);
        });

      } else {
        // post does not exist
        console.log("post does not exist...");
        res.status(400).send();
      }
        
      })
      .catch(function(err){
        console.log(err);
      });

  });

  

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  console.log('Connected to Mongo!');
});

module.exports = app;

