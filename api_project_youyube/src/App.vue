
<template>
  <div id="app">
    <nav>
      <div class="logo">
        <figure>
          <router-link to="/">
            <img src="./assets/Pokedex.png" alt="pokedex">
          </router-link>
        </figure>
      </div>
    </nav>
    <div class="bodyBackground">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components:{
    Footer
  }
};
</script>

<style scoped>
nav {
  background-color: #ff6347;
  padding: 10px;
  margin: -7.8px;
}

nav div{
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav img {
  height: 60px;
  width: 200px;
}

nav a:hover {
  text-decoration: underline;
}

.logo{
  background: url('assets/logo.png');
  width: 948px;
  zoom: 160%;
  border-radius: 7px;
}

/* .bodyBackground{
  background: url('assets/PokemonBackground.jpeg');
  background-size: cover; // Ajusta a imagem para cobrir o site
  background-attachment: fixed; // Fixa o fundo enquanto o conteúdo rola
  margin-top: 0.5%;
  border-radius: 7px;
} */
</style>
