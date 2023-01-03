import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// router.get("/", getPosts);
router.get("/", (req, res) => {
  res.send("This works");
});

export default router;
