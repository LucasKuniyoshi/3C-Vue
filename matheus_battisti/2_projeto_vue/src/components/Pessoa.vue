<template>
    <div>
        <h1>Esta é a descrição da pessoa: {{ nome }}</h1>
        <Info /> <!-- COMPONENTE NO COMPONENTE-->
        <Form />
    </div>
</template>
<script>
import Info from './Info'
import Form from './Form'

    export default {
        name: 'Pessoa',
        //TEM Q CHAMAR O COMPONENTE 
        components: {
            Info,
            Form
        },
        data() {
            return {
                nome: 'Pessoa'
            }
        },
    }
</script>
