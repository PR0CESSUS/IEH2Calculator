<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.31",
  },
});
</script>
<template>
  <h2>0.1.31</h2>
  <ul>
    <li>Added <RouterLink to="/data/achievement">Achievement</RouterLink> page</li>
    <li>Added exclamation mark to changelog if calculator was updated</li>
  </ul>
</template>
