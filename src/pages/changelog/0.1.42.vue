<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.42",
  },
});
</script>
<template>
  <h2>0.1.42</h2>
  <ul>
    <li>Updated DPS calulation to match current game version 1.3.1.6</li>
    <li>Updated new HP values for enemies</li>
    <li>Added Decrease available class skill slots modifier</li>
    <li>Fixed wrong number of skill being counted while in SD mode</li>
  </ul>
</template>
