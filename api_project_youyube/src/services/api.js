import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemons = (limit = 20) => {
  return api.get(`pokemon?limit=${limit}`);
};
// export const getPokemons = () => {
//   return api.get(`pokemon?`);
// };
