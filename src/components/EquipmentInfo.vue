<script setup lang="ts">
import { EquipmentForgeEffectKind } from "@/type/EquipmentForgeEffectKind";
import { computed, inject, ref } from "vue";
import { Enums } from "../Enums";
import { Game } from "../Game";
import { Util } from "../Util/index";
import { Localization } from "../localization/index";
import { useClipboardStore } from "../stores/clipboard";
import { CopyKind } from "../type/CopyKind";
import { EquipmentKind } from "../type/EquipmentKind";
import { EquipmentPart } from "../type/EquipmentPart";
import { EquipmentRarity } from "../type/EquipmentRarity";
import { EquipmentSetKind } from "../type/EquipmentSetKind";
import { HeroKind } from "../type/HeroKind";
import AppInput from "./AppInput.vue";
import Tooltip from "./Tooltip.vue";

const props = defineProps<{ id: number }>();
const init = ref(false);
const img = ref();
const game = inject<Game>("game");
const clipboard = useClipboardStore();
const equipment = game.data.inventory.equipmentSlots[props.id];
const dialog = ref<HTMLDialogElement>();

const freeForgeslot = computed(() => {
  let freeForgeslot = 4;
  equipment.forgeEffects.forEach((slot, index) => {
    if (slot.IsForged()) {
      freeForgeslot--;
    }
  });
  return freeForgeslot;
});

function getIconPath() {
  const basePath = "img/equip";
  if (equipment.slotId < 500) return `${basePath}/${EquipmentKind[equipment.kind]}.png`;
  if (equipment.kind == 0) {
    switch (equipment.slotPart) {
      case EquipmentPart.Weapon:
        return `${basePath}/EquipSlotWeapon.png`;
      case EquipmentPart.Armor:
        return `${basePath}/EquipSlotArmor.png`;
      case EquipmentPart.Jewelry:
        return `${basePath}/EquipSlotJewelry.png`;
      default:
        break;
    }
  } else {
    return `${basePath}/${EquipmentKind[equipment.kind]}.png`;
  }
}

function copyEvent(type: CopyKind) {
  clipboard.type = type;
  switch (type) {
    case CopyKind.Equipment:
      clipboard.data = equipment.Copy(CopyKind.Equipment);
      break;
    case CopyKind.OptionEffect:
      clipboard.data = equipment.Copy(CopyKind.OptionEffect);
      break;
    case CopyKind.ForgeEffects:
      clipboard.data = equipment.Copy(CopyKind.ForgeEffects);
      break;
    default:
      break;
  }
}

