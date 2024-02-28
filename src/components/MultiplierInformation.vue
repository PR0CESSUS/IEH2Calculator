<script setup lang="ts">
import { ref, inject } from "vue";
import { Util } from "../Util";
import { useCompareColor } from "../composable/compareColor";
import { Localization } from "../localization";
import { MultiplierKind } from "../type/MultiplierKind";
import { NumberType } from "../type/NumberType";
import Tooltip from "./Tooltip.vue";
import { Game } from "../Game";
import { useDifferenceObject } from "../composable/differenceObject";
import { useComparePercent } from "../composable/comparePercent";
import { useCompareObject } from "../composable/compareObject";
const game = inject<Game>("game");
const init = ref(false);

const props = defineProps<{ name: string; multiplier: string; valueSuffix?: string; inline?: boolean; precision?: number }>();
//

function useCompareMultiplier(path: string) {
  const data = {
    main: Util.get(game.data, path),
    snap: Util.get(game.snap, path),
  };
  data.main.Calculate();
  data.snap.Calculate();

  return {
    raw: data,
    main: data.main.Snapshot(),
    snap: data.snap.Snapshot(),
    diff: {
      value: data.main.value - data.snap.value,
      additive: data.main.additive - data.snap.additive,
      additiveKind: useDifferenceObject(data.main.additiveKind, data.snap.additiveKind),
      multiplicativeKind: useDifferenceObject(data.main.multiplicativeKind, data.snap.multiplicativeKind),
      multiplicative: data.main.multiplicative - data.main.multiplicative,
      after: data.main.after - data.snap.after,
      afterKind: useDifferenceObject(data.main.afterKind, data.snap.afterKind),
    },
    compare: {
      value: useComparePercent(data.main.value, data.snap.value, false),
      after: useComparePercent(data.main.after, data.snap.after, false),
      additive: useComparePercent(data.main.additive, data.snap.additive, false),
      additiveKind: useCompareObject(data.main.additiveKind, data.snap.additiveKind),
      multiplicativeKind: useCompareObject(data.main.multiplicativeKind, data.snap.multiplicativeKind),
      multiplicative: useComparePercent(data.main.multiplicative, data.snap.multiplicative),
      afterKind: useCompareObject(data.main.afterKind, data.snap.afterKind),
    },
  };
}

//

const multiplier = ref(useCompareMultiplier(props.multiplier));

// onBeforeMount(() => {
//   if (props.name == "ATK") {
//     console.log("onBeforeMount", multiplier.value);
//     multiplier.value = useCompareMultiplier(props.multiplier);
//   }
// });
// onUpdated(() => {
//   multiplier.value = useCompareMultiplier(props.multiplier);
// });
// if (props.name == "Expedition Slots") console.log(multiplier.value);
</script>

