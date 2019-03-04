<template>
  <div class="me">
    <ul class="container">
      <li>姓名：范帅兵</li>
      <li>年龄：22</li>
      <li>邮箱：fatfan1020@gmail.com</li>
      <li>城市：合肥</li>
      <li>学校：安徽建筑大学(本科)</li>
      <li>专业：会计学</li>
      <li>求职：前端工程师</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "me",

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
  .me{
    width: 50%;
    flex-grow: 1;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  ul{
    list-style: none;
    text-align: left;
    width: 50%;
  }
  li{
    margin: 20px 0;
    font-size: 22px;
    padding-left: 30px;
  }

</style>