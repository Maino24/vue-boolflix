<template>
    <div class="card">
        <img src="http://image.tmdb.org/t/p/w342/${card.backdrop_path}" alt=""> 
    </div>
</template>

<script>


    export default {
        name: `FilmsCard`,

        props: {
            card: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>