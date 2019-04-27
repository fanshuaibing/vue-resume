<template>
  <div id="app" class="app">
    <div class="main">
      <slideBar/>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>

import  slideBar from './components/sliderBar'

export default {
  name: 'App',
  components:{
    slideBar
  }
}

</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#2e5563;
}
  .main{

    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    background-color: white;
  }


</style>
