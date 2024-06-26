import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    name:String,
    content:String
});

const Post=mongoose.model("Post", postSchema);

export {Post};