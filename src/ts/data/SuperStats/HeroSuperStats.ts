import { Multiplier } from "../../Multiplier";
import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../Enums";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { AbilityKind } from "../../type/AbilityKind";
import { Stats } from "../../type/Stats";
import { HeroSuperAbility } from "./HeroSuperAbility";
import { Parameter } from "../../Parameter";

export class HeroSuperStats {
  heroKind: HeroKind;
  // grade: HeroGrade;
  // fame: HeroFame;
  superAbilities: HeroSuperAbility[] = Array(Enums.AbilityKind);
  // pointLeft: SuperAbilityPointLeft;
  //   gradeMilestoneList: GradeMilestone[] = [];
  fameGain: Multiplier;
  timecountSec;

  constructor(heroKind: HeroKind) {
    this.heroKind = heroKind;
    // this.grade = new HeroGrade(heroKind);
    // this.fame = new HeroFame(this, heroKind, this.grade);
    // this.fame.isTrackGain = true;
    this.fameGain = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    // this.pointLeft = new SuperAbilityPointLeft(heroKind);
    for (let kind = 0; kind < this.superAbilities.length; kind++) this.superAbilities[kind] = new HeroSuperAbility(heroKind, kind);
  }

  Start() {
    this.SetStats();
    // this.SetGradeMilestone();
  }

  SuperAbility(kind: AbilityKind) {
    return this.superAbilities[kind];
  }

  SetStats() {
    for (let kind = 0; kind < Enums.BasicStatsKind; kind++) this.SetBasicStats(kind);
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.PhysCritChance)
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () => 0.01 * this.SuperAbility(AbilityKind.Luck).Point())
      );
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.PhysCritChance)
      .RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SuperAbility,
          MultiplierType.After,
          () => Parameter.stats[this.heroKind][7] * this.SuperAbility(AbilityKind.Luck).Point()
        )
      );
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.MagCritChance)
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () => 0.01 * this.SuperAbility(AbilityKind.Luck).Point())
      );
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.MagCritChance)
      .RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SuperAbility,
          MultiplierType.After,
          () => Parameter.stats[this.heroKind][8] * this.SuperAbility(AbilityKind.Luck).Point()
        )
      );
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.CriticalDamage)
      .RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SuperAbility,
          MultiplierType.Mul,
          () => (0.01 * (this.SuperAbility(AbilityKind.Agility).Point() + this.SuperAbility(AbilityKind.Luck).Point())) / 2.0
        )
      );
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.CriticalDamage)
      .RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SuperAbility,
          MultiplierType.After,
          () => (0.0001 * (this.SuperAbility(AbilityKind.Agility).Point() + this.SuperAbility(AbilityKind.Luck).Point())) / 2.0
        )
      );
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.MoveSpeed)
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () => 0.01 * this.SuperAbility(AbilityKind.Agility).Point())
      );
    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.MoveSpeed)
      .RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SuperAbility,
          MultiplierType.After,
          () => Parameter.stats[this.heroKind][11] * Math.pow(this.SuperAbility(AbilityKind.Agility).Point(), 2.0 / 3.0)
        )
      );
  }

  SetBasicStats(kind: BasicStatsKind) {
    let multiplierInfo1: MultiplierInfo = new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () =>
      this.BasicStatsIncrementMul(kind)
    );
    globalThis.data.stats.BasicStats(this.heroKind, kind).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2: MultiplierInfo = new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.After, () =>
      this.BasicStatsIncrementAfter(kind)
    );
    globalThis.data.stats.BasicStats(this.heroKind, kind).RegisterMultiplier(multiplierInfo2);
  }

  BasicStatsIncrementBase(kind: BasicStatsKind) {
    switch (kind) {
      case BasicStatsKind.HP:
        return this.SuperAbility(AbilityKind.Vitality).Point();
      case BasicStatsKind.MP:
        return this.SuperAbility(AbilityKind.Agility).Point() + this.SuperAbility(AbilityKind.Intelligence).Point();
      case BasicStatsKind.ATK:
        return this.SuperAbility(AbilityKind.Strength).Point();
      case BasicStatsKind.MATK:
        return this.SuperAbility(AbilityKind.Intelligence).Point();
      case BasicStatsKind.DEF:
        return (this.SuperAbility(AbilityKind.Vitality).Point() + this.SuperAbility(AbilityKind.Strength).Point()) / 2.0;
      case BasicStatsKind.MDEF:
        return (this.SuperAbility(AbilityKind.Vitality).Point() + this.SuperAbility(AbilityKind.Intelligence).Point()) / 2.0;
      case BasicStatsKind.SPD:
        return this.SuperAbility(AbilityKind.Agility).Point();
      default:
        return 0.0;
    }
  }

  BasicStatsIncrementMul(kind: BasicStatsKind) {
    return this.BasicStatsIncrementBase(kind) * 0.01;
  }

  BasicStatsIncrementAfter(kind: BasicStatsKind) {
    return this.BasicStatsIncrementBase(kind) * Parameter.stats[this.heroKind][kind];
  }

  // HeroSuperAbility

  //   SetGradeMilestone() {
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 10, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 20, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 30, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.2), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 40, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 50, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.2), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 60, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 70, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.2), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 80, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 90, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.3), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 100, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 110, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.3), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 120, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 130, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.3), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 140, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 150, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.4), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 160, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.4), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 170, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.4), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 180, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.1), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 190, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.1), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 200, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.1), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 210, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 220, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 230, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 240, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 250, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.2), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 260, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.2), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 270, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.2), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 280, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 290, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.6), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 300, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.6), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 310, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.6), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 320, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.3), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 330, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.3), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 340, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.3), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 350, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 360, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.7), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 370, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.7), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 380, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.7), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 390, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.4), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 400, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.4), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 410, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.4), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 420, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 430, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.8), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 440, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.8), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 450, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.8), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 460, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 470, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 480, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 490, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 500, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.9), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 510, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.9), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 520, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.9), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 530, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.6), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 540, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.6), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 550, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.6), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 560, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 570, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 580, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 590, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 600, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.7), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 610, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.7), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 620, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.7), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 630, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 640, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.25), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 650, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.25), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 660, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.25), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 670, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.8), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 680, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.8), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 690, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.8), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 700, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 710, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 720, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 730, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.5), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 740, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.9), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 750, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.9), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 760, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 0.9), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 770, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 780, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 2.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 790, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 2.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 800, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 2.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 810, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 820, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 830, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Mul, (() => 1.0), x)))));
  //     this.gradeMilestoneList.push(new GradeMilestone((() => this.grade.ValueForGradeMilestone()), 840, (x => globalThis.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GradeMilestone, MultiplierType.Add, (() => 1.0), x))));
  //   }
}
