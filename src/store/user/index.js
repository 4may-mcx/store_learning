// 登录与注册的模块
// search
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api";
import { setToken, getToken, removeToken } from '@/utils/token'
const state = {
  code: '',
  token: getToken(),
  userInfo: {}
}
const mutations = {
  CODE(state, code) {
    state.code = code;
  },
  TOKEN(state, token) {
    state.token = token;
  },
  USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEAR(state) {
    removeToken();
    state.token = '';
    state.userInfo = {};
  }

}
const actions = {
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("CODE", result.data);
      return "ok"
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

  async userLogin({ commit }, user) {
    let result = await reqUserLogin(user);
    if (result.code == 200) {
      commit("TOKEN", result.data.token);
      // 持久化存储 token
      setToken(result.data.token);
      return "ok"
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("USERINFO", result.data);
      return "ok"
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

  async userLogout({ commit }) {
    let result = await reqLogout();
    // action 里面不能操作state，提交 mutation 修改 state
    if (result.code == 200) {
      commit("CLEAR");
    }
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}