import axios from "axios";

const login = async ({ email, password }) => {
  // axios.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response.status === 401) {
  //       //place your reentry code
  //       console.log("auth error");
  //     }
  //     return error;
  //   }
  // );
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
    email: email,
    password: password,
  });
  return response.data;
};
const register = async ({ firstName, lastName, email, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/register`,
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }
  );
  return response.data;
};

export { login, register };
