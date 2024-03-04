import { defineStore } from "pinia";
import { ref } from "vue";
import { CopyKind } from "../type/CopyKind";

export const useClipboardStore = defineStore("clipboard", () => {
  const data = ref();
  const type = ref(CopyKind.Nothing);

  return { data, type };
});
