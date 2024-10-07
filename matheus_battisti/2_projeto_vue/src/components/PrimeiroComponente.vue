<template>
    <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ this.nome }} e trabalho como {{ profissao }}</p>
    </div>
  </template>
  
  <script>
    export default {
      name: 'PrimeiroComponente',
      data(){
        return{
            nome: "Lucas",
            profissao: "Dev"
        }
      }
    }
  </script>