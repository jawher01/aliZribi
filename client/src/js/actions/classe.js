import axios from "axios"
import {
  GET_CLASSES_FAILED,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_LOAD

}from "../const/classe"


export const getAllClasses=()=>async (dispatch)=>{
     dispatch({type:GET_CLASSES_LOAD})
   try {
       let result=await axios.get("http://localhost:6500/classe")
       dispatch({type:GET_CLASSES_SUCCESS,payload:result.data.response})

   } catch (error) {
       dispatch({type:GET_CLASSES_FAILED,payload:error})
   }
}


export const postClasse=(user)=>async (dispatch)=>{

    axios
      .post("http://localhost:6500/classe", user)
      .then((res) => dispatch(getAllClasses()))
      .then(() => alert("classe ajouter avec succes"))
      .catch((err) => alert(err));
 
}


