// import axios, { AxiosInstance } from "axios";

// const api: AxiosInstance = axios.create({
//   baseURL: "https://pokeapi.co/api/v2/",
// });

// export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemons = (limit = 10) => {
  return api.get(`pokemon?limit=${limit}`);
};
