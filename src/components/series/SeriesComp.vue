<template>
    <div class="card">
        
        <SeriesCard v-for="(elem, index) in cardS"
        :key="index"
        :singleSeries="elem"/>
        
    </div>
</template>

<script>

import SeriesCard from './SeriesCard.vue'

    export default {
        name: `SeriesComp`,

        props: {
            cardS: Array
        },
        components: {
            SeriesCard
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
    display: flex;
   
    flex-wrap: wrap;
}
</style>