<template>
  <div v-if="this.$store.state.showCurrentRound == true" class = "container">
    <table>
        <thead>
            <tr>
                <th>Current Dealer: <p>{{this.$store.state.currentDealer}}</p></th>
                <th>First To Call: <p>{{this.$store.state.currentCaller}}</p></th>
                <th>Dealer Can't Call: <p>{{dealerLimit}}</p></th>
                
            </tr>
            <tr>
                <th>Current<br>Round</th>
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
     <!-- <button @click="editScore">Edit Score</button> -->
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
            allCalls: [],
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
            if(this.cardsOut != this.$store.state.handOrder[this.$store.state.currentRound]){
                this.allCalls.push(this.call1);
                this.allCalls.push(this.call2);
                this.allCalls.push(this.call3);
                this.allCalls.push(this.call4);
                this.allCalls.push(this.call5);
                this.allCalls.push(this.call6);
                this.allCalls.push(this.call7);
                this.$store.commit("UPDATE_CALLS", this.allCalls);
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
                this.allCalls = [];
            } else {
                window.confirm("Invalid dealer call.")
            }
            
        },

        editScore(){
             this.$store.commit("TOGGLE_EDIT_SCORE_FORM", true);

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
        height: 8rem;
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
        width: 3.5rem;
    }

    button:hover{
        background-color: #2B7A78 ;
    }
</style>