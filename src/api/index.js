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
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/list',
        method: "POST",
        data: params
    })
}

