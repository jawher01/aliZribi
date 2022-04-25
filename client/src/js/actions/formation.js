import axios from "axios";
import {
  GET_FORMATIONS_FAILED,
  GET_FORMATIONS_SUCCES,
  GET_FORMATIONS_LOAD,
  GET_FORMATION,
} from "../const/formation";

export const getAllFormation = () => async (dispatch) => {
  dispatch({ type: GET_FORMATIONS_LOAD });
  try {
    let result = await axios.get("http://localhost:6500/formation");
    dispatch({ type: GET_FORMATIONS_SUCCES, payload: result.data.response });
  } catch (errors) {
    dispatch({ type: GET_FORMATIONS_FAILED, payload: errors });
  }
};

export const deleteFormation = (id) => async (disaptch) => {
  axios
    .delete(`http://localhost:6500/formation/${id}`)
    .then((res) => disaptch(getAllFormation()))
    .then(() => alert("formation supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postFormation = (user) => async (dispatch) => {
  axios
    .post("http://localhost:6500/formation", user)
    .then((res) => dispatch(getAllFormation()))
    .then(() => alert("formation ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getformation = (id) => (dispatch) => {
  axios
    .get(`http://localhost:6500/formation/${id}`)
    .then((res) =>
      dispatch({ type: GET_FORMATION, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};