<script setup lang="ts">
import { inject } from "vue";
import { Util } from "@util";
import { useGlobalStore } from "@stores/global";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Guild",
    root: true,
  },
});
const game = inject<Game>("game");
const state = useGlobalStore().guild;

function getTime() {
  let levelTotal = state.targetLevel - game.data.source.guildLevel;

  if (levelTotal > 0 && state.expPerHour > 0) {
    let requiredExpTotal = 0;
    let time = 0;
    let talismanPassive = 1.0 - game.data.potion.talismans[0].passiveEffectValue;

    for (let i = 0; i < levelTotal; i++) {
      let level = game.data.source.guildLevel + i;
      let requiredExp =
        Math.floor(
          (500.0 * (level + 1) +
            50.0 * Math.pow(level, 2.0) +
            500.0 * Math.pow(level / 5.0, 3.0) +
            2000.0 * Math.pow(level / 10.0, 6.0) +
            25000.0 * Math.pow(level / 20.0, 9.0) +
            300000.0 * Math.pow(level / 30.0, 12.0)) *
            Math.pow(10.0, Math.max(0, level - 300) / 25.0)
        ) * talismanPassive;

      requiredExpTotal += requiredExp;
    }

    let expPerSeconds = (state.expPerHour / 3600) * game.data.source.nitroSpeed;
    time = requiredExpTotal / expPerSeconds;

    return Util.secondsToDhms(time);
  } else {
    return 0;
  }
  //
}

function formatValue(event: Event) {
  state.expPerHour = Util.convertFrom((event.target as HTMLInputElement).value);
}
</script>

<template>
  <table>
    <tr>
      <td>Nitro Speed</td>
      <td>
        <input
          type="text"
          size="12"
          :value="Util.tDigit(game.data.source.nitroSpeed, 1)"
          @change="game.data.source.nitroSpeed = parseFloat(($event.target as HTMLInputElement).value)"
        />
      </td>
    </tr>
    <tr>
      <td>Current Level</td>
      <td><input type="text" size="12" v-model.number="game.data.source.guildLevel" /></td>
    </tr>
    <tr>
      <td>Target Level</td>
      <td><input type="text" size="12" v-model.number="state.targetLevel" /></td>
    </tr>
    <tr>
      <td>Guild EXP per hour</td>
      <td><input type="text" size="12" :value="Util.convertTo(state.expPerHour)" @change="formatValue($event)" /></td>
    </tr>
    <tr>
      <td>Guild Member's Emblem Disasambled</td>
      <td>
        <input type="text" size="12" v-model.number="game.data.potion.talismans[0].disassembledNum" />Reduce Guild EXP requirement to level by
        {{ Util.percent(game.data.potion.talismans[0].passiveEffectValue) }}
      </td>
    </tr>
    <tr>
      <td>Approximate Time Needed</td>
      <td>{{ getTime() }}</td>
    </tr>
  </table>
</template>
../../Util/index../../stores/global../../Game
