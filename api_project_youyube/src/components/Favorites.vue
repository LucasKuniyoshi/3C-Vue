<template>
    <div class="container">
      <h1>Pokémons Favoritos</h1>
      <ul v-if="favorites.length" class="favorites-list">
        <li v-for="pokemon in favorites" :key="pokemon.name">{{ pokemon.name }}</li>
      </ul>
      <p v-else>Nenhum Pokémon favoritado ainda.</p>
      <router-link to="/">Voltar à Lista de Pokémons</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #ff6347;
    margin-bottom: 20px;
  }
  
  .favorites-list {
    list-style: none;
    padding: 0;
  }
  
  .favorites-list li {
    color: #ff6347;
    margin-bottom: 10px;
  }
  
  a {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #007bff;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  