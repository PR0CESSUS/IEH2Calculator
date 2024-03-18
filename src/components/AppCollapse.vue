<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
</script>

<template>
  <div>
    <span @click="show = !show" class="trigger">
      <slot name="trigger"></slot>
    </span>

    <div v-show="show">
      <slot name="content">content</slot>
    </div>
  </div>
</template>
<style scoped>
.trigger {
  color: #a7e6ff;
  cursor: pointer;
}
.trigger:hover {
  color: #ffea04;
}
</style>
