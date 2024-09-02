import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isAuthenticated: !!localStorage.getItem('access_token'),
      token: localStorage.getItem('access_token') || ''
    }
  },
  mutations: {
    login(state, { token, user }) {
      state.isAuthenticated = true
      state.token = token
      localStorage.setItem('access_token', token)
    },
    logout(state) {
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('access_token')
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    },
    getToken(state) {
      return state.token
    }
  }
})

export default store
