<script setup lang="ts">
import { inject, onMounted } from "vue";
import { Game } from "../Game";
import { useGlobalStore } from "../stores/global";
import MultiplierInformation from "./MultiplierInformation.vue";
import TabItem from "./TabItem.vue";
import TabPanel from "./TabPanel.vue";
const game = inject<Game>("game");
const globalStore = useGlobalStore();

onMounted(() => {
  game.data.Update();
});
</script>

<template>
  <div class="panel">
    <TabPanel
      :selected-index="globalStore.heroStatsTabSelected"
      @tab-change="
        (tab) => {
          globalStore.heroStatsTabSelected = tab;
        }
      "
    >
      <TabItem title="Main">
        <template v-if="globalStore.heroStatsTabSelected == 0">
          <h3>Main Stats</h3>
          <div class="block">
            <MultiplierInformation v-for="(_, index) in game.data.stats.currentHero.basicStats" :multiplier="`stats.currentHero.basicStats[${index}]`" />
            <MultiplierInformation :multiplier="`stats.currentHero.stats[10]`" />
            <MultiplierInformation :multiplier="'stats.currentHero.stats[9]'" />
            <MultiplierInformation :multiplier="'stats.currentHero.optionEffectChance[0]'" />
            <MultiplierInformation :multiplier="'stats.currentHero.optionEffectChance[1]'" />
            <MultiplierInformation :multiplier="'stats.currentHero.optionEffectChance[2]'" />
            <MultiplierInformation :multiplier="'equipment.effectMultiplier'" />
            <MultiplierInformation :multiplier="'potion.effectMultiplier'" />
          </div>
          <div class="block">
            <MultiplierInformation :multiplier="'stats.currentHero.hpRegenerate'" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="'stats.currentHero.mpRegenerate'" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="`blessingInfo.effectMultipliers[${game.data.source.currentHero}]`" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.damageMultiplier'" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.damageCutMultiplier'" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.sdChallengeBossDamageMultiplier'" />

            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.sdChallengeBossDamageCutMultiplier'" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.armoredFury'" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.wardedFury'" />
          </div>
        </template>
      </TabItem>

      <TabItem title="Attack">
        <template v-if="globalStore.heroStatsTabSelected == 1">
          <h3>Attack Stats</h3>
          <div class="block">
            <MultiplierInformation v-for="(_, index) in game.data.stats.currentHero.elementDamages" :multiplier="`stats.currentHero.elementDamages[${index}]`" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[15]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[16]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[6]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[7]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[8]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.extraAfterDamage'" /></div
        ></template>
      </TabItem>
      <TabItem title="Defense"
        ><template v-if="globalStore.heroStatsTabSelected == 2">
          <h3>Defense Stats</h3>
          <div class="block">
            <MultiplierInformation v-for="index in 5" :multiplier="`stats.currentHero.stats[${index - 1}]`" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[5]'" />
            <MultiplierInformation v-for="(_, index) in game.data.stats.currentHero.elementAbsoptions" :multiplier="`stats.currentHero.elementAbsoptions[${index}]`" /></div
        ></template>
        <div class="block">
          <MultiplierInformation v-for="(_, index) in game.data.stats.currentHero.elementInvalids" :multiplier="`stats.currentHero.elementInvalids[${index}]`" />
        </div>
      </TabItem>
      <TabItem title="Gains"
        ><template v-if="globalStore.heroStatsTabSelected == 3">
          <h3>Gain Stats</h3>
          <div class="block">
            <MultiplierInformation :multiplier="'stats.currentHero.stats[14]'" />
            <MultiplierInformation :multiplier="'stats.globalStats[0]'" />
            <MultiplierInformation :multiplier="'stats.globalStats[1]'" value-suffix="/ kill" />
            <MultiplierInformation :multiplier="'stats.globalStats[2]'" value-suffix="/ kill" />
            <MultiplierInformation :multiplier="'stats.globalStats[3]'" value-suffix="/ kill" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[11]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[12]'" />
            <MultiplierInformation :multiplier="'stats.currentHero.guildExpGain'" />
            <!-- <MultiplierInformation :multiplier="`town.townMaterialGainMultiplier[${data.source.currentHero}]`" name="Town Material Gain" /> -->
            <MultiplierInformation :multiplier="`area.townMaterialDungeonRewardMultiplier`" />
            <MultiplierInformation :multiplier="'alchemy.alchemyPointGainMultiplier'" />
            <MultiplierInformation :multiplier="'alchemy.catalyst.essenceProductionMultiplier'" />
            <MultiplierInformation :multiplier="'superStats.currentHero.fameGain'" />
            <MultiplierInformation :multiplier="'sdg.dungeonCoinGain'" />
          </div>
          <div class="block">
            <MultiplierInformation :multiplier="'stats.currentHero.stats[21]'" />
            <MultiplierInformation :multiplier="'town.researchPower[0]'" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="'town.researchPower[1]'" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="'town.researchPower[2]'" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="'rebirth.currentHero[0].rebirthPointGainFactor'" />
            <MultiplierInformation :multiplier="'rebirth.currentHero[1].rebirthPointGainFactor'" />
            <MultiplierInformation :multiplier="'rebirth.currentHero[2].rebirthPointGainFactor'" />
            <MultiplierInformation :multiplier="'expedition.expGainMultiplier'" />
            <MultiplierInformation :multiplier="'expedition.speedMultiplier'" />
            <MultiplierInformation :multiplier="'expedition.rewardMultiplier'" />
            <MultiplierInformation :multiplier="'expedition.passiveEffectMultiplier'" />
            <MultiplierInformation :multiplier="'expedition.petExpGainMultiplier'" />
          </div>
        </template>
      </TabItem>
      <TabItem title="Skills"
        ><template v-if="globalStore.heroStatsTabSelected == 4">
          <h3>Skills</h3>
          <div class="block">
            <MultiplierInformation :multiplier="`skill.skillCastSpeedModifier[${game.data.source.currentHero}]`" />
            <MultiplierInformation v-for="(_, index) in game.data.skill.skillLevelBonus" :multiplier="`skill.skillLevelBonus[${index}]`" />

            <MultiplierInformation v-for="(_, index) in game.data.skill.skillRangeMultiplier" :multiplier="`skill.skillRangeMultiplier[${index}]`" />
          </div>
          <div class="block">
            <MultiplierInformation v-for="(_, index) in game.data.skill.skillEffectRangeMultiplier" :multiplier="`skill.skillEffectRangeMultiplier[${index}]`" /></div
        ></template>
      </TabItem>
      <TabItem title="Bestiary"
        ><template v-if="globalStore.heroStatsTabSelected == 5">
          <h3>Bestiary Stats</h3>
          <div class="block">
            <MultiplierInformation :multiplier="`monster.doubleCaptureChance[${game.data.source.currentHero}]`" />

            <MultiplierInformation :multiplier="`monster.captureTripleChance[${game.data.source.currentHero}]`" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[13]'" />
            <MultiplierInformation :multiplier="'stats.currentHero.petExpGainPerDefeat'" />

            <MultiplierInformation :multiplier="'stats.currentHero.loyaltyPoingGain'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[17]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[18]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[19]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[20]'" />

            <MultiplierInformation :multiplier="'monster.petPassiveEffectMultiplier'" /></div
        ></template>
      </TabItem>
      <TabItem title="Regions"
        ><template v-if="globalStore.heroStatsTabSelected == 6">
          <h3>Region Stats</h3>
          <div class="block">
            <template v-for="(_, index) in game.data.stats.currentHero.monsterDamages">
              <MultiplierInformation :multiplier="`stats.currentHero.monsterDamages[${index}]`" v-if="index != 10" />
            </template></div
        ></template>
      </TabItem>
      <TabItem title="SD"
        ><template v-if="globalStore.heroStatsTabSelected == 7">
          <h3>SD Stats</h3>
          <div class="block">
            <MultiplierInformation v-for="(_, index) in game.data.stats.currentHero.basicStats" :multiplier="`stats.currentHero.basicStats[${index}]`" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.damageMultiplier'" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.sdChallengeBossDamageMultiplier'" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.armoredFury'" />
            <MultiplierInformation :multiplier="'battle.superDungeonCtrl.wardedFury'" />
            <MultiplierInformation :multiplier="'stats.currentHero.extraAfterDamage'" />
          </div>
          <div class="block">
            <MultiplierInformation v-for="(_, index) in game.data.stats.currentHero.elementDamages" :multiplier="`stats.currentHero.elementDamages[${index}]`" />
            <MultiplierInformation :multiplier="'stats.currentHero.stats[6]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[7]'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[8]'" />

            <MultiplierInformation :multiplier="`stats.currentHero.monsterDamages[11]`" />
          </div>
        </template>
      </TabItem>
    </TabPanel>
  </div>
</template>

<style scoped>
.panel {
  display: inline-block;
  width: 680px;
  margin-top: 10px;
  padding-top: 5px;
  border: 2px #94aade;
  border-style: groove;
  /* background: linear-gradient(#0d1010, #232c37); */
  background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 0) 20%);
}

.block {
  width: 320px;
  display: inline-block;
  padding-right: 10px;
  padding-left: 10px;
  vertical-align: top;
  text-overflow: ellipsis;
}

.a {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  height: 20px;
}
</style>
../data2
