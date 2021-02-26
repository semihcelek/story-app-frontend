import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/login";
import Register from "../components/register";
import { setLocalUser } from "../reducers/user-reducer";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const removeSavedToken = () => {
    window.localStorage.removeItem("storyAppUser");
  };

  const logOut = () => {
    console.log("logout user");
    dispatch(setLocalUser([]));
    removeSavedToken();
    // setting logged user to empty array
    // then removing the saved token,
  };

  if (user.token) {
    return (
      <div className="LoginPage">
        <pre>{JSON.stringify(user, null, 4)}</pre>
        {user ? <button onClick={logOut}>logOut</button> : <Login />}
      </div>
    );
  } else {
    return (
      <div className="LoginPage">
        <pre>{JSON.stringify(user, null, 4)}</pre>
        <Login />
        <Register />
        <button onClick={removeSavedToken}>clearToken</button>
      </div>
    );
  }
};

export default LoginPage;
