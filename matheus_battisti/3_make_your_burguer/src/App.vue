<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <router-view/> <!-- a view é impressa aqui (ela q chama os router-links das outras classes)-->
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
      logo_src: "/img/logo.png",
      app_name: "Make your Burguer"
    }
  }
}
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box; /* PROS INPUTS NA PASSAREM DA LARGURA MAX DA DIV PAI */
  }

  .main-container {
    margin: 50px;
    min-height: 250px; /* joga o footer pra baixo */
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
