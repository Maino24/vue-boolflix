<template>
    <div class="card">
        
        <FilmsCard v-for="(elem, index) in card"
        :key="index"
        :singleFilm="elem"/>
        
    </div>
</template>

<script>

import FilmsCard from './FilmsCard.vue'

    export default {
        name: `FilmsComp`,

        props: {
            card: Array
        },
        components: {
            FilmsCard
        }
    }
</script>

<style lang="scss" scoped>

</style>