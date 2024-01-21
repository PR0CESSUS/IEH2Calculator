import { BATTLE_CONTROLLER } from ".";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { HeroKind } from "../../type/HeroKind";
import { Stats } from "../../type/Stats";
import { BATTLE } from "./BATTLE";

export class HERO_BATTLE extends BATTLE {
  isAutoMove = true;
  initUIAction;
  tempSkillId;
  tempSkill;

  isHero = true;

  constructor(heroKind: HeroKind, battleCtrl: BATTLE_CONTROLLER) {
    super(battleCtrl);
    this.battleCtrl = battleCtrl;
    this.heroKind = heroKind;

    this.level = globalThis.data.source.heroLevel[heroKind];
  }

  StatsModifier(value) {
    return this.battleCtrl.isSuperDungeon ? Math.log10(Math.max(1.0, value)) : value;
  }

  Start() {}

  get hp() {
    return globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.HP).Value();
  }

  get mp() {
    return Math.max(0.0, globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.MP).Value() - globalThis.data.stats.heroes[this.heroKind].channeledMp.Value());
  }

  get atk() {
    return globalThis.data.custom.isSuperDungeon
      ? globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.DEF).Value()
      : globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.ATK).Value();
  }

  get matk() {
    return globalThis.data.custom.isSuperDungeon
      ? globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.MDEF).Value()
      : globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.MATK).Value();
  }

  get def() {
    return globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.DEF).Value();
  }

  get mdef() {
    return globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.MDEF).Value();
  }

  get spd() {
    return globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.SPD).Value();
  }

  get fire() {
    return globalThis.data.stats.ElementResistance(this.heroKind, Element.Fire).Value() + this.fieldDebuffElement[1] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get ice() {
    return globalThis.data.stats.ElementResistance(this.heroKind, Element.Ice).Value() + this.fieldDebuffElement[2] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get thunder() {
    return globalThis.data.stats.ElementResistance(this.heroKind, Element.Thunder).Value() + this.fieldDebuffElement[3] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get light() {
    return globalThis.data.stats.ElementResistance(this.heroKind, Element.Light).Value() + this.fieldDebuffElement[4] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get dark() {
    return globalThis.data.stats.ElementResistance(this.heroKind, Element.Dark).Value() + this.fieldDebuffElement[5] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get phyCrit() {
    return globalThis.data.stats.HeroStats(this.heroKind, Stats.PhysCritChance).Value() + this.fieldDebuffPhyCrit * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get magCrit() {
    return globalThis.data.stats.HeroStats(this.heroKind, Stats.MagCritChance).Value() + this.fieldDebuffMagCrit * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get critDamage() {
    globalThis.data.stats.HeroStats(this.heroKind, Stats.CriticalDamage).isLog = globalThis.data.custom.isSuperDungeon;
    return globalThis.data.stats.HeroStats(this.heroKind, Stats.CriticalDamage).Value();
  }

  get moveSpeed() {
    return globalThis.data.stats.HeroStats(this.heroKind, Stats.MoveSpeed).Value() * this.fieldCurseMoveSpeedMul;
  }

  get extraAfterDamage() {
    return globalThis.data.stats.Hero(this.heroKind).extraAfterDamage.Value();
  }

  get debuffResistance() {
    return globalThis.data.stats.HeroStats(this.heroKind, Stats.DebuffRes).Value() + this.fieldDebuffDebuffRes * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get physicalAbsorption() {
    return globalThis.data.stats.ElementAbsorption(this.heroKind, Element.Physical).Value();
  }

  get fireAbsorption() {
    return globalThis.data.stats.ElementAbsorption(this.heroKind, Element.Fire).Value();
  }

  get iceAbsorption() {
    return globalThis.data.stats.ElementAbsorption(this.heroKind, Element.Ice).Value();
  }

  get thunderAbsorption() {
    return globalThis.data.stats.ElementAbsorption(this.heroKind, Element.Thunder).Value();
  }

  get lightAbsorption() {
    return globalThis.data.stats.ElementAbsorption(this.heroKind, Element.Light).Value();
  }

  get darkAbsorption() {
    return globalThis.data.stats.ElementAbsorption(this.heroKind, Element.Dark).Value();
  }

  get physicalInvalidChance() {
    return globalThis.data.stats.ElementInvalid(this.heroKind, Element.Physical).Value();
  }

  get fireInvalidChance() {
    return globalThis.data.stats.ElementInvalid(this.heroKind, Element.Fire).Value();
  }

  get iceInvalidChance() {
    return globalThis.data.stats.ElementInvalid(this.heroKind, Element.Ice).Value();
  }

  get thunderInvalidChance() {
    return globalThis.data.stats.ElementInvalid(this.heroKind, Element.Thunder).Value();
  }

  get lightInvalidChance() {
    return globalThis.data.stats.ElementInvalid(this.heroKind, Element.Light).Value();
  }

  get darkInvalidChance() {
    return globalThis.data.stats.ElementInvalid(this.heroKind, Element.Dark).Value();
  }

  get guardianKorInvalidChanceDamageHpPercent() {
    return Math.min(0.25, globalThis.data.stats.heroes[this.heroKind].guardianKorInvalidDamageHpPercent.Value());
  }
}
