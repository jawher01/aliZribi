import axios from "axios";
import {
  GET_PUBLICATIONS_FAILED,
  GET_PUBLICATIONS_SUCCESS,
  GET_PUBLICATIONS_LOAD,
  GET_PUBLICATION,
  EDIT_PUBLICATION,
  LIKE_POST,
  UNLIKE_POST,
} from "../const/publication";

export const getAllPublications = () => async (dispatch) => {
  dispatch({ type: GET_PUBLICATIONS_LOAD });
  try {
    let result = await axios.get("http://localhost:6500/user/publication");
    dispatch({ type: GET_PUBLICATIONS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_PUBLICATIONS_FAILED, payload: error });
  }
};
export const deletePublication = (id) => async (dispatch) => {
  axios
    .delete(`http://localhost:6500/user/publication/${id}`)
    .then((res) => dispatch(getAllPublications()))
    .then(() => alert("Publication supprimer avec succes"))
    .catch((err) => console.log(err));
};

export const getPublication = (id) => (dispatch) => {
  axios
    .get(`http://localhost:6500/user/publication/${id}`)
    .then((res) =>
      dispatch({ type: GET_PUBLICATION, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const postPublication = (user) => async (dispatch) => {
  axios
    .post("http://localhost:6500/user/publication", user)
    .then((res) => dispatch(getAllPublications()))
    .then(() => alert("Publication ajouter avec succes"))
    .catch((err) => alert(err));
};

export const editPublication = (id, publication) => (dispatch) => {
  axios
    .put(`http://localhost:6500/user/publication/${id.id}`, publication)
    .then((res) => {
      alert("Publication modifier avec succes");

      dispatch({
        type: EDIT_PUBLICATION,
        payload: { ...res.data.user },
      });
    })
    .catch((err) => console.log(err));
};

export const addComment = (comment) => {
  axios
    .post(`http://localhost:6500/user/publication/comment`, comment)
    .then((res) => {
      alert("comment ajouter avec succes");
    })
    .catch((err) => console.log(err));
};

export const likePost = (postId, userId) => async (dispatch) => {
  axios
    .patch(`http://localhost:6500/user/publication/likepost/${postId}`,{userId})
    .then((res) => {
      console.log(res)
      dispatch({ type: LIKE_POST, payload: { postId, userId } });
    })
    .catch((err) => console.log(err));
};

export const unlikePost = (postId, userId) => async (dispatch) => { 
      axios
      .patch(`http://localhost:6500/user/publication//unlikepost/${postId}`,{userId})
      .then((res) => {
       
        dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
