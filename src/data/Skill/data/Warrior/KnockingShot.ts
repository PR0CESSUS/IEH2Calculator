import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Debuff } from "@type/Debuff";
import { GlobalStats } from "@type/GlobalStats";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class KnockingShot extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.HP, MultiplierType.Add, 250.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MDEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 15, BasicStatsKind.DEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 20, Stats.ExpGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 25, BasicStatsKind.MDEF, MultiplierType.Add, 40.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.DEF, MultiplierType.Add, 40.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MDEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.DEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.HP, MultiplierType.Add, 2500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 80, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MDEF, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 100, BasicStatsKind.DEF, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MDEF, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.DEF, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MDEF, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.DEF, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.HP, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.HP, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.HP, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 275, Stats.ExpGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 300, GlobalStats.GoldGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.DEF, MultiplierType.After, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.SDDamageCutMultiplier, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 400, BasicStatsKind.MDEF, MultiplierType.After, 250.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 425, SkillBuffKind.ArmoredFury, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.DEF, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 475, BasicStatsKind.HP, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 500, BasicStatsKind.MDEF, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 525, SkillBuffKind.ArmoredFury, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 550, Stats.ExpGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 600, GlobalStats.GoldGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 625, SkillBuffKind.ArmoredFury, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 650, BasicStatsKind.DEF, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.MDEF, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 725, SkillBuffKind.ArmoredFury, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.DEF, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 800, BasicStatsKind.MDEF, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 825, SkillBuffKind.ArmoredFury, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.SDDamageCutMultiplier, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 925, SkillBuffKind.ArmoredFury, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get debuff() {
    return Debuff.Knockback;
  }
}
