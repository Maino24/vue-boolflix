<template>
    <div>
      <!--  <FilmsComp v-for="(elem, index) in array"
        :key="index"
        :card= "elem"/>-->
    </div>
</template>

<script>
//import FilmsComp from './FilmsComp.vue'
//import axios from 'axios'

    export default {
      name: 'MainComp',
       components: {
        //FilmsComp
       },
       data(){
        return {
          //  array: []
        }
       },
       mounted() {
       // this.get()
       },
       methods: {

     //   get(){

    //        axios.get("https://api.themoviedb.org/3/search/movie?api_key=891ac8a7cc8711cdf969761d6e219d2d&query=" + searchText )
    //                        .then((response) => {
    //                            this.array = response.results.response
     //               })

        }


       } 

    


</script>

<style lang="scss" scoped>

</style>