<script setup lang="ts">
import { Equipment } from "@/Data/Equipment/Equipment";
import { Game } from "@/Game";
import AppSelect from "@/components/AppSelect.vue";
import AppSelectEnchantments from "@/components/AppSelectEnchantments.vue";
import { useGlobalStore } from "@/stores/global";
import { CustomSelectType } from "@/type/CustomSelectType";
import { EquipmentPart } from "@/type/EquipmentPart";

import { inject, ref } from "vue";
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
const loadout = game.data.inventory.GetCurrentLoadout();

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

const test = Sort(loadout);

const aaa = ref(12);

// const inGameData = ref({main1: globalStore});
</script>

<template>
  <hr />
  <button style="font-size: 12px" @click="store.version = '0.1.41'">TEST Changelog new version</button>
  <button @click="console.log(test)">GetCurrentLoadout</button>
  <hr />

  <!-- {{ game.data.inventory.currentLoadout[0].Level() }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].baseValue }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].initValue }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].kind }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].EffectValue(1) }} -->
  <h3>New Select Test</h3>
  <p>Old <AppSelect :type="CustomSelectType.EquipmentEffectKind" v-model="aaa" /></p>
  <p>
    New
    <AppSelectEnchantments v-model="aaa" /><button @click="console.log(aaa)">Now Selected ID</button>
  </p>
</template>

<style scoped>
.element {
  background-color: #636363;
  border: 1px solid #000;
  border-radius: 3px;
}
</style>
../data2 ../Game ../../Game ../Game
