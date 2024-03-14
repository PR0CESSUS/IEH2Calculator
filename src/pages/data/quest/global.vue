<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Global",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Global Quest</th>
      <th>Completed</th>
    </tr>
    <tr v-for="quest in game.data.quest.globalQuests">
      <td>{{ quest.NameString() }}</td>
      <td><input type="checkbox" v-model="quest.isCleared" /></td>
    </tr>
  </table>
</template>
../../../Game
