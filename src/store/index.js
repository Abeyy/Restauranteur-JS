import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userList: [],
    views: ['enterUsers', 'orderedItems'],
    currentView: 'enterUsers'
  },
  mutations: {
    updateUserList (state, newList) {
      state.userList = newList
    },
    goToNextView (state) {
      let index = state.views.indexOf(state.currentView)
      index++
      state.currentView = state.views[index]
    }
  }
})

export default store
