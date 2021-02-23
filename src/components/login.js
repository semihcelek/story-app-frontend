// import React, { useState } from "react";
import { useForm } from "../services/useForm";
import { login } from "../services/login-service";
import { useContext } from "react";
import { UserContext } from "../services/userContext";

const Login = () => {
  const [inputValue, handleChange, setInputValue] = useForm({
    email: "",
    password: "",
  });
  const [setUser] = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(inputValue);
      console.log(response);
      setUser(response);
      window.localStorage.setItem("storyAppUser", JSON.stringify(response));
      setInputValue({ email: "", password: "" }); //clear input fields
    } catch (err) {
      if (err.response.status === 401) {
        alert("invalid username or password");
      }
    }
  };
  const restoreUser = () => {
    const getUserJson = window.localStorage.getItem("storyAppUser");

    if (getUserJson) {
      const user = JSON.parse(getUserJson);
      setUser(user);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={inputValue.email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputValue.password}
          onChange={handleChange}
          required
        />
        <button type="submit">LogIn</button>
      </form>
      <button onClick={restoreUser}>RestoreUser</button>
    </div>
  );
};

export default Login;
