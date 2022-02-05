import requests from './request';

// 三级联动接口
// /api/product/getBaseCategoryList   GET 无参数
export const reqCategoryList = () => {
    // 发请求：axios返回的结果是Promise对象
    requests({
		url:'/product/getBaseCategoryList',
        method:"GET"
    })
}
