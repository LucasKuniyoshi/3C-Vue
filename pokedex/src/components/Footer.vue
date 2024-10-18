<template>
    <div id="pokedle-position">
        <figure class="pokedle-border">
            <a href="https://pokedle.net/">
                <img src="../assets/Whosthatpokemon.jpg" alt="pokedle" id="pokedle">
                <p class="p1">Quem é este pokemon?</p>
            </a>
        </figure>
    </div>
    <footer id="footer">
        <p>Pokemon Company &copy; 2024</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    #footer {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 97.3%;
        background-color: red;
        color: white;
        /* margin-top: -5%; */
        margin-left: 1.35%;
        /* margin-right: 1.2%; */
        /* margin: -7.8px; */
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Cria uma sombra suave */
        transition: box-shadow 0.3s ease; /* Adiciona transição suave */
    }
    .img1{
        /* padding: -5%; */
        border: black solid 2px ;
        border-radius: 7%;
    }

    
    #pokedle-position{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 55px;
        margin-top: -15%;
    }

    .pokedle-border{
        /* padding-left: 150px; */
        /* background-image: radial-gradient(); */
        background-image: linear-gradient(rgb(208, 73, 19), violet, rgb(244, 46, 46), white);
        border: 2px solid rgb(197, 32, 32);
        border-radius: 7%;
    }

    #pokedle{
        /* border: 2px solid black; */
        border-top-left-radius: 7%;
        border-top-right-radius: 7%;
        width: 100%;
        height: 100px;
    }

    a{
        text-decoration: none;
        font-family: Helvetica;
        font-weight: bold;
    }

    .p1{
        color: #FFF;
        margin-left: 2px;
        padding: 1px;
    }

    .p1:hover{
        color: gainsboro;
        transition: .4s;
    }
</style>