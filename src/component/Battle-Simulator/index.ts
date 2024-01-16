//@ts-nocheck
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
import { Multiplier_Info } from "../Multiplier-Info";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";
import { ComponentHeroStat } from "../Hero-Stat";
import { SkillParameter } from "../../data/Skill/SkillParameter";

document.body.innerHTML += template;
export class ComponentBattleSimulator extends HTMLElement {
  database = {
    dungeon: 0,
    multiplier: 0,
    powerup: [0, 0, 0, 0, 0, 0, 0, 0],
    applyPowerup: false,
  };
  data: HeroStats;
  dataSD: SuperDungeonController;
  heroKind: HeroKind;
  constructor() {
    super();
    this.heroKind = parseInt(this.dataset.hero) || globalThis.data.source.currentHero;
    // console.log(this.dataset.hero);
    this.database = globalThis.app.database.Connect("battle-simulator", this.database);
    this.data = globalThis.data.stats.heroes[this.heroKind];
    this.dataSD = globalThis.data.battles[this.heroKind].superDungeonCtrl;
    // this.data = get(globalThis.app, `data.stats.heroes[${this.heroKind}]`, null);
    // console.log(globalThis.data.battles, this.heroKind);

    // this.data = globalThis.data.stats.heroes[this.heroKind];
    // this.dataSD = globalThis.data.battles[this.heroKind].superDungeonCtrl;
    // this.dataBattle = globalThis.

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("sd-simulator") as HTMLTemplateElement).content.cloneNode(true));

    (this.shadowRoot.querySelector(`[name="dungeon"]`) as HTMLSelectElement).value = this.database.dungeon;
    (this.shadowRoot.querySelector(`[name="multiplier"]`) as HTMLSelectElement).value = this.database.multiplier;

    this.shadowRoot.querySelectorAll("select").forEach((element) => {
      element.onchange = this.Save.bind(this);
    });
    this.shadowRoot.querySelectorAll("input").forEach((element, index) => {
      element.onchange = this.Save.bind(this);
      element.value = this.database.powerup[index];
      // console.log(index);

      switch (index) {
        case 0:
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.DamageMultiplier).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.DamageMultiplier).SetEffect();
          break;
        case 1:
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.CriticalDamage).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.CriticalDamage).SetEffect();
          break;
        case 2:
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.PhysicalDamage).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.PhysicalDamage).SetEffect();
          break;
        case 3:
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.MagicalDamage).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.MagicalDamage).SetEffect();
          break;
        case 4:
          // console.log("4", element, index);

          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.SkillHitCount).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.SkillHitCount).SetEffect();
          break;
        case 5:
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).SetEffect();
          break;
        case 6:
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.ExtraAfterDamage).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.ExtraAfterDamage).SetEffect();
          break;
        case 7:
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.DamageCutMultiplier).level = parseInt(this.database.powerup[index]);
          globalThis.data.battles[this.heroKind].superDungeonCtrl.Powerup(SuperDungeonPowerupKind.DamageCutMultiplier).SetEffect();
          break;
        default:
          break;
      }
    });
    // console.log(this.data);
    // console.log(this.dataSD);
    // (this.shadowRoot.querySelector('[name="createSnapshot"]') as HTMLButtonElement).onclick = this.createSnapshot.bind(this);

    // globalThis.data.battles[this.heroKind].monstersList[0].color = ChallengeMonsterKind.LadyEmelda;

    // globalThis.data.battles[this.heroKind].monstersList[0].level = 1300;
    // globalThis.data.battles[this.heroKind].monstersList[0].damageFactor =
    //   globalThis.data.stats.heroes[this.heroKind].monsterDamages[MonsterSpecies.ChallengeBoss].After();
    globalThis.data.skill.isLog[this.heroKindKind] = true;
    this.render();
    // const rank = 50;
    // const level = globalThis.data.skill.skillLevelBonus[this.heroKindKind].After() + 250;
    // // const level = 1;
    // // console.log(globalThis.data.skill.skillLevelBonus[this.heroKind]);
    // // console.log(globalThis.data.skill.skillLevelBonus[this.heroKind].After());

    // const IncrementDamagePerLevel = SkillParameter.skillFactors[this.heroKind][0][1] * rank;
    // const baseDamage = SkillParameter.skillFactors[this.heroKind][0][0] + IncrementDamagePerLevel * level;
    // // const baseDamage = SkillParameter.skillFactors[this.heroKind][0][0] + (IncrementDamagePerLevel * 1 + 191);
    // const originDamage = Math.log10(baseDamage);
    // console.log(Util.convertTo(originDamage * globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Physical].After()));
    // console.log(Util.convertTo(globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Physical].After()));

    // console.log(globalThis.data.skill.classSkills[this.heroKind].skills[0].Interval());

    // seting up Slayer Oil
    // globalThis.data.stats
    //   .ElementSlayerDamage(this.heroKind, Element.Ice)
    //   .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => 935.7));

    // const tempTotalDamage = tempTotalDamagePerHitCount * globalThis.data.skill.extraSkillHitCount[this.heroKind].Value();
    // const slayerOilDamage = tempTotalDamage * globalThis.data.stats.ElementSlayerDamage(this.heroKind, element).Value();

    // const totalDamage = tempTotalDamage + slayerOilDamage;
    // const tempExtraAfterDamage = totalDamage * globalThis.data.stats.heroes[this.heroKind].extraAfterDamage.Value();
    // console.log("Skill Base Damage\t\t\t\t", Util.convertTo(globalThis.data.skill.classSkills[this.heroKind].skills[0].Damage2(false)));
    // console.log("calculatedDamage\t\t\t\t", Util.convertTo(calculatedDamage));
    // console.log("single hit damage\t\t\t\t", Util.convertTo(tempTotalDamagePerHitCount));
    // // console.log("tempTotalDamage\t\t\t\t\t", Util.convertTo(tempTotalDamage2));
    // console.log(
    //   "slayerOilDamage Value\t\t\t",
    //   Util.convertTo(globalThis.data.stats.ElementSlayerDamage(this.heroKind, element).Value(), 2, "%")
    // );
    // console.log("slayerOilDamage\t\t\t\t\t", Util.convertTo(slayerOilDamage));
    // console.log(
    //   "slayerOilDamage\t\t\t\t\t",
    //   Util.convertTo(slayerOilDamage * globalThis.data.battles[this.heroKind].monstersList[0].DamageCutRate(slayerOilDamage, element))
    // );
    // console.log("Extra After Damage\t\t\t\t", Util.convertTo(tempExtraAfterDamage));

    // console.log("----------------------------------------------------------");
    // const GainMp = SkillParameter.skillFactors[this.heroKind][0][2] + SkillParameter.skillFactors[this.heroKind][0][3] * rank * level;
    // console.log("MP Gain", GainMp, " / 1642.4");
    // console.log(level - 750);
    // return this.isLog ? Math.log(Math.max(1.0, GainMp), Multiplier.logBase) *  this.HitCount() * (1.0 / Math.pow(this.Interval(GameController.game.battleCtrls[heroKind].hero), 0.8)) : this.GainMp();

    // public double IncrementMpGainPerLevel() => this.incrementMpGain * this.Rank();

    // globalThis.data.stats.heroes[this.heroKind].elementDamages[element].After();
    // globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.Value() *
    // console.log("powerup added");

    //
    // console.log(globalThis.data.skill.skillLevelBonus);
    // console.log(globalThis.data.skill.skillLevelBonus[this.heroKind].modifiers[2]);
    // console.log(globalThis.data.skill.skillLevelBonus[this.heroKind].Value());

    // const tempTotalDamagePerHitCount = calculatedDamage * globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.Value();
    // const tempTotalDamage = tempTotalDamagePerHitCount * globalThis.data.skill.extraSkillHitCount[this.heroKind].Value();

    // const slayerOilDamage = tempTotalDamage * globalThis.data.stats.ElementSlayerDamage(this.heroKind, element).Value();
    // // console.log(globalThis.data.skill.extraSkillHitCount[this.heroKind].Value());

    // // console.log(globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.Value());
    // console.log("DamageCutRate", globalThis.data.battles[this.heroKind].monstersList[0].DamageCutRate(originDamage, element, false));
    // // console.log("Skill level", 250 + 1878);
    // console.log("originDamage", Util.convertTo(originDamage), " / 156.5M");
    // console.log("calculatedDamage", calculatedDamage);
    // // console.log(globalThis.data.battles[this.heroKind].monstersList[0].DamageCutRate(originDamage, element, false));
    // console.log("tempTotalDamagePerHitCount", tempTotalDamagePerHitCount);
    // console.log("tempTotalDamage", tempTotalDamage);
    // console.log("slayerOilDamage", slayerOilDamage);
    // console.log(globalThis.data.battles[this.heroKind].monstersList[0].Attacked());

    // console.log("heroStat constructor");

    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }

  Save(event) {
    this.database.dungeon = (this.shadowRoot.querySelector(`[name="dungeon"]`) as HTMLSelectElement).value;
    this.database.multiplier = (this.shadowRoot.querySelector(`[name="multiplier"]`) as HTMLSelectElement).value;

    // for (let index = 0; index < this.database.powerup.length; index++) {
    //   this.database.powerup[index] = (this.shadowRoot.querySelector(`[name="powerup${index}"]`) as HTMLInputElement).value;
    // }
    globalThis.app.database.Save();
    this.render();
  }

  getLevel() {
    // const dungeon = parseInt(this.dataset.dungeon);
    const dungeon = parseInt((this.shadowRoot.querySelector('[name="dungeon"]') as HTMLSelectElement).value);
    const multiplier = parseInt((this.shadowRoot.querySelector('[name="multiplier"]') as HTMLSelectElement).value) * 50;
    // switch (dungeon) {
    //   case 0:
    //     return 500;
    //   case 1:
    //     return 600;
    //   case 2:
    //     return 700;
    //   case 3:
    //     return 800;
    //   case 4:
    //     return 900;
    //   default:
    //     return 0;
    // }

    return 500 + dungeon * 100 + multiplier;
  }

  getChallangeBoss() {
    const dungeon = parseInt((this.shadowRoot.querySelector('[name="dungeon"]') as HTMLSelectElement).value);
    switch (dungeon) {
      case 0:
        return ChallengeMonsterKind.Florzporb;
      case 1:
        return ChallengeMonsterKind.Arachnetta;
      case 2:
        return ChallengeMonsterKind.Nostro;
      case 3:
        return ChallengeMonsterKind.LadyEmelda;
      case 4:
        return ChallengeMonsterKind.GuardianKor;
      default:
        return 0;
    }
  }

  render(edit: boolean = false) {
    globalThis.data.battles[this.heroKind].monstersList[0].species = MonsterSpecies.ChallengeBoss;
    globalThis.data.battles[this.heroKind].monstersList[0].color = this.getChallangeBoss();
    globalThis.data.battles[this.heroKind].monstersList[0].level = this.getLevel();

    const player = this.shadowRoot.querySelector("[name=player]") as HTMLDivElement;
    console.log(globalThis.data.battle.hero, globalThis.data.source.skillLoadoutIds[this.heroKind], globalThis.data.source.isEquippedAngelSkillForAngel);
    player.innerHTML += `new data`;
    const element = Element.Physical;
    const criticalDamage = globalThis.data.stats.heroes[this.heroKind].stats[Stats.CriticalDamage].After();
    const originDamage = globalThis.data.skill.classSkills[this.heroKind].skills[0].Damage2(false);
    const calculatedDamage = globalThis.data.battles[this.heroKind].monstersList[0].CalculateDamage(originDamage, criticalDamage, element, true);

    const tempTotalDamagePerHitCount =
      calculatedDamage *
      globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.Value() *
      globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.Value();

    (this.shadowRoot.querySelector(`[name="singleHitDamage"]`) as HTMLSpanElement).innerHTML = Util.convertTo(tempTotalDamagePerHitCount);
    const boss = globalThis.data.monster.GlobalInformationChallengeBoss(this.getChallangeBoss());
    // console.log(boss);

    (this.shadowRoot.querySelector('[name="level"]') as HTMLParagraphElement).innerHTML = `${this.getLevel()}`;
    (this.shadowRoot.querySelector('[name="HP"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(this.getHP(), 2)}`;
    (this.shadowRoot.querySelector('[name="DEF"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(boss.Def(this.getLevel(), 0), 2)}`;
    (this.shadowRoot.querySelector('[name="MDEF"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(boss.MDef(this.getLevel(), 0), 2)}`;
    (this.shadowRoot.querySelector('[name="Fire"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(boss.Fire(), 2, "%")}`;
    (this.shadowRoot.querySelector('[name="Ice"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(boss.Ice(), 2, "%")}`;
    (this.shadowRoot.querySelector('[name="Thunder"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(boss.Thunder(), 2, "%")}`;
    (this.shadowRoot.querySelector('[name="Light"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(boss.Light(), 2, "%")}`;
    (this.shadowRoot.querySelector('[name="Dark"]') as HTMLParagraphElement).innerHTML = `${Util.convertTo(boss.Dark(), 2, "%")}`;
    // (this.shadowRoot.querySelector('[name="SD.damageMultiplier"]') as Multiplier_Info).data = this.dataSD.damageMultiplier;
  }

  getHP() {
    const level = this.getLevel();
    const boss = this.getChallangeBoss();
    const base = globalThis.data.monster.GlobalInformationChallengeBoss(boss).Hp(level, 0);

    switch (boss) {
      case ChallengeMonsterKind.Florzporb:
        return base * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 300) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 400) / 100.0));
      case ChallengeMonsterKind.Arachnetta:
        return base * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 350) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 450) / 100.0));
      case ChallengeMonsterKind.Nostro:
        return base * Math.max(1.0, Math.pow(10.0, Math.max(0, level - 450) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 550) / 100.0));
      case ChallengeMonsterKind.LadyEmelda:
        return base * Math.pow(2.0, Math.max(1, level - 300) / 100.0) * Math.max(1.0, Math.pow(25.0, Math.max(0, level - 600) / 100.0));
      case ChallengeMonsterKind.GuardianKor:
        return base * Math.max(1.0, Math.pow(10.0, Math.max(0, level - 400) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 500) / 100.0));
      default:
        return 0;
    }
  }
  getMDEF() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.LadyEmelda).MDef(this.getLevel(), 0);
  }
  getDEF() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.LadyEmelda).Def(this.getLevel(), 0);
  }
  // getMultiplierInfo(name) {
  //   return this.shadowRoot.querySelector(`[name="${name}"]`) as Multiplier_Info;
  // }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
    // (document.querySelector("hero-stat") as ComponentHeroStat).render();
  }
}
