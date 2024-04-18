<script setup lang="ts">
import { Util } from "../Util/index";

// const props = defineProps<{ size?: number; precision?: number }>();
// const size = ref(props.size ? props.size : 8);
// const precision = ref(props.precision ? props.precision : 2);

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
      return Util.convertTo(value, 2);
    }
    return value;
  },
});

// console.log();

// console.log(modifiers);
</script>

<template>
  <input name="input" type="checkbox" v-model.lazy="model" />
</template>

<style scoped>
input[type="checkbox"] {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  outline: none;
  content: none;
  border: none;
  background: none;
  margin-left: 10px;
  height: 22px;
}

input[type="checkbox"]::before {
  content: "\2714";
  font-size: 22px;
  text-align: center;
  line-height: 19px;
  color: transparent !important;
  background: #fef2e0;
  /* background-image: linear-gradient(#6e6b6c, #3b3838); */
  background-image: linear-gradient(#925166, #3b3838);
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 7px;

  border-style: solid;
  border-radius: 3px;
  border-width: 2px;
  border-top-color: #f1d992;
  border-bottom-color: #fadf84;
  border-left-color: #f2cb41;
  border-right-color: #ddb31a;
}

input[type="checkbox"]:checked:before {
  color: #ff0000 !important;
}
</style>
