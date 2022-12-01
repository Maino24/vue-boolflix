<template>
    <div class="card"  >
        <div class="cardFront" v-on:mouseover="active = !active" v- >
            <img class="poster" v-if="singleFilm.poster_path" :src="`https://image.tmdb.org/t/p/w342/${singleFilm.poster_path}`" alt=""> 
            <img class="poster" v-else src="https://th.bing.com/th/id/OIP.joZ4eKstRuAD6HSWmYJrMgHaHa?pid=ImgDet&rs=1" alt="">
        </div> 
        <div class="cardBack"  v-if="active">
            <div id="title">{{singleFilm.title}}</div>
            <div id="originalTitle">{{singleFilm.original_title}}</div>
            <div id="vote">{{singleFilm.vote_average}}</div> 
            <div id="language">{{singleFilm.original_language}}</div> 
            <div id="overview">{{singleFilm.overview}}</div>
            <!--<img :src="`https://image.tmdb.org/t/p/w342/${singleFilm.backdrop_path}`" alt=""> -->
            
            <img flags :src=" `https://www.countryflagicons.com/FLAT/64/${
                (singleFilm.original_language == 'en') ? 'GB' : ((singleFilm.original_language == 'ja') ? 'JP' : singleFilm.original_language.toUpperCase())
            }.png` " >
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
                active: false
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
    background-color: rgb(78, 78, 78);
    border: 4px solid black;
    margin-top: 50px;

    .poster{
        width: 100%;
        height: 100%;
    }
    
    #title{
        
        color: white;
        width: 100%;
    }

    #originalTitle{
       
        width: 100%;
    }

    #vote{
        
        color: white;
        width: 100%;
    }

    #language{
       
        color: blue;
        width: 100%;
    }

 

}



</style>