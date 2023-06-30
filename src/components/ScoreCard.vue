<template>
  <div>
    <table>
      <thead>
        <tr id="names">
          <th>Names</th>
          <th>{{this.$store.state.playerRoster.player1.name}}</th>
          <th>{{this.$store.state.playerRoster.player2.name}}</th>
          <th>{{this.$store.state.playerRoster.player3.name}}</th>
          <th>{{this.$store.state.playerRoster.player4.name}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.playerRoster.player5.name}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.playerRoster.player6.name}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.playerRoster.player7.name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr id="first-hand">
          <th>{{this.$store.state.fourPlayers[0]}}</th>
          <th>{{this.$store.state.calls.player1[0]}}</th>
          <th>{{this.$store.state.calls.player2[0]}}</th>
          <th>{{this.$store.state.calls.player3[0]}}</th>
          <th>{{this.$store.state.calls.player4[0]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[0]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[0]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[0]}}</th>
        </tr>
        <tr id="second-hand">
          <th>{{this.$store.state.fourPlayers[1]}}</th>
          <th>{{this.$store.state.calls.player1[1]}}</th>
          <th>{{this.$store.state.calls.player2[1]}}</th>
          <th>{{this.$store.state.calls.player3[1]}}</th>
          <th>{{this.$store.state.calls.player4[1]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[1]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[1]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[1]}}</th>
        </tr>
        <tr id="third-hand">
          <th>{{this.$store.state.fourPlayers[2]}}</th>
          <th>{{this.$store.state.calls.player1[2]}}</th>
          <th>{{this.$store.state.calls.player2[2]}}</th>
          <th>{{this.$store.state.calls.player3[2]}}</th>
          <th>{{this.$store.state.calls.player4[2]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[2]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[2]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[2]}}</th>
        </tr>
        <tr id="fourth-hand">
          <th>{{this.$store.state.fourPlayers[3]}}</th>
          <th>{{this.$store.state.calls.player1[3]}}</th>
          <th>{{this.$store.state.calls.player2[3]}}</th>
          <th>{{this.$store.state.calls.player3[3]}}</th>
          <th>{{this.$store.state.calls.player4[3]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[3]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[3]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[3]}}</th>
        </tr>
        <tr id="fifth-hand">
          <th>{{this.$store.state.fourPlayers[4]}}</th>
          <th>{{this.$store.state.calls.player1[4]}}</th>
          <th>{{this.$store.state.calls.player2[4]}}</th>
          <th>{{this.$store.state.calls.player3[4]}}</th>
          <th>{{this.$store.state.calls.player4[4]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[4]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[4]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[4]}}</th>
        </tr>
        <tr id="sixth-hand">
          <th>{{this.$store.state.fourPlayers[5]}}</th>
          <th>{{this.$store.state.calls.player1[5]}}</th>
          <th>{{this.$store.state.calls.player2[5]}}</th>
          <th>{{this.$store.state.calls.player3[5]}}</th>
          <th>{{this.$store.state.calls.player4[5]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[5]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[5]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[5]}}</th>
        </tr>
        <tr id="seventh-hand">
          <th>{{this.$store.state.fourPlayers[6]}}</th>
          <th>{{this.$store.state.calls.player1[6]}}</th>
          <th>{{this.$store.state.calls.player2[6]}}</th>
          <th>{{this.$store.state.calls.player3[6]}}</th>
          <th>{{this.$store.state.calls.player4[6]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[6]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[6]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[6]}}</th>
        </tr>
        <tr id="eighth-hand">
          <th>{{this.$store.state.fourPlayers[7]}}</th>
          <th>{{this.$store.state.calls.player1[7]}}</th>
          <th>{{this.$store.state.calls.player2[7]}}</th>
          <th>{{this.$store.state.calls.player3[7]}}</th>
          <th>{{this.$store.state.calls.player4[7]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[7]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[7]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[7]}}</th>
        </tr>
        <tr id="ninth-hand">
          <th>{{this.$store.state.fourPlayers[8]}}</th>
          <th>{{this.$store.state.calls.player1[8]}}</th>
          <th>{{this.$store.state.calls.player2[8]}}</th>
          <th>{{this.$store.state.calls.player3[8]}}</th>
          <th>{{this.$store.state.calls.player4[8]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[8]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[8]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[8]}}</th>
        </tr>
        <tr id="tenth-hand">
          <th>{{this.$store.state.fourPlayers[9]}}</th>
          <th>{{this.$store.state.calls.player1[9]}}</th>
          <th>{{this.$store.state.calls.player2[9]}}</th>
          <th>{{this.$store.state.calls.player3[9]}}</th>
          <th>{{this.$store.state.calls.player4[9]}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.calls.player5[9]}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.calls.player6[9]}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.calls.player7[9]}}</th>
        </tr>
        <tr id="total">
          <th>Total</th>
          <th>{{this.$store.state.playerRoster.player1.score}}</th>
          <th>{{this.$store.state.playerRoster.player2.score}}</th>
          <th>{{this.$store.state.playerRoster.player3.score}}</th>
          <th>{{this.$store.state.playerRoster.player4.score}}</th>
          <th v-if="this.$store.state.playerRoster.player5.name != ''">{{this.$store.state.playerRoster.player5.score}}</th>
          <th v-if="this.$store.state.playerRoster.player6.name != ''">{{this.$store.state.playerRoster.player6.score}}</th>
          <th v-if="this.$store.state.playerRoster.player7.name != ''">{{this.$store.state.playerRoster.player7.score}}</th>
        </tr>
      </tbody>
        
    </table>
  </div>
</template>

<script>
export default {
data() {
    return {
      scoreCard: [],
    };
  },
}
</script>

<style scoped>
th{
  width: 10%;
  border: 3px solid gray;
}

table{
  margin-left: auto;
  margin-right: auto;
}

#total{
background: lightseagreen;
}

#names{
  background: lightseagreen;
}

.fell{
  background: lightcoral;
}

.made{
  background: lightgreen;
}
</style>