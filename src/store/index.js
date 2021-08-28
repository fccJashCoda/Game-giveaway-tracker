import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    giveaways: [],
  },
  mutations: {
    setGiveaways(state, payload) {
      console.log('mutation payload: ', payload);
      state.giveaways = payload;
    },
  },
  actions: {
    async fetchData(context) {
      console.log('vuex fetching');
      try {
        const response = await axios.get('http://localhost:7555');
        const data = await response.data.store;
        context.commit('setGiveaways', data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
