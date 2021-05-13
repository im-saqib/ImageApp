import express from "express";

// Import Controllers
import { getPosts, createPost } from "../controller/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;
