import { ADD_MESSAGE } from "./actionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, message(undefined, action)];
    default:
      return state;
  }
};

const initialState = { from: "", msg: "", time: "" };
const message = (state = initialState, action) => {
  let { from, msg } = action.payload;
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, from, msg, time: Date.now() };
    default:
      return state;
  }
};

export default messages;
