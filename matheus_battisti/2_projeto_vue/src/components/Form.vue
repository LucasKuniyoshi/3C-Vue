<template>
    <div>
        <h2>Meu formulário:</h2>
    <form action="" @submit="enviarFormulario($event)">
        <div>
            <input type="text" v-model="name">
        </div>
        <div>
            <input type="text" v-model="email">
        </div>
        <div>
            <Submit />
        </div>
    </form>
    <p>Conteúdo</p>
    <p>Conteúdo</p>
    <p>Conteúdo</p>
    <p>Conteúdo</p>
    </div>
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data(){
        return{
            name: '',
            email: ''
        }
    },
    methods:{
        enviarFormulario(e){

            e.preventDefault(); //$event
            //AGR N VAI MAIS RECARREGAR A PÁGINA E SIM ENVIARÁ O FORMS

            const name = this.name;
            const email = this.email;

            console.log("Formulário Enviado");
            console.log("O nome é: " + name);
            console.log("O email é: " + email);
        }
    }
}
</script>

<style scoped>
    p{
        margin: 50px
    }
</style>