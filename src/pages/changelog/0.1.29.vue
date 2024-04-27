<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.29",
  },
});
</script>
<template>
  <h2>0.1.29</h2>
  <ul>
    <li>Revamped <RouterLink to="/data/challenge">Challange</RouterLink> page</li>
    <li>Added new global quests</li>
    <li>Added overcap bonuses to pets</li>
    <li>Changed area mission milestone EXP Gain and Equipment Proficiency Gain to multiplier instead of addition</li>
    <li>Changed from additive to multiplicative for Skill Proficiency Gain from pet effect, slime bank upgrade and skill master title</li>
    <li>Some changes to skill system to reflect Alpha version</li>
  </ul>
</template>
