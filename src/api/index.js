import requests from './ajax';
import mockRequests from './mockAjax';

// 三级联动接口
// /api/product/getBaseCategoryList   GET 无参数
export const reqCategoryList = () => {
    // 发请求：axios返回的结果是Promise对象
    // 一定要记得返回！！
    return requests({
        url: '/product/getBaseCategoryList',
        method: "GET"
    })
}
export const reqBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: "GET"
    })
}
export const reqFloorList = () => {
    return mockRequests({
        url: '/floor',
        method: "GET"
    })
}
// 这个接口至少要传一个空对象才能正常返回
export const reqGetSearchInfo = (params = {}) => {
    return requests({
        url: '/list',
        method: "POST",
        data: params
    })
}

// 获取产品详情信息的接口  URL: /api/item/{skuId} 请求方式：get
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "GET" });

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post"
});

// 获取购物车列表数据接口
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

// 删除购物车接口
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

// 更新商品被选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

// 注册获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" })

// 用户注册接口
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, data, method: 'post' });

// 用户登录接口
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, data, method: "post" });


// 获取用户信息（需要带着用户的token向服务器要用户信息）
export const reqUserInfo = () => requests({ url: `/user/passport/auth/getUserInfo`, method: 'get' });

// 用户退出登录
export const reqLogout = () => requests({ url: `/user/passport/logout`, method: 'get' });

// 获取用户地址信息
export const reqAddressInfo = () => requests({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' });

// 获取商品清单
export const reqOrderInfo = () => requests({ url: `/order/auth/trade`, method: 'get' });