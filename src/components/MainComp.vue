<template>
    <div class="background">
        <FilmsCard :filmsData="array"/>
    </div>
</template>

<script>

import FilmsCard from '../components/FilmsCard.vue'

    export default {
        name: 'MainComp',

        props: {
            card: Array
        },
        components: {
            FilmsCard
        },
        
    }
</script>

<style lang="scss" scoped>

.background{
    height: calc(100% - 15%);
    width: 100%;
    background-color: rgb(40, 39, 39);
    
}

</style>