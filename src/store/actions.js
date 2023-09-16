import axios from "axios";
let url = process.env.VUE_APP_URL_ENDPOINT;

const HTTP = axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    "Accept-app-version": "1.0.0",
  },
});

export const registerUser = ({}, data) => {
  return HTTP.post("signup", data, {})
    .then(
      (response) => {
        if (response.status === 200) {
          return response;
        }
      },
      (err) => {
        return err;
      }
    )
    .catch((reason) => {
      return reason;
    });
};

export const loginUser = ({}, data) => {
  return HTTP.post("login", data, {})
    .then(
      (response) => {
        if (response.status === 200) {
          return response;
        }
      },
      (err) => {
        return err;
      }
    )
    .catch((reason) => {
      return reason;
    });
};

