<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.40",
  },
});
</script>
<template>
  <h2>0.1.40</h2>
  <ul>
    <li>Removed Find MAX DPS button from equipment edit page</li>
    <li>Updated help page with information about <RouterLink to="/help/#findBestEnchantments">Find Best Enchantments</RouterLink> function</li>
    <li>Added to <RouterLink to="/ruby-shard">Ruby Shard</RouterLink> page per hour gains and time required to finish</li>
  </ul>
</template>
