<template>
  <div class = "container">
    <table>
        <thead>
            <tr>
                <th>Current Dealer:</th>
                <th>Dealer Name Goes Here</th>
            </tr>
            <tr>
                <th >Current Round</th>
                <th >{{ this.$store.state.playerRoster[0] }}</th>
                <th >{{ this.$store.state.playerRoster[1] }}</th>
                <th >{{ this.$store.state.playerRoster[2] }}</th>
                <th >{{ this.$store.state.playerRoster[3] }}</th>
                <th  v-if="this.$store.state.playerRoster.length > 4">{{ this.$store.state.playerRoster[4] }}</th>
                <th  v-if="this.$store.state.playerRoster.length > 5">{{ this.$store.state.playerRoster[5] }}</th>
                <th  v-if="this.$store.state.playerRoster.length > 6">{{ this.$store.state.playerRoster[6] }}</th>
                <th >Cards Out</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td >{{ this.$store.state.handOrder[this.$store.state.cardsOutIndex] }}</td>
                <td ><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player1[0]" ></td>
                <td ><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player2[0]"></td>
                <td ><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player3[0]"></td>
                <td ><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player4[0]"></td>
                <td  v-if="this.$store.state.playerRoster.length > 4"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player5[0]"></td>
                <td  v-if="this.$store.state.playerRoster.length > 5"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player6[0]"></td>
                <td  v-if="this.$store.state.playerRoster.length > 6"><input type="number" min="0" max="10" v-model="this.$store.state.rounds.player7[0]"></td>
                <td>{{cardsOut}}</td>
            </tr>
         </tbody>
     </table>
    </div>
</template>

<script>
export default {
    data(){
        return {


        }
    },

    computed: {
        cardsOut(){
            let total = this.$store.state.rounds.player1[0] + this.$store.state.rounds.player2[0] + this.$store.state.rounds.player3[0] +this.$store.state.rounds.player4[0] + this.$store.state.rounds.player5[0] + this.$store.state.rounds.player6[0] + this.$store.state.rounds.player7[0] + 1
           return total;
        }

    }

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