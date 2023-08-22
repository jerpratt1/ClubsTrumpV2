<template>
  <div>
    <roster-form />
    <!-- <edit-score />
    <score-card /> -->
    <test-score />
  </div>
</template>

<script>
import TestScore from '@/components/TestScore.vue';
import RosterForm from '@/components/RosterForm.vue';
/* import ScoreCard from "../components/ScoreCard.vue"; */
/* import CurrentRound from '@/components/CurrentRound.vue'; */
/* import EndRound from '@/components/EndRound.vue'; */
/* import EditScore from '@/components/EditScore.vue'; */

export default {
  components: { 
  /* ScoreCard, */ 
  RosterForm, 
  /* CurrentRound,  */
 /*  EndRound,  */
  /* EditScore, */ 
  TestScore},
};
</script>

<style>
</style>