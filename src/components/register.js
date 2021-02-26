import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../reducers/user-reducer";
import { useForm } from "../services/useForm";

const Register = () => {
  const dispatch = useDispatch();

  const [inputValues, handleChange, setInputValues] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(registerUser(inputValues));
    setInputValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={inputValues.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={inputValues.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={inputValues.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputValues.password}
          onChange={handleChange}
          required
          minLength="6"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
