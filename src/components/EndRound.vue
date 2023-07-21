<template>
  <div v-if="this.$store.state.showEndRound == true" class = "container">
    <table>
        <thead>
            <tr>
                <th>Current Dealer: <p>{{this.$store.state.currentDealer}}</p></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Account: <p>{{totalMade}}</p></th>
                
                
            </tr>
            <tr>
                <th >Round <br> Over</th>
                <th >{{ this.$store.state.playerRoster.player1.name }}</th>
                <th >{{ this.$store.state.playerRoster.player2.name }}</th>
                <th >{{ this.$store.state.playerRoster.player3.name }}</th>
                <th >{{ this.$store.state.playerRoster.player4.name }}</th>
                <th  v-if="this.$store.state.playerRoster.player5.name != ''">{{ this.$store.state.playerRoster.player5.name }}</th>
                <th  v-if="this.$store.state.playerRoster.player6.name != ''">{{ this.$store.state.playerRoster.player6.name }}</th>
                <th  v-if="this.$store.state.playerRoster.player7.name != ''">{{ this.$store.state.playerRoster.player7.name }}</th>
                <th >Over/<br>Under</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td >{{this.$store.state.handOrder[this.$store.state.currentRound]}}</td>
                <td ><input type="number" min="0" max="10" v-model="made1" ></td>
                <td ><input type="number" min="0" max="10" v-model="made2"></td>
                <td ><input type="number" min="0" max="10" v-model="made3"></td>
                <td ><input type="number" min="0" max="10" v-model="made4"></td>
                <td  v-if="this.$store.state.playerRoster.player5.name != ''"><input type="number" min="0" max="10" v-model="made5"></td>
                <td  v-if="this.$store.state.playerRoster.player6.name != ''"><input type="number" min="0" max="10" v-model="made6"></td>
                <td  v-if="this.$store.state.playerRoster.player7.name != ''"><input type="number" min="0" max="10" v-model="made7"></td>
                <td>{{this.$store.state.currentCardsOut - this.$store.state.handOrder[this.$store.state.currentRound]}}</td>
            </tr>
         </tbody>
     </table>
     <br/>
     <button @click="endRound">End</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentRound: 0,
            made: {
                player1: [],
                player2: [],
                player3: [],
                player4: [],
                player5: [],
                player6: [],
                player7: [],
            },
            made1: 0,
            made2: 0,
            made3: 0,
            made4: 0,
            made5: 0,
            made6: 0,
            made7: 0,
        }
    },

    computed: {
        totalMade(){
            let total = parseInt(this.made1) + parseInt(this.made2) + parseInt(this.made3) + 
            parseInt(this.made4) + parseInt(this.made5) + parseInt(this.made6) + parseInt(this.made7);
           return total;
        },
    },

    methods: {
        endRound(){
            this.made.player1.push(this.made1);
            this.made.player2.push(this.made2);
            this.made.player3.push(this.made3);
            this.made.player4.push(this.made4);
            this.made.player5.push(this.made5);
            this.made.player6.push(this.made6);
            this.made.player7.push(this.made7);
            this.$store.commit("UPDATE_MADE", this.made);
            this.$store.commit("UPDATE_SCORES")
            this.$store.commit("UPDATE_DEALER");
            this.$store.commit("UPDATE_CALLER");
            this.$store.commit("TOGGLE_CURRENT_ROUND_FORM", false);
            this.$store.commit("TOGGLE_END_ROUND_FORM", true);
            this.made1 = 0;
            this.made2 = 0;
            this.made3 = 0;
            this.made4 = 0;
            this.made5 = 0;
            this.made6 = 0;
            this.made7 = 0;
        },
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
    button{
        margin: 1%;
        padding: 10px;
        width: 3.5rem;
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
</style>