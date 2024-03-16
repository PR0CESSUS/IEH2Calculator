<script setup lang="ts">
import { Game } from "@/Game";
import AppInput from "@/components/AppInput.vue";
import { useGlobalStore } from "@/stores/global";

import { inject } from "vue";
import { definePage } from "vue-router/auto";
const globalStore = useGlobalStore();
const game = inject<Game>("game");
definePage({
  meta: {
    name: "Test",
    root: true,
  },
});

// const inGameData = ref({main1: globalStore});

function parse(event: ClipboardEvent) {
  const text = event.clipboardData.getData("Text");
  const textArray = text.split("\r\n");

  // 44 elementy
  console.log(textArray);
  // inGameData.value = textArray;
  globalStore.test.main1 = textArray;
}
</script>

<template>
  Playgroung
  <input type="text" @paste="parse" />

  <table>
    <tr>
      <td>Name</td>
      <td>Game</td>
      <td>Calcualtor</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>HP</td>
      <td><AppInput v-model="globalStore.test.main1[2]" :size="12" /></td>
      <td>{{ game.data.stats.currentHero.basicStats[0].ValueString() }}</td>
      <td>{{}}</td>
    </tr>
  </table>
  game.data.source.isSuperDungeon: {{ game.data.source.isSuperDungeon }}
</template>

<style scoped></style>
../data2 ../Game ../../Game ../Game
