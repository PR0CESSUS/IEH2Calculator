<script setup lang="ts">
import { Util } from "@/Util";
import { applyLoadoutForge } from "@/data/Equipment/EquipmentApply";
import { clearLoadout } from "@/data/Equipment/EquipmentClear";
import { computed, inject, ref } from "vue";
import { Game } from "../Game";
import { Localization } from "../localization/index";
import AppDialog from "./AppDialog.vue";

const game = inject<Game>("game");
const INITIAL_OFFSET = computed(() => 520 + game.data.source.currentHero * 720 + game.data.source.equipmentLoadoutIds[game.data.source.currentHero] * 72);

function getEquipmentList() {
  let list = {};
  for (let index = INITIAL_OFFSET.value; index < INITIAL_OFFSET.value + 72; index++) {
    if (game.data.inventory.equipmentSlots[index].kind == 0 || game.data.inventory.equipmentSlots[index].isDisabled()) continue;
    let equipment = Localization.EquipmentName(game.data.inventory.equipmentSlots[index].kind);
    list[equipment] = list[equipment] ? list[equipment] + 1 : 1;
  }

  return list;
}

function getEquipmentEffectList() {
  let list = {};

  for (let index = INITIAL_OFFSET.value; index < INITIAL_OFFSET.value + 72; index++) {
    const equipment = game.data.inventory.equipmentSlots[index];
    const totalOptionNum = equipment.totalOptionNum.Value();
    if (equipment.kind == 0 || equipment.isDisabled()) continue;
    for (let i = 0; i < equipment.optionEffects.length; i++) {
      if (equipment.optionEffects[i].kind == 0 || equipment.optionEffects[i].optionId >= totalOptionNum) continue;
      const effect = Localization.EquipmentEffectName(equipment.optionEffects[i].kind);
      list[effect] = list[effect] ? list[effect] + 1 : 1;
    }
  }

  return list;
}

const applyForgeValues = ref([0, 0, 0, 0, 0, 0, 0]);

const limitForge = computed(() => applyForgeValues.value.filter((element) => element != 0).length);
</script>

<template>
  <div class="container">
    <h1 style="text-align: center">Equipment Breakdown</h1>
    <div>
      <h3>Equipment List</h3>
      <p v-for="(value, key) in getEquipmentList()">{{ key }} x{{ value }}</p>
    </div>
    <div>
      <h3>Enchantements List</h3>
      <p v-for="(value, key) in getEquipmentEffectList()">{{ key }} x{{ value }}</p>
    </div>

    <!-- <button @click="new FindBestEquipment(game.data.stats.currentHero.stats[Stats.SkillProficiencyGain])">Generate</button> -->
    <button @click="clearLoadout('all')">Clear Loadout</button>
    <!-- <button @click="new EquipmentBestEnchantment(game.data.stats.currentHero.stats[Stats.SkillProficiencyGain])" class="btn btn-gray">Find BEST Enchantements</button> -->

    <AppDialog>
      <template #trigger> <button>Change Loadout Forge</button></template>
      <template #content>
        <h2>Apply Forge to Loadout: (Limit: {{ limitForge }} / 4)</h2>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[0]" :disabled="limitForge == 4 && applyForgeValues[0] == 0" />- Required Hero Level of this equipment
          {{ Util.tDigit(applyForgeValues[0]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[1]" :disabled="limitForge == 4 && applyForgeValues[1] == 0" />- Required Ability Point of this equipment
          {{ Util.tDigit(applyForgeValues[1]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[2]" :disabled="limitForge == 4 && applyForgeValues[2] == 0" />- Proficiency Gain of this equipment
          {{ Util.percent(applyForgeValues[2]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[3]" :disabled="limitForge == 4 && applyForgeValues[3] == 0" />- This equipment's effect
          {{ Util.percent(applyForgeValues[3]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[4]" :disabled="limitForge == 4 && applyForgeValues[4] == 0" />- Decrease this equipment's current negative
          effects {{ Util.percent(applyForgeValues[4]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[5]" :disabled="limitForge == 4 && applyForgeValues[5] == 0" />- This equipment's effect increment per level
          {{ Util.percent(applyForgeValues[5]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[6]" :disabled="limitForge == 4 && applyForgeValues[6] == 0" />- This equipment's level
          {{ Util.tDigit(applyForgeValues[6], 0) }}
        </p>
        <hr />
        <button
          @click="
            clearLoadout('forge');
            applyLoadoutForge(applyForgeValues);
          "
        >
          Apply
        </button>
      </template>
    </AppDialog>
  </div>
</template>

<style scoped>
.container {
  width: 700px;
  padding: 10px;
  font-size: 10px;
}
</style>
@use/EquipmentBest
