<script setup lang="ts">
import { Util } from "../Util/index";

interface Props {
  size?: number;
  precision?: number;
  max?: number;
  min?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 8,
  precision: 2,
});

const [model, modifiers] = defineModel({
  set(value) {
    if (props.max) value = Math.min(value as number, props.max);
    if (props.min) value = Math.max(value as number, props.min);
    if (modifiers.convert) return Util.convertFrom(value);

    return value;
  },

  get(value) {
    if (props.max) value = Math.min(value as number, props.max);
    if (modifiers.convert) return Util.convertTo(value, props.precision);

    return value;
  },
});

function checkMinMax($el: HTMLInputElement) {
  let value = modifiers.convert ? Util.convertFrom($el.value) : parseFloat($el.value);
  let valueChecked = value > props.max ? props.max : value < props.min ? props.min : value;
  $el.value = modifiers.convert ? Util.convertTo(valueChecked, props.precision) : valueChecked.toFixed(props.precision);
}

// console.log();

// console.log(modifiers);
</script>

<template>
  <template v-if="Object.keys(modifiers).length"><input name="input" type="text" :size="props.size" v-model.lazy="model" @change="checkMinMax($el)" /></template>
  <template v-else><input name="input" type="text" :size="props.size" v-model.lazy.number="model" @change="checkMinMax($el)" /></template>
</template>

<style scoped></style>
