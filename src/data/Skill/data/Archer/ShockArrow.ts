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

export class ShockArrow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 20, SkillBuffKind.ThunderDamage, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 40, Stats.ThunderRes, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 50, Stats.MagCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MATK, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MATK, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 90, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 110, BasicStatsKind.MP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 120, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 130, SkillPassiveKind.ThunderDamage, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 140, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 150, SkillBuffKind.ThunderDamage, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 160, Stats.ThunderRes, MultiplierType.Add, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 170, SkillPassiveKind.ThunderDamage, 0.3, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 190, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 225, SkillPassiveKind.ThunderDamage, 0.5, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 250, SkillBuffKind.ThunderDamage, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 275, SkillPassiveKind.ThunderDamage, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.ThunderRes, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 350, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ThisSkillCastTime, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.ThunderRes, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 450, SkillPassiveKind.ThunderDamage, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.ThisSkillCastTime, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 525, Stats.ThunderRes, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.ThunderDamage, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 575, BasicStatsKind.MP, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 625, Stats.ThunderRes, MultiplierType.Mul, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 650, Stats.MagCritChance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.ThunderDamage, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 700, Stats.ThunderRes, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 725, Stats.MagCritChance, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.ThisSkillCastTime, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ThunderDamage, 1.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ThisSkillDamage, 64.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.ThunderRes, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ThisSkillDamage, 128.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.MP, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 925, Stats.ThunderRes, MultiplierType.Mul, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.ThisSkillDamage, 256.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Thunder;
  }

  get debuff() {
    return Debuff.ThunderResDown;
  }
}
