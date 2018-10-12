import Vue from 'vue'
import Router from 'vue-router'

import me from  '../components/me'
import  Skill from  '../components/Skill'
import  Works from '../components/Works'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'me',
      path:'/',
      components:{
        main:me
      }
    },
    {
      name:'skill',
      path:'/skill',
      components:{
        main:Skill
      }
    },
    {
      name:'work',
      path:'/work',
      components:{
        main:Works
      }
    }
  ]
})
