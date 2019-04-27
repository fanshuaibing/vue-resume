<template>
	<div class="slideBar">
		<div class="me">
			<h1>范帅兵</h1>
			<h2>前端开发</h2>
		</div>
		<div class="tabs">
			<ul>
				<router-link id="xxx" to="/">
					<li class="tab" @click="activeBtn">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-about"></use>
						</svg>
						<p>关于</p>
					</li>
				</router-link>
				<router-link to="/work">
					<li class="tab" @click="activeBtn">

						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-zuopin"></use>
						</svg>

						<p>作品</p>
					</li>
				</router-link>
				<router-link to="/skill">
					<li class="tab" @click="activeBtn">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jineng"></use>
						</svg>
						<p>技能</p>
					</li>
				</router-link>
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

  import $ from 'jQuery'

  export default {
    name: "sliderBar",
    data() {
      return {
        active: ''
      }
    },
    mounted: function () {
      this.active = this.$route.path
      let lis = $('.tab')
      lis.children().removeClass('active');
      if (this.active === '/') {
        lis[0].classList.add('active')
      }
      else if (this.active === '/work') {
        lis[1].classList.add('active')
      }
      else {
        lis[2].classList.add('active')
      }
    },
    methods: {
      activeBtn(e) {
        let $li = $(e.currentTarget)
        let $tabs = $('.tab')
        $tabs.removeClass('active')
        $li.addClass('active')
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

	a {
		text-decoration: none;
		color: darkgray;
	}

	h2 {
		padding-top: 20px;
	}


	.slideBar {
		width: 220px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 100vh;
		overflow: hidden;
		border-right: 5px solid white;
		background: black;
		color: white;
	}

	.me {
		width: 100%;
		top: 0;
		padding: 40px;
		color: white;
	}

	img {
		width: 100%;
	}

	.tabs {
		width: 100%;
	}

	.tabs > ul {
		width: 100%;
		list-style: none;
		font-size: 16px;
		padding-top: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 400px;
	}

	.tabs > ul li {
		padding: 20px;
		font-size: 30px;
		color: white;
		box-shadow: 1px;
		box-shadow: 1px 1px 0px rgba(0,0,0,0.4);
	}

	.tabs > ul li.active {
		color: white;
		box-shadow: 1px ;
		background: white;
		color: black;
		border-top: 1px solid white;
		border-bottom: 1px solid white;
	}
	p{
		display: inline-block;
		padding-left: 20px;
	}
	.blog {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 50px;
	}
	.blog a{
		padding: 10px  0px;
	}

	.icon {
		width: 1.2em;
		height: 1.2em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}

	.icon1 {
		width: 50px;
		height: 50px;
		fill: white;
		overflow: hidden;
	}
</style>
