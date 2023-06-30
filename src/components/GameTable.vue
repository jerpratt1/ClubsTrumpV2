<template>
  <div>
    <!-- <div v-if="this.$store.state.playerRoster.length > 0">
      <div >Current Round: {{this.$store.state.currentRound}} </div>
      <div>Current Dealer: {{this.$store.state.currentDealer}}</div>
      <div>Cards Out: {{this.$store.state.handOrder[this.$store.state.cardsOutIndex]}} </div>
      <table class="tg">
        <thead>
          <tr>
            <th class="tg-0lax">Current Round</th>
            <th class="tg-0lax">{{ this.$store.state.playerRoster[0] }}</th>
            <th class="tg-0lax">{{ this.$store.state.playerRoster[1] }}</th>
            <th class="tg-0lax">{{ this.$store.state.playerRoster[2] }}</th>
            <th class="tg-0lax">{{ this.$store.state.playerRoster[3] }}</th>
            <th class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{ this.$store.state.playerRoster[4] }}</th>
            <th class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{ this.$store.state.playerRoster[5] }}</th>
            <th class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{ this.$store.state.playerRoster[6] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[this.$store.state.cardsOutIndex] }}</td>
          <td class="tg-0lax"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player1[0]" ></td>
          <td class="tg-0lax"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player2[0]"></td>
          <td class="tg-0lax"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player3[0]"></td>
          <td class="tg-0lax"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player4[0]"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player5[0]"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player6[0]"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player7[0]"></td>
        </tr>
        </tbody>
      </table>
      <button v-on:click="nextRound">Next Round</button>
    </div>

    <table class="tg" v-if="this.$store.state.playerRoster.length > 0">
      <thead>
        <tr>
          <th class="tg-0lax">Cards Out</th>
          <th class="tg-0lax">{{ this.$store.state.playerRoster[0] }}</th>
          <th class="tg-0lax">{{ this.$store.state.playerRoster[1] }}</th>
          <th class="tg-0lax">{{ this.$store.state.playerRoster[2] }}</th>
          <th class="tg-0lax">{{ this.$store.state.playerRoster[3] }}</th>
          <th class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{ this.$store.state.playerRoster[4] }}</th>
          <th class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{ this.$store.state.playerRoster[5] }}</th>
          <th class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{ this.$store.state.playerRoster[6] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[0] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[0]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[0]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[0]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[0]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[0]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[0]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[0]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[1] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[1]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[1]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[1]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[1]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[1]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[1]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[1]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[2] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[2]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[2]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[2]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[2]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[2]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[2]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[2]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[3] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[3]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[3]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[3]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[3]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[3]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[3]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[3]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[4] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[4]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[4]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[4]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[4]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[4]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[4]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[4]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[5] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[5]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[5]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[5]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[5]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[5]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[5]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[5]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[6] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[6]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[6]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[6]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[6]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[6]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[6]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[6]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[7] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[7]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[7]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[7]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[7]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[7]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[7]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[7]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[8] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[8]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[8]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[8]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[8]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[8]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[8]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[8]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[9] }}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player1[9]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player2[9]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player3[9]}}</td>
          <td class="tg-0lax">{{this.$store.state.rounds.player4[9]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4">{{this.$store.state.rounds.player5[9]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5">{{this.$store.state.rounds.player6[9]}}</td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6">{{this.$store.state.rounds.player7[9]}}</td>
        </tr>
        <tr>
          <td class="tg-0lax">Total</td>
          <td class="tg-0lax">{{p1Total}}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  },

  computed : {
    p1Total(){
      let total = 0;
      this.$store.state.rounds.player1.forEach(element => {
        total = total + element;
      });
      return total;
    }
  },


  methods: {
    nextRound() {
      this.$store.commit("UPDATE_ROUND");
      this.$store.commit("UPDATE_DEALER");
    },
  },
};
</script>

<style scoped>
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-0lax {
  text-align: center;
  vertical-align: top;
}

table{
  margin-left: auto;
  margin-right: auto;
}

input{
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  width: 30px;
  align-content: center;
}

button {
  width: 10%;
  align-self: center;
  margin: 10px;
}
</style>