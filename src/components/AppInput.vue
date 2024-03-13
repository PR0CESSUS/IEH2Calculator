<script setup lang="ts">
import { ref } from "vue";
import { Util } from "../Util/index";

const props = defineProps<{ size?: number }>();
const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.convert) {
      // console.log(Util.convertFrom(value));

      return Util.convertFrom(value);
    }
    return value;
  },

  get(value) {
    if (modifiers.convert) {
      return Util.convertTo(value);
    }
    return value;
  },
});

// console.log();

const size = ref(props.size ? props.size : 8);

// console.log(modifiers);
</script>

<template>
  <template v-if="Object.keys(modifiers).length"><input name="input" type="text" :size="size" v-model.lazy="model" /></template>
  <template v-else><input name="input" type="text" :size="size" v-model.lazy.number="model" /></template>
</template>

<style scoped></style>
