<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.49",
  },
});
</script>
<template>
  <h2>0.1.49</h2>
  <ul>
    <li>Updated guild time calculation to new format</li>
    <li>Added max and min props to AppInput component</li>
    <li>Changed Enchantments selects to text field with suggestion support</li>
  </ul>
</template>
