<script setup lang="ts">
import { computed, inject } from "vue";
import EquipmentInfo from "./EquipmentInfo.vue";
import PotionInfo from "./PotionInfo.vue";
import { Game } from "../Game";
import AppDialog from "./AppDialog.vue";
import EquipmentBreakdown from "./EquipmentBreakdown.vue";
import AppSelect from "./AppSelect.vue";
import { CustomSelectType } from "../type/CustomSelectType";
import { HeroKind } from "../type/HeroKind";
import EnchantFinder from "./EnchantFinder.vue";
const game = inject<Game>("game");

const EQUIPMENT_INITIAL_OFFSET = computed(() => 520 + game.data.source.currentHero * 720 + game.data.source.equipmentLoadoutIds[game.data.source.currentHero] * 72);
const POTION_INITIAL_OFFSET = computed(() => 260 + game.data.source.currentHero * 6);
</script>

<template>
  <div>
    <div style="display: flex; height: 24px">
      <button
        v-for="(n, i) in 7"
        class="blue small"
        :class="{ yellow: i == game.data.source.equipmentLoadoutIds[game.data.source.currentHero] }"
        @click="game.data.source.equipmentLoadoutIds[game.data.source.currentHero] = i"
      >
        Loadout {{ n }}
      </button>

      <AppDialog>
        <template #trigger><button class="blue small" title="Equipment Breakdown">&#9776;</button></template>
        <template #content><EquipmentBreakdown /></template>
      </AppDialog>

      <AppDialog>
        <template #trigger><button class="blue small" title="Search">&#x1F50E;&#xFE0E;</button></template>
        <template #content><EnchantFinder /></template>
      </AppDialog>
    </div>
    <div style="display: flex; margin: 3px 0; align-items: center">
      <AppSelect :type="CustomSelectType.HeroKind" />&nbsp; {{ HeroKind[game.data.source.currentHero] }}
      {{
        game.data.source.isSuperDungeon
          ? `Grade: ${game.data.source.heroGrade[game.data.source.currentHero]}`
          : `Level: ${game.data.source.heroLevel[game.data.source.currentHero]}`
      }}
    </div>

    <div>
      <div class="part">
        <div class="block">
          <EquipmentInfo v-for="(_, index) in 24" :id="EQUIPMENT_INITIAL_OFFSET + index" class="equipment" :key="EQUIPMENT_INITIAL_OFFSET + index" />
        </div>
      </div>
      <div class="part">
        <div class="block">
          <EquipmentInfo v-for="(_, index) in 24" :id="EQUIPMENT_INITIAL_OFFSET + index + 24" class="equipment" :key="EQUIPMENT_INITIAL_OFFSET + index" />
        </div>
      </div>
      <div class="part">
        <div class="block">
          <EquipmentInfo v-for="(_, index) in 24" :id="EQUIPMENT_INITIAL_OFFSET + index + 48" class="equipment" :key="EQUIPMENT_INITIAL_OFFSET + index" />
        </div>
      </div>
      <div class="part">
        <div class="block-potion">
          <PotionInfo v-for="(_, index) in 6" :id="POTION_INITIAL_OFFSET + index" class="equipment" :key="POTION_INITIAL_OFFSET + index" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.part {
  display: inline-block;
  margin-right: 8px;
}
.block-potion {
  display: grid;
  grid-template-columns: repeat(1, 48px);
  gap: 3px;
}
.block-potion div:nth-child(2n) {
  margin-bottom: 10px;
}

.block div:nth-child(8n) {
  margin-bottom: 10px;
}

.block {
  display: grid;
  grid-template-columns: repeat(4, 48px);
  gap: 3px;
}

ul {
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 5px;
  margin-left: 0;
  padding: 0;
  font-size: 0;
}

li {
  display: inline;
  font-size: 10px;
  background-image: linear-gradient(#2b487f, #20365f);
  margin-left: 0px;
  padding: 5px 5px 5px 5px;
  background-color: #264374;
  border-style: outset;
  border-width: 2px;
  cursor: pointer;

  border-top-color: #5476ae;
  border-bottom-color: #203151;
  border-left-color: #203865;
  border-right-color: #203c6e;
}

li:hover {
  filter: brightness(120%);
}

.equipment {
  /* background-color: red; */
  border-style: solid;
  border-width: 1px;
  border-color: rgb(143, 0, 0);
  font-size: 11px;
  padding: 0;
  width: 48px;
  height: 48px;
}

.equipment:hover {
  border-color: #01f304;
  border-style: solid;
  border-width: 1px;
}
</style>
../data2 ../stores/heroStats
