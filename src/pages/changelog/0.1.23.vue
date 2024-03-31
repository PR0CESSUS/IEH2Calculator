<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.23",
  },
});
</script>
<template>
  <h2>Version 0.1.23</h2>
  <ul>
    <li>Added Hackmanite and Turquoise input to <router-link to="/expedition">Expedition</router-link> for easier comparision</li>
    <li>Added reward per sec (yellow value in front) to expedition breakdown</li>
    <li>Added <router-link to="/help#findMaxDPS">Find MAX DPS</router-link> button to equipment edit window</li>
    <li>Added <router-link to="/data/challenge">Challange</router-link> to Data page</li>
    <li>Added submenu to Data link</li>
    <li>Changed breadcrumb component</li>
    <li>Fixed stats showing as green/red in Stats panel after changing enchanements, pesky rounding!</li>
  </ul>
</template>
