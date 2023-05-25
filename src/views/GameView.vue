<template>
<div>
<h1>Game Table</h1>
    <roster-form/>
  <game-table />
  </div>
</template>

<script>
import GameTable from "@/components/GameTable.vue";
import RosterForm from "../components/RosterForm.vue"

export default {
  components: { GameTable,
  RosterForm, },
};
</script>

<style scoped>
</style>