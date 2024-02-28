<script setup lang="ts">
import { inject, onMounted } from "vue";
import { useGlobalStore } from "../stores/global";
import { BasicStatsKind } from "../type/BasicStatsKind";
import { Element } from "../type/Element";
import { HeroKind } from "../type/HeroKind";
import { MonsterSpecies } from "../type/MonsterSpecies";
import MultiplierInformation from "./MultiplierInformation.vue";
import TabItem from "./TabItem.vue";
import TabPanel from "./TabPanel.vue";
import { Game } from "../Game";
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
            <MultiplierInformation
              v-for="(_, index) in game.data.stats.currentHero.basicStats"
              :name="BasicStatsKind[index]"
              :multiplier="`stats.currentHero.basicStats[${index}]`"
            />
            <MultiplierInformation name="Move Speed" :multiplier="`stats.currentHero.stats[10]`" />
            <MultiplierInformation name="Equipment Drop Chance" :multiplier="'stats.currentHero.stats[9]'" />
            <MultiplierInformation name="Equipment 1st Enchantment Slot Chance" :multiplier="'stats.currentHero.optionEffectChance[0]'" />
            <MultiplierInformation name="Equipment 2nd Enchantment Slot Chance" :multiplier="'stats.currentHero.optionEffectChance[1]'" />
            <MultiplierInformation name="Equipment 3rd Enchantment Slot Chance" :multiplier="'stats.currentHero.optionEffectChance[2]'" />
            <MultiplierInformation name="Equipment Effect" :multiplier="'equipment.effectMultiplier'" />
            <MultiplierInformation name="Potion Effect" :multiplier="'potion.effectMultiplier'" />
          </div>
          <div class="block">
            <MultiplierInformation name="HP Regeneration" :multiplier="'stats.currentHero.hpRegenerate'" value-suffix="/ sec" />
            <MultiplierInformation name="MP Regeneration" :multiplier="'stats.currentHero.mpRegenerate'" value-suffix="/ sec" />
            <MultiplierInformation name="Blessing Effect" :multiplier="`blessingInfo.effectMultipliers[${game.data.source.currentHero}]`" />
            <MultiplierInformation name="SD Damage Multiplier" :multiplier="'battle.superDungeonCtrl.damageMultiplier'" />
            <MultiplierInformation name="SD Damage Cut Multiplier" :multiplier="'battle.superDungeonCtrl.damageCutMultiplier'" />
            <MultiplierInformation name="SD Challange Boss Damage Multiplier" :multiplier="'battle.superDungeonCtrl.sdChallengeBossDamageMultiplier'" />

            <MultiplierInformation name="SD Challange Boss Damage Cut Multiplier" :multiplier="'battle.superDungeonCtrl.sdChallengeBossDamageCutMultiplier'" />
            <MultiplierInformation name="SD Armored Fury" :multiplier="'battle.superDungeonCtrl.armoredFury'" />
            <MultiplierInformation name="SD Warded Fury" :multiplier="'battle.superDungeonCtrl.wardedFury'" />
          </div>
        </template>
      </TabItem>

      <TabItem title="Attack">
        <template v-if="globalStore.heroStatsTabSelected == 1">
          <h3>Attack Stats</h3>
          <div class="block">
            <MultiplierInformation
              v-for="(_, index) in game.data.stats.currentHero.elementDamages"
              :multiplier="`stats.currentHero.elementDamages[${index}]`"
              :name="Element[index] + ' Damage'"
            />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[15]'" name="Armored Fury" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[16]'" name="Warded Fury" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[6]'" name="Physical Critical Chance" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[7]'" name="Magical Critical Chance" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[8]'" name="Critical Damage" />

            <MultiplierInformation :multiplier="'stats.currentHero.extraAfterDamage'" name="Extra After Damage" /></div
        ></template>
      </TabItem>
      <TabItem title="Defense"
        ><template v-if="globalStore.heroStatsTabSelected == 2">
          <h3>Defense Stats</h3>
          <div class="block">
            <MultiplierInformation v-for="index in 5" :multiplier="`stats.currentHero.stats[${index - 1}]`" :name="Element[index] + ' Resistance'" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[5]'" name="Debuff Resistance" />
            <MultiplierInformation
              v-for="(_, index) in game.data.stats.currentHero.elementAbsoptions"
              :multiplier="`stats.currentHero.elementAbsoptions[${index}]`"
              :name="Element[index] + ' Absorption'"
            /></div
        ></template>
        <div class="block">
          <MultiplierInformation
            v-for="(_, index) in game.data.stats.currentHero.elementInvalids"
            :multiplier="`stats.currentHero.elementInvalids[${index}]`"
            :name="Element[index] + ' Nullify Chance'"
          />
        </div>
      </TabItem>
      <TabItem title="Gains"
        ><template v-if="globalStore.heroStatsTabSelected == 3">
          <h3>Gain Stats</h3>
          <div class="block">
            <MultiplierInformation :multiplier="'stats.currentHero.stats[14]'" name="EXP Gain" />
            <MultiplierInformation :multiplier="'stats.globalStats[0]'" name="Gold Gain" />
            <MultiplierInformation :multiplier="'stats.globalStats[1]'" name="Stone Gain" value-suffix="/ kill" />
            <MultiplierInformation :multiplier="'stats.globalStats[2]'" name="Crystal Gain" value-suffix="/ kill" />
            <MultiplierInformation :multiplier="'stats.globalStats[3]'" name="Leaf Gain" value-suffix="/ kill" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[11]'" name="Skill Proficiency Gain" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[12]'" name="Equipment Proficiency Gain" />
            <MultiplierInformation :multiplier="'stats.currentHero.guildExpGain'" name="Guild EXP Gain" />
            <!-- <MultiplierInformation :multiplier="`town.townMaterialGainMultiplier[${data.source.currentHero}]`" name="Town Material Gain" /> -->
            <MultiplierInformation :multiplier="`area.townMaterialDungeonRewardMultiplier`" name="Town Material Gain" />
            <MultiplierInformation :multiplier="'alchemy.alchemyPointGainMultiplier'" name="Alchemy Point Gain" />
            <MultiplierInformation :multiplier="'alchemy.catalyst.essenceProductionMultiplier'" name="Essence Convertion Rate" />
            <MultiplierInformation :multiplier="'superStats.currentHero.fameGain'" name="Fame Gain" />
            <MultiplierInformation :multiplier="'sdg.dungeonCoinGain'" name="Dungeon Coin Gain" />
          </div>
          <div class="block">
            <MultiplierInformation :multiplier="'stats.currentHero.stats[21]'" name="Artifact Proficiency Gain" />
            <MultiplierInformation :multiplier="'town.researchPower[0]'" name="Stone Reasearch Power" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="'town.researchPower[1]'" name="Crystal Reasearch Power" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="'town.researchPower[2]'" name="Leaf Reasearch Power" value-suffix="/ sec" />
            <MultiplierInformation :multiplier="'rebirth.currentHero[0].rebirthPointGainFactor'" name="Tier 1 Rebirth Point Gain" />
            <MultiplierInformation :multiplier="'rebirth.currentHero[1].rebirthPointGainFactor'" name="Tier 2 Rebirth Point Gain" />
            <MultiplierInformation :multiplier="'rebirth.currentHero[2].rebirthPointGainFactor'" name="Tier 3 Rebirth Point Gain" />
            <MultiplierInformation :multiplier="'expedition.expGainMultiplier'" name="Expedition EXP Gain" />
            <MultiplierInformation :multiplier="'expedition.speedMultiplier'" name="Expedition Speed" />
            <MultiplierInformation :multiplier="'expedition.rewardMultiplier'" name="Expedition Reward Amount" />
            <MultiplierInformation :multiplier="'expedition.passiveEffectMultiplier'" name="Expedition Passive Effect" />
            <MultiplierInformation :multiplier="'expedition.petExpGainMultiplier'" name="Expedition Pet EXP Gain" />
          </div>
        </template>
      </TabItem>
      <TabItem title="Skills"
        ><template v-if="globalStore.heroStatsTabSelected == 4">
          <h3>Skills</h3>
          <div class="block">
            <MultiplierInformation
              v-for="(_, index) in game.data.skill.skillLevelBonus"
              :multiplier="`skill.skillLevelBonus[${index}]`"
              :name="HeroKind[index] + ' Skill Level Bonus'"
            />

            <MultiplierInformation
              v-for="(_, index) in game.data.skill.skillRangeMultiplier"
              :multiplier="`skill.skillRangeMultiplier[${index}]`"
              :name="HeroKind[index] + '\'s Class Skills Range'"
            />
          </div>
          <div class="block">
            <MultiplierInformation
              v-for="(_, index) in game.data.skill.skillEffectRangeMultiplier"
              :multiplier="`skill.skillEffectRangeMultiplier[${index}]`"
              :name="HeroKind[index] + '\'s Class Skills Area of Effect'"
            /></div
        ></template>
      </TabItem>
      <TabItem title="Bestiary"
        ><template v-if="globalStore.heroStatsTabSelected == 5">
          <h3>Bestiary Stats</h3>
          <div class="block">
            <MultiplierInformation :multiplier="`monster.doubleCaptureChance[${game.data.source.currentHero}]`" name="Double Capture Chance" />

            <MultiplierInformation :multiplier="`monster.captureTripleChance[${game.data.source.currentHero}]`" name="Triple Capture  Chance" />

            <MultiplierInformation :multiplier="'stats.currentHero.petExpGainPerDefeat'" name="Pet EXP Gain" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[13]'" name="Taming Point Gain" />

            <MultiplierInformation :multiplier="'stats.currentHero.loyaltyPoingGain'" name="Loyalty Point Gain" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[17]'" name="Pet Base Physical Critial Chance" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[18]'" name="Pet Base Magical Critial Chance" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[19]'" name="Pet Base Critial Damage" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[20]'" name="Pet Debuff Resistance" />

            <MultiplierInformation :multiplier="'monster.petPassiveEffectMultiplier'" name="Pet Passive Effect" /></div
        ></template>
      </TabItem>
      <TabItem title="Regions"
        ><template v-if="globalStore.heroStatsTabSelected == 6">
          <h3>Region Stats</h3>
          <div class="block">
            <MultiplierInformation
              v-for="(_, index) in game.data.stats.currentHero.monsterDamages"
              :multiplier="`stats.currentHero.monsterDamages[${index}]`"
              :name="'Damage to ' + MonsterSpecies[index]"
            /></div
        ></template>
      </TabItem>
      <TabItem title="SD"
        ><template v-if="globalStore.heroStatsTabSelected == 7">
          <h3>SD Stats</h3>
          <div class="block">
            <MultiplierInformation
              v-for="(_, index) in game.data.stats.currentHero.basicStats"
              :name="BasicStatsKind[index]"
              :multiplier="`stats.currentHero.basicStats[${index}]`"
            />
            <MultiplierInformation name="SD Damage Multiplier" :multiplier="'battle.superDungeonCtrl.damageMultiplier'" />
            <MultiplierInformation name="SD Challange Boss Damage Multiplier" :multiplier="'battle.superDungeonCtrl.sdChallengeBossDamageMultiplier'" />
            <MultiplierInformation name="SD Armored Fury" :multiplier="'battle.superDungeonCtrl.armoredFury'" />
            <MultiplierInformation name="SD Warded Fury" :multiplier="'battle.superDungeonCtrl.wardedFury'" />
            <MultiplierInformation :multiplier="'stats.currentHero.extraAfterDamage'" name="Extra After Damage" />
          </div>
          <div class="block">
            <MultiplierInformation
              v-for="(_, index) in game.data.stats.currentHero.elementDamages"
              :multiplier="`stats.currentHero.elementDamages[${index}]`"
              :name="Element[index] + ' Damage'"
            />
            <MultiplierInformation :multiplier="'stats.currentHero.stats[6]'" name="Physical Critical Chance" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[7]'" name="Magical Critical Chance" />

            <MultiplierInformation :multiplier="'stats.currentHero.stats[8]'" name="Critical Damage" />

            <MultiplierInformation name="Damage to Challange Boss" :multiplier="`stats.currentHero.monsterDamages[11]`" />
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
