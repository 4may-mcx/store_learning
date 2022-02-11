import { reqGoodsInfo } from "@/api"

export default {
  state: {
    goodInfo: {}
  },
  getters: {
  },
  mutations: {
    GOODINFO(state, goodInfo) {
      state.goodInfo = goodInfo;
    }
  },
  actions: {
    async getGoodInfo({ commit }, skuId) {
      let res = await reqGoodsInfo(skuId);
      if (res.code == 200) {
        commit('GOODINFO', res.data);
      }
    }
  }
};