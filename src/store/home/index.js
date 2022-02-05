// home组件的仓库
import {reqCategoryList} from '@/api'

const state = {
  // 数据默认值不能乱写，要看返回数据的类型
  categoryList: [],
}
const mutations = {
  CATEGORYLIST(state, categoryList){
    state.categoryList = categoryList;
  }
}
const actions = {
  // 通过 API 里面的接口调用，向服务器发请求，获取服务器的数据
  async categoryList(context){
    let result = await reqCategoryList();
    if(result.code == 200){
      // 不能直接写 commit，要用上下文(context)
      context.commit("CATEGORYLIST", result.data);
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}