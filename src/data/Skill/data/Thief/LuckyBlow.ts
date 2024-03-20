import { Util } from "@/Util";
import { DATA } from "@/data/";
import { MultiplierInfo } from "@/data/Multiplier";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class LuckyBlow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.ATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.SPD, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 15, Stats.PhysCritChance, MultiplierType.Add, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 25, () => Localization.ThiefSkillsString(1, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.SPD, MultiplierType.Add, 60.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 40, SkillPassiveKind.EssenceConversionRate, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.ThiefSkillsString(1, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 60, SkillPassiveKind.EssenceConversionRate, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 70, () => Localization.ThiefSkillsString(1, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 80, SkillPassiveKind.EssenceConversionRate, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 90, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.ThiefSkillsString(6) + Util.meter(100.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 120, Stats.ExpGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 140, () => Localization.ThiefSkillsString(1, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 160, SkillPassiveKind.EssenceConversionRate, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 180, Stats.PhysCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.EssenceConversionRate, 0.4, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.SPD, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.SPD, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 275, Stats.PhysCritChance, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.MagCritChance, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 350, () => Localization.ThiefSkillsString(12, 0.25)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.EssenceConversionRate, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.PhysCritChance, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 425, BasicStatsKind.SPD, MultiplierType.After, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 450, () => Localization.ThiefSkillsString(13, 0.25)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 500, Stats.MagCritChance, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.EssenceConversionRate, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 550, () => Localization.ThiefSkillsString(12, 0.75)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 575, BasicStatsKind.SPD, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.PhysCritChance, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 650, () => Localization.ThiefSkillsString(13, 0.75)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 675, BasicStatsKind.SPD, MultiplierType.After, 2000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 700, Stats.MagCritChance, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.EssenceConversionRate, 1.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 750, () => Localization.ThiefSkillsString(12, 1.5)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 800, Stats.PhysCritChance, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 850, () => Localization.ThiefSkillsString(13, 1.5)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 900, Stats.MagCritChance, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.EssenceConversionRate, 2.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  PhysicalCriticalMulValue() {
    let num = 0.0;
    if (this.level.value >= 350) num += 0.25;
    if (this.level.value >= 550) num += 0.75;
    if (this.level.value >= 750) num += 1.5;
    return num;
  }

  MagicalCriticalMulValue() {
    let num = 0.0;
    if (this.level.value >= 450) num += 0.25;
    if (this.level.value >= 650) num += 0.75;
    if (this.level.value >= 850) num += 1.5;
    return num;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.PhysicalCriticalValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.PhysCritChance).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.PhysicalCriticalMulValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.PhysCritChance).RegisterMultiplier(multiplierInfo2);
    let multiplierInfo3 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.MagicalCriticalMulValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.MagCritChance).RegisterMultiplier(multiplierInfo3);
  }

  EffectRange() {
    return this.level.value >= 100 ? this.EffectRange() + 100 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();
  }

  ThisSkillCriticalChance() {
    return Math.min(1.0, 0.25 + (1.0 / 400.0) * this.Level());
  }

  PhysicalCriticalValue() {
    let num = 0.0;
    if (this.level.value >= 25) num += 0.05;
    if (this.level.value >= 50) num += 0.05;
    if (this.level.value >= 70) num += 0.05;
    if (this.level.value >= 140) num += 0.1;
    return num;
  }
}
