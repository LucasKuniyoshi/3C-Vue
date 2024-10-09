<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
    export default{
        name: 'LifeCycle',
        data(){
            return{
                nome: 'Ainda não sei'
            }
        },
        //APOS A CRIAÇÃO DOS COMPONENTES EU VOU FAZER ALGUMA COISA...
        created(){ //COMPONENTES CRIADOS
            setTimeout(() => {
                this.nome = 'Lucas' //o 'Pedro' fica 1000ms na tela e depois o 'Lucas' permanece (fica por último)
            }, 1000);

            this.lifeCycle()
        },
        //ESTÁ ACIMA DO created, SOBRESCREVE        
        mounted(){ //COMPONENTES MONTADOS
            setTimeout(() => {
                this.nome = 'Pedro'
            }, 2000);//aparece o data(), no minuto 1000ms aparece o create() e no minuto 2000ms aparece e permanece o mounted()
        
            this.lifeCycle()
        },
        methods:{
            lifeCycle(){
                console.log("Executou");
            }
        }
    }
</script>