import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    authenticated: false,
    username: "",
    user: {
      name: "",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
