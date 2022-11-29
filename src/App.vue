<template>
  <div id="app">
    <HeaderComp/>
    <MainComp/>
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

       }
    },

    mounted(){
      

    },

    methods: {

      cerca(){
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=891ac8a7cc8711cdf969761d6e219d2d&query=" + )
        .then(())
    }
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
