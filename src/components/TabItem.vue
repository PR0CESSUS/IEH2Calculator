<script setup lang="ts">
import { inject, onBeforeMount, ref, watch } from "vue";
// import { data } from '../data'
// console.log('import data');

defineProps<{ title?: string }>();

const index = ref(0);
const isActive = ref(false);

const tabs = inject("TabsProvider") as any;
watch(
  () => tabs.selectedIndex,
  () => {
    isActive.value = index.value === tabs.selectedIndex;
  }
);
onBeforeMount(() => {
  index.value = tabs.count;
  tabs.count++;
  isActive.value = index.value === tabs.selectedIndex;
});
</script>

<template>
  <div v-show="isActive"><slot></slot></div>
</template>
