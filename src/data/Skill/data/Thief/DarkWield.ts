import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Debuff } from "@type/Debuff";
import { Element } from "@type/Element";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class DarkWield extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.SPD, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 20, Stats.MagCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MATK, MultiplierType.Add, 75.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.WarriorSkillsString(2, 100)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MATK, MultiplierType.Add, 125.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.HP, MultiplierType.Add, 1500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.SPD, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 140, () => Localization.WarriorSkillsString(2, 150)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MATK, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.DEF, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MDEF, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.MATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.MATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 300, () => Localization.WarriorSkillsString(2, 150)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 350, Stats.CriticalDamage, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 375, SkillBuffKind.DarkDamage, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.WardedFury, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 425, SkillBuffKind.DarkDamage, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.MP, MultiplierType.After, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 475, SkillBuffKind.DarkDamage, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 500, BasicStatsKind.SPD, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 525, SkillBuffKind.DarkDamage, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 550, Stats.CriticalDamage, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 575, SkillBuffKind.DarkDamage, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.WardedFury, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 625, SkillBuffKind.DarkDamage, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 650, BasicStatsKind.MATK, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 675, SkillBuffKind.DarkDamage, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.MP, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 725, SkillBuffKind.DarkDamage, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.MATK, MultiplierType.After, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 775, SkillBuffKind.DarkDamage, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 800, Stats.MagCritChance, MultiplierType.After, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 825, SkillBuffKind.DarkDamage, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 850, () => Localization.WarriorSkillsString(2, 150)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 875, SkillBuffKind.DarkDamage, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.MATK, MultiplierType.After, 15000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 925, SkillBuffKind.DarkDamage, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Dark;
  }

  get debuff() {
    return Debuff.Knockback;
  }

  EffectRange() {
    if (this.level.value >= 850) return this.EffectRange() + 550 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    if (this.level.value >= 300) return this.EffectRange() + 400 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    if (this.level.value >= 140) return this.EffectRange() + 250 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    return this.level.value >= 50 ? this.EffectRange() + 100 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();
  }
}
