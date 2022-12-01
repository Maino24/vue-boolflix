<template>
  <div id="app">
    <HeaderComp @search="searchFilm" />
   
    <MainComp :card="array" :cardS="arrayS"  />
    
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  },

  data() {
       return {
        array: [],
        arrayS: []
       }
    },

  mounted(){

 },

    methods: {

      
      searchFilm(searchText){
        //https://api.themoviedb.org/3/search/movie?api_key=891ac8a7cc8711cdf969761d6e219d2d&query=

        axios.get("https://api.themoviedb.org/3/search/movie?api_key=891ac8a7cc8711cdf969761d6e219d2d&query=" + searchText )
                          .then((response) => {
                              this.array = response.data.results
                          })

                    
        //https://api.themoviedb.org/3/search/tv?api_key=891ac8a7cc8711cdf969761d6e219d2d&language=it_IT&query=
        axios.get("https://api.themoviedb.org/3/search/tv?api_key=891ac8a7cc8711cdf969761d6e219d2d&query=" + searchText )
                            .then((response) => {
                                this.arrayS = response.data.results
                    })
      },

    }
    
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
 height: 100vh;
 width: 100vw;
}
</style>
