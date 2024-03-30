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

export class IceBolt extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.DEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 15, BasicStatsKind.MDEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.DEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 25, BasicStatsKind.MDEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 100, BasicStatsKind.DEF, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MDEF, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.HP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.HP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.HP, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MP, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.HP, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.MATK, MultiplierType.After, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 300, BasicStatsKind.SPD, MultiplierType.After, 75.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.MATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 375, SkillBuffKind.IceDamage, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.MagCritChance, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 425, SkillBuffKind.IceDamage, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.MATK, MultiplierType.After, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 475, SkillBuffKind.IceDamage, 3.0));

    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 500, Stats.CriticalDamage, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 525, SkillBuffKind.IceDamage, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 550, Stats.MagCritChance, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 575, SkillBuffKind.IceDamage, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.WardedFury, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 625, SkillBuffKind.IceDamage, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 650, Stats.CriticalDamage, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 675, SkillBuffKind.IceDamage, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.MATK, MultiplierType.After, 750.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 725, SkillBuffKind.IceDamage, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.SPD, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 775, SkillBuffKind.IceDamage, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 800, Stats.MagCritChance, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 825, SkillBuffKind.IceDamage, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.WardedFury, MultiplierType.Mul, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 875, SkillBuffKind.IceDamage, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 900, Stats.CriticalDamage, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 925, SkillBuffKind.IceDamage, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 950, BasicStatsKind.MATK, MultiplierType.After, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Ice;
  }

  get debuff() {
    return Debuff.SpdDown;
  }
}
