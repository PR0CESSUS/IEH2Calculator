<script setup lang="ts">
import { useEventListener } from "@vueuse/core";
import { ref } from "vue";
import AppDialog from "./AppDialog.vue";

const content = ref("Nothing");
const newLog = ref(false);
const dialog = ref(null);

useEventListener(document, "log", (evt: CustomEvent) => {
  //   console.log(evt);
  //   if (evt.detail.type == "start")
  if (evt.detail.type == "msg") {
    // dialog.value.dialog.showModal();
    content.value = evt.detail.data;
    newLog.value = true;
  }

  //@ts-ignore

  //   dialog.value.dialog.showModal();
  //   setTimeout(() => {
  //     show.value = false;
  //   }, 5000);
});
</script>

<template>
  <AppDialog ref="dialog">
    <template #trigger><button :class="{ yellow: newLog }" @click="newLog = false">Log</button></template>
    <template #content>
      <div style="width: 700px">
        <h1>Last log</h1>
        <pre>{{ content }}</pre>
      </div>
    </template>
  </AppDialog>
</template>
<style scoped>
.newLog {
}
</style>
