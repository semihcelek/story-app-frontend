import React, { useContext } from "react";
import Login from "../components/login";
import Register from "../components/register";
import { UserContext } from "../services/userContext";

const LoginPage = () => {
  const [user, setUser] = useContext(UserContext);

  const removeSavedToken = () => {
    window.localStorage.removeItem("storyAppUser");
  };

  const logOut = () => {
    setUser(null);
  };

  if (user) {
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
