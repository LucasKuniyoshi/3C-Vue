<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <MudarImagem @mudar-imagem="trocarImagem" />
        <!-- <Reutilizacao /> -->
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue'
import Reutilizacao from './Reutilizacao.vue'

export default {
    components: { 
        Reutilizacao,
        MudarImagem
    },
    name: 'Picture',
    data(){
        return{
            avatar: "/img/avatar.png",
            descricao: "Lucas Kuniyoshi"
        }
    },
    methods:{
        trocarImagem(){
            this.avatar = "/img/avatar2.png"
        }
    }
}
</script>
