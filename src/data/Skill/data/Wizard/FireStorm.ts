import { Util } from "@/Util";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { Stats } from "@type/Stats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class FireStorm extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.DEF, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MDEF, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MP, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.WizardSkillsString(0) + Util.meter(30.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 80, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 140, () => Localization.WizardSkillsString(0) + Util.meter(50.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 160, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 250, Stats.ExpGain, MultiplierType.Add, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 275, SkillPassiveKind.GuildExp, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 300, BasicStatsKind.MDEF, MultiplierType.After, 15.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.MATK, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 400, BasicStatsKind.SPD, MultiplierType.After, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.HP, MultiplierType.After, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 500, Stats.MagCritChance, MultiplierType.After, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 550, BasicStatsKind.MDEF, MultiplierType.After, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.GuildExp, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 650, BasicStatsKind.MATK, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.CriticalDamage, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.HP, MultiplierType.After, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.MDEF, MultiplierType.After, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.GuildExp, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.SDChallengeBossDamageMultiplier, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.MDEF, MultiplierType.After, 20000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.SDChallengeBossDamageMultiplier, 0.75, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Fire;
  }
}
