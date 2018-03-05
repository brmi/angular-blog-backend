use BlogServer
db.createCollection("Posts")
db.createCollection("Users")
db.Posts.save([
  { "postid": 1, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 1", "body": "Hello, world!" },
  { "postid": 2, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 2", "body": "I am here." }
])
db.Users.save([
  { "username": "cs144", "password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6" },
  { "username": "user2", "password": "$2a$10$kTaFlLbfY1nnHnjb3ZUP3OhfsfzduLwl2k/gKLXvHew9uX.1blwne" }         
])