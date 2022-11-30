<template>
    <div class="card">
       
        <div id="title">{{singleFilm.title}}</div>
        <div id="originalTitle">{{singleFilm.original_title}}</div>
        <div id="vote">{{singleFilm.vote_average}}</div> 
        <div id="language">{{singleFilm.original_language}}</div> 
    </div>
</template>

<script>


    export default {
        name: 'FilmsCard',

        props: {
            singleFilm: Object
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
    background-color: grey;
    border: 4px solid black;
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