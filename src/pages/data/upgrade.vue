<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";
import AppInput from "@/components/AppInput.vue";

definePage({
  meta: {
    name: "Upgrade",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <tr v-for="upgrade in game.data.upgrade.slimebankUpgradeList">
      <td>{{ upgrade.Name() }}</td>
      <td>
        <AppInput v-model="upgrade.level.value" :size="21" />
      </td>
      <td>{{ upgrade.Description() }} {{ upgrade.EffectString() }}</td>
    </tr>
    <tr v-for="upgrade in game.data.upgrade.generalUpgradeList">
      <td>{{ upgrade.Name() }}</td>
      <td>
        <AppInput v-model="upgrade.level.value" :size="21" />
      </td>
      <td>{{ upgrade.Description() }} {{ upgrade.EffectString() }}</td>
    </tr>
  </table>
</template>
../../../Game../../../Util/index
