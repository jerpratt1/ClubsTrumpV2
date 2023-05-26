<template>
  <div>
    <h2>4-7 Players</h2>
    <h2>Standard 52 Card Deck Required</h2>
    <h2><a href="/rules" target="_blank">Rules</a></h2>
    <form
      action="#"
      class="roster"
      v-on:submit.prevent="createRoster"
      v-if="!this.$store.state.playerRoster.length"
    >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      roster: [],
    };
  },

  methods: {
    createRoster() {
      this.$store.commit("SET_ROSTER", this.roster);
      this.roster = [];
      this.$store.commit("SET_CURRENT_DEALER");
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
</style>