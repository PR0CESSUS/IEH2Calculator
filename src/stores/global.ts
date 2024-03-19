import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import packageInfo from "../../package.json";

const STORE_NAME = "GlobalStore";
const DEFAULT_DATA = {
  version: "0.0.0",
  heroStatsTabSelected: 0,
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
  expedition: {
    playtime: 0,
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
    checkVersion() {
      const [major, minor, patch] = this.version.split(".");
      const [majorReal, minorReal, pathReal] = packageInfo.version.split(".");

      return major < majorReal || minor < minorReal || patch < pathReal;
    },

    updateVersion() {
      this.version = packageInfo.version;
    },

    Save() {
      localStorage.setItem(STORE_NAME, JSON.stringify(this));
    },
  },
});
