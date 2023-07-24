<template>
  <div v-if="this.$store.state.showEditScore == true">
    <form action="">
        <label for="player">Player: </label>
        <input type="number" v-model="editForm.playerNumber">
        <div>
            <input type="radio" name="choice" value = "call" v-model="editForm.call">
            <label for="call">Call </label>
            <br>
            <input type="radio" name="choice" value = "call" v-model="editForm.make">
            <label for="make">Make </label>
        </div>
        <label for="round">Round: </label>
        <input type="number" v-model="editForm.roundNumber">
        <label for="new call/make" >New Call / Make: </label>
        <input type="number" v-model="editForm.newCallMake">
    </form>
    <button> update </button>
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
                call: false,
                make: false,
            }

        }
        }



}
</script>

<style>

</style>