import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import TypeNav from "@/components/TypeNav"
import Carsouel from "@/components/Carsouel"
import Pagination from "@/components/Pagination"

Vue.config.productionTip = false;
// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsouel.name, Carsouel);
Vue.component(Pagination.name, Pagination);

// 引入 mockServe.js 并调用一次 （获取 mock 数据）
import "@/mock/mockServe.js"
import * as API from '@/api'

//引入 swiper 样式
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  beforeCreate() {
    // beforeCreate 这个时候的组件还没有获取数据，是一个干净的新建出来的 new 的 Vue实例，因此 this 是干净的。
    // vm上的 $on,$off,$emit等方法都是总线需要的
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
