import * as api from "../api";

// Action Creators:

// const getPosts = () => async (dispatch) => {
//   const action = { type: "FETCH_ALL", payload: [] };

//   //with Redux Thunk we have to dispatch the action vs. returning it
//   //return action;
//   dispatch(action);
// };
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
