<template>
    <div class="container">
      <h1>Pokémons Favoritos</h1>
      <ul v-if="favorites.length" class="favorites-list">
        <li v-for="pokemon in favorites" :key="pokemon.id" class="pokemon-item">  
          <div>
            <router-link :to="'/pokemon/' + pokemon.id">
              <img :src="pokemon.image" :alt="pokemon.image">
              <h3>{{ pokemon.name }}</h3>
            </router-link>
          </div>
        </li> 
      </ul>
      <div v-else id="notFound-position">
        <figure class="notFound-border">
          <router-link to="/">
            <img src="../assets/sadPokemon.jpg" alt="sadPokemon">
            <p>Nenhum Pokémon favoritado ainda.</p>
          </router-link>
        </figure>
      </div>
      <div class="fav">
        <router-link id="backbutton" to="/">Voltar à Lista de Pokémons</router-link>
      </div>
      <button @click="resetFavorites" v-if="favorites.length" class="reset-btn">
      Resetar Favoritos
    </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      };
    },
    methods: {
      resetFavorites() {
        localStorage.removeItem('favorites'); // Remove os favoritos do localStorage
        this.favorites = []; // Atualiza a lista de favoritos
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: auto;
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
    display: flex;
    justify-content: center;
    /*flex-direction: row;*/
    flex-wrap: wrap;
    margin: 0;
  }
  
  .favorites-list li {
    color: #ff6347;
    margin-bottom: 10px;
  }
  
  .fav{
    display: flex;
    justify-content: center;
  }

  #backbutton {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #ff6347;
    border: 2px solid #ff6347;
    border-radius: 7px;
    padding: 1.2em;
  }
  
  #backbutton:hover {
    background-color: #ff6347;
    color: #FFF;
    border: 2px solid #FFF;
    transition: .5s;
  }

  .pokemon-item{
    height: 200px;
    width: 300px;
    margin: 10px;
    border: 2px solid red;
    border-radius: 7px;
  }

  .noFav{
    border: 2px solid purple;
  }

  .reset-btn {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.reset-btn:hover {
  background-color: darkred;
}
  </style>
  