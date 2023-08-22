<template>
  <div v-if="this.$store.state.showEditScore == true">
    <form v-on:submit.prevent="editForm">
        <label for="player">Player: </label>
        <select name="player" id="player" required v-model="editForm.player">
            <option value="1">{{this.$store.state.playerRoster.player1.name}}</option>
            <option value="2">{{this.$store.state.playerRoster.player2.name}}</option>
            <option value="3">{{this.$store.state.playerRoster.player3.name}}</option>
            <option value="4">{{this.$store.state.playerRoster.player4.name}}</option>
            <option v-show="this.$store.state.playerRoster.player5.name != ''" value="5">{{this.$store.state.playerRoster.player5.name}}</option>
            <option v-show="this.$store.state.playerRoster.player6.name != ''" value="6">{{this.$store.state.playerRoster.player6.name}}</option>
            <option v-show="this.$store.state.playerRoster.player7.name != ''" value="7">{{this.$store.state.playerRoster.player7.name}}</option>
        </select>
        <label for="call-make">Call or Make: </label>
        <select name="call-make" id="call-make" v-model="editForm.callMake">
            <option value="call">Call</option>
            <option value="make">Make</option>
        </select>
        <label for="round">Round: </label>
        <input type="number" v-model="editForm.roundNumber"  min="0" max="10">
        <label for="new call/make" >New Call / Make: </label>
        <input type="number" v-model="editForm.newCallMake"  min="0" max="10">
        <button @click="commitEdit"> update </button>
    </form>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            editForm: {
                player: 0,
                roundNumber: 0,
                newCallMake: 0,
                callMake: "", 
                }
            }
        },
    
    methods: {
        commitEdit(){
            if(this.callMake == "call"){
                this.$store.commit("EDIT_CALL", this.editForm)
            } else if (this.callMake == "make"){
                this.$store.commit("EDIT_MAKE", this.editForm)
            }

            this.$store.commit("RECALCULATE_SCORE");
            this.$store.commit("TOGGLE_EDIT_SCORE_FORM", false);
        }
    }

}
</script>

<style>

</style>