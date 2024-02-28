<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../Game";
import { Util } from "../Util/index";
import MultiplierInformation from "../components/MultiplierInformation.vue";
const game = inject<Game>("game");

// console.log(game.data.source.expeditionPetIsSet);
// console.log(game.data.source.expeditionPetSpecies);
// console.log(game.data.source.expeditionPetColors);
// :key="index + 'a' + expedition.timeId"
</script>

<template>
  <h1>Expedition</h1>
  <div>
    <MultiplierInformation name="Expedition Slots" :multiplier="`expedition.unlockedExpeditionSlotNum`" :inline="true" />
    Expedition Minimum time: {{ Util.secondsToDhms(game.data.expedition.lowerLimitTime.Value()) }}
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
}
.button-right {
  background: url(/img/buttonright.png);
  background-size: contain;
  border-style: none;
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
