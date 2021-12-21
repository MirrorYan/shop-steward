import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    today: new Date()
  },
  mutations: {
    changeToken (state, value) {
      state.token = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
