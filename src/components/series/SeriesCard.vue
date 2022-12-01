<template>
    <div class="card">
       
        <img class="poster" v-if="singleSeries.poster_path" :src="`https://image.tmdb.org/t/p/w342/${singleSeries.poster_path}`" alt=""> 
        <img class="poster" v-else src="https://th.bing.com/th/id/OIP.joZ4eKstRuAD6HSWmYJrMgHaHa?pid=ImgDet&rs=1" alt="">
        <div id="title">{{singleSeries.name}}</div>
        <div id="originalTitle">{{singleSeries.original_title}}</div>
        <div id="vote">{{singleSeries.vote_average}}</div> 
        <div id="language">{{singleSeries.original_language}}</div> 
        <!--<img :src="`https://image.tmdb.org/t/p/w342/${singleFilm.backdrop_path}`" alt=""> -->

        <img class="flags" :src=" `https://www.countryflagicons.com/FLAT/64/${
            (singleSeries.original_language == 'en') ? 'GB' : ((singleSeries.original_language == 'ja') ? 'JP' : singleSeries.original_language.toUpperCase())
        }.png` " >
        
    </div>
</template>

<script>


    export default {
        name: 'SeriesCard',

        props: {
            singleSeries: Object
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

   

    .flags{
        width: 20%;
    }

}

</style>