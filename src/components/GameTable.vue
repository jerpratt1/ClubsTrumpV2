<template>
  <div>
    <div v-if="this.$store.state.playerRoster.length > 0">
      <div >Current Round: {{this.$store.state.currentRound}} </div>
      <div>Current Dealer: {{this.$store.state.currentDealer}}</div>
      <div>Cards Out: {{this.$store.state.handOrder[this.$store.state.cardsOutIndex]}} </div>
      <button v-on:click="nextRound">Next Round</button>
    </div>

    <table class="tg" v-if="this.$store.state.playerRoster.length > 0">
      <thead>
        <tr>
          <th class="tg-0lax">Round</th>
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
          <td class="tg-0lax" contenteditable='true'></td>
          <td class="tg-0lax"><input type="text" /></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[1] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[2] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[3] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[4] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[5] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[6] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[7] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[8] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.handOrder[9] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">Total</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
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