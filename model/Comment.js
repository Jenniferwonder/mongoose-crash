import mongoose from "mongoose";
// import Blog from "./model/Blog.js";
const { Schema, SchemaTypes, model } = mongoose;

const commentSchema = new Schema({
	blog: {
		type: SchemaTypes.ObjectId,
		ref: "Blog",
		required: true,
	},
	user: {
		type: SchemaTypes.ObjectId,
		ref: "User",
		required: true,
	},
	content: {
		type: String,
		minLength: 10,
	},
	votes: Number,
});

// commentSchema.pre("save", function (next) {
// 	blogSchema.comments.push(this._id); // update the date every time a blog post is saved
// 	next();
// });

const Comment = model("Comment", commentSchema);
export default Comment;
