import { ADD_USER, MODIFY_SETTINGS, RESET_SETTINGS } from "./actionTypes";

let initialState = {
  name: "",
  settings: {
    clockDisplay: "12hr",
    interfaceColor: "light",
    language: "en",
    sendOnCtrlEnt: "no"
  }
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, name: action.user };
    case MODIFY_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.name]: action.payload.value
        }
      };
    case RESET_SETTINGS:
      return { ...state, settings: { ...initialState.settings } };
    default:
      return state;
  }
};

export default user;
