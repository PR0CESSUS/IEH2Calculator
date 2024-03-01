<script setup lang="ts">
import { inject, computed } from "vue";
import { Game } from "../Game";
import { Util } from "../Util/index";
import MultiplierInformation from "../components/MultiplierInformation.vue";
import { useGlobalStore } from "../stores/global";
const game = inject<Game>("game");
const globalStore = useGlobalStore();
const expPerSec = game.data.expedition.expeditions.reduce((accumulator, currentValue) => accumulator + currentValue.GetExpeditionExp(), 0);
function ModifiedOfflineTimesec(nitro) {
  let num = 0.0;
  for (let index = 1; index < 10; ++index) {
    if (nitro >= index * 86400) {
      num += 86400.0 / index;
    } else {
      num += (nitro - 86400 * (index - 1)) / index;
      break;
    }
  }
  return num;
}

const nitroSinkTime = ModifiedOfflineTimesec(game.data.nitro.nitroCap.Value());
const nitroSinkExp = nitroSinkTime * expPerSec;
const expPerPlaytime = computed(() => {
  return expPerSec * globalStore.expedition.playtime * 3600;
});
</script>

<template>
  <h1>Expedition</h1>
  <div style="display: flex">
    <div>
      <MultiplierInformation name="Expedition Slots" :multiplier="`expedition.unlockedExpeditionSlotNum`" :inline="true" />
      Expedition Minimum time: {{ Util.secondsToDhms(game.data.expedition.lowerLimitTime.Value()) }}<br />
      Total EXP per second: {{ Util.tDigit(expPerSec) }}<br />
      Time per Nitro Sink: {{ Util.secondsToDhms(nitroSinkTime, false) }}<br />
    </div>
    <div style="margin-left: 10px">
      <MultiplierInformation name="Max Nitro" :multiplier="`nitro.nitroCap`" :inline="true" />
      Playtime in day (hours): <input type="text" size="4" v-model.lazy.number="globalStore.expedition.playtime" /><br />

      EXP per day: {{ Util.tDigit(expPerPlaytime) }}<br />
      EXP per Nitro Sink: {{ Util.tDigit(nitroSinkExp) }}<br />
      Total EXP per day: {{ Util.tDigit(expPerPlaytime + nitroSinkExp * 5) }}
    </div>
  </div>

  <template v-for="(expedition, index) in game.data.expedition.expeditions">
    <div class="expedition" v-if="index < game.data.expedition.unlockedExpeditionSlotNum.Value()">
      <div>
        Team {{ index + 1 }} &lt; <span class="green">Lv {{ expedition.TotalLevel() }}</span> &gt; <span class="orange">Rank {{ expedition.TotalRank() }}</span>
      </div>
      <div style="text-align: right">
        <select v-model.number="expedition.kind">
          <option value="0">Manufacturing Bricks Lv {{ game.data.expedition.globalInfoList[0].level }}</option>
          <option value="1">Logging Trees Lv {{ game.data.expedition.globalInfoList[1].level }}</option>
          <option value="2">Gathering Shards Lv {{ game.data.expedition.globalInfoList[2].level }}</option>
          <option value="3">Capturing Monsters Lv {{ game.data.expedition.globalInfoList[3].level }}</option>
          <option value="4">Training Equipment Lv {{ game.data.expedition.globalInfoList[4].level }}</option>
          <option value="5">Field Training Lv {{ game.data.expedition.globalInfoList[5].level }}</option>
          <option value="6">Marathon Race Lv {{ game.data.expedition.globalInfoList[6].level }}</option>
        </select>
      </div>
      <div>
        {{ expedition.globalInfo.RewardString(expedition, expedition.pets[0].pet, expedition.timeHour) }} <br />
        {{ expedition.globalInfo.RewardString(expedition, expedition.pets[1].pet, expedition.timeHour) }} <br />
        {{ expedition.globalInfo.RewardString(expedition, expedition.pets[2].pet, expedition.timeHour) }}
      </div>
      <div>
        <span class="green">Speed {{ Util.tDigit(expedition.TimeSpeed()) }}</span
        >&nbsp;&nbsp;&nbsp;&nbsp;

        <button class="button-left" @click="expedition.timeId--">&nbsp;</button>
        <span style="width: 50px; display: inline-block; text-align: center"
          >{{ expedition.timeHour >= 8760 ? expedition.timeHour / 8760 : expedition.timeHour }} {{ expedition.timeHour >= 8760 ? "y" : "h" }}</span
        >
        <button class="button-right" @click="expedition.timeId++">&nbsp;</button>
        Time to finish: {{ Util.secondsToDhms(expedition.RequiredTimesec()) }}<br />
        Most effective: {{ expedition.MostEffective() }}
      </div>
    </div>
  </template>
</template>
<style scoped>
.button-left {
  background: url(/img/buttonleft.png);
  background-size: contain;
  border-style: none;
  background-repeat: no-repeat;
  background-position: center;
}
.button-right {
  background: url(/img/buttonright.png);
  background-size: contain;
  border-style: none;
  background-repeat: no-repeat;
  background-position: center;
}
.expedition {
  padding-top: 7px;
  padding-right: 5px;
  padding-left: 7px;
  width: 700px;
  background: linear-gradient(#005984, #003852);
  margin: 3px 0px;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;

  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
}
</style>
