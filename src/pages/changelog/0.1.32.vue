<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.32",
  },
});
</script>
<template>
  <h2>0.1.32</h2>
  <ul>
    <li>Added <RouterLink to="/data/skill">Skill</RouterLink> page</li>
    <li>Added new skill passives</li>
  </ul>
</template>
