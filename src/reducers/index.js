import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

export default combineReducers({ 
    auth: authReducer,
    games: gameReducer,
    users: userReducer,
    form: formReducer
});