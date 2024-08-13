<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Bestiary",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Rank</th>
      <th>Loyalty</th>
      <th>Loyalty</th>
      <th>Effect</th>
    </tr>
    <tr v-for="monster in game.data.monster.globalInfoList">
      <td>{{ monster.MonsterName() }}</td>
      <td><input type="text" size="6" v-model.lazy.number="monster.pet.level" name="monster.pet.level" /></td>
      <td><input type="text" size="6" v-model.lazy.number="monster.pet.rank" name="monster.pet.rank" /></td>
      <td><input type="text" size="6" v-model.lazy.number="monster.pet.loyalty" name="monster.pet.loyalty" /></td>
      <td><input type="text" size="6" v-model.lazy.number="monster.pet.monsterPetTamingPoints" name="monster.pet.tpg" /></td>
      <td>{{ monster.pet.PassiveEffectString() }}</td>
    </tr>
    <tr class="summary">
      <td>Total:</td>
      <td></td>
      <td>{{ game.data.monster.TotalPetRank() }}</td>
    </tr>
  </table>
</template>
../../../Game
