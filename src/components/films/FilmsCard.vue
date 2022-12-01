<template>
    <div class="card"  >
        <div class="cardFront">
           <!-- v-on:mouseover="active = !active"-->
            <img class="poster" v-if="singleFilm.poster_path" :src="`https://image.tmdb.org/t/p/w342/${singleFilm.poster_path}`" alt=""> 
            <img class="poster" v-else src="https://th.bing.com/th/id/OIP.joZ4eKstRuAD6HSWmYJrMgHaHa?pid=ImgDet&rs=1" alt="">
        </div> 
        <div class="cardBack">
           <!-- v-if="active"-->
            <div id="title"><span>TITOLO:</span> <h4>{{singleFilm.title}}</h4></div>
            <div id="originalTitle"><span>TITOLO ORIGINALE:</span> <div>{{singleFilm.original_title}}</div></div>
            <div id="vote"><span>VOTO:</span> {{singleFilm.vote_average}}</div> 
            <div class="lingua">
               <!-- <div id="language"><span>LINGUA:</span> {{singleFilm.original_language}}</div> -->
               <span>LINGUA:    </span>
                <img class="flag" :src=" `https://www.countryflagicons.com/FLAT/64/${
                    (singleFilm.original_language == 'en') ? 'GB' : ((singleFilm.original_language == 'ja') ? 'JP' : singleFilm.original_language.toUpperCase())
                }.png` " >
            </div>
            <div id="overview"><span>TRAMA:</span> <div>{{singleFilm.overview}}</div></div>
            <!--<img :src="`https://image.tmdb.org/t/p/w342/${singleFilm.backdrop_path}`" alt=""> -->
            
            
        </div>
         
    </div>
</template>

<script>


    export default {
        name: 'FilmsCard',
    
        props: {
            singleFilm: Object
        },

        data() {
            return {
               
            }
        },
        methods: {
          
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
    height: 400px;
    background-color: rgb(78, 78, 78);
    border: 4px solid black;
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
    scale: 1.1;
    position: relative;
    z-index: 3;
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