<script setup lang="ts">
import { inject } from "vue";
import { Enums } from "../Enums";
import { Game } from "../Game";
import { Localization } from "../localization/index";
import { CustomSelectType } from "../type/CustomSelectType";
import { HeroKind } from "../type/HeroKind";
import { MonsterColor } from "../type/MonsterColor";

const props = defineProps<{ type: CustomSelectType }>();
const game = inject<Game>("game");

const model = defineModel();

function getType(type: CustomSelectType) {
  let result = [];

  switch (type) {
    case CustomSelectType.EquipmentEffectKind:
      for (let index = 0; index < Enums.EquipmentEffectKind; index++) result.push(Localization.EquipmentEffectName(index));
      break;
    case CustomSelectType.MonsterSpecies:
      for (let index = 0; index < Enums.MonsterSpecies; index++) result.push(Localization.MonsterSpeciesName(index));
      break;
    case CustomSelectType.MonsterColor:
      for (let index = 0; index < Enums.MonsterColor; index++) result.push(MonsterColor[index]);
      break;
    case CustomSelectType.ChallengeMonsterKind:
      return ["Florzporb", "Arachnetta", "Guardian Kor", "Nostro", "Lady Emelda", "Nari Sune", "Octobaddie", "Bananoon", "Glorbliorbus", "Distortion Slime"];
    default:
      break;
  }

  return result;
}
</script>

<template>
  <template v-if="props.type != CustomSelectType.HeroKind">
    <select v-model="model" name="select">
      <option v-for="(name, index) in getType(props.type)" :value="index">{{ name }}</option>
    </select>
  </template>
  <template v-if="props.type == CustomSelectType.HeroKind">
    <div style="display: inline-block">
      <div style="display: flex">
        <img
          v-for="(_, index) in 6"
          :src="`img/hero/${HeroKind[index]}.png`"
          :class="{ inactive: index != game.data.source.currentHero }"
          :title="HeroKind[index]"
          @click="game.data.source.currentHero = index"
        />
      </div>
    </div>
  </template>
</template>

<style scoped>
img {
  border: 1px solid #6e6e6e;
}
img:hover {
  filter: brightness(110%);
}
.inactive {
  filter: opacity(60%) grayscale(60%) sepia(50%);
}

.inactive:hover {
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.1);
}
</style>
../data2 ../stores/heroStats
