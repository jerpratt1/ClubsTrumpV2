<template>
  <div>
    <h1>Game Table</h1>

    <form action="#" class="roster" v-on:submit.prevent="createRoster" v-if="!this.$store.state.playerRoster.length">
      <div>
        <label for="#">Player 1</label>
        <input type="text" v-model="roster[0]" required />
      </div>
      <div>
        <label for="#">Player 2</label>
        <input type="text" v-model="roster[1]" required />
      </div>
      <div>
        <label for="#">Player 3</label>
        <input type="text" v-model="roster[2]" required />
      </div>
      <div>
        <label for="#">Player 4</label>
        <input type="text" v-model="roster[3]" required />
      </div>
      <div>
        <label for="#">Player 5</label>
        <input type="text" v-model="roster[4]" />
      </div>
      <div>
        <label for="#">Player 6</label>
        <input type="text" v-model="roster[5]" />
      </div>
      <div>
        <label for="#">Player 7</label>
        <input type="text" v-model="roster[6]" />
      </div>
      <button type="submit">Start Game</button>
    </form>
    <table class="tg">
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
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[0] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[1] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[2] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[3] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[4] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[5] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[6] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[7] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[8] }}</td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 4"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 5"></td>
          <td class="tg-0lax" v-if="this.$store.state.playerRoster.length > 6"></td>
        </tr>
        <tr>
          <td class="tg-0lax">{{ this.$store.state.fourPlayers[9] }}</td>
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
  data() {
    return {
      roster: [
      ],
    };
  },

  methods: {
    createRoster() {
      this.$store.commit("SET_ROSTER", this.roster);
      this.roster = [];
    },
  },
};
</script>

<style scoped>
.roster {
  display: flex;
  flex-direction: column;
}

input {
  width: 10%;
  align-self: center;
  text-align: start;
}

label {
  margin: 10px;
}

button {
  width: 10%;
  align-self: center;
  margin: 10px;
}

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
  text-align: left;
  vertical-align: top;
}
</style>