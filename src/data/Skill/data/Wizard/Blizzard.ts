import { Util } from "@/Util";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { Debuff } from "@type/Debuff";
import { MultiplierType } from "@type/MultiplierType";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { Stats } from "@type/Stats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class Blizzard extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 15, BasicStatsKind.HP, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 20, () => Localization.WizardSkillsString(2) + Util.meter(50.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 30, Stats.MagCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 40, SkillPassiveKind.IceDamage, 0.15, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.WizardSkillsString(2) + Util.meter(100.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 60, Stats.MagCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 70, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MDEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.DEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.WizardSkillsString(2) + Util.meter(100.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.HP, MultiplierType.Add, 2000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 160, Stats.MagCritChance, MultiplierType.Add, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.WizardSkillsString(3)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MP, MultiplierType.Add, 3000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.MATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.MATK, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.MagCritChance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.MATK, MultiplierType.After, 750.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.WardedFury, MultiplierType.Mul, 0.35));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 450, Stats.CriticalDamage, MultiplierType.Mul, 0.45));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.SDDamageMultiplier, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 550, BasicStatsKind.MATK, MultiplierType.After, 1500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 575, Stats.MagCritChance, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
  }

  ConsumeMp() {
    return this.level.value >= 200 ? this.ConsumeMp() * 0.5 : this.ConsumeMp();
  }

  EffectRange() {
    if (this.level.value >= 100) return this.EffectRange() + 250 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    if (this.level.value >= 50) return this.EffectRange() + 150 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    return this.level.value >= 20 ? this.EffectRange() + 50 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();
  }

  get element() {
    return Element.Ice;
  }

  get debuff() {
    return Debuff.SpdDown;
  }
}
