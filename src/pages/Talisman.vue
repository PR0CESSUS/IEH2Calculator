<script setup lang="ts">
import { inject } from "vue";
import { Util } from "../Util/index";
import { Localization } from "../localization/index";
import { useGlobalStore } from "../stores/global";
import { Game } from "../Game";

const game = inject<Game>("game");

const state = useGlobalStore().talisman;

function cost(talisman) {
  return talisman.level == 50 ? 0 : talisman.Cost(talisman.level + 1);
}

function bestTalisman() {
  let bestTalisman = "";
  let bestEfficiency = 0;
  for (let index = 0; index < game.data.potion.talismans.length; index++) {
    const talisman = game.data.potion.talismans[index];
    const fragments = talisman.talismanDisassembleFragmentNumPerLevel * talisman.level * state.perWA[index];
    const cost = talisman.level == 50 ? 0 : talisman.Cost(talisman.level + 1);
    const efficiency = cost ? fragments / cost : 0;

    if (bestEfficiency < efficiency) {
      bestEfficiency = efficiency;
      bestTalisman = Localization.PotionName(talisman.kind);
    }
  }
  return bestTalisman;
}

function totalFragments() {
  let totalFragments = 0;
  for (let index = 0; index < game.data.potion.talismans.length; index++) {
    const talisman = game.data.potion.talismans[index];
    const fragments = talisman.talismanDisassembleFragmentNumPerLevel * talisman.level * state.perWA[index];
    totalFragments += fragments;
  }
  return Util.tDigit(totalFragments);
}

function efficiency(talisman, index) {
  const fragments = (talisman.talismanDisassembleFragmentNumPerLevel * talisman.level * state.perWA[index]) | 0;
  const cost = talisman.level == 50 ? 0 : talisman.Cost(talisman.level + 1);
  const efficiency = cost ? fragments / cost : 0;
  return Util.tDigit(efficiency, 5);
}

efficiency(game.data.potion.talismans[5], 5);
</script>

<template>
  <table>
    <tr>
      <th>Talisman</th>
      <th>Level</th>
      <th>Cost</th>
      <th>Fragments</th>
      <th>Per WA</th>
      <th>frag / cost</th>
    </tr>
    <!-- for (let index = 0; index < globalThis.data.potion.talismans.length; index++) {


      const efficiency = cost ? fragments / cost : 0;

      totalFragments += fragments; -->
    <tr v-for="(talisman, index) in game.data.potion.talismans">
      <td>{{ Localization.PotionName(talisman.kind) }}</td>
      <td><input v-model.number="talisman.level" size="4" /></td>
      <td style="padding-right: 10px" :class="talisman.level == 50 ? 'orange' : ''">{{ talisman.level == 50 ? "MAX" : Util.tDigit(cost(talisman)) }}</td>
      <td>{{ talisman.talismanDisassembleFragmentNumPerLevel * talisman.level * state.perWA[index] }}</td>
      <td><input v-model="state.perWA[index]" size="6" /></td>
      <td>{{ efficiency(talisman, index) }}</td>
    </tr>
  </table>
  <hr />
  <p>
    Most efficient talisman to level up: <span class="green">{{ bestTalisman() }}</span>
  </p>
  <p>
    Total talisman fragments per WA: <span class="green">{{ totalFragments() }}</span>
  </p>
</template>
