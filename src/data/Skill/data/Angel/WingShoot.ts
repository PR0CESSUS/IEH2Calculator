import { MultiplierInfo } from "@/data/Multiplier";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { Stats } from "@type/Stats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class WingShoot extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 40, Stats.MagCritChance, MultiplierType.Add, 0.025));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        50,
        () => Localization.AngelSkillsString(0),
        (x) => this.extraHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, MultiplierType.Add, () => 1.0, x))
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 60, Stats.ExpGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 70, Stats.MagCritChance, MultiplierType.Add, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.DEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MDEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        100,
        () => Localization.AngelSkillsString(0),
        (x) => this.extraHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, MultiplierType.Add, () => 1.0, x))
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 110, Stats.ExpGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 120, Stats.MagCritChance, MultiplierType.Add, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 130, Stats.CriticalDamage, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.MP, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        150,
        () => Localization.AngelSkillsString(0),
        (x) => this.extraHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, MultiplierType.Add, () => 1.0, x))
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 160, Stats.ExpGain, MultiplierType.Add, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 170, Stats.PhysCritChance, MultiplierType.Add, 0.075));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 190, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        200,
        () => Localization.AngelSkillsString(0),
        (x) => this.extraHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, MultiplierType.Add, () => 1.0, x))
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 250, Stats.ExpGain, MultiplierType.Add, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.SPD, MultiplierType.After, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 300, BasicStatsKind.SPD, MultiplierType.After, 25.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.SPD, MultiplierType.After, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 400, BasicStatsKind.SPD, MultiplierType.After, 70.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.MP, MultiplierType.After, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 500, Stats.CriticalDamage, MultiplierType.After, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 550, BasicStatsKind.SPD, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.CriticalDamage, MultiplierType.After, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 625, Stats.ExpGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 650, BasicStatsKind.SPD, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.MagCritChance, MultiplierType.After, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.MP, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 725, Stats.ExpGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.SPD, MultiplierType.After, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 800, Stats.CriticalDamage, MultiplierType.After, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 825, BasicStatsKind.SPD, MultiplierType.After, 10000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.MagCritChance, MultiplierType.After, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 875, Stats.PhysCritChance, MultiplierType.After, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.SPD, MultiplierType.After, 20000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.ThisSkillDamage, 64.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 950, BasicStatsKind.MP, MultiplierType.After, 50000.0));
  }

  get element() {
    return Element.Light;
  }
}
