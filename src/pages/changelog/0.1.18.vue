<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.18",
  },
});
</script>
<template>
  <h2>Version 0.1.18</h2>
  <ul>
    <li>Some changes to skill breakdown layout plus added percentage comparison from snapshot</li>
    <li>Extended <router-link to="/data/super-dungeon/upgrade">Super Dungeon Upgrade</router-link> to all upgrades</li>
  </ul>
</template>
