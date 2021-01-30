import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      tittle: '',
      state: false,
      color: 'primary'
    },
  },
  mutations: {
    // metodo para mostrar el loading
    showLoading(state, payload) {
      state.loading.tittle = payload.tittle
      state.loading.color = payload.color
      state.loading.state = true
    },
    // metodo para ocultar el loading
    hideLoading(state) {
      state.loading.state = false
    },
  },
  actions: {},
  modules: {},
})
