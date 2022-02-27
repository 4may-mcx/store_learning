import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
// 在当前模块中引入 stroe
import store from "@/store";

//1. 利用 axios 对象的方法 create，去创建一个 axios 实例
//2. request 就是 axios，只不过是稍微配置了一下
const request = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中就会出现 api
  baseURL: "/api",
  // 代表请求超时的时间 5s
  timeout: 5000,
});

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
  // config:配置对象，对象里面有一个属性很重要——headers请求头
  // 进度条开始
  nprogress.start();
  if (store.state.detail.uuid_token) {
    // 请求头添加一个字段（userTempId）
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  return config;
})

// 响应拦截器
request.interceptors.response.use((res) => {
  // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情(eg: 判断响应编码 status)
  // 进度条结束
  nprogress.done();
  return res.data;
}, (err) => {
  //响应失败的回调函数
  alert('服务器响应数据失败:' + err);
})

// 对外暴露
export default request;