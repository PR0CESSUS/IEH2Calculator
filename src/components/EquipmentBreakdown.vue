<script setup lang="ts">
import { inject, computed } from "vue";
import { Game } from "../Game";
import { Localization } from "../localization/index";

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
    if (equipment.kind == 0 || equipment.isDisabled()) continue;
    for (let i = 0; i < equipment.optionEffects.length; i++) {
      if (equipment.optionEffects[i].kind == 0) continue;
      const effect = Localization.EquipmentEffectName(equipment.optionEffects[i].kind);
      list[effect] = list[effect] ? list[effect] + 1 : 1;
    }
  }

  return list;
}
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
  </div>
</template>

<style scoped>
.container {
  width: 700px;
  padding: 10px;
  font-size: 10px;
}
</style>
