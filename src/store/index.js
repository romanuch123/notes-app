/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import notes from './modules/notes';
import loadings from './modules/loadings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    notes,
    loadings,
  },
});
