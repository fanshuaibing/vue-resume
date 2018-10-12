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
    min-width: 900px;
    width: 60%;
    height: 80vh;
    display: flex;
    overflow: hidden;
    background-color: white;
    border-radius: 20px;
    box-shadow: gray 3px 3px;
  }


</style>
