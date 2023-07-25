<template>
  <div v-if="this.$store.state.showEditScore == true">
    <form action="">
        <label for="player">Player: </label>
        <input type="number" v-model="editForm.playerNumber"  min="1" max="7">
        <div>
            <input type="radio" name="choice" value = "call" v-model="editForm.callMake">
            <label for="call">Call </label>
            <br>
            <input type="radio" name="choice" value = "make" v-model="editForm.callMake">
            <label for="make">Make </label>
        </div>
        <label for="round">Round: </label>
        <input type="number" v-model="editForm.roundNumber"  min="0" max="10">
        <label for="new call/make" >New Call / Make: </label>
        <input type="number" v-model="editForm.newCallMake"  min="0" max="10">
    </form>
    <button @click="commitEdit"> update </button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            editForm: {
                playerNumber: 0,
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

            /* this.$store.commit("RECALCULATE_SCORE") */
            this.$store.commit("TOGGLE_EDIT_SCORE_FORM", false);
        }
    }

}
</script>

<style>

</style>