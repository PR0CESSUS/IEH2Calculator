<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Ruby Shop",
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
    <tr v-for="upgrade in game.data.sdg.shopCtrl.itemStatBonusList">
      <td>{{ upgrade.NameString() }}:</td>
      <td>
        <input type="text" size="8" v-model.lazy.number="upgrade.purchasedNum" name="upgrade.purchasedNum" />
      </td>
      <td>{{ upgrade.EffectValueString() }}</td>
    </tr>
  </table>
</template>
../../../Game
