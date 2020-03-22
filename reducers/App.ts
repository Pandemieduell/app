import playerReducer from "./Player"
import {combineReducers} from "redux";

export default combineReducers({me: playerReducer})
