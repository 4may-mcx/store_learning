import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from "./routes"
import store from "@/store"

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

let router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 返回的这个 y，代表路由跳转后滚动条的垂直位置
    return { y: 0 }
  }
});

router.beforeEach(async (to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  // 用户登陆了才会有token
  // 用户已经登陆了
  if (token) {
    if (to.path == '/login' || to.path == '/register') {
      next('/home');
    } else {
      // 登陆了，但是去的不是login || register
      // 如果已经有了用户名
      if (name) {
        next();
      } else {
        // 没有用户信息，派发action让仓库储存用户信息再跳转
        try {
          // 获取用户信息
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          // token失效，获取不到用户信息，重新登录
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  }
  else {
    // 未登录：不能去交易相关、支付相关、个人中心
    let toPath = to.path;
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      // 把未登录的时候想去而没去成的信息，存储于url中
      next(`/login?redirect=${toPath}`);
    } else {
      next();
    }
  }
})


export default router;
