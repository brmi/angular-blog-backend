webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Lora:400,700');\n\n.container{\n    padding: 20px;\n    font-family: 'Lora', Arial, Helvetica, sans-serif;\n    font-size: 16px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Root Component for App; all selectors will go here -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = '';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__array_sort_pipe__ = __webpack_require__("../../../../../src/app/array.sort.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */] },
    { path: 'preview/:id', component: __WEBPACK_IMPORTED_MODULE_8__preview_preview_component__["a" /* PreviewComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__preview_preview_component__["a" /* PreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__array_sort_pipe__["a" /* ArraySortPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/array.sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = /** @class */ (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (array, property) {
        array.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1;
            }
            else if (a[property] > b[property]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    ArraySortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: "sort"
        })
    ], ArraySortPipe);
    return ArraySortPipe;
}());



/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__("../../../../jsonwebtoken/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = /** @class */ (function () {
    function BlogService(route, router) {
        this.route = route;
        this.router = router;
        this.posts = []; //memory cache of all blog posts
        this.username = "";
        this.fetchPosts();
    }
    BlogService.prototype.fetchPosts = function () {
        /* DONE:
          This method "populates" the posts property by retrieving
          all all blog posts from localStorage. This function must be
          called inside the constructor so that all posts are retrieved
          and be ready in memory when BlogService is created.
        */
        var key = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
        var cookie = document.cookie;
        cookie = cookie.substr(4); // get rid of jwt= ......
        console.log("cookie is", cookie);
        this.username = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__["decode"](cookie).usr;
        console.log("Token Username is:" + this.username);
        var FETCH_URL = 'http://localhost:3000/api/' + this.username;
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
            fetch(FETCH_URL, {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    // 'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json',
                }
            })
                .then(function (response) {
                console.log('response: ', response);
                return response.json();
            })
                .then(function (json) {
                console.log('response data: ', json);
                for (var i = 0; i < json.length; i++) {
                    var currentPost = json[i];
                    posts.push(currentPost);
                }
                console.log("fetched posts: ", posts);
            }).catch(function (error) { return console.error("!!! Error: ", error); });
        })(this.posts);
        console.log("INSIDE fetchPosts()");
    };
    BlogService.prototype.getPosts = function () {
        /* DONE: This method simply returns posts */
        console.log("INSIDE getPosts()");
        return this.posts;
    };
    BlogService.prototype.getPost = function (id) {
        /* DONE: Find the post with postid=id from posts and return it */
        // let retrievedPost: Post = JSON.parse(localStorage.getItem(id.toString()));
        // var found = null;
        // //return some variables
        // for (var i = 0; i < (this.posts).length; i++){
        //   var element = this.posts[i];
        //   if (element.postid == id) {
        //     found = element;
        //     console.log("INSIDE getPost() in blogservice: numbers match. found element = ", found);
        //   } else if ((element.postid).toString() == id.toString()){
        //     console.log("INSIDE getPost() in blogservice: strings match");
        //     found = element;
        //     found.postid = id;
        //   }
        //   // console.log("get post:" + found);
        //   // returns null if post is not found
        //   return found;
        // }
        var localPost = this.posts.find(function (x) { return x.postid === id; }) || null;
        if (!localPost) {
            localPost = this.posts.find(function (x) { return x.postid.toString() === id.toString(); });
        }
        console.log("INSIDE getPost()... fetching id", id, ' this.posts = ', this.posts, '\n FOUND: ', localPost);
        return localPost;
    };
    BlogService.prototype.newPost = function () {
        /* DONE
        Create a new post with a new postid, an empty title
        and body, and current creation and modification times,
        save it to localStorage, add it to posts, and return it.
        The postid of a new post should start at 1 and increase
        linearly.
        */
        var currentDate = new Date();
        var newPost = new Post;
        // Find existing max postid
        var maxID = Math.max.apply(Math, this.posts.map(function (item) { return item.postid; }));
        // For Clear Storage case 
        if (maxID < 0) {
            maxID = 0;
        }
        console.log("maxid", maxID);
        // create new post
        newPost.postid = maxID + 1;
        newPost.created = currentDate;
        newPost.modified = currentDate;
        newPost.title = 'default title';
        newPost.body = 'default body';
        // save to localStorage
        // console.log("saving to local storage: ", newPost.postid.toString());
        // localStorage.setItem(newPost.postid.toString(), JSON.stringify(newPost));
        // Add to posts
        console.log("push post: ", this.posts.push(newPost));
        console.log("Just created new post: ", newPost, " current id is now:  ", maxID + 1);
        var FETCH_URL = 'http://localhost:3000/api/' + this.username + '/' + newPost.postid;
        var myOptions = {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify({ "title": "default title", "body": "default body" }),
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
                body: JSON.stringify({ "title": "default title", "body": "default body" }),
                // dataType: 'json',
                headers: {
                    // 'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                }
            })
                .then(function (res) {
                res.json();
                console.log("response: " + res.status);
                if (res.status == 400) {
                    console.log("deleted post");
                    alert("Error creating post at the server");
                    var removeIndex = posts.map(function (item) { return (item.postid).toString(); }).indexOf(postid.toString());
                    posts.splice(removeIndex, 1);
                    router.navigate(['/']);
                }
            })
                .catch(function (error) { return console.error('Error:', error); })
                .then(function (response) {
                console.log('Success: ', response);
            });
        })(newPost.postid, this.posts, this.router);
        return newPost;
    };
    BlogService.prototype.updatePost = function (post) {
        console.log("INSIDE updatePost()");
        /* DONE
        From posts, find a post whose postid is the same as
        post.postid, update its title and body with the passed-in
        values, change its modification time to now, and update
        the post in localStorage. If no such post exists, do nothing.
        */
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
        var FETCH_URL = 'http://localhost:3000/api/' + this.username + '/' + post.postid;
        var myOptions = {
            method: 'PUT',
            credentials: 'same-origin',
            body: JSON.stringify({ "title": post.title, "body": post.body }),
            dataType: 'json',
            headers: {
                // 'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            }
        };
        (function (router, posts) {
            fetch(FETCH_URL, {
                method: 'PUT',
                credentials: 'same-origin',
                body: JSON.stringify({ "title": post.title, "body": post.body }),
                headers: {
                    // 'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                }
            })
                .then(function (res) {
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
                    var localPost = posts.find(function (x) { return x.postid === post.postid; });
                    localPost.title = post.title;
                    localPost.body = post.body;
                    localPost.modified = new Date();
                }
            })
                .catch(function (error) { return console.error("!!! Error: ", error); })
                .then(function (response) {
                console.log('Success: ', response);
            });
        })(this.router, this.posts);
    };
    BlogService.prototype.deletePost = function (postid) {
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
        if (!this.getPost(postid)) {
            return;
        }
        var FETCH_URL = 'http://localhost:3000/api/' + this.username + '/' + postid;
        var myOptions = {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {}
        };
        (function (router) {
            fetch(FETCH_URL, {
                method: 'DELETE',
                credentials: 'same-origin',
                headers: {}
            })
                .then(function (res) {
                if (res.status != 204) {
                    alert("Error: There was an error deleting the post at the server!");
                    // TODO: Reroute to list?
                }
            })
                .catch(function (error) { return console.error('Error:', error); })
                .then(function (response) {
                console.log('Success: ', response);
            });
        })(this.router);
        var removeIndex = this.posts.map(function (item) { return (item.postid).toString(); }).indexOf(postid.toString());
        this.posts.splice(removeIndex, 1);
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit{\n    padding: 30px;\n    width: 400px;\n}\n\n:host {\n   display:-webkit-box;\n   display:-ms-flexbox;\n   display:flex;\n   -ms-flex-pack: distribute;\n       justify-content: space-around;\n  }\n\n.title, .body{\n      font-size: 28px;\n      font-weight: 700;\n  }\n\nbutton{\n\tbackground-color: #fff;\n    margin: auto;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 2px 4px rgba(228, 228, 228, 0.16), 0 2px 4px rgba(230, 230, 230, 0.23);\n            box-shadow: 0 2px 4px rgba(228, 228, 228, 0.16), 0 2px 4px rgba(230, 230, 230, 0.23);\n    font-size: 20px;\n    padding: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: rgb(231, 231, 231);\n}\n\nbutton:disabled{\n    background-color: rgb(214, 214, 214);\n    cursor: default !important;\n}\n\ninput{\n    display: inline-block;\n    font-size: 14px;\n    width:240px;\n    margin: 10px auto;\n    padding: 10px 8px 10px 8px;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 1px 2px rgba(214, 214, 214, 0.55), 0px 1px 1px rgba(255,255,255,.5);\n            box-shadow: inset 0 1px 2px rgba(214, 214, 214, 0.55), 0px 1px 1px rgba(255,255,255,.5);\n    border: 1px solid rgb(204, 204, 204);\n  }\n\ntextarea{\n    display: block;\n    font-size: 14px;\n    width:320px;\n    min-height: 400px;\n    resize: none;\n    margin-top: 10px;\n    padding: 10px 8px 10px 8px;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 1px 2px rgba(214, 214, 214, 0.55), 0px 1px 1px rgba(255,255,255,.5);\n            box-shadow: inset 0 1px 2px rgba(214, 214, 214, 0.55), 0px 1px 1px rgba(255,255,255,.5);\n    border: 1px solid rgb(204, 204, 204);\n}\n\n.modifiedTime{\n    font-size: 18px;\n}\n\n@media screen and (max-width: 767px) {\n    :host {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n       }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div app-list [post]=\"post\"></div>\n\n<div class=\"edit\">\n\n  <div>\n    <label class=\"title\">Title: </label>\n    <input \n      type=\"text\" \n      class=\"form-control\" \n      [(ngModel)]=\"post.title\"\n      value=\"{{post.title}}\"\n      (ngModelChange)=\"allowSave()\">\n  </div>\n  \n  <div>\n    <label class=\"body\">Body: </label>\n    <textarea\n      type=\"text\" \n      class=\"form-control\" \n      [(ngModel)]=\"post.body\"\n      value=\"{{post.body}}\"\n      (ngModelChange)=\"allowSave()\"> \n    \n    </textarea>\n  </div>\n  <p class=\"modifiedTime\">{{post.modified | date:'medium'}}</p>\n  \n  <button (click)=\"onSave()\"\n    [disabled]=\"disableSave\">Save</button>\n  \n  <button (click)=\"onLoadPreview()\">Preview</button>\n  \n  <button (click)=\"onDelete()\">Delete</button>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
        this.disableSave = true;
        this.savedPost = false;
        this.deletedPost = false;
        this.currentPostid = parseInt(this.route.snapshot.params['id']);
        console.log('inside edit componenet: currentPostID', this.currentPostid, ' type of postid is', typeof this.currentPostid);
        this.post = this.blogService.getPost(this.currentPostid);
        console.log('inside edit component: fetched post is: ', this.post, ' type of postid is', typeof this.post.postid);
        if (!this.post) {
            console.log("invalid postid");
            this.router.navigate(['/']);
        }
    }
    EditComponent.prototype.ngOnInit = function () {
        // when component is initialized
        // this.currentPostid= this.route.snapshot.params['id'];
        // this.post = this.blogService.getPost(this.currentPostid);
        var _this = this;
        this.route.params.subscribe(function (params) {
            // this.post.postid = parseInt(params['id']);
            // this.currentPostid = parseInt(params['id']);
            _this.post = _this.blogService.getPost(parseInt(params['id']));
        });
        console.log("INSIDE ngOnInit() of edit component: this.post = ", this.post, ' type of postid is', typeof this.post.postid);
    };
    EditComponent.prototype.tempSave = function () {
        console.log("INSIDE tempSave() of edit component");
        this.blogService.updatePost(this.post);
        var tempPost = this.blogService.getPost(this.currentPostid);
        this.savedPost = true;
        // this.router.navigate(['/edit', this.currentPostid]);
    };
    EditComponent.prototype.onSave = function () {
        this.blogService.updatePost(this.post);
        var tempPost = this.blogService.getPost(this.currentPostid);
        this.post.modified = tempPost.modified;
        this.savedPost = true;
        console.log("INSIDE onSave() in edit component");
        this.blogService.getPosts();
        // this.router.navigate(['/edit', this.currentPostid]);
        this.disableSave = true;
    };
    EditComponent.prototype.onDelete = function () {
        console.log("INSIDE onDelete() of edit component");
        // post disappear from list pane
        this.blogService.deletePost(this.currentPostid);
        this.deletedPost = true;
        this.blogService.getPosts();
        this.router.navigate(['/']);
    };
    EditComponent.prototype.allowSave = function () {
        this.disableSave = false;
        this.tempSave();
    };
    EditComponent.prototype.onLoadPreview = function () {
        // make sure to save data
        this.onSave();
        this.router.navigate(['preview', this.currentPostid]);
    };
    EditComponent.prototype.getPost = function () {
        console.log("INSIDE getPost() of edit component");
        var currentPostid = +this.route.snapshot.paramMap.get('id');
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-edit]',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list{\n    padding: 30px;\n}\n\n.listtag{\n    list-style: none;\n}\n\n/* a:hover{\n    color: blue;\n} */\n\na{\n    font-weight: 700;\n}\n\nul {\n    padding-left: 0;\n}\n\nli{\n    padding: 8px;\n    border: 1px solid rgb(204, 204, 204);\n    margin-bottom: 6px;\n    border-radius: 5px;\n}\n\n/* li:hover{\n    cursor: pointer;\n    color: blue;\n} */\n\n.list li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: darkred;\n  }\n\nli:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    /* left: .2em; */\n    cursor: pointer;\n  }\n\n.selected {\n    background-color: #CFD8DC !important;\n    color: darkred;\n  }\n\n.createdTime{\n    background-color: rgb(255, 239, 241);\n    font-size: 20px;\n    padding: 5px;\n    border-radius: 5px;\n}\n\nbutton{\n\tbackground-color: #fff;\n    margin: auto;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 2px 4px rgba(228, 228, 228, 0.16), 0 2px 4px rgba(230, 230, 230, 0.23);\n            box-shadow: 0 2px 4px rgba(228, 228, 228, 0.16), 0 2px 4px rgba(230, 230, 230, 0.23);\n    font-size: 20px;\n    padding: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: rgb(231, 231, 231);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"list\">\n  <button (click)=\"newPost()\">New Post</button>\n  <ul class=\"listtag\">\n    <div *ngIf=\"post\">\n      <li (click)=\"onClickPost(p, p.postid)\" [class.selected]=\"p.postid === post.postid\" *ngFor=\"let p of posts | sort:'postid'\" >\n        <span class=\"createdTime\" >{{p.created | date:'medium' }}</span>\n        <a>{{p.title}} </a>\n      </li>\n    </div>\n    <div *ngIf=\"!post\">\n        <li (click)=\"onClickPost(p, p.postid)\" *ngFor=\"let p of posts | sort:'postid'\" >\n          <span class=\"createdTime\" >{{p.created | date:'medium' }}</span>\n          <a>{{p.title}} </a>\n        </li>\n    </div>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router, route) {
        this.blogService = blogService;
        this.router = router;
        this.route = route;
        console.log('INSIDE List component.. calling this.blogService.getPosts()');
        this.posts = this.blogService.getPosts();
        if (this.post) {
            console.log("this.post in list component constructor");
            this.selected_post = this.post.postid;
        }
        else {
            console.log("this.post was not updated. It is: ", this.post);
        }
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    // updateTitle(): void {
    //   this.posts[this.post.postid-1].title = this.post.title;
    // }
    // getPosts(): void {
    //   this.posts =  this.blogService.getPosts();
    // }
    ListComponent.prototype.newPost = function () {
        this.new_post = this.blogService.newPost();
        console.log('INSIDE List component newPost: this.new_post = ', this.new_post, ' type of postid is', typeof this.new_post.postid);
        this.router.navigate(['edit', this.new_post.postid]);
    };
    ListComponent.prototype.onClickPost = function (post, postid) {
        this.post = post;
        console.log("INSIDE List component onClickPost(): postid = ", postid, ' post', post, 'this.post is ', this.post);
        this.router.navigate(['edit', postid]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__blog_service__["b" /* Post */])
    ], ListComponent.prototype, "post", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-list]',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview{\n    padding: 30px;\n    width: 400px;\n}\n\nbutton{\n\tbackground-color: #fff;\n    margin: auto;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 2px 4px rgba(228, 228, 228, 0.16), 0 2px 4px rgba(230, 230, 230, 0.23);\n            box-shadow: 0 2px 4px rgba(228, 228, 228, 0.16), 0 2px 4px rgba(230, 230, 230, 0.23);\n    font-size: 20px;\n    padding: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: rgb(231, 231, 231);\n}\n\n:host {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n   }\n\n@media screen and (max-width: 767px) {\n    :host {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n       }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div app-list [post]=\"post\"></div>\n\n<div class=\"preview\">\n    <button (click)=\"onEdit()\">Edit</button>\n    <div [innerHTML]=\"resultTitle\"></div>\n    <div [innerHTML]=\"resultBody\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_commonmark__ = __webpack_require__("../../../../commonmark/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_commonmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_commonmark__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
        this.currentPostid = this.route.snapshot.params['id'];
        this.post = this.blogService.getPost(this.currentPostid);
        if (!this.post) {
            console.log("invalid postid");
            this.router.navigate(['/']);
        }
    }
    PreviewComponent.prototype.ngOnInit = function () {
        // when component is initialized
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.post.postid = params['id'];
            _this.currentPostid = params['id'];
            _this.post = _this.blogService.getPost(params['id']);
        });
        this.convertToMarkdown();
    };
    PreviewComponent.prototype.getPost = function () {
        var currentPostid = +this.route.snapshot.paramMap.get('id');
        console.log(currentPostid);
    };
    PreviewComponent.prototype.convertToMarkdown = function () {
        var reader = new __WEBPACK_IMPORTED_MODULE_1_commonmark__["Parser"]();
        var writer = new __WEBPACK_IMPORTED_MODULE_1_commonmark__["HtmlRenderer"]();
        var parsedTitle = reader.parse(this.post.title);
        this.resultTitle = writer.render(parsedTitle);
        var parsedBody = reader.parse(this.post.body);
        this.resultBody = writer.render(parsedBody);
    };
    PreviewComponent.prototype.onEdit = function () {
        console.log("clicked onEdit");
        this.router.navigate(['edit', this.currentPostid]);
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map