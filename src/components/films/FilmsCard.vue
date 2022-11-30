<template>
    <div class="card">
       
        <h1>{{singleFIlm.title}}</h1>
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

</style>