// search
import { reqGetSearchInfo } from "@/api";

const state = {
  searchList: {}
}
const mutations = {
  SEARCHINFO(state, searchList) {
    state.searchList = searchList;
  }
}
const actions = {
  async getSearchInfo(context, params) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      context.commit("SEARCHINFO", result.data);
    }
  },
}
// 拆解简化数据
const getters = {
  goodsList(state) {
    // 就算服务器没有接通，至少也要返回一个空数组，保证前台的正常运行
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}