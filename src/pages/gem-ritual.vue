<script setup lang="ts">
import { Game } from "@/Game";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import AppInput from "@components/AppInput.vue";
import MultiplierInformation from "@components/MultiplierInformation.vue";
import { Util } from "@util";
import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Gem Ritual",
    root: true,
  },
});
const game = inject<Game>("game");
const targetLevel = ref(game.data.sdg.sdGemRitualCtrl.sdGemList.map((ritual) => ritual.level));
</script>

<template>
  <div>
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
        <td>Ritualizing</td>
        <td><AppInput v-model="game.data.guild.superAbilityList[GuildSuperAbilityKind.Ritualizing].level" /></td>
      </tr>
      <tr>
        <td>Racing</td>
        <td><AppInput v-model="game.data.guild.superAbilityList[GuildSuperAbilityKind.Racing].level" /></td>
      </tr>
      <tr>
        <td>Nitro Sink</td>
        <td>{{ Util.secondsToDhms(game.data.nitro.ModifiedOfflineTimesec(), false) }}</td>
      </tr>
      <tr>
        <td colspan="2">
          <MultiplierInformation :multiplier="`nitro.nitroCap`" :inline="true" :key="game.data.guild.superAbilityList[GuildSuperAbilityKind.Racing].level" />
        </td>
      </tr>
    </table>
  </div>
  <table>
    <tr>
      <th>Name</th>
      <th>Mother Gem</th>
      <th>Level</th>
      <th>Target</th>
      <th>Time to target level</th>
      <th>Approximate Time Needed (Nitro Sink used)</th>
    </tr>
    <tr v-for="(ritual, index) in game.data.sdg.sdGemRitualCtrl.sdGemList">
      <td>{{ ritual.NameString() }}:</td>
      <td><AppInput v-model="ritual.motherStoneAssigned" /></td>
      <td>
        <input type="text" size="6" v-model.lazy.number="ritual.level" name="ritual.level" />
      </td>
      <td><AppInput v-model="targetLevel[index]" /></td>

      <td>
        {{ Util.secondsToTime(ritual.TimeLeftToLevelTotal(targetLevel[index])) }}
      </td>
      <td>{{ ritual.ApproximateTimeNeeded(targetLevel[index]) }}</td>
    </tr>
  </table>
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
  width: 900px;
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
../../Game../../Util/index../../stores/global ../Game../Util/index../stores/global
