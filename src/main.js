import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import TypeNav from "@/components/TypeNav"

Vue.config.productionTip = false
// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

// 引入 mockServe.js 并调用一次 （获取 mock 数据）
import "@/mock/mockServe.js"

//引入 swiper 样式
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
