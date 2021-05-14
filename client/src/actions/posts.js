import * as api from "../api";

// Action creators
export const getPosts = () => async (dispatch) => {
  //second arrow function comes from thunk
  try {
    const { data } = await api.fetchPosts();
    console.log("fetch called");
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log("create called");
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
