import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerRoster: [],
    handOrder: [],
    fourPlayers: [10,9,8,7,6,5,4,3,2,1],
    sixPlayers: [6,7,8,7,6,5,4,3,2,1],
    sevenPlayers: [4,5,6,7,6,5,4,3,2,1],
    currentRound: 1,
    currentDealer: "",
    currentDealerIndex: 0,
    cardsOutIndex: 0,
    rounds: {
      player1: [],
      player2: [],
      player3: [],
      player4: [],
      player5: [],
      player6: [],
      player7: [],
    },
    
  },

  mutations: {
    SET_ROSTER(state, rosterObj){
      state.playerRoster = rosterObj;
      if(rosterObj.length == 4 || rosterObj.length == 5){
        state.handOrder = state.fourPlayers;
      } else if (rosterObj.length == 6){
        state.handOrder = state.sixPlayers;
      } else if (rosterObj.length == 7){
        state.handOrder = state.sevenPlayers;
      }
    },
    SET_CURRENT_DEALER(state){
      state.currentDealer = state.playerRoster[state.currentDealerIndex]
    },
    UPDATE_ROUND(state){
      if(state.currentRound <= 10){
        state.currentRound = state.currentRound + 1;
      state.cardsOutIndex = state.cardsOutIndex + 1;

      }
    },
    UPDATE_DEALER(state){
      if(state.currentDealerIndex < state.playerRoster.length - 1 && state.currentRound <= 10){
              state.currentDealerIndex = state.currentDealerIndex +1;
                          state.currentDealer = state.playerRoster[state.currentDealerIndex]

      } else if ( state.currentDealerIndex == state.playerRoster.length - 1 && state.currentRound <= 10) {
      state.currentDealerIndex = 0;
            state.currentDealer = state.playerRoster[state.currentDealerIndex]
      } else if (state.currentRound > 10) {
        state.currentDealer = "GAME OVER";
        state.currentRound = "GAME OVER"

      }
    }
  }



})
