<template>
    <div class="pokemon-details">
      <h1>Detalhes do Pokémon</h1>
      <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        <h2>{{ pokemon.name }}</h2>
        <p><strong>Habilidades:</strong> {{ abilities }}</p>
        <p><strong>Altura:</strong> {{ pokemon.height }}</p>
        <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
      </div>
      <p v-else>Carregando detalhes...</p>
      <router-link to="/">Voltar para a lista</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pokemon: null,
        abilities: '',
      };
    },
    async created() {
      const id = this.$route.params.id;
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        this.pokemon = await response.json();
        this.abilities = this.pokemon.abilities.map((a) => a.ability.name).join(', ');
      } catch (error) {
        console.error('Erro ao buscar os detalhes do Pokémon:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .pokemon-details {
    text-align: center;
  }
  
  img {
    width: 150px;
    height: 150px;
  }
  
  h1 {
    color: #ff6347;
    margin-bottom: 20px;
  }
  </style>
  