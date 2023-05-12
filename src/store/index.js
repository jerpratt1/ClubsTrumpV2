import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerRoster: [],
    fourPlayers: [10,9,8,7,6,5,4,3,2,1],
  },

  mutations: {
    SET_ROSTER(state, rosterObj){
      state.playerRoster = rosterObj;
    }
  }



})
