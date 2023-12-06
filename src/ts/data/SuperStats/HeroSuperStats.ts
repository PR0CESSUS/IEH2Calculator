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

  get grade() {
    return globalThis.data.source.heroGrade[this.heroKind];
  }

  Start() {
    this.SetStats();
    this.SetGradeMilestone();
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

  SetGradeMilestone() {
    globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 10
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 20
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 30
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 40
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 50
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 60
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 70
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 80
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 90
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 100
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 110
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 120
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 130
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 140
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 150
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 160
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 170
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.1,
        () => this.grade >= 180
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.1,
        () => this.grade >= 190
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.1,
        () => this.grade >= 200
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 210
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 220
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 230
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 240
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 250
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 260
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 270
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 280
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 290
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 300
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 310
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 320
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 330
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 340
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 350
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 360
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 370
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 380
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 390
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 400
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 410
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 420
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 430
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 440
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 450
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 460
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 470
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 480
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 490
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 500
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 510
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 520
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 530
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 540
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 550
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 560
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 570
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 580
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 590
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 600
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 610
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 620
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 630
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.25,
        () => this.grade >= 640
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.25,
        () => this.grade >= 650
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.25,
        () => this.grade >= 660
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 670
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 680
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 690
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 700
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.5,
        () => this.grade >= 710
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.5,
        () => this.grade >= 720
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.5,
        () => this.grade >= 730
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 740
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 750
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 760
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 770
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 2.0,
        () => this.grade >= 780
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 2.0,
        () => this.grade >= 790
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 2.0,
        () => this.grade >= 800
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 810
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 820
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 830
      )
    );
    globalThis.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 840
      )
    );
  }
}
