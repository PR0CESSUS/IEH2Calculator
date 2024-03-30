<script setup lang="ts">
import { computed, inject } from "vue";
import { Util } from "@util";
import { Localization } from "@localization/index";
import { useGlobalStore } from "@stores/global";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";
import AppInput from "@/components/AppInput.vue";

definePage({
  meta: {
    name: "Ruby Shard",
    root: true,
  },
});
const game = inject<Game>("game");

const state = useGlobalStore().rubyShard;

function runsNum() {
  let runs = 0;
  while (game.data.source.SDAutoLeaveAndRetryTargetEntryCost > Math.pow(2, runs)) runs++;
  return runs;
}

function costPerTicket() {
  // console.log(this.custom);
  let runs = runsNum();
  let cost = 0;
  for (let index = 0; index < runs; index++) {
    cost += Math.pow(2, index) * 5;
  }

  return cost;
}

function getShardsGain() {
  let SUM = 0;
  // const modifier = JSON.parse(this.custom.modifier);

  for (let index = 1; index < Math.floor(state.floor / 10) + 1; index++) {
    let floor = index * 10;
    let gain = (floor / 10 + state.modifier) * (1 + state.dungeon);
    // console.log(gain, index + this.custom.modifier);
    SUM += gain;
  }
  return SUM;
}

function totalRubyShards() {
  const total = runsNum() * 5 * state.ticket * getShardsGain();
  return total - (total * state.failure) / 100;
}

const timeNeeded = computed(() => (totalRuns.value * state.time) / game.data.source.nitroSpeed);

const totalRuns = computed(() => runsNum() * 5 * state.ticket);

const perHour = computed(() => (3600 / state.time) * getShardsGain() * game.data.source.nitroSpeed);

const convertCost = game.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.Value();
</script>

<template>
  Dungeon:
  <select v-model.number.lazy="state.dungeon">
    <option v-for="(_, index) in 5" :selected="state.dungeon == index" :value="index">{{ Localization.SDName(index) }}</option>
  </select>

  Modifier:
  <input type="text" size="8" v-model.number.lazy="state.modifier" /> Floors Cleared: <input type="text" size="8" v-model.number.lazy="state.floor" />
  <table>
    <tr>
      <td>Failure Rate %</td>
      <td><input type="text" size="8" v-model.number.lazy="state.failure" /> (Total Ruby Shards = Total Ruby Shards - Total Ruby Shards * failure rate)</td>
    </tr>
    <tr>
      <td>Tickets</td>
      <td><input type="text" size="8" v-model.number.lazy="state.ticket" /></td>
    </tr>
    <tr>
      <td>Time to finish dungeons (seconds)</td>
      <td><input type="text" size="8" v-model.number.lazy="state.time" /></td>
    </tr>
    <tr>
      <td>Nitro Speed</td>
      <td><AppInput v-model.convert="game.data.source.nitroSpeed" :precision="1" /></td>
    </tr>
    <tr>
      <td>Reset Value</td>
      <td><input type="text" size="8" v-model.number.lazy="game.data.source.SDAutoLeaveAndRetryTargetEntryCost" /></td>
    </tr>
    <tr>
      <td>Portal Orb Cost</td>
      <td>{{ Util.convertTo(costPerTicket() * state.ticket) }}</td>
    </tr>
    <tr>
      <td>Runs</td>
      <td>{{ runsNum() * 5 * state.ticket }}</td>
    </tr>
    <tr>
      <td>Ruby Shard per Dungeon</td>
      <td>{{ getShardsGain() }}</td>
    </tr>
    <tr>
      <td>Total Ruby Shards</td>
      <td>{{ Util.convertTo(totalRubyShards(), 3) }}</td>
    </tr>
    <tr>
      <td>Ruby Converter</td>
      <td>{{ Util.convertTo(convertCost) }}</td>
    </tr>
    <tr>
      <td>Ruby Shard per Hour</td>
      <td>{{ Util.tDigit(perHour) }}</td>
    </tr>
    <tr>
      <td>Total time needed</td>
      <td>{{ Util.secondsToDhms(timeNeeded) }}</td>
    </tr>
    <tr>
      <td>Total Ruby</td>
      <td>{{ Math.floor(totalRubyShards() / convertCost) }}</td>
    </tr>
  </table>
  <hr />
</template>
../../Util/index../../localization/index../../stores/global../../Game
