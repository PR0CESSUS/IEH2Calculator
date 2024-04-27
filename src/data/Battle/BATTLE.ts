import { DataBattle } from ".";
import { DATA } from "..";
import { Debuff } from "../../type/Debuff";
import { Element } from "../../type/Element";
import { HeroKind } from "../../type/HeroKind";
import { MonsterColor } from "../../type/MonsterColor";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { SKILL } from "../skill/SKILL";

export class BATTLE {
  data: DATA;
  heroKind: HeroKind;
  //   currentHp: NUMBER;
  //   currentMp: NUMBER;
  //   debuffings: Debuffing[] = new Debuffing[Enum.GetNames(typeof (Debuff)).length];
  //   double[] zeroDebuffElements = new double[6];
  //   attack: Attack[] = [];
  tempValue;
  isSlayerOil;
  calculatedDamage;
  elementAbsorptionValue;
  tempTotalDamagePerHitCount;
  tempTotalDamage;
  tempExtraAfterDamage;
  totalDamage;
  electricDamage = 0;
  slayerOilDamage = 0;
  poisonDamagePerSec;
  isPilfered;
  battleCtrl: DataBattle;
  fieldDebuffElement;
  fieldDebuffPhyCrit;
  fieldDebuffMagCrit;
  fieldCurseMoveSpeedMul;
  fieldDebuffDebuffRes;
  isHero = false;

  constructor(DATA: DATA, battleCtrl: DataBattle) {
    this.data = DATA;
    this.heroKind = battleCtrl.heroKind;
    this.battleCtrl = battleCtrl;
    this.fieldDebuffElement = Array(5).fill(0);
    this.fieldDebuffPhyCrit = 0;
    this.fieldDebuffMagCrit = 0;
    this.fieldCurseMoveSpeedMul = 0;
    this.fieldDebuffDebuffRes = 0;
  }

  get level() {
    return this.data.source.enemyLevel;
  }

  get species() {
    return this.data.source.enemySpecies;
  }

  get color() {
    return this.species == MonsterSpecies.Mimic ? MonsterColor.Normal : this.data.source.enemyColor;
  }

  DebuffFactor(kind: Debuff) {
    // switch (kind) {
    //   case Debuff.Stop:
    //     return this.color == MonsterColor.Boss || this.species == MonsterSpecies.ChallengeBoss ? 1.0 - 0.5 * 0.9 : 1.0 - 0.5;
    //   case Debuff.FireResDown:
    //     return -1;
    //   case Debuff.IceResDown:
    //     return -1;
    //   case Debuff.ThunderResDown:
    //     return -1;
    //   case Debuff.LightResDown:
    //     return -1;
    //   case Debuff.DarkResDown:
    //     return -1;
    //   default:
    //     return this.color == MonsterColor.Boss || this.species == MonsterSpecies.ChallengeBoss ? 1.0 - 0.5 * 0.25 : 1.0 - 0.5 * 0.5;
    // }
    return 1;
  }
  DamageFactorElement(element: Element) {
    // console.log(this.heroKind);

    switch (element) {
      case Element.Physical:
        return this.battleCtrl.data.stats.heroes[this.heroKind].elementDamages[Element.Physical].Value();
      case Element.Fire:
        return this.battleCtrl.data.stats.heroes[this.heroKind].elementDamages[Element.Fire].Value();
      case Element.Ice:
        return this.battleCtrl.data.stats.heroes[this.heroKind].elementDamages[Element.Ice].Value();
      case Element.Thunder:
        return this.battleCtrl.data.stats.heroes[this.heroKind].elementDamages[Element.Thunder].Value();
      case Element.Light:
        return this.battleCtrl.data.stats.heroes[this.heroKind].elementDamages[Element.Light].Value();
      case Element.Dark:
        return this.battleCtrl.data.stats.heroes[this.heroKind].elementDamages[Element.Dark].Value();

      default:
        return 1.0;
    }
  }

  //   get fieldDebuffPhyCrit() {return Convert.ToInt16(this.battleCtrl.isSimulated) * this.battleCtrl.areaBattle.CurrentArea().debuffPhyCrit;}

