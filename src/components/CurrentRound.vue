<template>
  <div v-if="this.$store.state.showCurrentRound == true" class = "container">
    <table>
        <thead>
            <tr>
                <th>Current Dealer:</th>
                <th>{{this.$store.state.currentDealer}}</th>
                <th></th>
                <th>Dealer Can't Call:</th>
                <th>{{dealerLimit}}</th>
            </tr>
            <tr>
                <th>Current Round</th>
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
        },

        dealerLimit(){
            let limit = this.$store.state.handOrder[this.$store.state.currentRound] - this.cardsOut;

            return limit;
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
            this.call1 = 0;
            this.call2 = 0;
            this.call3 = 0;
            this.call4 = 0;
            this.call5 = 0;
            this.call6 = 0;
            this.call7 = 0;
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
        padding: 2%;
        background: #2B7A78;
        border-radius: 5px;
        max-width: 90%;
        margin: auto;
    }
    
    input{
        width: 20%;
        min-width: 15px;
        text-align: center;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    button{
        margin: 1%;
        padding: 10px;
    }
</style>