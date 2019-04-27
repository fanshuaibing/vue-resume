<template>
  <div class="me">
	  <h1>个人简介</h1>
	  <h2>一年前端学习和项目经验，熟悉Vue技术栈，熟悉模块化、工程化开发流程，熟练使用ES6
		  写代码，有小程序、移动端开发经验</h2>
    <ul class="container">
      <li>姓名：范帅兵</li>
      <li>学校：安徽建筑大学</li>
	    <li>年龄：22</li>
	    <li>专业：会计学 </li>
      <li>手机：17756979714</li>
      <li>邮箱：fatfan1020@gmail.com</li>
    </ul>
	  <h2>个人评价 <br>
		  <br>
	  善于知识总结梳理，乐于分享，经常写技术博客，喜欢承担有技术难度的工作，乐于学习新的技术栈</h2>

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
	  width: 0;
	  flex-grow: 1;
    height: 100vh;
    display: flex;
	  flex-direction: column;
    justify-content: space-around;
	  align-items: center;
    overflow: hidden;
	  color: white;
	  background: black;

  }
  h2{
	padding: 0 100px;
  }

  ul{
	  display: inline-block;
    list-style: none;
    text-align: left;
  }
  li{
    margin: 20px 0;
    font-size: 28px;
    padding-left: 30px;

  }


</style>
