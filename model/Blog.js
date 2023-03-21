import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

// const blogSchema = new Schema({
//   title: String,
//   slug: String,
//   published: Boolean,
//   author: String,
//   content: String,
//   tags: [String],
//   createdAt: Date,
//   updatedAt: Date,
//   comments: [{
//     user: String,
//     content: String,
//     votes: Number
//   }]
// });

const blogSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
		lowercase: true,
	},
	published: {
		type: Boolean,
		default: false,
	},
	author: {
		type: SchemaTypes.ObjectId,
		ref: "User",
		required: true,
	},
	content: String,
	tags: [String],
	createdAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	updatedAt: Date,
	comments: [
		{
			type: SchemaTypes.ObjectId,
			ref: "Comment",
			// user: {
			// 	type: SchemaTypes.ObjectId,
			// 	ref: "User",
			// 	required: true,
			// },
			// content: String,
			// votes: Number,
		},
	],
});
blogSchema.pre("save", function (next) {
	this.updatedAt = Date.now(); // update the date every time a blog post is saved
	next();
});
const Blog = model("Blog", blogSchema);
export default Blog;
