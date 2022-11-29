<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/Netflix_icon.svg.webp" alt="">
    </div>
    <div class="input">
      <input type="text">
   </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header{
  height: 15%;
  background-color: black;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  img{
    width: 8%;
  }

}

</style>
