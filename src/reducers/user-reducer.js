import { login, register } from "../services/login-service";
const userReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.user;

    case "SET_LOCAL_USER":
      return action.user;

    case "REGISTER_USER":
      return state;

    default:
      return state;
  }
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    const response = await login(email, password);
    window.localStorage.setItem("storyAppUser", JSON.stringify(response));
    console.log(response);
    dispatch({
      type: "LOGIN_USER",
      user: response,
    });
  };
};

export const registerUser = (inputValues) => {
  return async (dispatch) => {
    const response = await register(inputValues);
    console.log(response);
    dispatch({
      type: "REGISTER_USER",
    });
  };
};

export const setLocalUser = (savedUser) => {
  return {
    type: "SET_LOCAL_USER",
    user: savedUser,
  };
};

export default userReducer;
