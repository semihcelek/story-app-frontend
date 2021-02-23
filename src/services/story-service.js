import axios from "axios";
import { setToken } from "./user-service";

const createStory = async ({ title, content }, user) => {
  const userToken = setToken(user);

  const payload = { title: title, content: content };

  const config = {
    headers: { Authorization: userToken },
  };

  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/story`,
    payload,
    config
  );
  return response.data;
};

export { createStory };
