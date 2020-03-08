import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    jokes: []
  },
  mutations: {
    fetchCategories(state, payload) {
      state.categories = payload;
    },
    fetchJoke(state, payload) {
      state.jokes = [
        ...state.jokes,
        { id: payload.id, value: payload.value, favorited: false }
      ];
    }
  },
  actions: {
    fetchCategories(context) {
      axios
        .get(`${process.env.VUE_APP_BASEURL}/categories`)
        .then(response => context.commit("fetchCategories", response.data))
        .catch(error => console.log(error.message));
    },
    fetchJoke(context, categoryName = "animal") {
      axios
        .get(`${process.env.VUE_APP_BASEURL}/random?category=${categoryName}`)
        .then(response => {
          // Check if fetched joke already in state.jokes, refetch if true
          if (context.state.jokes.some(joke => joke.id === response.data.id)) {
            context.dispatch("fetchJoke");
          } else {
            context.commit("fetchJoke", response.data);
          }
        })
        .catch(error => console.log(error.message));
    }
  },
  modules: {}
});
