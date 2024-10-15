<template>
  <div class="container">
    <div class="fav">
      <router-link id="backbutton" to="/favorites">
        Favoritos
        <img id="starFav" src="../assets/StarFav.png" alt="StarIcon">
      </router-link>
    </div>
    <h1 style="margin-top: -58px; margin-bottom: 45px;">Lista de Pokémons</h1>
    <ul class="pokemon-list">
      <li v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-item">
        <img :src="pokemon.image" :alt="pokemon.image" class="poke-img">
        <h3 class="poke-name">{{ pokemon.name }}</h3>
        <!-- <h5>{{ pokemon.abilities }}</h5> QUERO IMPRIMIR SUAS ABILIDADES E SUA IMAGEM TAMBÉM  -->
        <button id="fav-button" @click="toggleFavorite(pokemon)" :class="{ favorited: isFavorited(pokemon) }">
          {{ isFavorited(pokemon) ? 'Favorito ★' : 'Favoritar ☆' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPokemons } from '../services/api';

export default {
  data() {
    return {
      pokemons: [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    };
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      try {
        const response = await getPokemons(10);
        const results = response.data.results;

        // Para cada Pokémon, faz uma segunda requisição para obter mais detalhes
        const pokemonsWithDetails = await Promise.all(
          results.map(async (pokemon) => {
            const res = await fetch(pokemon.url); // faz uma requisição para a URL de detalhes do Pokémon
            const details = await res.json();
            return {
              name: pokemon.name,
              abilities: details.abilities.map((a) => a.ability.name).join(', '), // lista de habilidades
              image: details.sprites.front_default, // imagem do Pokémon
            };
          })
        );

        this.pokemons = pokemonsWithDetails;
      } catch (error) {
        console.error('Erro ao buscar os pokémons:', error);
      }
    },
    toggleFavorite(pokemon) {
      if (this.isFavorited(pokemon)) {
        this.favorites = this.favorites.filter(fav => fav.name !== pokemon.name);
      } else {
        this.favorites.push(pokemon);
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    isFavorited(pokemon) {
      return this.favorites.some(fav => fav.name === pokemon.name);
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
    margin-bottom: 20px;
  }
  
  .fav{
    display: flex;
    justify-content: end;
    border: 2px;
  }

  #fav-button{
    color: red;
    background-color: #ffffff;
    border: 1px solid red;
    border-radius: 7px;
    cursor: pointer;
    margin-bottom: 3px;
    margin-top: -10px;
  }

  #starFav{
    height: 20px;
    width: 20px;
  }

  #fav-button:hover{
    background-color: red;
    color: #FFF;
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

  .pokemon-list{
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    /*flex-direction: row;*/
    flex-wrap: wrap;
    margin: 0;
  }

  .pokemon-item{
    height: 200px;
    width: 300px;
    margin: 10px;
    border: 2px solid red;
    border-radius: 7px;
  }

  .poke-name{
    margin-top: -10px;
  }

  .poke-img{
    height: 160px;
    width: 160px;
  }

  </style>
