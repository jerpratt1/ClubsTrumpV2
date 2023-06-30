<template>
  <div v-if="showForm == true" class = "container">
    <table>
        <thead>
            <tr>
                <th>Current Dealer:</th>
                <th>Dealer Name Goes Here</th>
            </tr>
            <tr>
                <th >Round Over</th>
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
                <td >{{ this.$store.state.fourPlayers[currentRound]}}</td>
                <td ><input type="checkbox" v-model="made1" ></td>
                <td ><input type="checkbox" v-model="made2"></td>
                <td ><input type="checkbox" v-model="made3"></td>
                <td ><input type="checkbox" v-model="made4"></td>
                <td  v-if="this.$store.state.playerRoster.player5.name != ''"><input type="checkbox" v-model="made5"></td>
                <td  v-if="this.$store.state.playerRoster.player6.name != ''"><input type="checkbox" v-model="made6"></td>
                <td  v-if="this.$store.state.playerRoster.player7.name != ''"><input type="checkbox" v-model="made7"></td>
                <td>{{this.$store.state.currentCardsOut}}</td>
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
            made1: false,
            made2: false,
            made3: false,
            made4: false,
            made5: false,
            made6: false,
            made7: false,
            showForm: true,
        }
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
            /* this.showForm = false; */
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