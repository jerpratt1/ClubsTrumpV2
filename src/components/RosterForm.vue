<template>
  <div>
    <h2>4-7 Players</h2>
    <h2>Standard 52 Card Deck Required</h2>
    <h2><a href="/rules" target="_blank">Rules</a></h2>
    <form
      action="#"
      class="roster"
      v-on:submit.prevent="createRoster"
      v-if="showRosterForm == true"
    >
      <div>
        <label for="#">Player 1</label>
        <input type="text" v-model="roster.player1.name" required />
      </div>
      <div>
        <label for="#">Player 2</label>
        <input type="text" v-model="roster.player2.name" required />
      </div>
      <div>
        <label for="#">Player 3</label>
        <input type="text" v-model="roster.player3.name" required />
      </div>
      <div>
        <label for="#">Player 4</label>
        <input type="text" v-model="roster.player4.name" required />
      </div>
      <div>
        <label for="#">Player 5</label>
        <input type="text" v-model="roster.player5.name" />
      </div>
      <div>
        <label for="#">Player 6</label>
        <input type="text" v-model="roster.player6.name" />
      </div>
      <div>
        <label for="#">Player 7</label>
        <input type="text" v-model="roster.player7.name" />
      </div>
      <button type="submit">Start Game</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roster: {
        player1: {
          name: "",
          call: 0,
          score: 0,
        },
        player2: {
          name: "",
          call: 0,
          score: 0,
        },
        player3: {
          name: "",
          call: 0,
          score: 0,
        },
        player4: {
          name: "",
          call: 0,
          score: 0,
        },
        player5: {
          name: "",
          call: 0,
          score: 0,
        },
        player6: {
          name: "",
          call: 0,
          score: 0,
        },
        player7: {
          name: "",
          call: 0,
          score: 0,
        }
      },
      
      showRosterForm: true,
    };
  },

  methods: {
    createRoster() {
      this.$store.commit("SET_ROSTER", this.roster);
      this.roster = {};
      this.$store.commit("SET_CURRENT_DEALER");
      this.showRosterForm = false;
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