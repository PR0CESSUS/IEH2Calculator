import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { DataDefault } from "../data/DataDefault";

const STORE_NAME = "SaveFileSnapshot";
const DEFAULT_DATA = new DataDefault();

export const useSaveFileSnapshot = defineStore(STORE_NAME, {
  state: () => useStorage(STORE_NAME, DEFAULT_DATA, localStorage, { mergeDefaults: true }),
});
