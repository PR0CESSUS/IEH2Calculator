<script setup lang="ts">
import { EquipmentParameter } from "@/Data/Equipment/EquipmentParameter";
import { Localization } from "@/localization";
import { CustomSelectType } from "@/type/CustomSelectType";
import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { inject, ref, watch } from "vue";
import { Game } from "../Game";
import AppDialog from "./AppDialog.vue";
import AppSelect from "./AppSelect.vue";
import { EquipmentForgeEffectKind } from "@/type/EquipmentForgeEffectKind";

const game = inject<Game>("game");
const optimizerType = ref(game.data.equipment.optimizer.kind);
const enchantmentList = ref(game.data.equipment.optimizer.list);
const enchantmentListAdd = ref(0);
watch(optimizerType, () => {
  game.data.equipment.optimizer.kind = optimizerType.value;
  game.data.equipment.optimizer.list = game.data.equipment.optimizer.GetList();
  enchantmentList.value = game.data.equipment.optimizer.list;
});
watch(game.data.requireUpdate, () => {
  enchantmentList.value = game.data.equipment.optimizer.list;
});
async function logRender(num) {
  let timeout = 0;
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "msg", data: num } }));

  return new Promise((resolve) => setTimeout(() => resolve(null), timeout));
}

async function loop() {
  const INITIAL_OFFSET = game.data.inventory.initialEquipmentLoadoutOffset;
  const loadoutBreakdownListBefore = game.data.inventory.GetLoadoutBreakdownList();

  console.log("loop");
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "start", data: "" } }));

  let multiplier = game.data.equipment.optimizer.GetMultiplier();
  let realIndex = 1;
  let iterationMax = 0;

  // clear all enchantements first? no difference
  // game.data.equipment.ClearLoadout("enchant");

  for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
    const equipment = game.data.inventory.equipmentSlots[index];
    if (equipment.kind == 0 || equipment.isDisabled()) continue;
    iterationMax++;
  }
  // console.log(await Init());
  // loop over loadout dodać jako metode

  for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
    await logRender(`Testing Item ${realIndex} / ${iterationMax} `); // - Enchant ${i + 1} / ${effects.length}

    const equipment = game.data.inventory.equipmentSlots[index];

    if (equipment.kind == 0 || equipment.isDisabled()) continue;
    const effects = equipment.GetOptionEffects(false);

    for (let i = 0; i < effects.length; i++) {
      const effect = effects[i];
      let bestKind = EquipmentEffectKind.Nothing;
      let bestValue = 0;
      for (let index = 0; index < enchantmentList.value.length; index++) {
        const ennchantTested = enchantmentList.value[index];
        // if (EquipmentParameter.RequiredLevelIncrement(ennchantTested, 1) >= game.data.source.enemyLevel) continue;
        if (EquipmentParameter.IsAfter(ennchantTested) && !equipment.globalInfo.isArtifact) continue;
        // increasing ReduceRequiredHeroLevel to 1M so i does not trigger Equipment Tenacity
        if (equipment.forgeEffects[EquipmentForgeEffectKind.ReduceRequiredHeroLevel].effectValue > 0)
          equipment.forgeEffects[EquipmentForgeEffectKind.ReduceRequiredHeroLevel].effectValue = 1000000;
        effect.kind = ennchantTested;
        const value = multiplier.Value();

        console.log();

        if (value > bestValue) {
          bestValue = value;
          bestKind = ennchantTested;
        }
      }

      effect.kind = bestKind;
    }
    realIndex++;
    if (equipment.forgeEffects[EquipmentForgeEffectKind.ReduceRequiredHeroLevel].effectValue > 0)
      equipment.forgeEffects[EquipmentForgeEffectKind.ReduceRequiredHeroLevel].effectValue = equipment.ForgeEffectMaxValue(
        EquipmentForgeEffectKind.ReduceRequiredHeroLevel,
        equipment.globalInfo.isArtifact
      );
  }
  let summary = ``;

  const loadoutBreakdownListAfter = game.data.inventory.GetLoadoutBreakdownList();
  // const loadoutBreakdownListFinal = {};

  // for (const [key, value] of Object.entries(loadoutBreakdownListBefore.enchants)) loadoutBreakdownListFinal[key] = value;
  // for (const [key, value] of Object.entries(loadoutBreakdownListAfter.enchants)) {
  //   if (loadoutBreakdownListFinal[key]) loadoutBreakdownListFinal[key] = value;
  // }
  summary += `Enchantments Before Optimization\n`;
  summary += `------------------------------\n`;
  for (const [key, value] of Object.entries(loadoutBreakdownListBefore.enchants)) summary += `${key} - ${value}\n`;
  // summary += `------------------------------------------------------------\n`;
  summary += `\n\n\n`;
  summary += `Enchantments After Optimization\n`;
  summary += `------------------------------\n`;
  for (const [key, value] of Object.entries(loadoutBreakdownListAfter.enchants)) summary += `${key} - ${value}\n`;

  document.dispatchEvent(new CustomEvent("log", { detail: { type: "msg", data: summary } }));
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "unlock" } }));
  // console.log(loadoutBreakdownListBefore, loadoutBreakdownListAfter, loadoutBreakdownListFinal);
}

function addEnchantementsToList() {
  if (enchantmentList.value.includes(enchantmentListAdd.value) || enchantmentListAdd.value == 0) return;

  enchantmentList.value.push(enchantmentListAdd.value);
}
</script>

<template>
  <AppDialog>
    <template #trigger> <button class="green small">Optimize Enchantments</button></template>
    <template #content>
      <div class="container">
        <h2>Optimize Enchantments</h2>
        <AppSelect :type="CustomSelectType.EquipmentEffectOptimizer" v-model="optimizerType" />&nbsp;

        <h3>Enchantements to test</h3>

        <span v-for="(effect, index) in enchantmentList" class="optimizeEffect" :title="effect.toString()">
          {{ Localization.EquipmentEffectName(effect) }}
          <span class="red interactive" @click="enchantmentList.splice(index, 1)">&#10006;</span>
        </span>
        <AppDialog>
          <template #trigger> <button class="small">Add</button></template>
          <template #content>
            <AppSelect :type="CustomSelectType.EquipmentEffectKind" v-model="enchantmentListAdd" />
            <button @click="addEnchantementsToList">Add</button>
          </template>
        </AppDialog>
        <br />

        <hr />
        <button @click="loop">Find</button>
        <RouterLink to="/help/#OptimizeEnchantments"><button>Help</button></RouterLink>
      </div>
    </template>
  </AppDialog>
</template>

<style scoped>
span {
  font-size: 12px;
}

.interactive {
  cursor: pointer;
}

.optimizeEffect {
  display: inline-block;
  border: 1px solid #000;
  background-color: #535353;
  border-radius: 5px;
  margin: 0px 5px;
  padding: 1px 5px;
}

.container {
  width: 700px;
  padding: 10px;
}
</style>
@use/EquipmentBest
