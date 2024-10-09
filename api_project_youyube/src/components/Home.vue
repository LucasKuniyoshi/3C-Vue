<template>
  <div class="container">
    <div class="fav">
      <router-link to="/favorites">Favoritos</router-link>
    </div>
    <h1>Lista de Pokémons</h1>
    <ul class="pokemon-list">
      <li v-for="pokemon in pokemons" :key="pokemon.name" class="pokemon-item">
        <span>{{ pokemon.name }}</span>
        <button @click="toggleFavorite(pokemon)" :class="{ favorited: isFavorited(pokemon) }">
          {{ isFavorited(pokemon) ? '★ Favorito' : '☆ Favoritar' }}
        </button>
      </li>
    </ul>
    <h2>Pokémons Favoritos</h2>
    <ul v-if="favorites.length" class="favorites-list">
      <li v-for="pokemon in favorites" :key="pokemon.name">{{ pokemon.name }}</li>
    </ul>
    <p v-else>Nenhum Pokémon favoritado ainda.</p>
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
        this.pokemons = response.data.results;
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
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .fav{
    display: flex;
    justify-content: end;
    border: 2px;
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
