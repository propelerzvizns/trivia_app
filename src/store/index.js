import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import chuckService from '../services/chuckService'
export default new Vuex.Store({
  state: {
    categories: [],
    
  },
  mutations: {
    setCategories(state, payload){
      state.categories = payload
      console.log(chuckService);
    }
  },
  actions: {
    fetchCategories(state){
      
      const categories = chuckService.getJokeCategories();
      state.commit('setCategories', categories);
    }
  },
  getters:{
    categories: (state) => state.movies,
  
  },
  modules: {
    namespaced: true,
    ChuckServiceModule:{

    }
  }
})
