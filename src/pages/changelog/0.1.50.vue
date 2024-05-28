<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.50",
  },
});
</script>
<template>
  <h2>0.1.50</h2>
  <ul>
    <li>Fixed guild level input accepting non integer numbers. Thanks to @hyperjoe24</li>
    <li>Added Critical Damage After enchantement to default selected in enchantment optimizer</li>
  </ul>
</template>
