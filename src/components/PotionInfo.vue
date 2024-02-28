<script setup lang="ts">
import { inject, ref } from "vue";
import { Enums } from "../Enums";
import { Localization } from "../localization/index";
import { PotionKind } from "../type/PotionKind";
import Tooltip from "./Tooltip.vue";
import { PotionType } from "../type/PotionType";
import { Game } from "../Game";

const props = defineProps<{ id: number }>();
const init = ref(false);
const img = ref();
const game = inject<Game>("game");
const potion = game.data.inventory.potionSlots[props.id];
const dialog = ref<HTMLDialogElement>();

function getIconPath() {
  const basePath = "img/equip";
  if (potion.kind == 0) {
    return `${basePath}/EquipSlotPotion.png`;
  } else {
    return `${basePath}/${PotionKind[potion.kind]}.png`;
  }
}
</script>

<template>
  <div>
    <Tooltip style="width: 700px">
      <img
        :tabindex="props.id"
        ref="img"
        class="icon48"
        :src="getIconPath()"
        @click="potion.isDisabled() ? null : dialog.showModal()"
        @mouseover.once="init = true"
        @mouseover="img.focus()"
        :class="potion.isDisabled() ? 'disabled' : ''"
      />
      <template #content v-if="potion.kind != 0 && init">
        <div class="head">
          <img class="icon96" :src="getIconPath()" />

          {{ Localization.PotionName(potion.kind) }}
          <span v-if="potion.type != PotionType.Trap"
            >&lt; <span class="green">Lv {{ potion.level }}</span> &gt;</span
          ><br /><br />
          <p style="font-size: 12px">-Type : {{ Localization.PotionTypeString(potion.type) }}</p>
          <p style="font-size: 12px">-Stack #: {{ potion.stack }} / 30</p>
        </div>
        <h5>Equipped Effect</h5>
        <p>{{ Localization.PotionEffect(potion.kind, potion.effectValue, false) }}</p>
      </template>
    </Tooltip>
    <template v-if="init">
      <dialog ref="dialog" @mousedown="if (($event.target as HTMLDialogElement).nodeName == dialog.nodeName) dialog.close();">
        <div class="wrapper">
          <div class="head">
            <img class="icon96" :src="getIconPath()" />
            <select v-model.lazy.number="potion.kind" name="kind">
              <option v-for="(_, index) in Enums.PotionKind" :value="index">
                {{ Localization.PotionName(index) }}
              </option>
            </select>
            <p style="font-size: 12px">-Type : {{ Localization.PotionTypeString(potion.type) }}</p>
            <p>-Stack #: <input v-model.lazy.number="potion.stack" size="6" name="stack" /> / 30</p>
          </div>

          <h5>Equipped Effect</h5>
          <p>{{ Localization.PotionEffect(potion.kind, potion.effectValue, false) }}</p>
        </div>
      </dialog>
    </template>
  </div>
</template>

<style scoped>
.head {
  height: 100px;
  font-size: 14px;
}
dialog {
  padding: 0;
  background: rgba(51, 51, 51, 0.95);
  color: #fff;
  border-width: 1px;
  border-color: #525252;
}
.wrapper {
  padding: 10px;
  width: 700px;
}
.disabled {
  height: 100%;
  opacity: 0.4;
}
</style>
../data2 ../stores/heroStats
