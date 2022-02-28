import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"

export default [
  {
    path: "/pay",
    component: Pay,
    meta: {
      FooterShow: true
    },
    beforeEnter:(to, from, next) => {
      if(from.path == '/trade'){
        // 从 trade 来的才能放行
        next();
      } else {
        // 其它组件来的，保留在当前
        next(from.path);
      }
    }
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      FooterShow: true
    },
    beforeEnter:(to, from, next) => {
      if(from.path == '/shopcart'){
        next();
      } else {
        next(from.path);
      }
    }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      FooterShow: true
    }
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    name: "addcartsuccess",
    meta: {
      FooterShow: true
    }
  },
  {
    path: "/home",
    // 路由懒加载
    component: () => import('@/pages/Home'),
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
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      FooterShow: true
    }
  },
  {
    path: "*",
    redirect: "/home"
  },
]