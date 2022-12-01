<template>
    <div class="card">
       
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${singleFilm.poster_path}`" alt=""> 
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
</template>

<script>


    export default {
        name: 'FilmsCard',

        props: {
            singleFilm: Object
        },
       
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

    
    #title{
        display: none;
        color: white;
        width: 100%;
    }

    #originalTitle{
        display: none;
        width: 100%;
    }

    #vote{
        display: none;
        color: white;
        width: 100%;
    }

    #language{
       // display: none;
        color: blue;
        width: 100%;
    }

    #overview{
        display: none;
    }
    
    #flags{
        //display: none;
    }

   .poster{
        width: 100%;
   }
    
}

.card:hover{

    .poster{
       // display: none;
    }

    #overview{
       // display: block;
    }
}


</style>