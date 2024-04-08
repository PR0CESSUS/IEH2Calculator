<script setup lang="ts">
import { ref } from "vue";
import { Enums } from "../Enums";

import { Localization } from "../localization/index";

const model = defineModel();
const input = ref();
const select = ref();
const isShownInput = ref(false);
const isShownSelect = ref(true);

function triggerInput() {
  isShownInput.value = true;
  isShownSelect.value = false;

  input.value.focus();
}
</script>

<template>
  <input type="text" list="lista" v-model="model" ref="input" v-show="isShownInput" />
  <select name="select" v-model="model" @click="triggerInput" ref="select" v-show="isShownSelect">
    <option :value="model">{{ Localization.EquipmentEffectName(model as number) }}</option>
  </select>

  <datalist id="lista">
    <option v-for="(_, index) in Enums.EquipmentEffectKind" :value="index">{{ Localization.EquipmentEffectName(index) }}</option>
  </datalist>
</template>

<style scoped>
img {
  border: 1px solid #6e6e6e;
}
img:hover {
  filter: brightness(110%);
}
.inactive {
  filter: opacity(60%) grayscale(60%) sepia(50%);
}

.inactive:hover {
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.1);
}
</style>
../data2 ../stores/heroStats
