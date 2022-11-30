<template>
    <div class="background">
        <FilmsComp :card="card"/>
    </div>
</template>

<script>

import FilmsComp from './films/FilmsComp.vue'

    export default {
        name: 'MainComp',

        props: {
            card: Array
        },
        components: {
            FilmsComp
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