<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Hand</th>
          <th v-for="roster in this.$store.state.playerRoster" v-bind:key="roster.id">{{roster}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{this.$store.state.fourPlayers[0]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[1]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[2]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[3]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[4]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[5]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[6]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[7]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[8]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>{{this.$store.state.fourPlayers[9]}}</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
        </tr>
        <tr>
          <th>Total</th>
          <th v-for="player in this.$store.state.rounds" v-bind:key="player.id">{{player}}</th>
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
</style>