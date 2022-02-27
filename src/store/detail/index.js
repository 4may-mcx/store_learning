import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api"
import { getUUID } from "@/utils/uuid_token";

export default {
  state: {
    goodInfo: {},
    // 游客临时身份
    uuid_token: getUUID()
  },
  getters: {
    categoryView(state) {
      return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
      return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
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
    },

    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
      // 服务器写入数据成功，并没有返回其它的数据，只是返回code=200，代表这次操作成功
      // 因为服务器没有返回其余数据，因此不需要三连环存储数据
      let result = await reqAddOrUpdateShopCart(skuId, skuNum);
      if (result.code == 200) {
        return "ok"
      } else {
        return Promise.reject(new Error('faile'));
      }
    }
  }
};