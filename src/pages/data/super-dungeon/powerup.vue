<script setup lang="ts">
import { computed, inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Powerup",
  },
});
const game = inject<Game>("game");
const totalTopaz = computed(() => {
  let total = 0;
  game.data.sdg.upgradeCtrl.automationList.forEach((upgrade) => {
    total += upgrade.TotalCost();
  });

  game.data.battle.superDungeonCtrl.powerupList.forEach((powerup) => {
    total += powerup.TotalRankCost();
  });
  return total;
});
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Rank</th>
      <th>Purchased</th>
      <th>Level</th>
      <th>Topaz</th>
      <th>Passive Effect</th>
    </tr>
    <tr v-for="powerup in game.data.battle.superDungeonCtrl.powerupList">
      <td>{{ powerup.NameString() }}:</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="powerup.rank" name="powerup.rank" />
      </td>

      <td>
        <input type="text" size="10" v-model.lazy.number="powerup.purchasedNum" name="powerup.purchasedNum" />
      </td>
      <td>
        <input type="text" size="6" v-model.lazy.number="powerup.level" name="powerup.level" />
      </td>
      <td>{{ powerup.TotalRankCost() }}</td>
      <td>{{ powerup.EffectValueString() }}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{{ totalTopaz }}</td>
    </tr>
  </table>
</template>
../../../Game
