import React from "react";

// Redux
import { useSelector } from "react-redux";

import Post from "./Post/Post.js";
import useStyles from "./Styles.js";

const Posts = () => {
  // Fetching posts from redux store
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
