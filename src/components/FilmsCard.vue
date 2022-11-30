<template>
    <div class="card">
        <FimlsCard v-for="(elem, index) in filmsData"
        :key="index"
        :card="elem"/>
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