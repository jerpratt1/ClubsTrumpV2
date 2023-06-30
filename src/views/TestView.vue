<template>
  <div>
    <roster-form />
    <current-round />
    <end-round />
    <score-card />
  </div>
</template>

<script>
import RosterForm from '@/components/RosterForm.vue';
import ScoreCard from "../components/ScoreCard.vue";
import CurrentRound from '@/components/CurrentRound.vue';
import EndRound from '@/components/EndRound.vue';
export default {
  components: { ScoreCard, RosterForm, CurrentRound, EndRound },
};
</script>

<style>
</style>