<template>
  <Tooltip>
    <p :class="!props.inline ? 'underline' : ''" @mouseover.once="init = true" @click="console.log(multiplier)">
      <span class="nameWrap" :class="multiplier.main.isLog ? 'yellow' : ''"
        >{{ name }}
        <template v-if="props.inline">
          <span :class="useCompareColor(multiplier.diff.value)">
            {{ multiplier.compare.value }} {{ Util.convertTo(multiplier.main.Value(), props.precision, multiplier.main.numberType) }} {{ props.valueSuffix }}</span
          >
        </template>
      </span>

      <span class="right" :class="useCompareColor(multiplier.diff.value)" v-if="!props.inline"
        >{{ multiplier.compare.value }} {{ Util.convertTo(multiplier.main.Value(), props.precision, multiplier.main.numberType) }} {{ props.valueSuffix }}</span
      >
    </p>
    <template #content v-if="init">
      <div style="width: 400px">
        <p class="name">{{ name }}</p>
        <p class="group">Additive:</p>
        <p v-for="[key, value] in Object.entries(multiplier.diff.additiveKind)">
          <template v-if="multiplier.main.additiveKind[key] > 0 || key == 'Base' || multiplier.snap.additiveKind[key] > 0">
            -{{ Localization.StatsBreakdown(MultiplierKind[key]) }}
            <span class="right" :class="useCompareColor(value as number)"
              >{{ multiplier.compare.additiveKind[key] }} {{ Util.convertTo(multiplier.main.additiveKind[key], props.precision, multiplier.main.numberType) }}</span
            >
          </template>
        </p>
        <p>
          Additive Total:<span class="right" :class="useCompareColor(multiplier.diff.additive)"
            >{{ multiplier.compare.additive }} {{ Util.convertTo(multiplier.main.additive, props.precision, multiplier.main.numberType) }}</span
          >
        </p>
        <br />
        <p class="group">Multiplicative:</p>
        <p v-for="[key, value] in Object.entries(multiplier.diff.multiplicativeKind)">
          <template v-if="multiplier.main.multiplicativeKind[key] > 1 || key == 'Base'">
            -{{ Localization.StatsBreakdown(MultiplierKind[key]) }}
            <span class="right" :class="useCompareColor(value as number)"
              >{{ multiplier.compare.multiplicativeKind[key] }} {{ Util.convertTo(multiplier.main.multiplicativeKind[key], props.precision, NumberType.Percent) }}</span
            >
          </template>
        </p>
        <p>
          Multiplicative Total:
          <span class="right" :class="useCompareColor(multiplier.diff.multiplicative)"
            >{{ multiplier.compare.multiplicative }} {{ Util.convertTo(multiplier.main.multiplicative, props.precision, NumberType.Percent) }}</span
          >
        </p>
        <br />
        <div name="superdungeon" v-if="multiplier.main.isLog">
          <p>
            Temporary Total: <span class="right">{{ Util.convertTo(multiplier.main.temp, props.precision, multiplier.main.numberType) }}</span>
          </p>
          <br />
          <p style="color: yellow; text-decoration: underline; font-size: 14px; text-decoration-color: #fff">Super Dungeon:</p>
          <p>
            Base + Log10([Temporary Total])<span class="right"> {{ Util.convertTo(multiplier.main.log, props.precision, multiplier.main.numberType) }}</span>
          </p>
          <br />
        </div>

        <div v-if="multiplier.main.after != 0">
          <p class="group">After:</p>
          <div v-for="[key, value] in Object.entries(multiplier.diff.afterKind)">
            <template v-if="multiplier.main.afterKind[key] > 1">
              -{{ Localization.StatsBreakdown(MultiplierKind[key]) }}
              <span class="right" :class="useCompareColor(value as number)"
                >{{ multiplier.compare.afterKind[key] }} {{ Util.convertTo(multiplier.main.afterKind[key] | 0, props.precision, multiplier.main.numberType) }}</span
              ></template
            >
          </div>
          <p>
            After Total:
            <span class="right" :class="useCompareColor(multiplier.diff.after)"
              >{{ multiplier.compare.after }} {{ Util.convertTo(multiplier.main.after, props.precision, multiplier.main.numberType) }}</span
            >
          </p>
          <br />
        </div>
        <p style="font-size: 14px">
          Total:<span name="value-total" class="right" :class="useCompareColor(multiplier.diff.value)"
            >{{ multiplier.compare.value }} {{ Util.convertTo(multiplier.main.Value(), props.precision, multiplier.main.numberType) }} {{ props.valueSuffix }}</span
          >
        </p>
      </div>
    </template>
  </Tooltip>
</template>

<style scoped>
.right {
  float: right;
}

.group {
  text-decoration: underline;
  font-size: 14px;
}

.name {
  margin-top: 0;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 12px;
  margin: 0px;
}

div {
  font-size: 12px;
}

.nameWrap {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 160px;
}

.value {
  float: right;
  overflow: visible;
  /* unicode-bidi: bidi-override; */
  direction: rtl;
  /* overflow-x: visible; */
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
}
[name="value"] {
  float: right;
  unicode-bidi: bidi-override;
  direction: ltr;
  /* background-color: aqua; */
  /* overflow-x: visible; */
}
</style>
../data/Multiplier
