import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    giveaways: [],
    error: '',
    loading: false,
  },
  getters: {
    getGiveaway: (state) => (id) => {
      return state.giveaways.find((giveaway) => giveaway.id === +id);
    },
    getLoading: (state) => () => {
      return state.loading;
    },
  },
  mutations: {
    setGiveaways(state, payload) {
      state.giveaways = payload;
    },
    setError(state, error) {
      state.error = error || '';
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    async fetchData(context) {
      context.commit('setLoading');
      context.commit('setError');
      try {
        /*
            using an expres app to host the api while working on the project, 
            actual api: https://www.gamerpower.com/api/giveaways 
        */
        const response = await axios.get('http://localhost:7555');
        const data = await response.data.store;
        context.commit('setGiveaways', data);
      } catch (err) {
        context.commit('setError', err.message);
      } finally {
        context.commit('setLoading');
      }
    },
  },
});
