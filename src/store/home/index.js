// home组件的仓库
import {reqCategoryList} from '@/api'

const state = {}
const mutations = {}
const actions = {
  // 通过 API 里面的接口调用，向服务器发请求，获取服务器的数据
  async categoryList(){
    let result = await reqCategoryList();
    console.log(result);
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}