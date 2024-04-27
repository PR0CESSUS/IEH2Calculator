<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.28",
  },
});
</script>
<template>
  <div>
    <h2>Version 0.1.28</h2>
    <ul>
      <li>Added process for generating changelog files before build so version number won't be increased on failed build</li>
      <li>Added new expedition times</li>
      <li>Added Dojo</li>
      <li>Added overcap bonuses to Town buildings</li>
      <li>Changed Extra After Damage cap</li>
    </ul>
  </div>
</template>
