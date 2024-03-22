import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://api-car-rental.binaracademy.org/customer/auth/login", data)
    .then((res) => {
      console.log(res);
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};
