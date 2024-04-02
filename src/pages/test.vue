<script setup lang="ts">
import { Game } from "@/Game";
import MultiplierInformation from "@/components/MultiplierInformation.vue";
import SkillBreakdown from "@/components/SkillBreakdown.vue";
import SkillLoadout from "@/components/SkillLoadout.vue";
import { useGlobalStore } from "@/stores/global";
import { HeroKind } from "@/type/HeroKind";

import { inject } from "vue";
import { definePage } from "vue-router/auto";
const store = useGlobalStore();
const game = inject<Game>("game");
definePage({
  meta: {
    name: "Test",
    root: true,
    debug: true,
  },
});

// const inGameData = ref({main1: globalStore});
</script>

<template>
  <button style="font-size: 12px" @click="store.version = '0.1.41'">TEST Changelog new version</button>
  <hr />

  Current Hero: {{ HeroKind[game.data.source.currentHero] }}<br />
  Current Skill Loadout: {{ game.data.source.skillLoadoutIds[game.data.source.currentHero] }}<br />
  SD slots: {{ game.data.battle.superDungeonCtrl.skillSlotNum.Value() }}<br />
  Class skill slot: {{ game.data.battle.skillSet.currentEquippingNum }} / {{ game.data.battle.limitedSkillNum }} <br />
  current Global skill slot : {{ game.data.battle.skillSet.currentGlobalEquippingNum }} / {{ game.data.battle.limitedGlobalSkillNum }}<br />

  Global skill slot : {{ game.data.stats.globalSkillSlotNum.Value() }}

  <div style="width: 300px">
    <MultiplierInformation :multiplier="'stats.globalSkillSlotNum'" />
  </div>

  <hr />

  <SkillLoadout />

  <SkillBreakdown />

  <hr />

  <!-- {{ game.data.inventory.currentLoadout[0].Level() }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].baseValue }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].initValue }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].kind }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].EffectValue(1) }} -->
</template>

<style scoped>
.element {
  background-color: #636363;
  border: 1px solid #000;
  border-radius: 3px;
}
</style>
../data2 ../Game ../../Game ../Game
