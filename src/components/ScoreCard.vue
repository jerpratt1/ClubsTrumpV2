<template>
  <div>
    <h1 v-for="player in roster" v-bind:key = player.id></h1>
  </div>
</template>

<script>
export default {
data() {
    return {
      scoreCard: [],
      roster: []
      ,
    };
  },
}
</script>

<style>

</style>