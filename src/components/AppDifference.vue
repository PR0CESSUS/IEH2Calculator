<script setup lang="ts">
import { computed } from "vue";
import { useComparePercent } from "../composable/comparePercent";

const props = defineProps<{ data: number; snap: number }>();

const diff = computed(() => props.data - props.snap);
</script>

<template>
  <span v-if="diff != 0" :class="{ green: diff > 0, red: diff < 0 }">{{ useComparePercent(data, snap, false) }}</span>
</template>
