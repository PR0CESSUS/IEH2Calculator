<script setup lang="ts">
import { Game } from "@/Game";
import { HeroKind } from "@/type/HeroKind";

import { inject } from "vue";
import { definePage } from "vue-router/auto";

const game = inject<Game>("game");
definePage({
  meta: {
    name: "Test",
    root: true,
    debug: true,
  },
});

// const inGameData = ref({main1: globalStore});

function parse(event: ClipboardEvent) {
  const text = event.clipboardData.getData("Text");
  const textArray = text.split("\r\n");

  // 44 elementy
  console.log(textArray);
  // inGameData.value = textArray;
  // globalStore.test.main1 = textArray;
}

const testMultipliersList = [...game.data.stats.heroes[game.data.source.currentHero].basicStats, ...game.data.stats.heroes[game.data.source.currentHero].stats];

// function getAllMultipliers(initObject): Multiplier[] {
//   const list = [];

//   function get(object) {
//     for (const [key, value] of Object.entries(object)) {
//       if (typeof value === "object" && value instanceof Multiplier) list.push(value);
//       if (typeof value === "object" && Array.isArray(value)) get(value);
//     }
//   }

//   get(initObject);

//   return list;
// }

// const testMultipliers = getAllMultipliers(game.data.stats.heroes[2]);

console.log("testMultipliersList.length", testMultipliersList.length);
</script>

<template>
  <ul>
    <li>Current Hero: {{ HeroKind[game.data.source.currentHero] }} Lv {{ game.data.source.heroLevel[game.data.source.currentHero] }}</li>
    <li>Super Dungeon: {{ game.data.source.isSuperDungeon }}</li>
  </ul>

  <input type="text" @paste="parse" />
  <hr />

  <table>
    <tr>
      <td>Name</td>
      <td>Calculator</td>
      <td>Game</td>
      <td>Pass</td>
    </tr>
    <tr v-for="test in testMultipliersList">
      <td>{{ test.name }}</td>
      <td>{{ test.ValueString() }}</td>
      <td></td>
      <td>{{}}</td>
    </tr>
  </table>
</template>

<style scoped></style>
../data2 ../Game ../../Game ../Game
