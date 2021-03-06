import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class BlogService {
  private posts: Post[]= []; //memory cache of all blog posts
  private username: String = "";
  private key = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
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
    var cookie = document.cookie;
    cookie = cookie.substr(4); // get rid of jwt= ......
    console.log("cookie is", cookie);
    this.username = jwt.decode(cookie).usr;
    console.log("Token Username is:" + this.username);
    
    const FETCH_URL = 'http://localhost:3000/api/' + this.username;

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
        credentials: 'same-origin',
        headers: {
          // 'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
          
        }})
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .then(json => {
        console.log('response data: ', json)
        for(var i =0; i < json.length; i++){
          let currentPost = json[i];
          posts.push(currentPost);
        }
        console.log("fetched posts: ", posts);
        }).catch(error => console.error("!!! Error: ", error));
    })(this.posts);
  }

  getPosts(): Post[] {
    /* DONE: This method simply returns posts */
    return this.posts;
  }

  getPost(id: number): Post{

  
    /* DONE: Find the post with postid=id from posts and return it */
    // let retrievedPost: Post = JSON.parse(localStorage.getItem(id.toString()));
    
    let localPost = this.posts.find(x => x.postid === id) || null;
    if(!localPost){
      localPost = this.posts.find(x => x.postid.toString() === id.toString());
    }
    return localPost;
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

    const FETCH_URL = 'http://localhost:3000/api/'+ this.username + '/' + newPost.postid;
    var myOptions = {
      method: 'POST',
      credentials: 'same-origin',
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
          if(res.status != 201){
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
   const FETCH_URL = 'http://localhost:3000/api/'+ this.username +'/' + post.postid;
   var myOptions = {
     method: 'PUT',
     credentials: 'same-origin',
     body: JSON.stringify({"title": post.title, "body": post.body}),
     dataType: 'json',
     headers: {
       // 'Authorization': 'Bearer ' + accessToken,
       'Content-Type': 'application/json' 
     }
   };

   (function (router, posts) {
    fetch(FETCH_URL, 
      {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify({"title": post.title, "body": post.body}),
        headers: {
          // 'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/json' 
        }})
     .then(function(res) {
       if (res.status != 200) {
         alert("Error: There was an error updating the post at the server!");
         // TODO: Reroute to edit
        router.navigate(['/edit', post.postid]);
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
  
    

  }

  deletePost(postid: number): void {
   /*
    From posts, find a post whose postid is the same as the passed in value, 
    delete it from posts, and send a DELETE request to /api/:username/:postid 
    (after setting up the response event handler). If no such post exists, do nothing.

    The response event handler should do nothing if the response status code is "204 (No content)".
    Otherwise, it should display an alert message saying that there was an error 
    deleting the post at the server, and navigate to /, the "list pane" of the editor.
   */
    // if (! this.getPost(postid)) {
    //   return;
    // }
    console.log("going to delete: ", postid);
    const FETCH_URL = 'http://localhost:3000/api/'+ this.username + '/' + String(postid);
    var myOptions = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        // 'Authorization': 'Bearer ' + accessToken,
        
      }
    };


    (function (router) {
    fetch(FETCH_URL, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        // 'Authorization': 'Bearer ' + accessToken,
        
      }})
      .then(function(res) {
        if (res.status != 204) {
          alert("Error: There was an error deleting the post at the server!");
          // TODO: Reroute to list?
          router.navigate(['/']);
        }
      })
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success: ', response);
      });      
    })(this.router);
    let removeIndex = this.posts.map(function(item) { return (item.postid).toString(); }).indexOf(postid.toString());
    this.posts.splice(removeIndex, 1);
  }
}

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}
