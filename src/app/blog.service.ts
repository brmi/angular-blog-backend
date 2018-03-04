import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
<<<<<<< HEAD
import { Promise } from 'q';
=======
import * as jwt from 'jsonwebtoken';
>>>>>>> 764360584b76b0eb39489ab1b3c933d52dff9c19

@Injectable()
export class BlogService {
  private posts: Post[]= []; //memory cache of all blog posts
  private username: String = "";
  constructor(private route: ActivatedRoute, private router: Router) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    /* DONE:
      This method "populates" the posts property by retrieving 
      all all blog posts from localStorage. This function must be 
      called inside the constructor so that all posts are retrieved 
      and be ready in memory when BlogService is created. 
    */
    let key = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
    var cookie = document.cookie;
    cookie = cookie.substr(4); // get rid of jwt= ......
    console.log("cookie", cookie);
    this.username = jwt.decode(cookie).usr;
    console.log("Token Username is:" + this.username);
    
    const FETCH_URL = 'http://lvh.me:3000/api/' + this.username;

    var myOptions = {
      method: 'GET',
      dataType: 'json',
      credentials: 'same-origin',
      headers: {
        // 'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        
      }
    };

   (function (posts) {
      fetch(FETCH_URL,  {
        method: 'GET',
        // dataType: 'json',
        credentials: 'same-origin',
        headers: {
          // 'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
          
        }})
      .then(response => response.json())
      .then(json => {
        console.log('response data: ', json)
        for(var i =0; i < json.length; i++){
          let currentPost = json[i];
          posts.push(currentPost);
        }
        }).catch(error => console.error("!!! Error: ", error));
    })(this.posts);

