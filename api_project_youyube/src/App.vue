<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/favorites">Favoritos</router-link>
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
  display: flex;
  justify-content: space-around;
  background-color: #ff6347;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
