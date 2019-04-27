<template>
  <div class="skills" id="skills">
    <div class="skill">
      <h2>HTML5 & CSS3 - ★★★★☆</h2>
      <hr>
      <ul>
        <li>标签语义化：能根据 HTML5 标准编写具有语义化的文档结构</li>
        <li>CSS居中与布局：能快速对元素进行居中处理，使用float、flex、position等方案进行页面布局。</li>
        <li>CSS动画：能使用keyframes、transition、transform等实现常见动画效果。</li>
      </ul>
    </div>
    <div class="skill">
      <h2>JavaScript - ★★★★☆</h2>
      <hr>
      <ul>
        <li>熟悉 JavaScript，理解异步、this、闭包、原型链、面向对象等。</li>
        <li>熟悉 ES6 的常用语法,能在项目中普遍使用let、块级作用域、箭头函数、Promise、async\await 等语法。
        </li>
      </ul>
    </div>
    <div class="skill">
      <h2>Vue - ★★★★☆</h2>
      <hr>
      <ul>
        <li>能够使用 Vue 全家桶,了解组件通信、双向绑定、vue-router、vuex等</li>
      </ul>
    </div>
	  <div class="skill">
		  <h2>微信小程序 - ★★★☆☆</h2>
		  <hr>
		  <ul>
			  <li>熟悉微信小程序的开发流程，能够进行原生微信小程序的开发。
			  </li>
		  </ul>
	  </div>
    <div class="skill">
	  <h2>HTTP与浏览器 - ★★★☆☆</h2>
	  <hr>
	  <ul>
		  <li>了解 HTTP 基础知识，了解常见状态码含义，能够根据请求查看响应。</li>
		  <li>理解浏览器运行机制，了解页面加载的整个过程。</li>
	  </ul>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Skill"
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  h2{
    text-align: left;
    padding-bottom: 5px;
  }
  ul,ol{
    list-style: none;
    text-align: left;
  }
  li{
    padding: 10px 0;
  }

  .skills{
    width: 0;
    flex-grow: 1;
	  height: 100vh;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-around;
	  background: black;
	  color: #DCDCDC;
	  font-size: 18px;
  }
  .skill{
    width: 80%;
	  margin: 0 auto;
  }

</style>
