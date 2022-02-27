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