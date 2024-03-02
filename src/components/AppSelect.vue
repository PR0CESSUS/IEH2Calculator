<script setup lang="ts">
import { Enums } from "../Enums";
import { Localization } from "../localization/index";
import { CustomSelectType } from "../type/CustomSelectType";

const props = defineProps<{ type: CustomSelectType }>();

const model = defineModel();

function getType(type: CustomSelectType) {
  let result = [];

  switch (type) {
    case CustomSelectType.EquipmentEffectKind:
      for (let index = 0; index < Enums.EquipmentEffectKind; index++) {
        result.push(Localization.EquipmentEffectName(index));
      }
      break;

    default:
      break;
  }
  return result;
}
</script>

<template>
  <select v-model="model">
    <option v-for="(name, index) in getType(props.type)" :value="index">{{ name }}</option>
  </select>
</template>

<style scoped></style>
../data2 ../stores/heroStats
