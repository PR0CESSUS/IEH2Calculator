import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const STORE_NAME = "GlobalStore";
const DEFAULT_DATA = {
  dataTabSelected: 0,
  heroStatsTabSelected: 0,
  monster: {
    species: 0,
    color: 0,
    level: 1,
    challange: 0,
  },
  rubyShard: {
    ticket: 0,
    failure: 0,
    dungeon: 0,
    modifier: 0,
    floor: 100,
  },
  dropChance: {
    level: 0,
    sdchance: 1,
  },
  guild: {
    targetLevel: 0,
    expPerHour: 0,
  },
  talisman: {
    perWA: Array(47).fill(0),
  },
};

export const useGlobalStore = defineStore(STORE_NAME, {
  state: () => useStorage(STORE_NAME, DEFAULT_DATA, localStorage, { mergeDefaults: true }),

  actions: {
    set(value) {
      console.log(value);
    },
    increment() {
      this.count++;
      // this.Save();
    },

    Save() {
      localStorage.setItem(STORE_NAME, JSON.stringify(this));
    },
  },
});
