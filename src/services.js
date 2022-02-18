import axios from "axios";

export const apiKey = "fd77e372076749743242ded77f0580f2";
const axiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/characters",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};
