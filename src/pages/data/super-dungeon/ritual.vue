<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Ritual",
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
    <tr v-for="ritual in game.data.sdg.sdGemRitualCtrl.sdGemList">
      <td>{{ ritual.NameString() }}:</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="ritual.level" name="ritual.level" />
      </td>
      <td>{{ ritual.EffectValueString() }}</td>
    </tr>
  </table>
</template>
../../../Game
