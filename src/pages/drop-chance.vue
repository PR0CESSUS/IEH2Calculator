<script setup lang="ts">
import { Enums } from "@/Enums";
import { Util } from "@util";
import { EquipmentParameter } from "@/data/Equipment/EquipmentParameter";
import { useGlobalStore } from "@stores/global";
import { EquipmentEffectKind } from "@type/EquipmentEffectKind";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Drop Chance",
    root: true,
  },
});
const state = useGlobalStore().dropChance;

function getChance() {
  const monsterLevel = state.level;
  const sdEnchantChance = state.sdchance;

  let data: { kind: string; chance: number }[] = [];
  let data2: any = [];
  for (let index = 0; index < Enums.EquipmentEffectKind; index++) {
    let kind = index;
    let value = 0;
    if (monsterLevel >= EquipmentParameter.RequiredLevelIncrement(kind, 1)) {
      value = EquipmentParameter.IsAfter(kind) ? sdEnchantChance / EquipmentParameter.RarityFactor(kind) : 10.0 / EquipmentParameter.RarityFactor(kind);
      // if (EquipmentParameter.IsAfter(kind)) data2.push();
      // else data2.push();
    }
    data2.push(value);
    // list.push({ name: EquipmentEffectKind[index], value: EquipmentParameter.RequiredLevelIncrement(kind, 1) });
  }
  // console.log(data2);
  // console.log(list);

  let num = 0;
  for (let index = 0; index < data2.length; index++) {
    num += data2[index];
  }

  for (let index = 0; index < data2.length; index++) {
    data2[index] *= 1 / num;
    data.push({ kind: EquipmentEffectKind[index], chance: data2[index] });
  }

  return data;
}
</script>

<template>
  Mob Level: <input v-model.number="state.level" /> SD Enchant Chance: <input v-model.number="state.sdchance" /> (value from 1 - 2)

  <table>
    <tr v-for="element in getChance()">
      <td>{{ element.kind }}</td>
      <td>{{ Util.percent(element.chance, 5) }}</td>
    </tr>
  </table>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
../data2 ../../Enums../../Util/index../../data/Equipment/EquipmentParameter../../stores/global../../type/EquipmentEffectKind
../Enums../Util/index../data/Equipment/EquipmentParameter../stores/global../type/EquipmentEffectKind
