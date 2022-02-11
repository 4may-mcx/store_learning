import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from "./routes"

Vue.use(VueRouter);

// 重写 push & replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 第一个参数：告诉原来的push方法，要传递哪些参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition){
    // 返回的这个 y，代表路由跳转后滚动条的垂直位置
    return { y: 0}
  }
});