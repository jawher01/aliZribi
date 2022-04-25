import { combineReducers } from "redux";
import { userReducer } from "./user";
import {publicationReducer} from "./publication"
import {classeReducer} from "./classe"
import { formationReducer } from "./formation";
export const rootReducer = combineReducers({ userReducer  ,publicationReducer,classeReducer,formationReducer});