  //   get fieldDebuffMagCrit() {return Convert.ToInt16(this.battleCtrl.isSimulated) * this.battleCtrl.areaBattle.CurrentArea().debuffMagCrit;}

  //   get fieldCursePetBasicStatsMul() {return Convert.ToInt16(this.battleCtrl.isSimulated) * this.battleCtrl.areaBattle.CurrentArea().cursePetBasicStatsMul;}
  get atk() {
    return 0;
  }

  get matk() {
    return 0;
  }
  get isPet() {
    return false;
  }
  get def() {
    return 0;
  }
  get mdef() {
    return 0;
  }
  get spd() {
    return 0;
  }
  get fire() {
    return 0;
  }
  get ice() {
    return 0;
  }
  get thunder() {
    return 0;
  }
  get light() {
    return 0;
  }
  get dark() {
    return 0;
  }
  get extraAfterDamage() {
    return 0.0;
  }
  get critDamage() {
    return 0;
  }
  get damageFactor() {
    return 1;
  }
  DamageCutRate(originDamage, element: Element) {
    let num1 = 1.0;
    let num2 = 0.0;
    // console.log(this.mdef, element);

    switch (element) {
      case Element.Physical:
        num2 = this.def / (originDamage + this.def);
        break;
      case Element.Fire:
        num1 *= 1.0 - Math.min(0.9, this.fire);
        num2 = this.mdef / (originDamage + this.mdef);
        break;
      case Element.Ice:
        num1 *= 1.0 - Math.min(0.9, this.ice);
        num2 = this.mdef / (originDamage + this.mdef);
        break;
      case Element.Thunder:
        num1 *= 1.0 - Math.min(0.9, this.thunder);
        num2 = this.mdef / (originDamage + this.mdef);
        break;
      case Element.Light:
        num1 *= 1.0 - Math.min(0.9, this.light);
        num2 = this.mdef / (originDamage + this.mdef);
        break;
      case Element.Dark:
        num1 *= 1.0 - Math.min(0.9, this.dark);
        num2 = this.mdef / (originDamage + this.mdef);
        break;
    }
    // console.log(num1, 1.0 - Math.min(0.9999, this.DamageCutModifier(num2)));

    return num1 * (1.0 - Math.min(0.99999, this.DamageCutModifier(num2)));
  }

  DamageModifier(value) {
    return this.battleCtrl.data.source.isSuperDungeon ? value * this.battleCtrl.superDungeonCtrl.damageMultiplier.Value() : value;
  }

  DamageCutModifier(value) {
    return this.isHero && this.battleCtrl.data.source.isSuperDungeon ? value * this.battleCtrl.superDungeonCtrl.damageCutMultiplier.Value() : value;
  }

  CalculateDamage(originDamage, critDamage, element: Element, isCrit) {
    this.tempValue = originDamage;
    this.tempValue *= this.DamageCutRate(originDamage, element);
    if (this.tempValue < 0.0) return 0.0;
    this.tempValue *= this.damageFactor;
    this.tempValue *= this.DamageFactorElement(element);
    this.tempValue = Math.max(1.0, this.tempValue);
    if (isCrit) this.tempValue *= critDamage;
    // if (this.color == MonsterColor.Metal)
    //   this.tempValue += this.battleCtrl.data.quest.TitleEffectValue(this.battleCtrl.heroKind, TitleKind.MetalHunter).main;
    // if (this.tempValue <= this.guardianKorInvalidChanceDamageHpPercent * this.hp) this.tempValue = 0.0;
    return this.tempValue;
  }

