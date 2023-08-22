<template>
  <div>
    <div id="head" class="header row">
        <div> Players </div> <div v-for="player in this.$store.state.playerRoster" v-bind:key = "player.id"> {{player.name}} </div>
    </div>
    <div id="round1" class="play row">
        <div>{{this.$store.state.handOrder[0]}}</div>
        <div v-for="call in this.$store.state.calls" v-bind:key = "call.id">{{call[0]}}</div>
        <div v-for="make in this.$store.state.made" v-bind:key = "make.id">{{make[0]}}</div>
    </div>
    <div id="round2" class="play row">
        <div>{{this.$store.state.handOrder[1]}}</div>
    </div>
    <div id="round3" class="play row">
        <div>{{this.$store.state.handOrder[2]}}</div>
    </div>
    <div id="round4" class="play row">
        <div>{{this.$store.state.handOrder[3]}}</div>
    </div>
    <div id="round5" class="play row">
        <div>{{this.$store.state.handOrder[4]}}</div>
    </div>
    <div id="round6" class="pla row">
        <div>{{this.$store.state.handOrder[5]}}</div>
    </div>
    <div id="round7" class="play row">
        <div>{{this.$store.state.handOrder[6]}}</div>
    </div>
    <div id="round8" class="play row">
        <div>{{this.$store.state.handOrder[7]}}</div>
    </div>
    <div id="round9" class="play row">
        <div>{{this.$store.state.handOrder[8]}}</div>
    </div>
    <div id="round10" class="play row">
        <div>{{this.$store.state.handOrder[9]}}</div>
    </div>
    <div id="foot" class="header row">
        <div>Total</div> <div v-for="player in this.$store.state.playerRoster" v-bind:key = "player.id"> {{player.score}} </div>
    </div>



  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.row{
    display: flex;
}

</style>