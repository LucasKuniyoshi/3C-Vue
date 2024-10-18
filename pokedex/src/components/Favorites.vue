<template>
    <div class="container">
      <h1>Pokémons Favoritos</h1>
      <div class="background">
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
              <div class="notFoundFavImg">
                <h3 class="notFoundLetter">Nenhum Pokémon favoritado ainda.</h3>
              </div>
            </router-link>
          </figure>
        </div>
        <div>
          <router-link id="backbutton" to="/">Voltar à Lista de Pokémons</router-link>
          <button @click="resetFavorites" v-if="favorites.length" class="reset-btn">
            Resetar Favoritos
          </button>
        </div>
      </div>
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

  a{
    text-decoration: none;
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

  .background{
    border-radius: 7px;
    background: url('../assets/PokemonBackground.jpeg');
    background-size: cover; 
    background-attachment: fixed; 
    padding-bottom: 18%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Cria uma sombra suave */
    transition: box-shadow 0.3s ease; /* Adiciona transição suave */
  }
  
  .favorites-list li {
    color: #ff6347;
    margin-bottom: 10px;
    background-color: #FFF;
  }

  .notFound-border{
    display: flex;
    justify-content: center;
  }

  #notFound-position{
    align-items: flex-end;
  }

  .notFoundFavImg{
    background: url('../assets/sadPokemon.jpg');
    /* background-size: cover; */
    height: 380px;
    width: 635px;
    border-radius: 25px;
  }

  .notFound-border p{
    align-self: flex-end;
  }

  .notFoundLetter{
    font-family: Arial, Helvetica, sans-serif;
    font-size: larger;
    color: #000000;
    padding-top: 2%;
  }

  #backbutton {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #ff6347;
    background-color: #FFF;
    border: 2px solid #ff6347;
    border-radius: 7px;
    padding: 1.2em;
    font-weight: bold;
    padding-top: 1.24%;
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
    /* display: inline-block; */
    margin-top: 10px;
    text-decoration: none;
    color: #ff6347;
    background-color: #FFF;
    border: 2px solid #ff6347;
    border-radius: 7px;
    padding: 1.5em;
    font-weight: bold;
    margin-left: 1.2%;
    cursor: pointer;
}
.reset-btn:hover {
  background-color: #ff6347;
  color: #FFF;
  transition: 0.5s;
}

ul{
  list-style: none;
}
  </style>
  