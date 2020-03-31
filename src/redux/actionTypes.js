export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_USER = "ADD_USER";
export const MODIFY_SETTINGS = "MODIFY_SETTINGS";
export const RESET_SETTINGS = "RESET_SETTINGS";

export const addChat = value => dispatch => {
  dispatch({ type: ADD_MESSAGE, payload: value });
};

export const someMiddleware = ({ getState }) => next => action => {
  if (action.type === MODIFY_SETTINGS) {
    let state = getState();
    let user = state.user;
    let modifiedUser = {
      ...user,
      settings: {
        ...user.settings,
        [action.payload.name]: action.payload.value
      }
    };
    sessionStorage.setItem("user", JSON.stringify({ user: modifiedUser }));
  }
  if (action.type === ADD_USER) {
    let state = getState();
    let user = state.user;
    let modifiedUser = {
      ...user,
      name: action.user
    };
    sessionStorage.setItem("user", JSON.stringify({ user: modifiedUser }));
  }
  next(action);
};

export const adduser = user => dispatch => {
  dispatch({ type: ADD_USER, user });
};

export const modifySettings = (name, value) => dispatch => {
  dispatch({ type: MODIFY_SETTINGS, payload: { name, value } });
};

export const resetSettings = () => dispatch => {
  dispatch({ type: RESET_SETTINGS });
};
