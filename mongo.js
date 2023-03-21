import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import User from "./model/User.js";
import Comment from "./model/Comment.js";

mongoose.connect("mongodb://127.0.0.1:27017/blog");

// NOTE:Create a new blog post object
// const article = new Blog({
// 	title: "Awesome Post!",
// 	slug: "awesome-post",
// 	published: true,
// 	content: "This is the best post ever",
// 	tags: ["featured", "announcement"],
// });

// NOTE:Insert the article in our MongoDB database
// await article.save();

// NOTE: FIND
// Find a single blog post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

// Find all posts
// const blogs = await Blog.find();
// console.log(blogs);

// Find by ID
// const article = await Blog.findById("64197980b5bae25b76ae3a84").exec();
// console.log(article);

// NOTE:Project document fields
// const article = await Blog.findById(
// 	"64197980b5bae25b76ae3a84",
// 	"title slug content"
// ).exec();
// console.log(article);

// NOTE:Create a new blog post and insert into database
// const articleCreate = await Blog.create({
// 	title: "Awesome Post!",
// 	slug: "awesome-post",
// 	published: true,
// 	content: "This is the best post ever",
// 	tags: ["featured", "announcement"],
// });

// console.log(articleCreate);

// NOTE:Update Data
// article.title = "The Most Awesomest Post!!";
// await article.save();
// console.log(article);

// NOTE:Delete Data
// const blogOne = await Blog.deleteOne({ title: "The Most Awesomest Post!!" });
// console.log(blogOne);

// const blogMany = await Blog.deleteMany({ title: "Awesome Post!" });
// console.log(blogMany);

// NOTE:Validation

// NOTE:Exist
// const blog = await Blog.exists({ author: "Jesse Hall" });
// console.log(blog);

// NOTE:WHERE
// Instead of using a standard find method
// const blogFind = await Blog.findOne({ author: "Jesse Hall" });

// Use the equivalent where() method
// const blogWhere = await Blog.where("author").equals("Jesse Hall");
// console.log(blogWhere);

// NOTE:WHERE + SELECT
// const blog = await Blog.where("author")
// 	.equals("Jesse Hall")
// 	.select("title author");
// console.log(blog);

// NOTE:"JOIN" Data
// const user = await User.create({
// 	name: "Jesse Hall",
// 	email: "jesse@email.com",
// });

// const article = await Blog.create({
// 	title: "New Post!",
// 	slug: "New-Post",
// 	author: user._id,
// 	content: "This is the best post ever",
// 	tags: ["featured", "announcement"],
// });

// console.log(article);

// NOTE:Find and view joined data $lookup
// const article = await Blog.find({ title: "New Post!" }).populate("author");
// console.log(article);

// NOTE: Test middleware function
// const article = await Blog.findById("641988cd0254f545f6295e5c").exec();
// article.title = "New Updated Title";
// await article.save();
// console.log(article);

// NOTE:Create a new comment for a specific post
// const article = await Blog.findOne({ _id: "6419886047571c40b64eb2ad" });
// console.log(article);
// const user = await User.findOne({ _id: "6419886047571c40b64eb2aa" });
// console.log(user);

// const comment = await Comment.create({
// 	blog: article._id,
// 	user: user._id,
// 	content: "Cool post and the Best Ever!",
// 	votes: 10,
// });
// NOTE:Update comments field in Blog schema
// const comment = await Comment.findById("6419961f200387a7924dab9e");
// console.log(comment);
// article.comments.push(comment._id);
// await article.save();

// NOTE:Find a post with comments
// const populatedArticle = await Blog.findOne({
// 	_id: "6419886047571c40b64eb2ad",
// }).populate("comments");

// console.log(populatedArticle);
