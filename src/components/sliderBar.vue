<template>
  <div class="slideBar">
    <div class="me">
      <img src="https://avatars3.githubusercontent.com/u/34294719?s=460&v=4" alt="">
      <h2>黑白酱</h2>
    </div>
    <div class="tabs">
      <ul>
        <li  class="active" @click="activeBtn">
          <router-link id="xxx" to="/">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-about"></use>
            </svg>
            关于
          </router-link>
        </li>
        <li @click="activeBtn">
          <router-link to="/work">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zuopin"></use>
            </svg>
            作品
          </router-link>
        </li>
        <li @click="activeBtn">
          <router-link to="/skill">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jineng"></use>
            </svg>
            技能
          </router-link>
        </li>
      </ul>
    </div>
    <div class="blog">
      <a href="https://github.com/fatfanfan">
        <svg class="icon1" aria-hidden="true">
          <use xlink:href="#icon-github1"></use>
        </svg>
      </a>
      <a href="https://www.jianshu.com/u/21ccc68041d0">
        <svg class="icon1" aria-hidden="true">
          <use xlink:href="#icon-boke3"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>

  import  $ from 'jQuery'
  export default {
    name: "sliderBar",
    data(){
      return {

      }
    },
    methods:{
      activeBtn(e){
        let $li = $(e.currentTarget)
        $li.addClass('active').siblings().removeClass('active')
      }
    }

}
</script>

<style scoped>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  *:after {
    box-sizing: border-box;
  }

  *:before {
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: darkgray;
  }
  h2{
    padding-top: 20px;
  }


  .slideBar {
    width: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    overflow: hidden;
    border-right: 5px solid #000;
  }
  .me{
    width: 100%;
    top: 0;
  }
  img{
    width: 100%;
  }

  .tabs > ul {
    list-style: none;
    font-size: 20px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
  }

  .tabs > ul   li > a{
    font-weight:  bolder;
    color: dimgray;
  }
  .tabs > ul  li.active >a{
    color: black;
  }
  .blog{
    margin-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .blog>a{
    padding-top: 15px;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .icon1{
    width: 50px;
    height: 50px;
    overflow: hidden;
  }
</style>