function pasteEvent() {
  switch (clipboard.type) {
    case CopyKind.Equipment:
      equipment.Paste(CopyKind.Equipment, clipboard.data);
      break;
    case CopyKind.OptionEffect:
      equipment.Paste(CopyKind.OptionEffect, clipboard.data);
      break;
    case CopyKind.ForgeEffects:
      equipment.Paste(CopyKind.ForgeEffects, clipboard.data);
      break;
    default:
      break;
  }
  // game.data.requireUpdate.value = true;
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
        @click="equipment.isDisabled() ? null : dialog.showModal()"
        @mouseover.once="init = true"
        @mouseover="img.focus()"
        :class="equipment.isDisabled() && equipment.slotId > 500 ? 'disabled' : ''"
        @keydown.ctrl.c="copyEvent(CopyKind.Equipment)"
        @keydown.ctrl.v="pasteEvent()"
      />
      <template #content v-if="equipment.kind != 0 && init">
        <div class="head">
          <img class="icon96" :src="getIconPath()" />
          <span class="purple" v-if="equipment.globalInfo.isArtifact">[Artifact]</span>
          {{ Localization.EquipmentName(equipment.kind) }}
          &lt;
          <span class="green"
            >Lv {{ equipment.level }}
            {{ equipment.forgeEffects[EquipmentForgeEffectKind.EqLevel].effectValue > 0 ? ` + ${equipment.forgeEffects[EquipmentForgeEffectKind.EqLevel].effectValue}` : "" }}</span
          >
          &gt;
          <span :class="enchant.isAfter ? 'purple' : 'yellow'" v-for="(enchant, index) in equipment.optionEffects">
            <template v-if="index < equipment.totalOptionNum.Value()">
              [
              {{ Localization.EquipmentEffectName(enchant.kind) }}
              {{ enchant.kind != 0 ? enchant.level : "" }}
              ]
            </template>
          </span>
        </div>
        <h5>Information</h5>
        <p>-Type : {{ EquipmentPart[equipment.globalInfo.part] }}</p>
        <p>-Rarity : {{ EquipmentRarity[equipment.globalInfo.rarity] }}</p>
        <p v-if="equipment.setKind">
          -Unique : {{ EquipmentSetKind[equipment.globalInfo.setKind] }} Set
          <span class="green">[Effect Bonus {{ Util.percent(equipment.EffectMultiplierFromSetItem(equipment.heroKind) - 1) }}]</span> Equipping
          <span class="green">{{ game.data.inventory.SetItemEquippedNum(equipment.setKind, equipment.heroKind) }}</span> / 8
        </p>
        <br />

        <h5>
          Effect
          <span class="yellow">{{
            equipment.EQAbusePercent(equipment.heroKind) < 1 ? `Efficiency(Equipment Tenacity) : ${Util.percent(equipment.EQAbusePercent(equipment.heroKind))}` : ""
          }}</span>
        </h5>
        <p
          v-for="(effect, index) in equipment.globalInfo.effects"
          v-html="
            Localization.EquipmentEffect(
              effect.kind,
              equipment.EffectValue(equipment.OriginalEffectValue(index), equipment.heroKind),
              false,
              equipment.EffectValue(equipment.OriginalEffectIncrementPerLevel(index), equipment.heroKind),
              false
            )
          "
        ></p>

        <p v-for="(effect, index) in equipment.optionEffects">
          <template v-if="index < equipment.totalOptionNum.Value()">
            {{ Localization.EquipmentEffect(effect.kind, equipment.EffectValue(effect.effectValue, equipment.heroKind)) }}
            <span class="gray" v-if="effect.kind != 0"
              >({{ Localization.EquipmentEffect(effect.kind, equipment.EffectValue(effect.MinEffectValue(), equipment.heroKind), false, 0, true) }} ~
              {{ Localization.EquipmentEffect(effect.kind, equipment.EffectValue(effect.MaxEffectValue(), equipment.heroKind), false, 0, true) }})</span
            >
          </template>
        </p>

        <br />

        <h5>Forged Effect</h5>
        <p class="orange" v-for="forge in equipment.forgeEffects">
          <template v-if="forge.effectValue > 0"> - {{ forge.EffectString() }} </template>
        </p>
        <p class="orange" v-for="_ in freeForgeslot">- [Forging Available]</p>
        <br />

        <h5>Proficiency</h5>
        <p v-for="(effect, index) in equipment.globalInfo.levelMaxEffects">
          -{{ HeroKind[index] }} &lt; <span class="green">Lv {{ equipment.globalInfo.levels[index].value }}</span> &gt;:
          <span class="green"
            >[{{ Localization.EquipmentEffectName(effect.kind) }} +
            {{
              effect.kind == 0
                ? equipment.globalInfo.rarity == EquipmentRarity.Epic
                  ? 3
                  : equipment.globalInfo.rarity == EquipmentRarity.Rare || equipment.globalInfo.rarity == EquipmentRarity.SuperRare
                  ? 2
                  : 1
                : Util.convertTo(equipment.EffectValue(effect.EffectValue(0), equipment.heroKind), 2, effect.valueKind)
            }}]</span
          >
        </p>
      </template>
    </Tooltip>
    <template v-if="init">
      <dialog ref="dialog" @mousedown="if (($event.target as HTMLDialogElement).nodeName == dialog.nodeName) dialog.close();">
        <div class="wrapper">
          <div class="head">
            <img class="icon96" :src="getIconPath()" />
            <select name="kind" @change="equipment.kind = parseInt(($event.target as HTMLOptionElement).value)">
              <option v-if="equipment.slotPart != EquipmentPart.Weapon" value="0">Nothing</option>
              <option
                v-for="eq in game.data.equipment.globalInformations.filter((element) => {
                  return element.part == equipment.slotPart;
                })"
                :selected="eq.kind == equipment.kind"
                :value="eq.kind"
              >
                {{ Localization.EquipmentName(eq.kind) }}
              </option>
            </select>
            &lt;
            <span class="green"
              >Lv {{ equipment.level }}
              {{
                equipment.forgeEffects[EquipmentForgeEffectKind.EqLevel].effectValue > 0 ? ` + ${equipment.forgeEffects[EquipmentForgeEffectKind.EqLevel].effectValue}` : ""
              }}</span
            >
            &gt;
            <div>
              <span v-for="(level, index) in equipment.globalInfo.levels">{{ HeroKind[index] }} <AppInput v-model="level.value" :size="4" /></span>
            </div>
          </div>
          <h5>Information</h5>
          <p>-Type : {{ EquipmentPart[equipment.globalInfo.part] }}</p>
          <p>-Rarity : {{ EquipmentRarity[equipment.globalInfo.rarity] }}</p>
          <p v-if="equipment.setKind">
            -Unique : {{ EquipmentSetKind[equipment.globalInfo.setKind] }} Set
            <span class="green">[Effect Bonus {{ Util.percent(equipment.EffectMultiplierFromSetItem(equipment.heroKind) - 1) }}]</span> Equipping
            <span class="green">{{ game.data.inventory.SetItemEquippedNum(equipment.setKind, equipment.heroKind) }}</span> / 8
          </p>
          <br />
          <h5>Effect</h5>
          <p
            v-for="(effect, index) in equipment.globalInfo.effects"
            v-html="
              Localization.EquipmentEffect(
                effect.kind,
                equipment.EffectValue(equipment.OriginalEffectValue(index), equipment.heroKind),
                false,
                equipment.EffectValue(equipment.OriginalEffectIncrementPerLevel(index), equipment.heroKind),
                false
              )
            "
          ></p>
          <br />
          <p v-for="(effect, index) in equipment.optionEffects" style="display: flex">
            <template v-if="index < equipment.totalOptionNum.Value()">
              <select v-model="effect.kind" name="optionKind">
                <option v-for="(_, i) in Enums.EquipmentEffectKind" :value="i">{{ Localization.EquipmentEffectName(i) }}</option>
              </select>
              <template v-if="effect.kind == 0"
                >&nbsp;
                <button class="small" @click="equipment.FindMaxEnchantDPS(effect.optionId)">Find MAX DPS</button>
              </template>
              <template v-if="effect.kind">
                &nbsp;Lv&nbsp;
                <select v-model="effect.level" name="optionLevel">
                  <option v-for="i in effect.MaxLevel()" :value="i" :selected="effect.level == i">{{ i }}</option>
                </select>

                <input
                  v-model.lazy="effect.effectValue"
                  type="range"
                  step="0.00000001"
                  :min="effect.MinEffectValue()"
                  :max="effect.MaxEffectValue()"
                  :value="effect.effectValue"
                  name="optionValue"
                />
                {{ Localization.EquipmentEffect(effect.kind, equipment.EffectValue(effect.effectValue, equipment.heroKind), false, 0, true) }}
              </template>
            </template>
          </p>
          <br />
          <p v-for="forge in equipment.forgeEffects" class="orange">
            <input type="text" v-model.number.lazy="forge.effectValue" name="forgeValue" size="8" />- {{ forge.EffectString() }}
          </p>
          <br />
          <button @click="copyEvent(CopyKind.OptionEffect)" class="btn btn-gray">Copy All Enchantments</button>
          <button @click="copyEvent(CopyKind.ForgeEffects)" class="btn btn-gray">Copy All Anvil Effects</button>
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
  z-index: 100;
}
.wrapper {
  padding: 10px;
  width: 700px;
}
.disabled {
  height: 100%;
  opacity: 0.4;
}
.icon96 {
  position: relative;
  left: 0px;
  float: left;
  padding: 0;
  padding-bottom: 0px;
  margin: 0;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  border-top-color: #c2a500;
  border-bottom-color: #c2a500;
  border-left-color: #c2a500;
  border-right-color: #c2a500;
  width: 96px;
  height: 96px;
  margin-right: 10px;
}
.icon48 {
  width: 48px;
  height: 48px;
  position: relative;
  left: 0px;
  float: left;
  padding: 0;
  padding-bottom: 0px;
  margin: 0;
  vertical-align: middle;
}
</style>
../data2 ../stores/heroStats
