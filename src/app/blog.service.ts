import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  private posts: Post[]; //memory cache of all blog posts
  
  constructor() {
    this.posts = [
      {
        postid: 1,
        created: new Date(),
        modified: new Date(),
        title: 'post 1',
        body: 'post 1 body'
      }, 
      {
        postid: 2,
        created: new Date(),
        modified: new Date(),
        title: 'post 2',
        body: 'post 2 body'
      },
      {
        postid: 3,
        created: new Date(),
        modified: new Date(),
        title: 'post 3',
        body: 'post 3 body'
      }
    ]
  }

  fetchPosts(): void {
    /* 
      This method "populates" the posts property by retrieving 
      all all blog posts from localStorage. This function must be 
      called inside the constructor so that all posts are retrieved 
      and be ready in memory when BlogService is created. 
    */

  }

  getPosts(): Post[] {
    /* DONE: This method simply returns posts */
    return this.posts;
  }

  getPost(id: number): Post{
    /* Find the post with postid=id from posts and return it */
    return new Post; 
  }

  newPost(): Post {
    /*
    Create a new post with a new postid, an empty title
    and body, and current creation and modification times,
    save it to localStorage, add it to posts, and return it.
    The postid of a new post should start at 1 and increase
    linearly.
    */
    return new Post; 
  }

  updatePost(post: Post): void {
    /* 
    From posts, find a post whose postid is the same as 
    post.postid, update its title and body with the passed-in
    values, change its modification time to now, and update
    the post in localStorage. If no such post exists, do nothing.
    */
  }

  deletePost(postid: number): void {
    /* 
    From posts, find a post whose postid is the same as
    post.postid, delete it from posts, and delete a 
    corresponding post from localStorage. If no such post
    exists, do nothing.
    */
  }
}

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}
