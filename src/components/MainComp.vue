<template>
    <div class="background">
        <div class="containerMain">
            <div>
                <h1>FILM</h1>
                <FilmsComp :card="card"/>
            </div>
            <div>
                <h1>SERIE TV</h1>
                <SeriesComp :cardS="cardS"/>
            </div>
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
    .containerMain{
        padding: 50px;
    }

    h1{
        color: white;
        text-align: center;
        font-size: 5rem;
    }
}

</style>