<script setup lang="ts">
import { Game } from "@/Game";
import { inject } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Ascension",
    submenu: false,
  },
});
const game = inject<Game>("game");
</script>

<template>
  <h3>Milestones</h3>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <tr v-for="milestone in game.data.ascension.worldAscensions[0].milestoneList">
      <td>{{ milestone.Name() }}</td>
      <td><input type="text" v-model.lazy="milestone.maxLevelReached" name="milestone.maxLevelReached" size="4" /></td>
      <td>{{ milestone.EffectString() }}</td>
    </tr>
  </table>
  <h3>Upgrades</h3>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <tr v-for="upgrade in game.data.ascension.worldAscensions[0].upgradeList">
      <td>{{ upgrade.Name() }}</td>
      <td><input type="text" v-model.lazy="upgrade.level" name="upgrade.level" size="4" /></td>
      <td>{{ upgrade.EffectString() }}</td>
    </tr>
  </table>
</template>
