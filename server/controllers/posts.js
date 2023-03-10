// Holds our POSTS Handlers

import mongoose from "mongoose";
// import Post from "../../client/src/components/Posts/Post/Post.jsx";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  // geting parameters value from request
  const { id: _id } = req.params;
  const post = req.body;

  // checking if Id is valid in dataBase
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post with that id");

  // if Valid update post and update in database
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(res);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that Id");

  await PostMessage.findByIdAndRemove(id);
  //remove  post that matches id
  console.log("Delete");
  res.json({ message: "Post deleted succesfully!" });
};

export const likePost = async (req, res) => {
  // getting Post ID From front end
  const { id } = req.params;
  // verfing that ID id valid
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID");
  //find post we are look for to update
  const post = await PostMessage.findById(id);
  // updated post
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );
  //sends a JSON response sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
  res.json(updatedPost);
};
