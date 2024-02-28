<script setup lang="ts">
import { useClipboardStore } from "../stores/clipboard";
import { CopyKind } from "../type/CopyKind";
const clipboard = useClipboardStore();
</script>

<template>
  <div v-show="clipboard.type != CopyKind.Nothing">Clipboard {{ CopyKind[clipboard.type] }}</div>
</template>
<style scoped>
div {
  position: fixed;
  height: 20px;
  padding: 5px;
  bottom: 0px;
  background-color: aquamarine;
}
</style>
