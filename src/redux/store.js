import { combineReducers, createStore, applyMiddleware } from "redux";
import messages from "./messageReducer";
import user from "./userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { someMiddleware } from "./actionTypes";

let previousState = JSON.parse(sessionStorage.getItem("user"));
console.log(previousState);
const rootReducer = combineReducers({ user, messages });

const store = createStore(
  rootReducer,
  previousState ? previousState : {},
  applyMiddleware(thunk, logger, someMiddleware)
);

export default store;
