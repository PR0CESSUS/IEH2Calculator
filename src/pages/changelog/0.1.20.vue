<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.20",
  },
});
</script>
<template>
  <h2>Version 0.1.20</h2>
  <ul>
    <li>Added <router-link to="/data/ability">Ability</router-link> to Data page</li>
    <li>Added <router-link to="/data/quest">Quest</router-link> to Data page</li>
  </ul>
</template>