  Attacked(
    battle: BATTLE,
    damage,
    hitCount,
    isCrit,
    element: Element
    // debuff: Debuff,
    // debuffEffectValue = 0.0,
    // isDebuffForce = false,
    // isFixedDamage = false,
    // isPreventDodge = false
  ) {
    this.isSlayerOil = !this.isHero && this.battleCtrl.CurrentSlayerElement() != 0;
    if (this.isSlayerOil) element = this.battleCtrl.CurrentSlayerElement();

    this.calculatedDamage = this.CalculateDamage(damage, battle.critDamage, element, isCrit);
    this.tempTotalDamagePerHitCount = this.DamageModifier(this.calculatedDamage);

    this.tempTotalDamage = this.tempTotalDamagePerHitCount * hitCount;

    // this.electricDamage = this.debuffings[7].isDebuff ? this.tempTotalDamage * 0.1 : 0.0;

    this.slayerOilDamage = this.isSlayerOil ? this.tempTotalDamage * this.battleCtrl.data.stats.ElementSlayerDamage(this.battleCtrl.heroKind, element).Value() : 0.0;
    this.totalDamage = this.tempTotalDamage + this.electricDamage + this.slayerOilDamage;

    this.tempExtraAfterDamage = this.totalDamage * battle.extraAfterDamage;
    this.totalDamage += this.tempExtraAfterDamage;
    // console.log("battle.extraAfterDamage:", battle.extraAfterDamage);
    // console.log("this.calculatedDamage:", this.calculatedDamage);
    // console.log("this.tempTotalDamagePerHitCount:", this.tempTotalDamagePerHitCount);
    // console.log(" this.tempTotalDamage:", this.tempTotalDamage);
    // console.log("this.slayerOilDamage:", this.slayerOilDamage);
    // console.log(
    //   "this.totalDamage = this.tempTotalDamage + this.electricDamage + this.slayerOilDamage:",
    //   (this.totalDamage = this.tempTotalDamage + this.electricDamage + this.slayerOilDamage)
    // );

    return this.totalDamage;
  }

  // custom method for attack damage breakdown
  AttackedInfo(): {
    skill: SKILL;
    hero: BATTLE;
    DamagePerHit: number;
    tempTotalDamage: number;
    slayerOilDamage: number;
    electricDamage: number;
    totalBeforeExtraAfter: number;
    extraAfterDamagePerHit: number;
    extraAfterDamage: number;
    totalDamage: number;

    damage: number;
    element: number;
    SlayerOilValue: number;
    castTime: number;
    dps: number;
    realHitCount: number;
    dps2: number;
    totalDps: number;
  } {
    const battle = this.data.battle.hero;
    const skill = this.data.skill.Skill(this.data.source.currentHero, 0);
    const damage = skill.DamageOrigin(battle, false);
    const isCrit = true;
    const hitCount = this.data.source.currentHero == HeroKind.Angel ? skill.HitCount(this.heroKind) / 5 : skill.HitCount(this.heroKind);
    let element = skill.element;

    const isSlayerOil = !this.isHero && this.battleCtrl.CurrentSlayerElement() != 0;
    if (isSlayerOil) element = this.battleCtrl.CurrentSlayerElement();

    let info = {
      DamagePerHit: this.DamageModifier(this.CalculateDamage(damage, battle.critDamage, element, isCrit)),
      tempTotalDamage: 0,
      slayerOilDamage: 0,
      electricDamage: 0,
      totalBeforeExtraAfter: 0,
      extraAfterDamagePerHit: 0,
      extraAfterDamage: 0,
      totalDamage: 0,
      skill: skill,
      hero: battle,
      damage: damage,
      element: element,
      SlayerOilValue: this.data.stats.ElementSlayerDamage(this.battleCtrl.heroKind, element).Value(),
      castTime: skill.CalculateInterval(battle),
      dps: 0,
      realHitCount: hitCount,
      dps2: skill.Dps(battle, true),
      totalDps: skill.TotalDps(battle, true),
    };

    info.tempTotalDamage = info.DamagePerHit * hitCount;
    info.slayerOilDamage = isSlayerOil ? info.tempTotalDamage * info.SlayerOilValue : 0.0;
    info.totalBeforeExtraAfter = info.tempTotalDamage + info.electricDamage + info.slayerOilDamage;
    info.extraAfterDamagePerHit = info.DamagePerHit * battle.extraAfterDamage;
    info.extraAfterDamage = info.totalBeforeExtraAfter * battle.extraAfterDamage;
    info.totalDamage = info.tempTotalDamage + info.electricDamage + info.slayerOilDamage + info.extraAfterDamage;
    info.dps = info.totalDamage / info.castTime;

    return info;
  }
}
