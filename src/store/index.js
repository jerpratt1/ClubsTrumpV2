import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerRoster: {},
    showRosterForm: true,
    showCurrentRound: false,
    showEndRound: false,
    currentRound: 0,
    playerCount:4,
    handOrder: [],
    fourPlayers: [10,9,8,7,6,5,4,3,2,1],
    sixPlayers: [6,7,8,7,6,5,4,3,2,1],
    sevenPlayers: [4,5,6,7,6,5,4,3,2,1],
    calls: {
      player1: [],
      player2: [],
      player3: [],
      player4: [],
      player5: [],
      player6: [],
      player7: [],
    },
    made: {
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

    },
    
    UPDATE_CALLS(state, calls){
      state.calls = calls;
    },
    UPDATE_MADE(state, made){
      state.made = made;
    },
    UPDATE_CURRENT_CARDS_OUT(state, cards){
      state.currentCardsOut = cards;
    },
    TOGGLE_CURRENT_ROUND_FORM(state){
      if(state.showCurrentRound == true){
        state.showCurrentRound = false;
      } else if(state.showCurrentRound == false){
        state.showCurrentRound = true;
      }
    },
    TOGGLE_END_ROUND_FORM(state){
      if(state.showEndRound == true){
        state.showEndRound = false;
      } else if(state.showEndRound == false){
        state.showEndRound = true;
      }
    },

    TOGGLE_ROSTER_FORM(state){
      if(state.showRosterForm == true){
        state.showRosterForm = false;
      } else if(state.showRosterForm == false){
        state.showRosterForm = true;
      }
    },

    SET_HAND_ORDER(state, count){
      state.playerCount = count;
      if(state.playerCount == 4 || state.playerCount == 5){
        state.handOrder = state.fourPlayers;
      } else if (state.playerCount == 6){
        state.handOrder = state.sixPlayers;
      } else if (state.playerCount == 7){
        state.handOrder = state.sevenPlayers;
      }
    },

    UPDATE_SCORES(state){
      if(state.calls.player1[state.currentRound] == state.made.player1[state.currentRound]){
        state.playerRoster.player1.score = state.playerRoster.player1.score + parseInt(state.made.player1[state.currentRound]) + 10;
      } else {
        state.playerRoster.player1.score = state.playerRoster.player1.score + parseInt(state.made.player1[state.currentRound]);
      }

      if(state.calls.player2[state.currentRound] == state.made.player2[state.currentRound]){
        state.playerRoster.player2.score = state.playerRoster.player2.score + parseInt(state.made.player2[state.currentRound]) + 10;
      } else {
        state.playerRoster.player2.score = state.playerRoster.player2.score + parseInt(state.made.player2[state.currentRound]);
      }

      if(state.calls.player3[state.currentRound] == state.made.player3[state.currentRound]){
        state.playerRoster.player3.score = state.playerRoster.player3.score + parseInt(state.made.player3[state.currentRound]) + 10;
      } else {
        state.playerRoster.player3.score = state.playerRoster.player3.score + parseInt(state.made.player3[state.currentRound]);
      }

      if(state.calls.player4[state.currentRound] == state.made.player4[state.currentRound]){
        state.playerRoster.player4.score = state.playerRoster.player4.score + parseInt(state.made.player4[state.currentRound]) + 10;
      } else {
        state.playerRoster.player4.score = state.playerRoster.player4.score + parseInt(state.made.player4[state.currentRound]);
      }

      if(state.calls.player5[state.currentRound] == state.made.player5[state.currentRound]){
        state.playerRoster.player5.score = state.playerRoster.player5.score + parseInt(state.made.player5[state.currentRound]) + 10;
      } else {
        state.playerRoster.player5.score = state.playerRoster.player5.score + parseInt(state.made.player5[state.currentRound]);
      }

      if(state.calls.player6[state.currentRound] == state.made.player6[state.currentRound]){
        state.playerRoster.player6.score = state.playerRoster.player6.score + parseInt(state.made.player6[state.currentRound]) + 10;
      } else {
        state.playerRoster.player6.score = state.playerRoster.player6.score + parseInt(state.made.player6[state.currentRound]);
      }

      if(state.calls.player7[state.currentRound] == state.made.player7[state.currentRound]){
        state.playerRoster.player7.score = state.playerRoster.player7.score + parseInt(state.made.player7[state.currentRound]) + 10;
      } else {
        state.playerRoster.player7.score = state.playerRoster.player7.score + parseInt(state.made.player7[state.currentRound]);
      }
      
      state.currentRound++;
    }


    
    
  }



})
