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

const size = ref(props.size | 8);

// console.log(modifiers);
</script>

<template>
  <input name="input" type="text" :size="size" v-model.lazy="model" />
</template>

<style scoped></style>
