<template>
  <div class="works-wrapper">
    <ol class="works">
      <li class="work">
        <div class="img-wrapper"><a href="https://github.com/fatfanfan/blog"><img src="../assets/momo.png" title="点击预览" alt=""></a></div>
        <div class="introduction">
          <h3>
            <a href="https://fatfanfan.github.io/blog/dist/#/">默默博客 -</a>
            <a href="https://github.com/fatfanfan/blog">源码</a>
          </h3>
          <hr>
          <p>功能: 登录注册功能，用户编辑创建删除博客功能，展示博客详情，查看用户信息等</p>
          <p>技术栈: vue-cli、vue-router、Vuex、Axios、element-ui、ES6</p>
        </div>
      </li>

      <li class="work">
        <div class="img-wrapper"><a href="https://fatfanfan.github.io/animating-resume/index.html"><img src="../assets/resume.jpg" title="点击预览"  alt=""></a></div>
        <div class="introduction">
          <h3>
            <a href="https://fatfanfan.github.io/animating-resume/index.html">会动的简历 -</a>
            <a href="https://github.com/fatfanfan/animating-resume">源码</a>
          </h3>
          <hr>
          <p>利用原生 JavaScript 动态向 style 标签添加样式以及 pre 标签添加文本。主要使用 CSS3 实现，利用 prism.js 实现代码高亮。</p>
        </div>
      </li>

      <li class="work">
        <div class="img-wrapper"><a href="https://fatfanfan.github.io/cnode/dist/#/"><img src="../assets/cnode.jpg" title="点击预览"  alt=""></a></div>
        <div class="introduction">
          <h3>
            <a href="https://fatfanfan.github.io/cnode/dist/#/">Vue仿cnode社区 -</a>
            <a href="https://github.com/fatfanfan/cnode">源码</a>
          </h3>
          <hr>
          <p>通过官方API,渲染后，实现了帖子查看，用户信息查看功能</p>
          <p>技术栈: vue-cli、vue-router、ES6、CSS3 </p>
          <p></p>
        </div>
      </li>


      <li class="work">
        <div class="img-wrapper"><a href="https://fatfanfan.github.io/keyboard/index.html"><img src="../assets/keyboard.jpg" title="点击预览"  alt=""></a></div>
        <div class="introduction">
          <h3>
            <a href="https://fatfanfan.github.io/keyboard/index.html">键盘导航 -</a>
            <a href="https://github.com/fatfanfan/keyboard">源码</a>
          </h3>
          <hr>
          <p>该项目使用 原生JavaScript 实现,通过键盘事件导向目标网址. 同时可以自己选择更改网址,按下键盘导向新网址.</p>
        </div>
      </li>
      <li class="work">
        <div class="img-wrapper"><a href="https://fatfanfan.github.io/canvas/index.html"><img src="../assets/canvas.jpg" title="点击预览"  alt=""></a></div>
        <div class="introduction">
          <h3>
            <a href="https://fatfanfan.github.io/canvas/index.html">默默画板 -</a>
            <a href="https://github.com/fatfanfan/canvas">源码</a>
          </h3>
          <hr>
          <p>该项目使用 原生JavaScript 实现，主要调用 Canvas API，支持移动端使用，实现了画画、调色、橡皮擦、保存等功能。</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Works"
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
    color: #333;
    text-align: left;
  }

  ol{
    list-style: none;
  }
  p{
    text-align: left;
  }

  .works-wrapper {
    flex-grow: 1;
    overflow: auto;
    padding-bottom: 20px;
  }

  ol.works{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  li.work{
    display: flex;
    width: 80%;
    height: 180px;
    margin: 20px auto;
    max-width: 520px;
    align-items: center;
    overflow: hidden;
    transition: all 0.8s;
  }


  li>div.img-wrapper{
    width: 270px;
    height: 180px;
  }

  img {
    width: 270px;
    height: 180px;
    background-size: cover;

  }
  div.introduction{
    width: 270px;
    height: 180px;
    margin-top: 0;
    padding: 0 10px;
  }
  div.introduction>h3{
    text-align: left;
    margin-bottom: 10px;
  }
  p{
    line-height: 30px;
    font-size: 16px;
  }

</style>