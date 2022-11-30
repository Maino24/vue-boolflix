<template>
    <div class="card">
       
        <img :src="`https://image.tmdb.org/t/p/w342/${singleFilm.poster_path}`" alt=""> 
        <div id="title">{{singleFilm.title}}</div>
        <div id="originalTitle">{{singleFilm.original_title}}</div>
        <div id="vote">{{singleFilm.vote_average}}</div> 
        <div id="language">{{singleFilm.original_language}}</div> 
        <!--<img :src="`https://image.tmdb.org/t/p/w342/${singleFilm.backdrop_path}`" alt=""> -->
        
    </div>
</template>

<script>


    export default {
        name: 'FilmsCard',

        props: {
            singleFilm: Object
        },

        data() {
            
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

    img{
        width: 100%;
    }


}

</style>