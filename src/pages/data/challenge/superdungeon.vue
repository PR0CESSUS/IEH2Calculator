<script setup lang="ts">
import { Game } from "@/Game";
import AppInput from "@/components/AppInput.vue";
import { HeroKind } from "@type/HeroKind";
import { inject } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Super Dungeon",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Done</th>
      <th>Modifier</th>
      <th>Effect</th>
    </tr>
    <template v-for="challenge in game.data.challenge.superdungeonList">
      <tr class="heading">
        <td>{{ challenge.NameString() }}</td>
      </tr>
      <tr v-for="(_, index) in 6">
        <td>{{ HeroKind[index] }}</td>
        <td>
          <input type="checkbox" :checked="challenge.IsReceivedRewardClass(index)" @change="challenge.SetReceivedRewardClass(index, ($event.target as HTMLInputElement).checked)" />
        </td>
        <td><AppInput v-model="game.data.source.maxModifierCleareds[index + 10 * challenge.sdId]" /></td>
        <td>{{ challenge.FloorRewardString(index) }}</td>
      </tr>
    </template>
    <tr class="summary">
      <td>Total</td>
      <td></td>
      <td>{{ game.data.sdg.modifierMilestoneCtrl.Total() }}</td>
    </tr>
  </table>
</template>
../../../Game../../../type/HeroKind