    console.log("In fetch posts");
  }

  getPosts(): Post[] {
    /* DONE: This method simply returns posts */
    console.log("In get posts");
    return this.posts;
  }

  getPost(id: number): Post{
    console.log("get post with id: ", id);
    /* DONE: Find the post with postid=id from posts and return it */
    // let retrievedPost: Post = JSON.parse(localStorage.getItem(id.toString()));
<<<<<<< HEAD

    // let found = this.posts.find(x => x.postid === id);
    
    console.log("fetched", (this.posts).length);
=======
    console.log("IM IN GET POSTTTTTTT");
>>>>>>> 764360584b76b0eb39489ab1b3c933d52dff9c19
    var found = null;
    //return some variables

    for (var i = 0; i < (this.posts).length; i++){
      var element = this.posts[i];
      console.log("element: ", element);

      if (element.postid == id) {
        found = element;
      }

      // console.log("get post:" + found);

      // returns null if post is not found
      return found;
    }
    
  }

  newPost(): Post {
    /* DONE
    Create a new post with a new postid, an empty title
    and body, and current creation and modification times,
    save it to localStorage, add it to posts, and return it.
    The postid of a new post should start at 1 and increase
    linearly.
    */
    let currentDate = new Date();
    let newPost:Post = new Post;

    // Find existing max postid
    let maxID = Math.max.apply(Math,this.posts.map(function(item){return item.postid;}));

    // For Clear Storage case 
    if (maxID < 0) {
      maxID = 0;
    }
    console.log("maxid", maxID);

    // create new post

    newPost.postid = maxID + 1;
    newPost.created = currentDate;
    newPost.modified = currentDate;
    newPost.title='default title';
    newPost.body='default body';

    // save to localStorage
    // console.log("saving to local storage: ", newPost.postid.toString());
    // localStorage.setItem(newPost.postid.toString(), JSON.stringify(newPost));
    
    // Add to posts
    console.log("push post: ", this.posts.push(newPost));

    console.log("Just created new post: ", newPost, " current id is now:  ", maxID + 1);

    const FETCH_URL = 'http://lvh.me:3000/api/'+ this.username + '/' + newPost.postid;
    var myOptions = {
      method: 'POST',
<<<<<<< HEAD
=======
      credentials: 'same-origin',
>>>>>>> 764360584b76b0eb39489ab1b3c933d52dff9c19
      body: JSON.stringify({"title": "default title", "body": "default body"}),
      dataType: 'json',
      headers: {
        // 'Authorization': 'Bearer ' + accessToken,
        
        'Content-Type': 'application/json'
      }
    };

   (function (postid, posts, router) {
      fetch(FETCH_URL, {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({"title": "default title", "body": "default body"}),
        // dataType: 'json',
        headers: {
          // 'Authorization': 'Bearer ' + accessToken,
          
          'Content-Type': 'application/json'
        }})
        .then(res => {
          res.json()
          console.log("response: " + res.status);
          if(res.status == 400){
            console.log("deleted post");
            alert("Error creating post at the server");
            let removeIndex = posts.map(function(item) { return (item.postid).toString(); }).indexOf(postid.toString());
            posts.splice(removeIndex, 1);
            router.navigate(['/']);
          }
        })
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('Success: ', response);
        });
    })(newPost.postid, this.posts, this.router);
    
    return newPost; 
  }

  updatePost(post: Post): void {
    /* DONE
    From posts, find a post whose postid is the same as 
    post.postid, update its title and body with the passed-in
    values, change its modification time to now, and update
    the post in localStorage. If no such post exists, do nothing.
    */
<<<<<<< HEAD
    let currentTime = new Date();
    let retrievedPost = JSON.parse(localStorage.getItem(post.postid.toString()));
    retrievedPost.title = post.title;
    retrievedPost.body = post.body;
    retrievedPost.modified = currentTime;
    
    // update post in localStorage
    localStorage.setItem(retrievedPost.postid.toString(), JSON.stringify(retrievedPost));

    // update post in local array
    let localPost = this.posts.find(x => x.postid === post.postid);
    localPost.title = post.title;
    localPost.body = post.body;
    localPost.modified = post.modified;
=======
    /*
    From posts, find a post whose postid is the same as post.postid,
    update its title and body with the passed-in values, 
    change its modification time to now, 
    and send a PUT request to /api/:username/:postid 
    (after setting up the response event handler). 
    If no such post exists, do nothing.

    The response event handler should do nothing if the response status code is "200 (OK)".
    Otherwise, it should display an alert message saying that there 
    was an error updating the post at the server, 
    and navigate to the "edit view" of the post.
    */
   const FETCH_URL = 'http://lvh.me:3000/api/'+ this.username +'/' + post.postid;
   var myOptions = {
     method: 'PUT',
    //  credentials: 'same-origin',
     body: JSON.stringify({"title": post.title, "body": post.body}),
     dataType: 'json',
     headers: {
       // 'Authorization': 'Bearer ' + accessToken,
       'Content-Type': 'application/json' 
     }
   };

   (function (router, posts) {
    fetch(FETCH_URL, 
      myOptions)
     .then(function(res) {
       if (res.status != 200) {
         alert("Error: There was an error updating the post at the server!");
         // TODO: Reroute to edit
        //  redirect: window.location.replace("../Sample/home.html") 
        console.log("Did i rerwdwwoute?");
        // this.router.navigateByUrl('/');
        router.navigate(['/edit', post.postid]);
        // router.navigate(['/']);
         console.log("Did i reroute?");
       }
       else {
         // update post in local array
          let localPost = posts.find(x => x.postid === post.postid);
          localPost.title = post.title;
          localPost.body = post.body;
          localPost.modified = new Date();
       }
     })
     .catch(error => console.error("!!! Error: ", error))
     .then(response => {
       console.log('Success: ', response);
     });
   })(this.router, this.posts);
  
    

>>>>>>> 764360584b76b0eb39489ab1b3c933d52dff9c19
  }

  deletePost(postid: number): void {
    /* DONE
    From posts, find a post whose postid is the same as
    post.postid, delete it from posts, and delete a 
    corresponding post from localStorage. If no such post
    exists, do nothing.
    */
   /*
    From posts, find a post whose postid is the same as the passed in value, 
    delete it from posts, and send a DELETE request to /api/:username/:postid 
    (after setting up the response event handler). If no such post exists, do nothing.

    The response event handler should do nothing if the response status code is "204 (No content)".
    Otherwise, it should display an alert message saying that there was an error 
    deleting the post at the server, and navigate to /, the "list pane" of the editor.
   */

    console.log("GONNA DELETE THIS POST: " + this.getPost(postid));
    if (! this.getPost(postid)) {
      return;
    }

    const FETCH_URL = 'http://lvh.me:3000/api/'+ this.username + '/' + postid;
    var myOptions = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        // 'Authorization': 'Bearer ' + accessToken,
        
      }
    };

<<<<<<< HEAD
    fetch(FETCH_URL, myOptions)
=======

    (function (router) {
    fetch(FETCH_URL, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        // 'Authorization': 'Bearer ' + accessToken,
        
      }})
>>>>>>> 764360584b76b0eb39489ab1b3c933d52dff9c19
      .then(function(res) {
        if (res.status != 204) {
          alert("Error: There was an error deleting the post at the server!");
          // TODO: Reroute to list?
        }
      })
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success: ', response);
<<<<<<< HEAD
      });

      let removeIndex = this.posts.map(function(item) { return (item.postid).toString(); }).indexOf(postid.toString());
      this.posts.splice(removeIndex, 1);
  }

=======
      });      
    })(this.router);
    let removeIndex = this.posts.map(function(item) { return (item.postid).toString(); }).indexOf(postid.toString());
    this.posts.splice(removeIndex, 1);
  }
>>>>>>> 764360584b76b0eb39489ab1b3c933d52dff9c19
}

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}
