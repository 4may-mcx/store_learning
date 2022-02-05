import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"

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
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        FooterShow: true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        FooterShow: false
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        FooterShow: false
      }
    },
    {
      // 用 params 传参一定要设置占位符！！！
      // 占位符后面加 ？ 说明params参数可传可不传。不加的话不传参会导致 URL 出现错误
      path: "/search/:keyword?",
      name: "search",
      component: Search,
      meta: {
        FooterShow: true
      }
    },
    {
      path: "*",
      redirect: "/home"
    },
  ]
});