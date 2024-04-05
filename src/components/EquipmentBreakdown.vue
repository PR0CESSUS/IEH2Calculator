<script setup lang="ts">
import { Util } from "@/Util";
import { applyLoadoutForge } from "@/data/Equipment/EquipmentApply";
import { clearLoadout } from "@/data/Equipment/EquipmentClear";
import { Localization } from "@/localization";
import { CustomSelectType } from "@/type/CustomSelectType";
import { SDGemKind } from "@/type/SDGemKind";
import { computed, inject, ref } from "vue";
import { Game } from "../Game";
import AppDialog from "./AppDialog.vue";
import AppDownload from "./AppDownload.vue";
import AppInput from "./AppInput.vue";
import AppSelect from "./AppSelect.vue";
import EquipmentLoadoutImport from "./EquipmentLoadoutImport.vue";

const game = inject<Game>("game");

const loadoutBreakdownList = computed(() => game.data.inventory.GetLoadoutBreakdownList());
const applyForgeValues = ref([0, 0, 0, 0, 0, 0, 0]);
const limitForge = computed(() => applyForgeValues.value.filter((element) => element != 0).length);

const enchantementsSlots = computed(() => game.data.inventory.GetLoadoutEnchantments(false));

const addEnchantementsSlots = ref([{ kind: 0, value: 0 }]);
</script>

<template>
  <div class="container">
    <h1 style="text-align: center">Equipment Breakdown</h1>

    <div style="display: flex; column-gap: 10px; flex-wrap: wrap; justify-content: space-evenly">
      <div>
        <h3>Equipment List</h3>
        <div>
          <h5 class="orange">Weapon:</h5>
          <p v-for="(value, key) in loadoutBreakdownList.weapons">{{ value }} - {{ key }}</p>
        </div>
        <div>
          <h5 class="orange">Armor:</h5>
          <p v-for="(value, key) in loadoutBreakdownList.armors">{{ value }} - {{ key }}</p>
        </div>
        <div>
          <h5 class="orange">Jewelry:</h5>
          <p v-for="(value, key) in loadoutBreakdownList.jewelry">{{ value }} - {{ key }}</p>
        </div>
        <div>
          <h5 class="orange">Utility:</h5>
          <p v-for="(_, key) in loadoutBreakdownList.utility">{{ key }}</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Enchantements List</h3>
          <p v-for="(value, key) in loadoutBreakdownList.enchants">{{ value }} - {{ key }}</p>

          {{ Object.values(loadoutBreakdownList.enchants).reduce((a, b) => (a as number) + (b as number), 0) }} Total
        </div>
        <div>
          <h3>Anvil List</h3>
          <p v-for="(value, key) in loadoutBreakdownList.anvils">{{ value }} - {{ Localization.ForgeNameString(parseInt(key)) }}</p>
        </div>
      </div>
    </div>
    <hr />
    <!-- <button @click="new FindBestEquipment(game.data.stats.currentHero.stats[Stats.SkillProficiencyGain])">Generate</button> -->
    <button @click="game.data.equipment.ClearLoadout('all')">Clear Loadout</button>
    <!-- <button @click="new EquipmentBestEnchantment(game.data.stats.currentHero.stats[Stats.SkillProficiencyGain])" class="btn btn-gray">Find BEST Enchantements</button> -->

    <AppDialog>
      <template #trigger> <button>Change Loadout Forge</button></template>
      <template #content>
        <h2>Apply Forge to Loadout: (Limit: {{ limitForge }} / 4)</h2>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[0]" :disabled="limitForge == 4 && applyForgeValues[0] == 0" />- Required Hero Level of this equipment
          {{ Util.tDigit(applyForgeValues[0]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[1]" :disabled="limitForge == 4 && applyForgeValues[1] == 0" />- Required Ability Point of this equipment
          {{ Util.tDigit(applyForgeValues[1]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[2]" :disabled="limitForge == 4 && applyForgeValues[2] == 0" />- Proficiency Gain of this equipment
          {{ Util.percent(applyForgeValues[2]) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[3]" :disabled="limitForge == 4 && applyForgeValues[3] == 0" />- This equipment's effect
          {{ Util.percent(Math.min(applyForgeValues[3], game.data.source.sdGemLevels[SDGemKind.Kunzite] / 10 + 10)) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[4]" :disabled="limitForge == 4 && applyForgeValues[4] == 0" />- Decrease this equipment's current negative
          effects {{ Util.percent(Math.min(applyForgeValues[4], 1)) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[5]" :disabled="limitForge == 4 && applyForgeValues[5] == 0" />- This equipment's effect increment per level
          {{ Util.percent(Math.min(applyForgeValues[5], game.data.source.sdGemLevels[SDGemKind.Carnelian] / 100 + 1)) }}
        </p>
        <p class="orange">
          <input type="text" v-model.lazy.number="applyForgeValues[6]" :disabled="limitForge == 4 && applyForgeValues[6] == 0" />- This equipment's level
          {{ Util.tDigit(Math.min(applyForgeValues[6], game.data.source.sdGemLevels[SDGemKind.BlueTourmaline] + 100), 0) }}
        </p>
        <hr />
        <button
          @click="
            clearLoadout('forge');
            applyLoadoutForge(applyForgeValues);
          "
        >
          Apply
        </button>
      </template>
    </AppDialog>
    <AppDialog>
      <template #trigger> <button>Add Enchantements</button></template>
      <template #content>
        <h2>
          Add Enchantements to Loadout
          <span :class="addEnchantementsSlots.reduce((a, b) => a + b.value, 0) <= enchantementsSlots.length ? 'green' : 'red'"
            >{{ addEnchantementsSlots.reduce((a, b) => a + b.value, 0) }} / {{ enchantementsSlots.length }}</span
          >
        </h2>

        <template v-for="enchant in addEnchantementsSlots">
          <div>
            <AppSelect :type="CustomSelectType.EquipmentEffectKind" v-model="enchant.kind" />
            <AppInput v-model="enchant.value" />
          </div>
        </template>
        <button @click="addEnchantementsSlots.push({ kind: 0, value: 0 })">Add</button>

        <hr />
        <button @click="game.data.inventory.ApplyLoadoutEnchantments(addEnchantementsSlots)">Apply</button>
      </template>
    </AppDialog>

    <AppDownload filename="loadout" :target="game.data.inventory.CopyCurrentLoadout()">Export</AppDownload>
    <EquipmentLoadoutImport />
  </div>
</template>

<style scoped>
.container {
  width: 700px;
  padding: 10px;
  font-size: 10px;
}
</style>
@use/EquipmentBest
