<script setup lang="ts">
import { inject } from "vue";
import { useGlobalStore } from "../stores/global";
import { Localization } from "../localization/index";
import { Util } from "../Util/index";
import { Element } from "../type/Element";
import { MonsterSpecies } from "../type/MonsterSpecies";
import { HeroKind } from "../type/HeroKind";
import { Game } from "../Game";
const game = inject<Game>("game");
const globalStore = useGlobalStore();

const SlayerOilValue = game.data.stats.ElementSlayerDamage(game.data.source.currentHero, game.data.battle.CurrentSlayerElement()).Value();
const skill = game.data.skill.Skill(0, game.data.source.currentHero);
const hero = game.data.battle.hero;
const monster = globalStore.monster.species == MonsterSpecies.ChallengeBoss ? game.data.battle.challengeMonster : game.data.battle.monster;
const damage = skill.DamageOrigin(hero, false);
const element = SlayerOilValue > 0 ? game.data.battle.CurrentSlayerElement() : skill.element;
const skillCount = game.data.source.currentHero == HeroKind.Angel ? skill.HitCount() / 5 : skill.HitCount();
const info = monster.AttackedInfo(hero, damage, skillCount, true, element);
</script>

<template>
  <div style="margin-left: 10px">
    <p>
      Skill: {{ Localization.SkillName(game.data.source.currentHero, 0) }}
      <span class="green">Lv {{ Util.tDigit(skill.level, 0) }} + {{ Util.tDigit(skill.levelBonus, 0) }} </span>
      <span class="orange"> &lt; Rank {{ skill.rank }} &gt;</span>
    </p>
    <p>- {{ Element[skill.element] }} Damage: {{ Util.tDigit(skill.DamageOrigin(hero, true)) }} * {{ Util.tDigit(skill.HitCount(), 0) }}</p>
    <p>- Cast Time: {{ Util.tDigit(skill.CalculateInterval(hero), 3) }} sec</p>
    <hr />
    <h4>Skill Damage Breakdown</h4>
    <table style="font-size: 12px; border-collapse: collapse">
      <tr>
        <td>Base:</td>
        <td>{{ game.data.source.isSuperDungeon ? Util.tDigit(Math.log10(Math.max(1.0, skill.Damage()))) : Util.tDigit(skill.Damage()) }}</td>
      </tr>
      <tr>
        <td>{{ skill.element == Element.Physical ? "ATK" : "MATK" }}:</td>
        <td>{{ game.data.source.isSuperDungeon ? "+" : "*" }} {{ Util.tDigit(skill.element == Element.Physical ? hero.atk : hero.matk) }}</td>
      </tr>
      <tr>
        <td>Emelda</td>
        <td>* {{ Util.percent(game.data.skill.ladyEmeldaEffectMultiplier[game.data.source.currentHero].Value()) }}</td>
      </tr>
      <tr style="border-bottom: 1px solid #fff">
        <td>Total</td>
        <td>= {{ Util.tDigit(damage) }}</td>
      </tr>
      <tr>
        <td>Knowledge {{ MonsterSpecies[monster.species] }}</td>
        <td>* {{ Util.percent(monster.damageFactor) }}</td>
      </tr>
      <tr>
        <td>Element {{ Element[element] }}</td>
        <td>* {{ Util.percent(monster.DamageFactorElement(element)) }}</td>
      </tr>
      <tr>
        <td>Critical Damage</td>
        <td>* {{ Util.percent(hero.critDamage) }}</td>
      </tr>

      <template v-if="game.data.source.isSuperDungeon">
        <tr>
          <td>Damage Modifier</td>
          <td>* {{ Util.percent(game.data.battle.superDungeonCtrl.damageMultiplier.Value()) }}</td>
        </tr>
        <tr>
          <td>Damage Modifier vs Boss</td>
          <td>* {{ Util.percent(game.data.battle.superDungeonCtrl.sdChallengeBossDamageMultiplier.Value()) }}</td>
        </tr>
      </template>
      <tr style="border-bottom: 1px solid #fff">
        <td>Single Hit Damage</td>
        <td>= {{ Util.tDigit(info.DamagePerHit) }}</td>
      </tr>
      <tr>
        <td>Hit Count</td>
        <td>* {{ Util.tDigit(skill.HitCount(), 0) }}</td>
      </tr>
      <tr style="border-bottom: 1px solid #fff">
        <td>Total Damage Before Oil</td>
        <td>= {{ Util.tDigit(info.tempTotalDamage) }}</td>
      </tr>
      <tr>
        <td>Slayer Oil Bonus</td>
        <td>* {{ Util.percent(SlayerOilValue) }}</td>
      </tr>
      <tr style="border-bottom: 1px solid #fff">
        <td>Slayer Oil Damage</td>
        <td>= {{ Util.tDigit(info.slayerOilDamage) }}</td>
      </tr>
      <tr style="border-bottom: 1px solid #fff">
        <td>Total Damage Before Extra After</td>
        <td>= {{ Util.tDigit(info.totalBeforeExtraAfter) }}</td>
      </tr>
      <tr>
        <td>Extra After Bonus</td>
        <td>* {{ Util.percent(hero.extraAfterDamage) }}</td>
      </tr>
      <tr style="border-bottom: 1px solid #fff">
        <td>Extra After Damage</td>
        <td>= {{ Util.tDigit(info.extraAfterDamage) }}</td>
      </tr>
      <tr style="border-bottom: 1px solid #fff">
        <td>Total Damage</td>
        <td>= {{ Util.tDigit(info.totalDamage) }}</td>
      </tr>
      <tr>
        <td>Cast Time</td>
        <td>/ {{ Util.tDigit(skill.CalculateInterval(hero), 3) }}</td>
      </tr>
      <tr>
        <td>DPS</td>
        <td>= {{ Util.tDigit(info.totalDamage / skill.CalculateInterval(hero)) }}</td>
      </tr>
    </table>
  </div>
</template>
