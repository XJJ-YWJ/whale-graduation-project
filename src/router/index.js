import Vue from 'vue'
import Router from 'vue-router'

// 引入导航栏六个板块对应页面
import Home from '@/pages/Home'
import Recommendation from '@/pages/Recommendation'
import Video from '@/pages/Video'
import Article from '@/pages/Article'
import Topic from '@/pages/Topic'
import Attention from '@/pages/Attention'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pages',
      name: 'Recommendation',
      component: Recommendation
    },
    {
      path: '/',
      name: 'Video',
      component: Video
    },
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/',
      name: 'Attention',
      component: Attention
    },
    // {
    //   path: '/Login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/Register',
    //   name: 'Register',
    //   component: Register
    // }
  ]
})
