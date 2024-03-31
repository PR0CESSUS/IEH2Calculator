<script setup lang="ts">
import { EquipmentParameter } from "@/Data/Equipment/EquipmentParameter";
import { Localization } from "@/localization";
import { CustomSelectType } from "@/type/CustomSelectType";
import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { inject, ref, watch } from "vue";
import { Game } from "../Game";
import AppDialog from "./AppDialog.vue";
import AppSelect from "./AppSelect.vue";

const game = inject<Game>("game");
const optimizerType = ref(0);
const Optimizer = game.data.equipment.optimizer;
const enchantmentList = ref(Optimizer.list);
const enchantmentListAdd = ref(0);
watch(optimizerType, () => {
  Optimizer.kind = optimizerType.value;
  enchantmentList.value = Optimizer.list;
});

async function logRender(num) {
  let timeout = 0;
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "msg", data: num } }));

  return new Promise((resolve) => setTimeout(() => resolve(null), timeout));
}

async function loop() {
  const INITIAL_OFFSET = game.data.inventory.initialEquipmentLoadoutOffset;
  console.log("loop");
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "start", data: "" } }));

  let multiplier = Optimizer.GetMultiplier();
  let realIndex = 1;
  let iterationMax = 0;
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
        if (EquipmentParameter.RequiredLevelIncrement(ennchantTested, 1) > game.data.source.enemyLevel) continue;
        if (EquipmentParameter.IsAfter(ennchantTested) && !equipment.globalInfo.isArtifact) continue;
        effect.kind = ennchantTested;
        const value = multiplier.Value();

        if (value > bestValue) {
          bestValue = value;
          bestKind = ennchantTested;
        }
      }

      effect.kind = bestKind;
    }

    realIndex++;
  }
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "msg", data: "Finished" } }));
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "unlock" } }));
}

function addEnchantementsToList() {
  if (enchantmentList.value.includes(enchantmentListAdd.value) || enchantmentListAdd.value == 0) return;

  enchantmentList.value.push(enchantmentListAdd.value);
}
</script>

<template>
  <AppDialog>
    <template #trigger> <button>Find Best Enchantements</button></template>
    <template #content>
      <div class="container">
        <h2>Find Best Enchantements</h2>
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
        <RouterLink to="/help/#findBestEnchantements"><button>Help</button></RouterLink>
      </div>
    </template>
  </AppDialog>
</template>

<style scoped>
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
