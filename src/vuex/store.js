import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  indexData: [],
};
const mutations = {
  initIndex(state, res) {
    state.indexData = res;
  }
};
const actions = {
  getIndexData({ commit }) {
    axios.get('/apis/movie/in_theaters?count=8').then(
      response => {
        console.log(response);
        commit('initIndex', response.data);
      }
    ).catch(err => console.log(err))
  }
};

export default new Vuex.Store({
  state, mutations, actions
})
