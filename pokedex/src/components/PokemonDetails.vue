<template>
  <div class="pokemon-details">
    <section v-if="pokemon" class="pokeCard">
      <div class="pokeImg-position">
        <figure class="pokeImg">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        </figure>
        <h1>{{ pokemon.name }}</h1>
        <ul class="stats">
            <li class="li-label" v-for="stat in pokemon.stats" :key="stat.stat.name">
              {{ stat.stat.name }}: {{ stat.base_stat }}
            </li>
        </ul>
      </div>
      <div class="pokeInfo-position"> 
        <div class="pokeInfo-field">
          <p class="Info-titulo"><strong>Tipo(s):</strong></p>
          <p class="Info-campo">{{ pokemon.types.map(type => type.type.name).join(' : ') }}</p>
        </div>
        <!-- <p><strong>Habilidades:</strong> {{ abilities }}</p> -->
        <div class="pokeInfo-field">
          <p class="Info-titulo"><strong>Altura:</strong></p>
          <p class="Info-campo">{{ pokemon.height / 10 }} m</p>
        </div>
        <div class="pokeInfo-field">
          <p class="Info-titulo"><strong>Peso:</strong></p>
          <p class="Info-campo">{{ pokemon.weight / 10 }} kg</p>
        </div>
        <div class="pokeInfo-field">
          <p class="Info-titulo"><strong>Movimentos:</strong></p>
          <ul>
            <li v-for="move in pokemon.moves.slice(0, 4)" :key="move.move.name">{{ move.move.name }}</li>
          </ul>
        </div>
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
  margin: 2% 35% 5% 35%;
  border-radius: 25px;
  background-color: lightcoral;
  /* padding-left: 20%; */
}

.pokeImg-position{
  padding-right: 10%;
}

.pokeInfo-position{
  padding-right: 20%;
  font-size: large;
}

.pokeImg{
  border: 2px solid lightblue;
  border-radius: 25%;
  background-color: lightcyan;
  /* margin-left: 38%; */
  /* margin-right: 38%; */
}

img {
  width: 150px;
  height: 150px;
}

h1 {
  color: #000000;
  /* margin-bottom: 20px; */
}

ul{
  /* display: flex;
  align-items: center; */
  list-style: none;
}

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

  .stats{
    margin-right: 16%;
  }

  /* .stats li{
    display: flex;
    justify-content: space-evenly;
  } */

  .li-label{
    background-color: aliceblue;
    margin: 1%;
    border-radius: 2px;
    padding: 2%;
    font-size: medium;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .Info-item{
    display: inline-block;
  }

  .pokeInfo-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  .pokeInfo-field p {
    margin: 0;
  }

  .pokeInfo-field ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .pokeInfo-field li {
    background-color: aliceblue;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
  }

  .Info-titulo{
    font-size: small;
  }

  .Info-campo{
    font-size: large;
  }
</style>
