import express from "express";

// Import Controllers
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controller/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
