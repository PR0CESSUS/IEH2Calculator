import { Util } from "@/Util";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Stats } from "@type/Stats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class SwingAround extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.ATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.SPD, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 20, Stats.MoveSpeed, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.ATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 40, SkillPassiveKind.PhysicalDamage, 0.05, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.WarriorSkillsString(2) + Util.meter(100.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 60, SkillPassiveKind.PhysicalDamage, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 70, Stats.MoveSpeed, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 80, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.ATK, MultiplierType.Add, 75.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 125, BasicStatsKind.MP, MultiplierType.Add, 750.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.WarriorSkillsString(2) + Util.meter(150.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 175, BasicStatsKind.ATK, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.WarriorSkillsString(4)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.ATK, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.ATK, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 275, SkillPassiveKind.PhysicalDamage, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 300, BasicStatsKind.ATK, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 350, Stats.ArmoredFury, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.CriticalDamage, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.SPD, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 500, () => Localization.WarriorSkillsString(2) + Util.meter(150.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 550, Stats.ArmoredFury, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.CriticalDamage, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 650, SkillPassiveKind.SDDamageMultiplier, 2.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 700, SkillPassiveKind.SDDamageMultiplier, 4.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.SDDamageMultiplier, 8.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 800, () => Localization.WarriorSkillsString(2) + Util.meter(150.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.SDDamageMultiplier, 16.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.SDDamageMultiplier, 32.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 950, BasicStatsKind.SPD, MultiplierType.After, 10000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  EffectRange() {
    if (this.level.value >= 800) return this.EffectRange() + 550 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    if (this.level.value >= 500) return this.EffectRange() + 400 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    if (this.level.value >= 150) return this.EffectRange() + 250 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    return this.level.value >= 50 ? this.EffectRange() + 100 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();
  }

  ConsumeMp() {
    return this.level.value >= 200 ? 0.0 : this.ConsumeMp();
  }
}
