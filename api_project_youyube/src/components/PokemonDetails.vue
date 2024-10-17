<template>
  <div class="pokemon-details">
    <section v-if="pokemon" class="pokeCard">
      <h1>{{ pokemon.name }}</h1>
        <div class="pokeImg-position">
          <figure class="pokeImg">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
          </figure>
        </div>
      <div>
        <p><strong>Habilidades:</strong> {{ abilities }}</p>
        <p><strong>Altura:</strong> {{ pokemon.height / 10 }} m</p>
        <p><strong>Peso:</strong> {{ pokemon.weight / 10 }} kg</p>
        <p><strong>Tipo(s):</strong> {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
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
    </section>
    <p v-else>Carregando detalhes...</p>
    <router-link id="backbutton" to="/">Voltar para a lista</router-link>
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
  margin-bottom: 20%;
}

.pokeCard{
  display: flex;
  justify-content: center;
  border: 2px solid #ff6347;
  margin: 2% 25% 5% 25%;
  border-radius: 25px;
}

.pokeImg-position{
  margin-left: 0;
}

.pokeImg{
  border: 2px solid lightblue;
  margin-left: 38%;
  margin-right: 38%;
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
  /* display: flex;
  align-items: center; */
  list-style: none;
}

/* li{
  text-align: center;
} */

#backbutton {
    display: inline-block;
    /* margin-top: 20px; */
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
</style>
