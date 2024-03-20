import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class FireBolt extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 40, Stats.MagCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.DEF, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MDEF, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 70, Stats.MagCritChance, MultiplierType.Add, 0.02));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 100, Stats.MagCritChance, MultiplierType.Add, 0.03));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.MATK, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MATK, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 180, Stats.ExpGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.MATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.MATK, MultiplierType.After, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 300, BasicStatsKind.MATK, MultiplierType.After, 25.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.MATK, MultiplierType.After, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 375, SkillBuffKind.FireDamage, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 400, BasicStatsKind.MATK, MultiplierType.After, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 425, SkillBuffKind.FireDamage, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.MP, MultiplierType.After, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 475, SkillBuffKind.FireDamage, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 500, Stats.MagCritChance, MultiplierType.After, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 525, SkillBuffKind.FireDamage, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 550, BasicStatsKind.MATK, MultiplierType.After, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 575, SkillBuffKind.FireDamage, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.MagCritChance, MultiplierType.After, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 625, SkillBuffKind.FireDamage, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 650, BasicStatsKind.MATK, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 675, SkillBuffKind.FireDamage, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.MP, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 725, SkillBuffKind.FireDamage, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.MATK, MultiplierType.After, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 775, SkillBuffKind.FireDamage, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 800, Stats.MagCritChance, MultiplierType.After, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 825, SkillBuffKind.FireDamage, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.SDDamageMultiplier, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 875, SkillBuffKind.FireDamage, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.MATK, MultiplierType.After, 15000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 925, SkillBuffKind.FireDamage, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.SDDamageMultiplier, 0.75, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Fire;
  }
}
