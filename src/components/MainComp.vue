<template>
    <div class="background">
        <div class="paddingMain">
            <FilmsComp :card="card"/>
            <SeriesComp :cardS="cardS"/>
        </div>
    </div>
</template>

<script>

import FilmsComp from './films/FilmsComp.vue'
import SeriesComp from './series/SeriesComp.vue'

    export default {
        name: 'MainComp',

        props: {
            card: Array,
            cardS: Array
        },
        components: {
            FilmsComp,
            SeriesComp
        },
        
    }
</script>

<style lang="scss" scoped>

.background{
    height: calc(100% - 15%);
    width: 100%;
    background-color: rgb(40, 39, 39);
    overflow-y: scroll;
    .paddingMain{
        padding: 50px;
    }
}

</style>