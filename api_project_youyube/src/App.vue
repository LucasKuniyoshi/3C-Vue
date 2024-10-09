
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
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
</style>
