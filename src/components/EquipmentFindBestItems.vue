<script setup lang="ts">
import { Equipment } from "@/Data/Equipment/Equipment";
import { Localization } from "@/localization";
import { CustomSelectType } from "@/type/CustomSelectType";
import { EquipmentPart } from "@/type/EquipmentPart";
import { EquipmentRarity } from "@/type/EquipmentRarity";
import { EquipmentSetKind } from "@/type/EquipmentSetKind";
import { computed, inject, ref, watch } from "vue";
import { Game } from "../Game";
import AppCheckbox from "./AppCheckbox.vue";
import AppDialog from "./AppDialog.vue";
import AppSelect from "./AppSelect.vue";
import EquipmentLoadoutApplyForge from "./EquipmentLoadoutApplyForge.vue";

const game = inject<Game>("game");
const optimizerType = ref(game.data.equipment.optimizer.kind);
const filterSetKind = ref(game.data.equipment.optimizer.filterSetKind);
const filterRarity = ref(game.data.equipment.optimizer.filterRarity);
const filterArtifact = ref(game.data.equipment.optimizer.filterArtifact);
const filter = ref(game.data.equipment.optimizer.list);
const enchantmentListAdd = ref(0);
const EEC = ref(game.data.equipment.evaluateController);
const forgeValues = ref();
// const optimizerBonusLevel = ref(EEC.)

const globalInformations = computed(() =>
  game.data.equipment.globalInformations.filter(
    (equipment) => filterRarity.value[equipment.rarity] && filterSetKind.value[equipment.setKind] && equipment.isArtifact == filterArtifact.value
  )
);
// const globalInformations = game.data.equipment.globalInformations;

watch(optimizerType, () => {
  game.data.equipment.optimizer.kind = optimizerType.value;
  game.data.equipment.optimizer.list = game.data.equipment.optimizer.GetList();
  filter.value = game.data.equipment.optimizer.list;
  game.data.equipment.evaluateController.UpdateScoring();
  console.log("watch optimizerType");
});

async function logRender(num) {
  let timeout = 0;
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "msg", data: num } }));

  return new Promise((resolve) => setTimeout(() => resolve(null), timeout));
}

async function loop() {
  console.log("loop");
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "start", data: "" } }));
  // let debugInfo = { tested: [], enchantValue: [] };

  // let multiplier = game.data.equipment.optimizer.GetMultiplier();
  const loadout = Sort(game.data.inventory.GetCurrentLoadout());

  // apply forge values to test
  forgeValues.value.applyForge();
  EEC.value.anvilBonusLevel = forgeValues.value.forgeValues[6];
  EEC.value.anvilIncrement = forgeValues.value.forgeValues[5];
  // remove custom enchantements
  game.data.equipment.ClearLoadout("enchant");

  function Sort(array: Equipment[]) {
    const newArray = [];
    const weapons = array.filter((equipment) => equipment.slotPart == EquipmentPart.Weapon);
    const armors = array.filter((equipment) => equipment.slotPart == EquipmentPart.Armor);
    const jewelry = array.filter((equipment) => equipment.slotPart == EquipmentPart.Jewelry);

    weapons.reverse();
    armors.reverse();
    jewelry.reverse();

    for (let index = 0; index < array.length; index++) {
      const w = weapons.pop();
      const a = armors.pop();
      const j = jewelry.pop();

      if (w) newArray.push(w);
      if (a) newArray.push(a);
      if (j) newArray.push(j);
    }

    return newArray;
  }

  // const EEC = new EquipmentEvaluateController(game.data);

  for (let index = 0; index < loadout.length; index++) {
    const equipment = loadout[index];
    await logRender(`Testing Item ${index} / ${loadout.length} `);
    // let bestKind = equipment.kind;
    // let bestValue = multiplier.Value();
    EEC.value.Test(equipment);
    // equipment.kind = EEC.value.Test(equipment);
    // equipment.kind = bestKind;
  }

  document.dispatchEvent(new CustomEvent("log", { detail: { type: "msg", data: "Finished" } }));
  document.dispatchEvent(new CustomEvent("log", { detail: { type: "unlock" } }));
  console.log(EEC.value);
}

function AddEffectToOptimizer() {
  game.data.equipment.optimizer.AddToList(enchantmentListAdd.value);
  filter.value.push(enchantmentListAdd.value);
}
</script>

<template>
  <AppDialog>
    <template #trigger> <button class="green small">??? (WIP)</button></template>
    <template #content>
      <div class="container">
        <h2>Find Decent Items</h2>
        <AppSelect :type="CustomSelectType.EquipmentEffectOptimizer" v-model="optimizerType" />&nbsp;
        <h3>Enchantments</h3>

        <span v-for="(effect, index) in filter" class="optimizeEffect" :title="effect.toString()">
          {{ Localization.EquipmentEffectName(effect) }}
          <span class="red interactive" @click="filter.splice(index, 1)">&#10006;</span>
        </span>

        <AppDialog>
          <template #trigger> <button class="small">Add</button></template>
          <template #content>
            <AppSelect :type="CustomSelectType.EquipmentEffectKind" v-model="enchantmentListAdd" />
            <button @click="AddEffectToOptimizer">Add</button>
          </template>
        </AppDialog>
        <h3>Set</h3>
        <template v-for="(_, index) in filterSetKind">
          <span style="display: inline-block"><input type="checkbox" v-model="filterSetKind[index]" /> {{ EquipmentSetKind[index] }} </span>
        </template>
        <h3>Rarity</h3>
        <template v-for="(_, index) in filterRarity"> <input type="checkbox" v-model="filterRarity[index]" /> {{ EquipmentRarity[index] }} </template>
        <h3>Other</h3>
        Include Artifacts:
        <AppCheckbox v-model="filterArtifact" />&nbsp;
        <hr />
        <EquipmentLoadoutApplyForge ref="forgeValues" :initial-values="[0, 0, 0, 0, 0, 1.5, 150]" />
        <br />
        <hr />
        Weapons to test:
        {{ globalInformations.filter((equipment) => equipment.part == EquipmentPart.Weapon).length }}<br />
        Armors to test:
        {{ globalInformations.filter((equipment) => equipment.part == EquipmentPart.Armor).length }}<br />
        Jewelry to test:
        {{ globalInformations.filter((equipment) => equipment.part == EquipmentPart.Jewelry).length }}
        <hr />
        <button @click="loop">Find</button><button @click="console.log(game.data.equipment.optimizer)">DEBUG</button
        ><button @click="console.log(game.data.equipment.evaluateController)">DEBUG EEC</button>
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
  font-size: 12px;
}
</style>
@use/EquipmentBest
