import { defineStore } from "pinia";
import { ref } from "vue";

export const useHeroStatsStore = defineStore("heroStats", () => {
  const requireReload = ref(0);
  function Update() {
    requireReload.value = requireReload.value == 0 ? 1 : 0;
  }

  return { requireReload, Update };
});
