<script setup lang="ts">
import { computed, inject } from "vue";
import { Game } from "../Game";
import Tooltip from "./Tooltip.vue";
import { Util } from "@/Util";
const game = inject<Game>("game");
// game.data.battle.skillSet.Initialize();
const skillSet = computed(() => game.data.battle.skillSet);
</script>

<template>
  <div style="display: flex">
    <div>
      Class Skill
      <div class="block">
        <template v-for="skill in skillSet.currentSkillSet">
          <Tooltip>
            <template #trigger>
              <img v-if="skill" :src="`img/skill/${skill.NameURL()}.png`" @click="console.log(skill)" :class="{ disabled: !skill.IsEquipped(game.data.source.currentHero) }" />
              <img v-else title="Skill Slot" :src="`img/skill/Skillslot.png`" />
            </template>

            <template #content v-if="skill">
              <p>
                {{ skill.NameString() }}
                <span class="green">Lv {{ Util.tDigit(skill.level.value, 0) }} + {{ Util.tDigit(skill.levelBonus, 0) }} </span>
                <span class="orange"> &lt; Rank {{ skill.rank }} &gt;</span>
              </p>
              <p>{{ skill.DamageString() }}</p>
              <p>- Cast Time : {{ Util.tDigit(skill.CalculateInterval(game.data.battle.hero), 3) }} sec</p>
            </template>
          </Tooltip>
        </template>
      </div>
    </div>
    <div>
      Global Skill
      <div class="block">
        <template v-for="skill in skillSet.currentGlobalSkillSet">
          <Tooltip>
            <template #trigger>
              <img v-if="skill" :title="skill.NameURL()" :src="`img/skill/${skill.NameURL()}.png`" :class="{ disabled: !skill.IsEquipped(game.data.source.currentHero) }" />
              <img v-else title="Skill Slot" :src="`img/skill/Skillslot.png`" />
            </template>

            <template #content v-if="skill">
              <p>
                {{ skill.NameString() }}
                <span class="green">Lv {{ Util.tDigit(skill.level.value, 0) }} + {{ Util.tDigit(skill.levelBonus, 0) }} </span>
                <span class="orange"> &lt; Rank {{ skill.rank }} &gt;</span>
              </p>
              <p>{{ skill.DamageString() }}</p>
              <p>- Cast Time : {{ Util.tDigit(skill.CalculateInterval(game.data.battle.hero), 3) }} sec</p>
            </template>
          </Tooltip>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.disabled {
  filter: grayscale(1);
}

.part {
  display: inline-block;
  margin-right: 8px;
}

.block {
  display: grid;
  grid-template-columns: repeat(4, 48px);
  gap: 0px;
  margin-right: 10px;
}

ul {
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 5px;
  margin-left: 0;
  padding: 0;
  font-size: 0;
}

li {
  display: inline;
  font-size: 10px;
  background-image: linear-gradient(#2b487f, #20365f);
  margin-left: 0px;
  padding: 5px 5px 5px 5px;
  background-color: #264374;
  border-style: outset;
  border-width: 2px;
  cursor: pointer;

  border-top-color: #5476ae;
  border-bottom-color: #203151;
  border-left-color: #203865;
  border-right-color: #203c6e;
}

li:hover {
  filter: brightness(120%);
}

.equipment {
  /* background-color: red; */
  border-style: solid;
  border-width: 1px;
  border-color: rgb(143, 0, 0);
  font-size: 11px;
  padding: 0;
  width: 48px;
  height: 48px;
}

.equipment:hover {
  border-color: #01f304;
  border-style: solid;
  border-width: 1px;
}
</style>
../data2 ../stores/heroStats
