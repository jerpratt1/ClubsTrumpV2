<template>
  <div>
    <roster-form />
    <current-round />
    <score-card />
  </div>
</template>

<script>
import RosterForm from '@/components/RosterForm.vue';
import ScoreCard from "../components/ScoreCard.vue";
import CurrentRound from '@/components/CurrentRound.vue';
export default {
  components: { ScoreCard, RosterForm, CurrentRound },
};
</script>

<style>
</style>