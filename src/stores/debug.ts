import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const STORE_NAME = "Debug";
const DEFAULT_DATA = {
  active: false,
};

export const useDebugStore = defineStore(STORE_NAME, {
  state: () => useStorage(STORE_NAME, DEFAULT_DATA, localStorage, { mergeDefaults: true }),

  actions: {
    set(value) {
      console.log(value);
    },
    increment() {
      this.count++;
      // this.Save();
    },
  },
});
