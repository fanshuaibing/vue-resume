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
        <li>了解 JavaScript，理解异步、this、闭包、原型链、面向对象等。</li>
        <li>了解 ES6 的部分常用语法,能在项目中普遍使用let、块级作用域、箭头函数、Promise 等语法。
        </li>
      </ul>
    </div>
    <div class="skill">
      <h2>Vue - ★★★★☆</h2>
      <hr>
      <ul>
        <li>熟练使用 Vue.js,了解组建通信、双向绑定等</li>
        <li>能使用Vue.js周边生态如Vue-router、Vuex等。</li>
      </ul>
    </div>
    <div class="skill">
      <h2>jQuery - ★★★☆☆</h2>
      <hr>
      <ul>
        <li>熟悉 jQuery 的常用 API，能使用 jQuery 技术栈进行网站开发。
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
    padding: 5px 0;
  }

  .skills{
    width: 0;
    flex-grow: 1;
    overflow: auto;

  }
  .skill{
    width: 80%;
    margin: 20px auto ;
  }

</style>