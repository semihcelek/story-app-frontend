import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [values, setValues] = useState({ data: null, loading: true });
  //   const [token, setToken] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}${url}`
        );
        setValues({ data: result.data, loading: false });
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [url]);

  return [values];
};
