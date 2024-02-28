<script setup lang="ts">
import { inject } from "vue";
import { DATA } from "../../Data";
import { HeroKind } from "../../type/HeroKind";

// import { ref, inject } from 'vue'
// import { data } from '../data'
// console.log('import data');
const data = inject("data") as DATA;

// const data2 = data;
</script>

<template>
  <table>
    <tr>
      <th>Hero</th>
      <th>Status</th>
    </tr>
    <tr v-for="(status, index) in data.source.isActiveBattle">
      <td>{{ HeroKind[index] }}:</td>
      <td>{{ status ? (data.source.currentHero == index ? "active" : "passive") : "inactive" }}</td>
    </tr>
  </table>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
../data2
