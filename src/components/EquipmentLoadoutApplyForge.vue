<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { Util } from "../Util/index";
import { Game } from "@/Game";
import { SDGemKind } from "@/type/SDGemKind";

const props = defineProps<{
  manualApply?: boolean;
  initialValues?: number[];
}>();
const game = inject<Game>("game");

const forgeValues = ref(props.initialValues ? props.initialValues : [0, 0, 0, 0, 0, 0, 0]);

const limitForge = computed(() => forgeValues.value.filter((element) => element != 0).length);

function applyForge() {
  game.data.equipment.ClearLoadout("forge");
  game.data.equipment.ApplyLoadoutForge(forgeValues.value);
}

defineExpose({ applyForge, forgeValues });
</script>

<template>
  <h2>Apply Anvils to Loadout: (Limit: {{ limitForge }} / 4)</h2>
  <p class="orange">
    <input type="text" v-model.lazy.number="forgeValues[0]" :disabled="limitForge == 4 && forgeValues[0] == 0" />- Required Hero Level of this equipment
    {{ Util.tDigit(forgeValues[0]) }}
  </p>
  <p class="orange">
    <input type="text" v-model.lazy.number="forgeValues[1]" :disabled="limitForge == 4 && forgeValues[1] == 0" />- Required Ability Point of this equipment
    {{ Util.tDigit(forgeValues[1]) }}
  </p>
  <p class="orange">
    <input type="text" v-model.lazy.number="forgeValues[2]" :disabled="limitForge == 4 && forgeValues[2] == 0" />- Proficiency Gain of this equipment
    {{ Util.percent(forgeValues[2]) }}
  </p>
  <p class="orange">
    <input type="text" v-model.lazy.number="forgeValues[3]" :disabled="limitForge == 4 && forgeValues[3] == 0" />- This equipment's effect
    {{ Util.percent(Math.min(forgeValues[3], game.data.source.sdGemLevels[SDGemKind.Kunzite] / 10 + 10)) }}
  </p>
  <p class="orange">
    <input type="text" v-model.lazy.number="forgeValues[4]" :disabled="limitForge == 4 && forgeValues[4] == 0" />- Decrease this equipment's current negative effects
    {{ Util.percent(Math.min(forgeValues[4], 1)) }}
  </p>
  <p class="orange">
    <input type="text" v-model.lazy.number="forgeValues[5]" :disabled="limitForge == 4 && forgeValues[5] == 0" />- This equipment's effect increment per level
    {{ Util.percent(Math.min(forgeValues[5], game.data.source.sdGemLevels[SDGemKind.Carnelian] / 100 + 1)) }}
  </p>
  <p class="orange">
    <input type="text" v-model.lazy.number="forgeValues[6]" :disabled="limitForge == 4 && forgeValues[6] == 0" />- This equipment's level
    {{ Util.tDigit(Math.min(forgeValues[6], game.data.source.sdGemLevels[SDGemKind.BlueTourmaline] + 100), 0) }}
  </p>
  <template v-if="manualApply">
    <hr />
    <button @click="applyForge">Apply</button>
  </template>
</template>

<style scoped></style>
