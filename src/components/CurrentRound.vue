<template>
  <div v-if="this.$store.state.showCurrentRound == true" class = "container">
    <table>
        <thead>
            <tr>
                <th>Current Dealer:</th>
                <th>Dealer Name Goes Here</th>
            </tr>
            <tr>
                <th >Current Round</th>
                <th >{{ this.$store.state.playerRoster.player1.name }}</th>
                <th >{{ this.$store.state.playerRoster.player2.name }}</th>
                <th >{{ this.$store.state.playerRoster.player3.name }}</th>
                <th >{{ this.$store.state.playerRoster.player4.name }}</th>
                <th  v-if="this.$store.state.playerRoster.player5.name != ''">{{ this.$store.state.playerRoster.player5.name }}</th>
                <th  v-if="this.$store.state.playerRoster.player6.name != ''">{{ this.$store.state.playerRoster.player6.name }}</th>
                <th  v-if="this.$store.state.playerRoster.player7.name != ''">{{ this.$store.state.playerRoster.player7.name }}</th>
                <th >Cards Out</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td >{{this.$store.state.handOrder[this.$store.state.currentRound]}}</td>
                <td ><input type="number" min="0" max="10" v-model="call1" ></td>
                <td ><input type="number" min="0" max="10" v-model="call2"></td>
                <td ><input type="number" min="0" max="10" v-model="call3"></td>
                <td ><input type="number" min="0" max="10" v-model="call4"></td>
                <td  v-if="this.$store.state.playerRoster.player5.name != ''"><input type="number" min="0" max="10" v-model="call5"></td>
                <td  v-if="this.$store.state.playerRoster.player6.name != ''"><input type="number" min="0" max="10" v-model="call6"></td>
                <td  v-if="this.$store.state.playerRoster.player7.name != ''"><input type="number" min="0" max="10" v-model="call7"></td>
                <td>{{cardsOut}}</td>
            </tr>
         </tbody>
     </table>
     <br/>
     <button @click="startRound">Start</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentRound: 0,
            calls: {
                player1: [],
                player2: [],
                player3: [],
                player4: [],
                player5: [],
                player6: [],
                player7: [],
            },
            call1: 0,
            call2: 0,
            call3: 0,
            call4: 0,
            call5: 0,
            call6: 0,
            call7: 0,
            showForm: true,
        }
    },

    computed: {
        cardsOut(){
            let total = parseInt(this.call1) + parseInt(this.call2) + parseInt(this.call3) + 
            parseInt(this.call4) + parseInt(this.call5) + parseInt(this.call6) + parseInt(this.call7);
           return total;
        }

    },

    methods: {
        startRound(){
            this.calls.player1.push(this.call1);
            this.calls.player2.push(this.call2);
            this.calls.player3.push(this.call3);
            this.calls.player4.push(this.call4);
            this.calls.player5.push(this.call5);
            this.calls.player6.push(this.call6);
            this.calls.player7.push(this.call7);
            this.$store.commit("UPDATE_CALLS", this.calls);
            this.$store.commit("UPDATE_CURRENT_CARDS_OUT", this.cardsOut);
            this.$store.commit("TOGGLE_CURRENT_ROUND_FORM", false);
            this.$store.commit("TOGGLE_END_ROUND_FORM", true);
            this.currentRound = this.currentRound + 1;

        }
    },

}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 3px solid green;
    }
</style>