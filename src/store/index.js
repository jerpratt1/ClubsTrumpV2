import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerRoster: {},
    showRosterForm: true,
    showCurrentRound: false,
    showEndRound: false,
    showEditScore: false,
    currentRound: 0,
    playerCount:4,
    playerList: [],
    currentDealer: "",
    dealerIndex: 0,
    currentCaller: "",
    callerIndex: 1,
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
      state.calls.player1.push(calls[0]);
      state.calls.player2.push(calls[1]);
      state.calls.player3.push(calls[2]);
      state.calls.player4.push(calls[3]);
      state.calls.player5.push(calls[4]);
      state.calls.player6.push(calls[5]);
      state.calls.player7.push(calls[6]);
    },

    UPDATE_MADE(state, made){
      state.made = made;
    },

    SET_NAMES(state, playerNames){
      state.playerList = playerNames;
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

    TOGGLE_EDIT_SCORE_FORM(state){
      if(state.showEditScore == true){
        state.showEditScore = false;
      } else if(state.showEndRound == false){
        state.showEditScore = true;
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

    UPDATE_DEALER(state){
      if(state.dealerIndex >= state.playerList.length){
        state.dealerIndex = 0;
      }
      state.currentDealer = state.playerList[state.dealerIndex]
      state.dealerIndex++;
      
    },

    UPDATE_CALLER(state){
      if(state.callerIndex >= state.playerList.length){
        state.callerIndex = 0;
      }
      state.currentCaller = state.playerList[state.callerIndex]
      state.callerIndex++;
      
    },

    EDIT_CALL(state, player, round, newCall){
      if(player == "player 1"){
        state.calls.player1[round] == newCall;
      } else if (player == "player 2"){
        state.calls.player2[round] == newCall;
      } else if (player == "player 3"){
        state.calls.player3[round] == newCall;
      } else if (player == "player 4"){
        state.calls.player4[round] == newCall;
      } else if (player == "player 5"){
        state.calls.player5[round] == newCall;
      } else if (player == "player 6"){
        state.calls.player6[round] == newCall;
      } else if (player == "player 7"){
        state.calls.player7[round] == newCall;
      }
    },

    EDIT_MAKE(state, player, round, newMake){
      if(player == "player 1"){
        state.made.player1[round] == newMake;
      } else if (player == "player 2"){
        state.made.player2[round] == newMake;
      } else if (player == "player 3"){
        state.made.player3[round] == newMake;
      } else if (player == "player 4"){
        state.made.player4[round] == newMake;
      } else if (player == "player 5"){
        state.made.player5[round] == newMake;
      } else if (player == "player 6"){
        state.made.player6[round] == newMake;
      } else if (player == "player 7"){
        state.made.player7[round] == newMake;
      }
    },

    RECALCULATE_SCORE(state){

      for (let i = 0; i < 9; i++) {
        if(state.calls.player1[i] == state.made.player1[i]){
          state.playerRoster.player1.score = state.playerRoster.player1.score + parseInt(state.made.player1[i]) + 10;
        } else {
          state.playerRoster.player1.score = state.playerRoster.player1.score + parseInt(state.made.player1[i]);
        }
  
        if(state.calls.player2[i] == state.made.player2[i]){
          state.playerRoster.player2.score = state.playerRoster.player2.score + parseInt(state.made.player2[i]) + 10;
        } else {
          state.playerRoster.player2.score = state.playerRoster.player2.score + parseInt(state.made.player2[i]);
        }
  
        if(state.calls.player3[i] == state.made.player3[i]){
          state.playerRoster.player3.score = state.playerRoster.player3.score + parseInt(state.made.player3[i]) + 10;
        } else {
          state.playerRoster.player3.score = state.playerRoster.player3.score + parseInt(state.made.player3[i]);
        }
  
        if(state.calls.player4[i] == state.made.player4[i]){
          state.playerRoster.player4.score = state.playerRoster.player4.score + parseInt(state.made.player4[i]) + 10;
        } else {
          state.playerRoster.player4.score = state.playerRoster.player4.score + parseInt(state.made.player4[i]);
        }
  
        if(state.calls.player5[i] == state.made.player5[i]){
          state.playerRoster.player5.score = state.playerRoster.player5.score + parseInt(state.made.player5[i]) + 10;
        } else {
          state.playerRoster.player5.score = state.playerRoster.player5.score + parseInt(state.made.player5[i]);
        }
  
        if(state.calls.player6[i] == state.made.player6[i]){
          state.playerRoster.player6.score = state.playerRoster.player6.score + parseInt(state.made.player6[i]) + 10;
        } else {
          state.playerRoster.player6.score = state.playerRoster.player6.score + parseInt(state.made.player6[i]);
        }
  
        if(state.calls.player7[i] == state.made.player7[i]){
          state.playerRoster.player7.score = state.playerRoster.player7.score + parseInt(state.made.player7[i]) + 10;
        } else {
          state.playerRoster.player7.score = state.playerRoster.player7.score + parseInt(state.made.player7[i]);
        }
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
