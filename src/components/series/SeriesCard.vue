<template>
    <div class="card">
       <div class="cardFront">
            <img class="poster" v-if="singleSeries.poster_path" :src="`https://image.tmdb.org/t/p/w342/${singleSeries.poster_path}`" alt=""> 
            <img class="poster" v-else src="https://th.bing.com/th/id/OIP.joZ4eKstRuAD6HSWmYJrMgHaHa?pid=ImgDet&rs=1" alt="">
       </div>
       <div class="cardBack">
            <div id="title"><span>TITOLO: </span><h4>{{singleSeries.name}}</h4></div>
            <div id="originalTitle"><span>TITOLO ORIGINALE: </span><div>{{singleSeries.name}}</div></div>

            <!--- funzione per voto -->
            <li>Voto:{{ votoMedio(singleSeries.vote_average)}}</li>

            <!--- stelline -->
            <span v-for="(elem, index) in 5" :key="index">
                <i v-if="(voto > index)" class="fa-solid fa-star"></i>
                <i v-else class="fa-regular fa-star"></i>
            </span>
            <!---<div id="vote"><span>VOTO: </span> {{singleSeries.vote_average}}</div> -->

           <!-- <div id="language">{{singleSeries.original_language}}</div> -->
            <!--<img :src="`https://image.tmdb.org/t/p/w342/${singleFilm.backdrop_path}`" alt=""> -->
            <div class="lingua">
                <span>LINGUA:    </span>
                <img class="flag" :src=" `https://www.countryflagicons.com/FLAT/64/${
                    (singleSeries.original_language == 'en') ? 'GB' : ((singleSeries.original_language == 'ja') ? 'JP' : singleSeries.original_language.toUpperCase())
                }.png` " >
            </div>
            <div id="overview"><span>TRAMA:</span><div> {{singleSeries.overview}}</div></div>

        </div>
    </div>
</template>

<script>


    export default {
        name: 'SeriesCard',

        props: {
            singleSeries: Object
        },
        data() {
            return {
                voto: ''
            }
            
        },
        methods: {
                votoMedio(valoreSingoloVoto){
                    this.voto = parseInt(valoreSingoloVoto / 2)
                    return this.voto
                }
            }
       
    }
</script>

<style lang="scss" scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.card{
    width: calc(100% / 6);
    background-color: rgb(112, 111, 111);
    border: 5px solid black;
    margin-top: 50px;
    color: white;
    .poster{
        width: 100%;
        height: 100%;
    }

    #title{
        width: 100%;
        
    }

    #originalTitle{
        width: 100%;
        padding-top: 5px;
    }

    #vote{
        width: 100%;
        padding-top: 5px;
    }

    #language{
        width: 100%;
    }

    #overview{
        width: 100%;
    }

    .lingua{
        display: flex;
        margin: auto;
        align-items: center;
    }

    .flag{
        width: 20%;
    }

    .cardBack{
        display: none;
    }

    
    .card:hover{
    scale: 1.3;
    position: relative;
    z-index: 1;
    border: 5px solid black;
    }

    .card:hover .cardFront{
        display: none;
    }

    .card:hover .cardBack{
        display: block;
        overflow-y: scroll;
        height: 380px;
        padding: 10px;
    }

    span{
        color: black;
    }

}

</style>