<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/Netflix-symbol.jpg" alt="">
    </div>
    <div class="inputButton">
      <input type="text" placeholder="Cerca..." v-model="inputText" >
      <button @click="$emit('search', inputText)">Search</button>
   </div>
  </div>
</template>

<script>



export default {
  name: 'HeaderComp',
 
  data() {
    return {
      inputText: '',
    }
  },

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
    width: 15%;
  }

  .inputButton{
    display: flex;
    

  button{
    padding: 8px;
    
  }

  }

}

</style>
