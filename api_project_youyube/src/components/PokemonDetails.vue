<template>
  <div class="pokemon-details">
    <h1>Detalhes do Pokémon</h1>
    <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <h2>{{ pokemon.name }}</h2>
      <p><strong>Habilidades:</strong> {{ abilities }}</p>
      <p><strong>Altura:</strong> {{ pokemon.height / 10 }} m</p>
      <p><strong>Peso:</strong> {{ pokemon.weight / 10 }} kg</p>
      <p><strong>Tipo(s):</strong> {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
      <p v-if="pokemonHabitat"><strong>Habitat:</strong> {{ pokemonHabitat.name }}</p>
      <p><strong>Movimentos:</strong></p>
      <ul>
        <li v-for="move in pokemon.moves.slice(0, 4)" :key="move.move.name">{{ move.move.name }}</li>
      </ul>
      <p><strong>Estatísticas Base:</strong></p>
      <ul>
        <li v-for="stat in pokemon.stats" :key="stat.stat.name">
          {{ stat.stat.name }}: {{ stat.base_stat }}
        </li>
      </ul>
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
      pokemonHabitat: null,
      abilities: '',
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.pokemon = await response.json();
      this.abilities = this.pokemon.abilities.map((a) => a.ability.name).join(', ');

      // const speciesResponse = await fetch(pokemonData.species.url);
      // const speciesData = await speciesResponse.json();

      // // Verifica se o habitat está disponível e o busca
      // if (speciesData.habitat) {
      //   const habitatResponse = await fetch(speciesData.habitat.url);
      //   this.pokemonHabitat = await habitatResponse.json();
      // }  
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

ul{
  list-style: none;
}
</style>
