import { set, get, startCase } from "lodash";
import template from "./template.html";
import { HeroStats } from "../../data/Stats/HeroStats";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Util } from "../../Util";
import { Element } from "../../type/Element";
import { Stats } from "../../type/Stats";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { HeroKind } from "../../type/HeroKind";
import { HeroSuperStats } from "../../data/SuperStats/HeroSuperStats";
import { SuperDungeonController } from "../../data/SuperDungeon/SuperDungeonController";
import { MultiplierInfo } from "../../Multiplier";
import css from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";
import { ComponentHeroStat } from "../Hero-Stat";
import { SkillParameter } from "../../data/Skill/SkillParameter";
import { ComponentCustomSelect } from "../Select";
import { CustomSelectType } from "../../type/CustomSelectType";
import { Localization } from "../../localization";
import { SuperDungeonUpgradeKind } from "../../type/SuperDungeonUpgradeKind";
import { SKILL } from "../../data/Skill/SKILL";
import { BATTLE } from "../../data/Battle/BATTLE";

export class ComponentBattleSimulator extends HTMLElement {
  data: HeroStats;
  dataSD: SuperDungeonController;
  heroKind: HeroKind;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>@import "./styles-bundle.css"${css}</style>`;
    this.shadowRoot.innerHTML += template;
    this.heroKind = parseInt(this.dataset.hero) || globalThis.data.source.currentHero;

    this.data = globalThis.data.stats.heroes[this.heroKind];
    this.dataSD = globalThis.data.battles[this.heroKind].superDungeonCtrl;

    this.render();
  }

  getSkillInfo() {
    const htmlPlayer = this.shadowRoot.querySelector('[name="player"]') as HTMLDivElement;
    const skill = globalThis.data.skill.Skill(0, globalThis.data.source.currentHero);
    const monster = parseInt(this.dataset.species) == MonsterSpecies.ChallengeBoss ? globalThis.data.battle.challengeMonster : globalThis.data.battle.monster;
    const hero = globalThis.data.battle.hero;

    htmlPlayer.innerHTML += `<p>Skill: 
    ${Localization.SkillName(globalThis.data.source.currentHero, 0)} 
    <span class="green">Lv ${Util.tDigit(skill.level, 0)} + ${Util.tDigit(skill.levelBonus, 0)} </span>
    <span class="orange">&lt; Rank ${skill.rank} &gt;</span></p>`;
    htmlPlayer.innerHTML += `<p>- ${Element[skill.element]} Damage:  ${Util.tDigit(skill.DamageOrigin(hero, true))} * ${Util.tDigit(skill.HitCount(), 0)}</p>`;
    htmlPlayer.innerHTML += `<p>- Cast Time: ${Util.tDigit(skill.CalculateInterval(hero), 3)} sec</p>`;
    htmlPlayer.innerHTML += `<hr>`;
    htmlPlayer.innerHTML += `<h4>Skill Damage Breakdown</h4>`;
    // htmlPlayer.innerHTML += `<p>Skill Damage: ${Util.tDigit(skill.Damage())}</p>`;
    htmlPlayer.innerHTML += this.skillBreakdownString(skill, hero, monster);

    // htmlPlayer.innerHTML += `<p>Element: ${Element[element]}</p>`;

    // htmlPlayer.innerHTML += `<table>
    // <tr><td>Single Hit Damage: </td><td>${Util.tDigit(info.DamagePerHit)}</td></tr>
    // <tr><td>Every Hit Damage: </td><td>${Util.tDigit(info.tempTotalDamage)}</td></tr>
    // <tr><td>Slayer Oil Damage: </td><td>${Util.tDigit(info.slayerOilDamage)}</td><td><span class="green">(${SlayerOil})</span></td></tr>
    // <tr><td>Electric Damage: </td><td>${Util.tDigit(info.electricDamage)}</td></tr>
    // <tr><td>Extra After Damage: </td><td>${Util.tDigit(info.extraAfterDamage)}</td><td><span class="green">(${ExtraAfter})</span></td></tr>
    // <tr><td>Total Damage: </td><td>${Util.tDigit(info.totalDamage)}</td></tr>
    // <tr><td>DPS: </td><td>${Util.tDigit(info.totalDamage / skill.CalculateInterval(hero))}</td></tr>
    // </table>`;
  }

  skillData() {
    let data = {};
  }

  skillBreakdownString(skill: SKILL, hero: BATTLE, monster: BATTLE) {
    const SlayerOilValue = globalThis.data.stats.ElementSlayerDamage(globalThis.data.source.currentHero, globalThis.data.battle.CurrentSlayerElement()).Value();
    const damage = skill.DamageOrigin(hero, false);
    const element = SlayerOilValue > 0 ? globalThis.data.battle.CurrentSlayerElement() : skill.element;
    const skillCount = globalThis.data.source.currentHero == HeroKind.Angel ? skill.HitCount() / 5 : skill.HitCount();
    const info = monster.AttackedInfo(hero, damage, skillCount, true, element);
    let str = `<table style="font-size: 12px; border-collapse: collapse;">`;

    str += `<tr><td>Base: </td><td>${globalThis.data.custom.isSuperDungeon ? Util.tDigit(Math.log10(Math.max(1.0, skill.Damage()))) : Util.tDigit(skill.Damage())}</td></tr>`;
    if (globalThis.data.custom.isSuperDungeon) {
      if (skill.element == Element.Physical) {
        str += `<tr><td>ATK: </td><td>+ ${Util.tDigit(hero.atk)}</td></tr>`;
      } else {
        str += `<tr><td>MATK: </td><td>+ ${Util.tDigit(hero.matk)}</td></tr>`;
      }
    } else {
      if (skill.element == Element.Physical) {
        str += `<tr><td>ATK: </td><td>* ${Util.tDigit(hero.atk)}</td></tr>`;
      } else {
        str += `<tr><td>MATK: </td><td>* ${Util.tDigit(hero.matk)}</td></tr>`;
      }
    }

    str += `
    <tr><td>Emelda</td><td>* ${Util.percent(globalThis.data.skill.ladyEmeldaEffectMultiplier[globalThis.data.source.currentHero].Value())}</td></tr>
    <tr style="border-bottom: 1px solid #fff;"><td>Total</td><td>= ${Util.tDigit(damage)}</td></tr>
    <tr><td>Monster Damage Resistance</td><td>* ${Util.percent(monster.DamageCutRate(damage, element), 4)} vs ${Element[element]}</td></tr>
    <tr><td>Knowledge ${MonsterSpecies[monster.species]}</td><td>* ${Util.percent(monster.damageFactor)}</td></tr>
    <tr><td>Element ${Element[element]}</td><td>* ${Util.percent(monster.DamageFactorElement(element))}  </td></tr>
    <tr><td>Critical Damage</td><td>* ${Util.percent(hero.critDamage)}  </td></tr>`;
    if (globalThis.data.custom.isSuperDungeon) {
      str += `
      <tr><td>Damage Modifier</td><td>* ${Util.percent(globalThis.data.battle.superDungeonCtrl.damageMultiplier.Value())}  </td></tr>
      <tr><td>Damage Modifier vs Boss</td><td>* ${Util.percent(globalThis.data.battle.superDungeonCtrl.sdChallengeBossDamageMultiplier.Value())}  </td></tr>`;
    }

    str += `<tr style="border-bottom: 1px solid #fff;"><td>Single Hit Damage</td><td>= ${Util.tDigit(info.DamagePerHit)}  </td></tr>
    <tr><td>Hit Count</td><td>* ${Util.tDigit(skill.HitCount(), 0)}  </td></tr>
    <tr style="border-bottom: 1px solid #fff;"><td>Total Damage Before Oil</td><td>= ${Util.tDigit(info.tempTotalDamage)}  </td></tr>
    <tr><td>Slayer Oil Bonus</td><td>* ${Util.percent(SlayerOilValue)} </td></tr>
    <tr style="border-bottom: 1px solid #fff;"><td>Slayer Oil Damage</td><td>= ${Util.tDigit(info.slayerOilDamage)} </td></tr>
    <tr style="border-bottom: 1px solid #fff;"><td>Total Damage Before Extra After</td><td>= ${Util.tDigit(info.totalBeforeExtraAfter)} </td></tr>
    <tr><td>Extra After Bonus</td><td>* ${Util.percent(hero.extraAfterDamage)}</td></tr>
    <tr style="border-bottom: 1px solid #fff;"><td>Extra After Damage</td><td>= ${Util.tDigit(info.extraAfterDamage)}  </td></tr>
    <tr style="border-bottom: 1px solid #fff;"><td>Total Damage</td><td>= ${Util.tDigit(info.totalDamage)}  </td></tr>
    <tr><td>Cast Time</td><td>/ ${Util.tDigit(skill.CalculateInterval(hero), 3)}  </td></tr>
    <tr><td>DPS</td><td>= ${Util.tDigit(info.totalDamage / skill.CalculateInterval(hero))}</td></tr>
    </table>`;
    return str;
  }

  render(edit: boolean = false) {
    const HP = this.shadowRoot.querySelector('[name="HP"]') as HTMLParagraphElement;
    const DEF = this.shadowRoot.querySelector('[name="DEF"]') as HTMLParagraphElement;
    const MDEF = this.shadowRoot.querySelector('[name="MDEF"]') as HTMLParagraphElement;
    const fire = this.shadowRoot.querySelector('[name="Fire"]') as HTMLParagraphElement;
    const ice = this.shadowRoot.querySelector('[name="Ice"]') as HTMLParagraphElement;
    const thunder = this.shadowRoot.querySelector('[name="Thunder"]') as HTMLParagraphElement;
    const light = this.shadowRoot.querySelector('[name="Light"]') as HTMLParagraphElement;
    const dark = this.shadowRoot.querySelector('[name="Dark"]') as HTMLParagraphElement;

    this.getSkillInfo();

    // player.innerHTML += `new data`;
    // skill.innerHTML = Localization.SkillName(globalThis.data.source.currentHero, 0);
    // isCrit.innerHTML = globalThis.data.stats.heroes[this.heroKind].stats[Stats.PhysCritChance].Value() > 0.01 ? "true" : "false";
    // const element = Element.Physical;
    // const criticalDamage = globalThis.data.stats.heroes[this.heroKind].stats[Stats.CriticalDamage].After();
    // const originDamage = globalThis.data.skill.classSkills[this.heroKind].skills[0].Damage2(false);
    // const calculatedDamage = globalThis.data.battles[this.heroKind].monstersList[0].CalculateDamage(originDamage, criticalDamage, element, true);
    // const tempTotalDamagePerHitCount =
    //   calculatedDamage *
    //   globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.Value() *
    //   globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.Value();
    // (this.shadowRoot.querySelector(`[name="singleHitDamage"]`) as HTMLSpanElement).innerHTML = Util.convertTo(tempTotalDamagePerHitCount);
    // const boss = globalThis.data.monster.GlobalInformationChallengeBoss(this.getChallangeBoss());
    // console.log(boss);
    // (this.shadowRoot.querySelector('[name="level"]') as HTMLParagraphElement).innerHTML = `${this.getLevel()}`;
    if (parseInt(this.dataset.species) == MonsterSpecies.ChallengeBoss) {
      HP.innerHTML = Util.tDigit(globalThis.data.battle.challengeMonster.hp);
      DEF.innerHTML = Util.tDigit(globalThis.data.battle.challengeMonster.def);
      MDEF.innerHTML = Util.tDigit(globalThis.data.battle.challengeMonster.mdef);
      fire.innerHTML = Util.percent(globalThis.data.battle.challengeMonster.fire);
      ice.innerHTML = Util.percent(globalThis.data.battle.challengeMonster.ice);
      thunder.innerHTML = Util.percent(globalThis.data.battle.challengeMonster.thunder);
      light.innerHTML = Util.percent(globalThis.data.battle.challengeMonster.light);
      dark.innerHTML = Util.percent(globalThis.data.battle.challengeMonster.dark);
    } else {
      HP.innerHTML = Util.tDigit(globalThis.data.battle.monster.hp);
      DEF.innerHTML = Util.tDigit(globalThis.data.battle.monster.def);
      MDEF.innerHTML = Util.tDigit(globalThis.data.battle.monster.mdef);
      fire.innerHTML = Util.percent(globalThis.data.battle.monster.fire);
      ice.innerHTML = Util.percent(globalThis.data.battle.monster.ice);
      thunder.innerHTML = Util.percent(globalThis.data.battle.monster.thunder);
      light.innerHTML = Util.percent(globalThis.data.battle.monster.light);
      dark.innerHTML = Util.percent(globalThis.data.battle.monster.dark);
    }

    // (this.shadowRoot.querySelector('[name="SD.damageMultiplier"]') as Multiplier_Info).data = this.dataSD.damageMultiplier;
  }
}
