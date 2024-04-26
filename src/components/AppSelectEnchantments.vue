<script setup lang="ts">
import { Enums } from "../Enums";

import { Localization } from "../localization/index";

const model = defineModel({
  set(value) {
    // console.log("set value:", value);
    for (let index = 0; index < Enums.EquipmentEffectKind; index++) {
      if (value == Localization.EquipmentEffectName(index)) return index;
    }

    return 0;
  },

  get(value) {
    // console.log("get value:", value);

    return Localization.EquipmentEffectName(value as number);
  },
});

function valueValidator(element: HTMLElement) {
  // console.log("validator triggered");

  let result = "Enchant Slot";
  for (let index = 0; index < Enums.EquipmentEffectKind; index++) {
    if ((element.nextElementSibling as HTMLInputElement).value == Localization.EquipmentEffectName(index)) {
      result = Localization.EquipmentEffectName(index);
      break;
    }
  }
  (element.nextElementSibling as HTMLInputElement).value = result;
}
</script>

<template>
  <input type="text" list="lista" v-model.lazy="model" @change="valueValidator($el)" size="35" />

  <datalist id="lista">
    <option v-for="(_, index) in Enums.EquipmentEffectKind" :value="Localization.EquipmentEffectName(index)">{{ Localization.EquipmentEffectName(index) }}</option>
  </datalist>
</template>
