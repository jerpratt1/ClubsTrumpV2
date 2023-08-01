<template>
  <div>
    <!-- <h2>4-7 Players</h2>
    <h2>Standard 52 Card Deck Required</h2> -->
    <!-- <h2><a href="https://beautiful-valkyrie-8c898a.netlify.app/rules" target="_blank">Rules</a></h2> -->
    <form
      action="#"
      class="roster"
      v-on:submit.prevent="createRoster"
      v-if="this.$store.state.showRosterForm == true"
    >
      <div>
        <label for="#">*Player 1</label>
        <input type="text" v-model="roster.player1.name" required />
      </div>
      <div>
        <label for="#">*Player 2</label>
        <input type="text" v-model="roster.player2.name" required />
      </div>
      <div>
        <label for="#">*Player 3</label>
        <input type="text" v-model="roster.player3.name" required />
      </div>
      <div>
        <label for="#">*Player 4</label>
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
      <p>*required</p>
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
          score: 0,
        },
        player2: {
          name: "",
          score: 0,
        },
        player3: {
          name: "",
          score: 0,
        },
        player4: {
          name: "",
          score: 0,
        },
        player5: {
          name: "",
          score: 0,
        },
        player6: {
          name: "",
          score: 0,
        },
        player7: {
          name: "",
          score: 0,
        }
      },
      playerCount: 4,
      playerNames: [],
    };
  },

  methods: {
    createRoster() {
      this.countPlayers();
      this.listPlayers();
      this.$store.commit("SET_NAMES", this.playerNames);
      this.$store.commit("SET_HAND_ORDER", this.playerCount);
      this.$store.commit("SET_ROSTER", this.roster);
      this.$store.commit("UPDATE_DEALER");
      this.$store.commit("UPDATE_CALLER");
      this.roster = {};
      this.showRosterForm = false;
      this.$store.commit("TOGGLE_ROSTER_FORM", false);
      this.$store.commit("TOGGLE_CURRENT_ROUND_FORM", true);
    },

    countPlayers(){
      if(this.roster.player5.name != ""){
        this.playerCount++;
      }

      if(this.roster.player6.name != ""){
        this.playerCount++;
      }

      if(this.roster.player7.name != ""){
        this.playerCount++;
      }
    },

    listPlayers(){
      this.playerNames.push(this.roster.player1.name);
      this.playerNames.push(this.roster.player2.name);
      this.playerNames.push(this.roster.player3.name);
      this.playerNames.push(this.roster.player4.name);

      if(this.roster.player5.name != ""){
        this.playerNames.push(this.roster.player5.name);
      }

      if(this.roster.player6.name != ""){
        this.playerNames.push(this.roster.player6.name);
      }

      if(this.roster.player7.name != ""){
        this.playerNames.push(this.roster.player7.name);
      }
    }
  },
};
</script>

<style scoped>
.roster {
  display: flex;
  flex-direction: column;
}

.required {
  color: red;
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

button:hover{
  background-color: #2B7A78 ;
}
</style>