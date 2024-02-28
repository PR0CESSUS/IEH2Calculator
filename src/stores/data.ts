import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { DataDefault } from "../Data/DataDefault";

const STORE_NAME = "SaveFileData";
const DEFAULT_DATA = new DataDefault();

export const useSaveFileData = defineStore(STORE_NAME, {
  state: () => useStorage(STORE_NAME, DEFAULT_DATA, localStorage, { mergeDefaults: true }),
});
