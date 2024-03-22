import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://api-car-rental.binaracademy.org/customer/auth/login", data)
    .then((res) => {
      callback(res.status, res.data);
    })
    .catch((error) => {
      callback(error.response.status, error.response.data);
    });
};
