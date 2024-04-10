<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.45",
  },
});
</script>
<template>
  <h2>0.1.45</h2>
  <ul>
    <li>Fixed SPD After wrong number type (Thanks to @lucifer71)</li>
    <li>Added <RouterLink to="/data/guild">Guild Abilities</RouterLink></li>
  </ul>
</template>
