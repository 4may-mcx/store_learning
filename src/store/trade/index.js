import { reqAddressInfo, reqOrderInfo } from '@/api'

const state = {
  address: [],
  orderInfo: {}
}
const mutations = {
  USERADDRESS(state, address) {
    state.address = address
  },
  ORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo
  },
}
const actions = {
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("USERADDRESS", result.data);
      return "ok"
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("ORDERINFO", result.data);
      return "ok"
    } else {
      return Promise.reject(new Error('faile'));
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