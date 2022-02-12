import { reqGoodsInfo } from "@/api"

export default {
  state: {
    goodInfo: {}
  },
  getters: {
    categoryView(state){
      return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
      return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state){
      return state.goodInfo.spuSaleAttrList || [];
    }
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