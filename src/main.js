// （1）main.js创建了一个Vue实例，这个Vue实例绑定了index.html中的DOM结构'app'
// (2)使用名为'APP'的components
// (3)template为组件'APP'的template

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   // vue 引入
import App from './App'   //主页面载入
import router from './router'

import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
