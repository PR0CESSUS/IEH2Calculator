import { Multiplier } from "../Multiplier";
import { MultiplierInfo } from "../Multiplier";
import { Enums } from "../../Enums";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { AbilityKind } from "../../type/AbilityKind";
import { Stats } from "../../type/Stats";
import { HeroSuperAbility } from "./HeroSuperAbility";
import { Parameter } from "../Parameter";
import { DATA } from "..";

export class HeroSuperStats {
  data: DATA;
  heroKind: HeroKind;
  // grade: HeroGrade;
  // fame: HeroFame;
  superAbilities: HeroSuperAbility[] = Array(Enums.AbilityKind);
  // pointLeft: SuperAbilityPointLeft;
  //   gradeMilestoneList: GradeMilestone[] = [];
  fameGain: Multiplier;
  timecountSec;

  constructor(DATA: DATA, heroKind: HeroKind) {
    this.data = DATA;
    this.heroKind = heroKind;

    // this.grade = new HeroGrade(heroKind);
    // this.fame = new HeroFame(this, heroKind, this.grade);
    // this.fame.isTrackGain = true;
    this.fameGain = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    // this.pointLeft = new SuperAbilityPointLeft(heroKind);
    for (let kind = 0; kind < this.superAbilities.length; kind++) this.superAbilities[kind] = new HeroSuperAbility(this.data, heroKind, kind);
  }

  get grade() {
    return this.data.source.heroGrade[this.heroKind];
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
    this.data.stats
      .HeroStats(this.heroKind, Stats.PhysCritChance)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () => 0.01 * this.SuperAbility(AbilityKind.Luck).Point()));
    this.data.stats
      .HeroStats(this.heroKind, Stats.PhysCritChance)
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.After, () => Parameter.stats[this.heroKind][7] * this.SuperAbility(AbilityKind.Luck).Point())
      );
    this.data.stats
      .HeroStats(this.heroKind, Stats.MagCritChance)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () => 0.01 * this.SuperAbility(AbilityKind.Luck).Point()));
    this.data.stats
      .HeroStats(this.heroKind, Stats.MagCritChance)
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.After, () => Parameter.stats[this.heroKind][8] * this.SuperAbility(AbilityKind.Luck).Point())
      );
    this.data.stats
      .HeroStats(this.heroKind, Stats.CriticalDamage)
      .RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SuperAbility,
          MultiplierType.Mul,
          () => (0.01 * (this.SuperAbility(AbilityKind.Agility).Point() + this.SuperAbility(AbilityKind.Luck).Point())) / 2.0
        )
      );
    this.data.stats
      .HeroStats(this.heroKind, Stats.CriticalDamage)
      .RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SuperAbility,
          MultiplierType.After,
          () => (0.0001 * (this.SuperAbility(AbilityKind.Agility).Point() + this.SuperAbility(AbilityKind.Luck).Point())) / 2.0
        )
      );
    this.data.stats
      .HeroStats(this.heroKind, Stats.MoveSpeed)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () => 0.01 * this.SuperAbility(AbilityKind.Agility).Point()));
    this.data.stats
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
    let multiplierInfo1: MultiplierInfo = new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Mul, () => this.BasicStatsIncrementMul(kind));
    this.data.stats.BasicStats(this.heroKind, kind).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2: MultiplierInfo = new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.After, () => this.BasicStatsIncrementAfter(kind));
    this.data.stats.BasicStats(this.heroKind, kind).RegisterMultiplier(multiplierInfo2);
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
    this.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 10
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 20
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 30
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 40
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 50
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 60
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 70
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 80
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 90
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 100
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 110
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 120
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 130
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 140
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 150
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 160
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 170
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.1,
        () => this.grade >= 180
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.1,
        () => this.grade >= 190
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.1,
        () => this.grade >= 200
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 210
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 220
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 230
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 240
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 250
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 260
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.grade >= 270
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 280
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 290
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 300
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 310
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 320
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 330
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.grade >= 340
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 350
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 360
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 370
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 380
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 390
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 400
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.4,
        () => this.grade >= 410
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 420
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 430
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 440
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 450
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 460
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 470
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.grade >= 480
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 490
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 500
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 510
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 520
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 530
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 540
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.6,
        () => this.grade >= 550
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.skillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 560
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 570
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 580
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 590
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 600
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 610
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.7,
        () => this.grade >= 620
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 630
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.25,
        () => this.grade >= 640
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.25,
        () => this.grade >= 650
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.25,
        () => this.grade >= 660
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 670
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 680
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.8,
        () => this.grade >= 690
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 700
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.5,
        () => this.grade >= 710
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.5,
        () => this.grade >= 720
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.5,
        () => this.grade >= 730
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 740
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 750
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 0.9,
        () => this.grade >= 760
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 770
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 2.0,
        () => this.grade >= 780
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 2.0,
        () => this.grade >= 790
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 2.0,
        () => this.grade >= 800
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 810
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.armoredFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 820
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.wardedFury.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Mul,
        () => 1.0,
        () => this.grade >= 830
      )
    );
    this.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.GradeMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.grade >= 840
      )
    );
  }
}
