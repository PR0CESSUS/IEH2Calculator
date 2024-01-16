import { Debuff } from "../../type/Debuff";
import { HeroKind } from "../../type/HeroKind";
import { Element } from "../../type/Element";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { Stats } from "../../type/Stats";
import { MonsterColor } from "../../type/MonsterColor";
import { TitleKind } from "../../type/TitleKind";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { BATTLE_CONTROLLER } from ".";

export class BATTLE {
  heroKind: HeroKind;
  species: MonsterSpecies;
  color: ChallengeMonsterKind; // MonsterColor;
  isAlive;
  //   currentHp: NUMBER;
  //   currentMp: NUMBER;
  //   debuffings: Debuffing[] = new Debuffing[Enum.GetNames(typeof (Debuff)).length];
  //   double[] zeroDebuffElements = new double[6];
  //   attack: Attack[] = [];
  level;
  tempValue;
  isSlayerOil;
  calculatedDamage;
  elementAbsorptionValue;
  tempTotalDamagePerHitCount;
  tempTotalDamage;
  tempExtraAfterDamage;
  totalDamage;
  electricDamage;
  slayerOilDamage;
  poisonDamagePerSec;
  isPilfered;
  battleCtrl: BATTLE_CONTROLLER;
  fieldDebuffElement;
  fieldDebuffPhyCrit;
  fieldDebuffMagCrit;
  fieldCurseMoveSpeedMul;
  fieldDebuffDebuffRes;

  constructor(battleCtrl: BATTLE_CONTROLLER) {
    this.heroKind = battleCtrl.heroKind;
    this.battleCtrl = battleCtrl;
    this.fieldDebuffElement = Array(5).fill(0);
    this.fieldDebuffPhyCrit = 0;
    this.fieldDebuffMagCrit = 0;
    this.fieldCurseMoveSpeedMul = 0;
    this.fieldDebuffDebuffRes = 0;
  }

  get damageFactor() {
    return globalThis.data.stats.heroes[this.heroKind].monsterDamages[MonsterSpecies.ChallengeBoss].After();
  }

  DamageFactorElement(element: Element) {
    // console.log(this.heroKind);

    switch (element) {
      case Element.Physical:
        return globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Physical].After();
      case Element.Fire:
        return globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Fire].After();
      case Element.Ice:
        return globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Ice].After();
      case Element.Thunder:
        return globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Thunder].After();
      case Element.Light:
        return globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Light].After();
      case Element.Dark:
        return globalThis.data.stats.heroes[this.heroKind].elementDamages[Element.Dark].After();

      default:
        return 1.0;
    }
  }

  //   DebuffFactor(kind: Debuff) {
  //     switch (kind) {
  //       case Debuff.Stop:
  //         return this.color == MonsterColor.Boss || this.species == MonsterSpecies.ChallengeBoss ? 1.0 - Convert.ToInt32(this.debuffings[kind].isDebuff) * 0.9 : 1.0 - Convert.ToInt32(this.debuffings[kind].isDebuff);
  //       case Debuff.FireResDown:
  //         return -Convert.ToInt32(this.debuffings[kind].isDebuff);
  //       case Debuff.IceResDown:
  //         return -Convert.ToInt32(this.debuffings[kind].isDebuff);
  //       case Debuff.ThunderResDown:
  //         return -Convert.ToInt32(this.debuffings[kind].isDebuff);
  //       case Debuff.LightResDown:
  //         return -Convert.ToInt32(this.debuffings[kind].isDebuff);
  //       case Debuff.DarkResDown:
  //         return -Convert.ToInt32(this.debuffings[kind].isDebuff);
  //       default:
  //         return this.color == MonsterColor.Boss || this.species == MonsterSpecies.ChallengeBoss ? 1.0 - Convert.ToInt32(this.debuffings[kind].isDebuff) * 0.25 : 1.0 - Convert.ToInt32(this.debuffings[kind].isDebuff) * 0.5;
  //     }
  //   }

  //   get fieldDebuffPhyCrit() {return Convert.ToInt16(this.battleCtrl.isSimulated) * this.battleCtrl.areaBattle.CurrentArea().debuffPhyCrit;}

  //   get fieldDebuffMagCrit() {return Convert.ToInt16(this.battleCtrl.isSimulated) * this.battleCtrl.areaBattle.CurrentArea().debuffMagCrit;}

  //   get fieldCursePetBasicStatsMul() {return Convert.ToInt16(this.battleCtrl.isSimulated) * this.battleCtrl.areaBattle.CurrentArea().cursePetBasicStatsMul;}

  get def() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(this.color).Def(this.level, 0);
  }
  get mdef() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(this.color).MDef(this.level, 0);
  }
  get fire() {
    return 0;
  }
  get ice() {
    return 0;
  }
  get thunder() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(this.color).Thunder();
  }
  get light() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(this.color).Light();
  }
  get dark() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(this.color).Dark();
  }
  get extraAfterDamage() {
    return 0.0;
  }
  get critDamage() {
    return 0;
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

    return num1 * (1.0 - Math.min(0.9999, this.DamageCutModifier(num2)));
  }

  DamageModifier(value) {
    return this.battleCtrl.isSuperDungeon
      ? value * this.battleCtrl.superDungeonCtrl.damageMultiplier.Value() * globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.Value()
      : value;
  }

  DamageCutModifier(value) {
    // console.log(value);

    // return value;
    return this.battleCtrl.isSuperDungeon ? value * this.battleCtrl.superDungeonCtrl.damageCutMultiplier.Value() : value;
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
    //   this.tempValue += globalThis.data.quest.TitleEffectValue(this.battleCtrl.heroKind, TitleKind.MetalHunter).main;
    // if (this.tempValue <= this.guardianKorInvalidChanceDamageHpPercent * this.hp) this.tempValue = 0.0;
    return this.tempValue;
  }

  Attacked(
    battle: BATTLE,
    damage,
    hitCount,
    isCrit,
    element: Element,
    debuff: Debuff,
    debuffEffectValue = 0.0,
    isDebuffForce = false,
    isFixedDamage = false,
    isPreventDodge = false
  ) {
    // this.isSlayerOil = !this.isHero && this.battleCtrl.CurrentSlayerElement() != 0;
    // if (this.isSlayerOil) element = this.battleCtrl.CurrentSlayerElement();
    this.calculatedDamage = this.CalculateDamage(damage, battle.critDamage, element, isCrit);

    // this.ReceiveDebuff(debuff, this.calculatedDamage, debuffEffectValue, isDebuffForce);
    this.tempTotalDamagePerHitCount = this.DamageModifier(this.calculatedDamage);
    this.tempTotalDamage = this.tempTotalDamagePerHitCount * hitCount;
    // this.electricDamage = this.debuffings[7].isDebuff ? this.tempTotalDamage * 0.1 : 0.0;
    this.slayerOilDamage = this.isSlayerOil ? this.tempTotalDamage * globalThis.data.stats.ElementSlayerDamage(this.battleCtrl.heroKind, element).Value() : 0.0;

    this.totalDamage = this.tempTotalDamage + this.electricDamage + this.slayerOilDamage;

    this.tempExtraAfterDamage = this.totalDamage * battle.extraAfterDamage;
    this.totalDamage += this.tempExtraAfterDamage;
  }
}
