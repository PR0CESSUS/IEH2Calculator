<script setup lang="ts">
import { inject } from "vue";
import { Util } from "@util";
import { useGlobalStore } from "@stores/global";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";
import AppInput from "@/components/AppInput.vue";

definePage({
  meta: {
    name: "Guild",
    root: true,
  },
});
const game = inject<Game>("game");
const state = useGlobalStore().guild;

function getTime() {
  if (state.targetLevel - game.data.guild.level > 0 && state.expPerHour > 0) {
    let requiredExpTotal = 0;
    let time = 0;
    let expPerSeconds = (state.expPerHour / 3600) * game.data.source.nitroSpeed;
    for (let level = game.data.guild.level; level < state.targetLevel; level++) requiredExpTotal += game.data.guild.RequiredExp(level);

    time = requiredExpTotal / expPerSeconds;

    return Util.secondsToTime(time);
  } else {
    return "0";
  }
}
</script>

<template>
  <table>
    <tr>
      <td>Nitro Speed</td>
      <td>
        <AppInput v-model.convert="game.data.source.nitroSpeed" :size="12" :precision="1" :max="7.0" :min="1.0" />
      </td>
    </tr>
    <tr>
      <td>Current Level</td>
      <td><AppInput v-model.int="game.data.source.guildLevel" :size="12" /></td>
    </tr>
    <tr>
      <td>Target Level</td>
      <td><AppInput v-model="state.targetLevel" :size="12" :max="500" :precision="0" /></td>
    </tr>
    <tr>
      <td>Guild EXP per hour</td>
      <td>
        <AppInput v-model.convert="state.expPerHour" :size="12" />
      </td>
    </tr>
    <tr>
      <td>Guild Member's Emblem Disasambled</td>
      <td><AppInput v-model="game.data.potion.talismans[0].disassembledNum" :size="12" /> {{ game.data.potion.talismans[0].EffectValueString() }}</td>
    </tr>
    <tr>
      <td>Approximate Time Needed</td>
      <td>{{ getTime() }}</td>
    </tr>
  </table>
</template>
../../Util/index../../stores/global../../Game
