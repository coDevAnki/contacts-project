import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

console.log(baseURL);

let headers = {};

if (localStorage.token) {
  console.log("token " + localStorage.token);
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: "https://truly-contacts.herokuapp.com/api",
  headers,
});

export default axiosInstance;
