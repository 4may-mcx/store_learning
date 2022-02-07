// search
import { reqGetSearchInfo } from "@/api";

const state = {
  searchInfo: {}
}
const mutations = {
  SEARCHINFO(searchInfo){
    state.searchInfo = searchInfo;
    // console.log(searchInfo);
  }
}
const actions = {
  async getSearchInfo(context, params = {}) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      context.commit("SEARCHINFO", result.data);
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}