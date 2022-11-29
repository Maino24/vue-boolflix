<template>
    <div class="background">
        <FimlsCard v-for="(elem, index) in card"
        :key="index"
        :card="elem"/>
    </div>
</template>

<script>

import FilmsCard from '../components/FilmsCard.vue'

    export default {
        name: 'MainComp',

        props: {
            card: Object
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