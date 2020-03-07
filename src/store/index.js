import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    getCategories(state, payload) {
      state.categories = payload;
    }
  },
  actions: {
    getCategories(context) {
      axios
        .get(`${process.env.VUE_APP_BASEURL}/categories`)
        .then(response => {
          context.commit("getCategories", response.data);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  modules: {}
});
