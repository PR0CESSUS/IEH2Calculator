<script setup lang="ts">
import { Game } from "@/Game";
import { useClipboardStore } from "@/stores/clipboard";
import { useDebugStore } from "@/stores/debug";
import { CopyKind } from "@/type/CopyKind";
import { HeroKind } from "@/type/HeroKind";
import { Stats } from "@/type/Stats";

import { inject, ref } from "vue";
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
const debug = useDebugStore();
const clipboard = useClipboardStore();
function parse(event: ClipboardEvent) {
  const text = event.clipboardData.getData("Text");
  const textArray = text.split("\r\n");

  // 44 elementy
  console.log(textArray);
  // inGameData.value = textArray;
  // globalStore.test.main1 = textArray;
  clipboardData.value = textArray;
}

const testMultipliersList = [
  game.data.equipment.effectMultiplier,
  game.data.monster.petPassiveEffectMultiplier,
  ...game.data.stats.heroes[game.data.source.currentHero].basicStats,
  ...game.data.stats.heroes[game.data.source.currentHero].elementDamages,
  ...game.data.stats.heroes[game.data.source.currentHero].monsterDamages,
  game.data.stats.heroes[game.data.source.currentHero].extraAfterDamage,
  game.data.blessingInfo.effectMultipliers[game.data.source.currentHero],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.CriticalDamage],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.PhysCritChance],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.WardedFury],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.ArmoredFury],

  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.ExpGain],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.SkillProficiencyGain],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.EquipmentProficiencyGain],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.ArtifactProficiencyGain],
  game.data.stats.heroes[game.data.source.currentHero].stats[Stats.TamingPointGain],
  game.data.stats.heroes[game.data.source.currentHero].loyaltyPoingGain,
  game.data.battle.superDungeonCtrl.damageMultiplier,
  game.data.battle.superDungeonCtrl.wardedFury,
  game.data.battle.superDungeonCtrl.armoredFury,
  game.data.battle.superDungeonCtrl.sdChallengeBossDamageMultiplier,
];

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

const clipboardData = ref(["5.89e20%", "4.22e20%", "2.81e21%", "4.22e20%", "4.22e200/0", "4.22e20%", "208.2B%", "177.0BO/0", "3.17e17%", "1.85e17%", "1.65e16%", "3297.119%"]);

console.log("testMultipliersList.length", testMultipliersList.length);

function copy(data) {
  clipboard.type = CopyKind.Debug;
  clipboard.data = removeArtifact(data);
}

function paste(event) {
  // console.log(event.target.value);

  if (clipboard.type != CopyKind.Debug) return;

  event.target.value = clipboard.data;
  debug.data[event.target.dataset.id] = clipboard.data;
  clipboard.type = CopyKind.Nothing;
  clipboard.data = null;
  // console.log(event.clipboardData.getData("Text"));
}

function removeArtifact(string: string) {
  let output = string;
  output = output.replace("%", "");
  output = output.replace("+", "");
  output = output.replace("0/0", "");
  output = output.replace("O/0", "");
  output = output.replace("0/O", "");
  output = output.replace("/", "");
  output = output.replace(".000", ".00");

  return output;
}

function compare(a: string, b: any) {
  return a == removeArtifact(b);
}
</script>

<template>
  <ul>
    <li>Current Hero: {{ HeroKind[game.data.source.currentHero] }} Lv {{ game.data.source.heroLevel[game.data.source.currentHero] }}</li>
    <li>Super Dungeon: {{ game.data.source.isSuperDungeon }}</li>
    <li>Blessings: {{ game.data.source.isBlessing }}</li>
  </ul>
  OCR Paste Field:
  <input type="text" @paste="parse" /><br />
  OCR Result:
  <div style="display: flex">
    <div v-for="element in clipboardData" class="element" @click="copy(element)">
      {{ element }}
    </div>
  </div>
  <hr />

  <table>
    <tr>
      <td>Name</td>
      <td>Calculator</td>
      <td>Game</td>
      <td>Status</td>
    </tr>
    <tr v-for="(test, index) in testMultipliersList">
      <td>{{ test.name }}</td>
      <td @click="test.PrintModifiers(0)">{{ test.ValueString() }}</td>
      <td>
        <input
          type="text"
          @click.left="paste"
          :value="debug.data[index]"
          :data-id="index"
          @change="debug.data[index] = removeArtifact(($event.target as HTMLInputElement).value)"
        />
      </td>
      <td :class="{ green: compare(debug.data[index], test.ValueString()), red: !compare(debug.data[index], test.ValueString()) }">
        {{ compare(debug.data[index], test.ValueString()) ? "PASS" : "FAIL" }}
      </td>
    </tr>
  </table>
</template>

<style scoped>
.element {
  background-color: #636363;
  border: 1px solid #000;
  border-radius: 3px;
}
</style>
../data2 ../Game ../../Game ../Game
