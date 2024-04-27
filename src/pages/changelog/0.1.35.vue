<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.35",
  },
});
</script>
<template>
  <h2>0.1.35</h2>
  <ul>
    <li>Added inputs for level for each class in Equipment Edit</li>
    <li>Added button for adding forge effect to every item in loadout in Equipment Breakdown popup <button class="blue small" title="Equipment Breakdown">&#9776;</button></li>
    <li>Added button Clear Loadout in Equipment Breakdown popup</li>
    <li>Added <RouterLink to="/data/ascension">Ascension</RouterLink> page</li>
  </ul>
</template>
