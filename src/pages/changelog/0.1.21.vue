<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.21",
  },
});
</script>
<template>
  <h2>Version 0.1.21</h2>
  <ul>
    <li>Added <router-link to="/data/town">Town</router-link> to Data page</li>
  </ul>
</template>
