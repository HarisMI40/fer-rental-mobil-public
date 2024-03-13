import axios from "axios";

export const login = (data) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      console.log(res);
      callback(true, res.token);
    })
    .catch((error) => {
      console.log(false, error);
    });
};
