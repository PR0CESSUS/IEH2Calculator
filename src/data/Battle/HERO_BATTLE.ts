import { DataBattle } from ".";
import { DATA } from "..";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { HeroKind } from "../../type/HeroKind";
import { SDModifierKind } from "../../type/SDModifierKind";
import { Stats } from "../../type/Stats";
import { BATTLE } from "./BATTLE";

export class HERO_BATTLE extends BATTLE {
  isAutoMove = true;
  initUIAction;
  tempSkillId;
  tempSkill;

  isHero = true;

  constructor(DATA: DATA, heroKind: HeroKind, battleCtrl: DataBattle) {
    super(DATA, battleCtrl);
    this.battleCtrl = battleCtrl;
    this.heroKind = heroKind;

    this.level = this.battleCtrl.data.source.heroLevel[heroKind];
  }

  StatsModifier(value) {
    return this.battleCtrl.isSuperDungeon ? Math.log10(Math.max(1.0, value)) : value;
  }

  Start() {}

  get hp() {
    return this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.HP).Value();
  }

  get mp() {
    return Math.max(0.0, this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.MP).Value() - this.battleCtrl.data.stats.heroes[this.heroKind].channeledMp.Value());
  }

  get atk() {
    return this.battleCtrl.data.source.isSuperDungeon && this.battleCtrl.data.source.isActiveSdModifiers[950 + SDModifierKind.SwapATKWithDEF]
      ? this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.DEF).Value()
      : this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.ATK).Value();
  }

  get matk() {
    return this.battleCtrl.data.source.isSuperDungeon && this.battleCtrl.data.source.isActiveSdModifiers[950 + SDModifierKind.SwapATKWithDEF]
      ? this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.MDEF).Value()
      : this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.MATK).Value();
  }

  get def() {
    return this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.DEF).Value();
  }

  get mdef() {
    return this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.MDEF).Value();
  }

  get spd() {
    return this.battleCtrl.data.stats.BasicStats(this.heroKind, BasicStatsKind.SPD).Value();
  }

  get fire() {
    return this.battleCtrl.data.stats.ElementResistance(this.heroKind, Element.Fire).Value() + this.fieldDebuffElement[1] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get ice() {
    return this.battleCtrl.data.stats.ElementResistance(this.heroKind, Element.Ice).Value() + this.fieldDebuffElement[2] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get thunder() {
    return this.battleCtrl.data.stats.ElementResistance(this.heroKind, Element.Thunder).Value() + this.fieldDebuffElement[3] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get light() {
    return this.battleCtrl.data.stats.ElementResistance(this.heroKind, Element.Light).Value() + this.fieldDebuffElement[4] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get dark() {
    return this.battleCtrl.data.stats.ElementResistance(this.heroKind, Element.Dark).Value() + this.fieldDebuffElement[5] * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get phyCrit() {
    return this.battleCtrl.data.stats.HeroStats(this.heroKind, Stats.PhysCritChance).Value() + this.fieldDebuffPhyCrit * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get magCrit() {
    return this.battleCtrl.data.stats.HeroStats(this.heroKind, Stats.MagCritChance).Value() + this.fieldDebuffMagCrit * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get critDamage() {
    return this.battleCtrl.data.stats.HeroStats(this.heroKind, Stats.CriticalDamage).Value();
  }

  get moveSpeed() {
    return this.battleCtrl.data.stats.HeroStats(this.heroKind, Stats.MoveSpeed).Value() * this.fieldCurseMoveSpeedMul;
  }

  get extraAfterDamage() {
    return this.battleCtrl.data.stats.Hero(this.heroKind).extraAfterDamage.Value();
  }

  get debuffResistance() {
    return this.battleCtrl.data.stats.HeroStats(this.heroKind, Stats.DebuffRes).Value() + this.fieldDebuffDebuffRes * this.battleCtrl.areaBattle.areaDebuffFactor;
  }

  get physicalAbsorption() {
    return this.battleCtrl.data.stats.ElementAbsorption(this.heroKind, Element.Physical).Value();
  }

  get fireAbsorption() {
    return this.battleCtrl.data.stats.ElementAbsorption(this.heroKind, Element.Fire).Value();
  }

  get iceAbsorption() {
    return this.battleCtrl.data.stats.ElementAbsorption(this.heroKind, Element.Ice).Value();
  }

  get thunderAbsorption() {
    return this.battleCtrl.data.stats.ElementAbsorption(this.heroKind, Element.Thunder).Value();
  }

  get lightAbsorption() {
    return this.battleCtrl.data.stats.ElementAbsorption(this.heroKind, Element.Light).Value();
  }

  get darkAbsorption() {
    return this.battleCtrl.data.stats.ElementAbsorption(this.heroKind, Element.Dark).Value();
  }

  get physicalInvalidChance() {
    return this.battleCtrl.data.stats.ElementInvalid(this.heroKind, Element.Physical).Value();
  }

  get fireInvalidChance() {
    return this.battleCtrl.data.stats.ElementInvalid(this.heroKind, Element.Fire).Value();
  }

  get iceInvalidChance() {
    return this.battleCtrl.data.stats.ElementInvalid(this.heroKind, Element.Ice).Value();
  }

  get thunderInvalidChance() {
    return this.battleCtrl.data.stats.ElementInvalid(this.heroKind, Element.Thunder).Value();
  }

  get lightInvalidChance() {
    return this.battleCtrl.data.stats.ElementInvalid(this.heroKind, Element.Light).Value();
  }

  get darkInvalidChance() {
    return this.battleCtrl.data.stats.ElementInvalid(this.heroKind, Element.Dark).Value();
  }

  get guardianKorInvalidChanceDamageHpPercent() {
    return Math.min(0.25, this.battleCtrl.data.stats.heroes[this.heroKind].guardianKorInvalidDamageHpPercent.Value());
  }
}
