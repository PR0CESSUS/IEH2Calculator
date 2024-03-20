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

export class ThunderBolt extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.SPD, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 30, Stats.MagCritChance, MultiplierType.Add, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.DEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.MDEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.SPD, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MATK, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.SPD, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MATK, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.WizardSkillsString(4)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.MATK, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.SPD, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 225, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.MP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.HP, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 300, () => Localization.WizardSkillsString(4)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.MP, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 375, SkillBuffKind.ThunderDamage, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 400, SkillPassiveKind.GuildExp, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 425, SkillBuffKind.ThunderDamage, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.MDEF, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 475, SkillBuffKind.ThunderDamage, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 500, () => Localization.WizardSkillsString(4)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 525, SkillBuffKind.ThunderDamage, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 550, BasicStatsKind.HP, MultiplierType.After, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 575, SkillBuffKind.ThunderDamage, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 600, BasicStatsKind.MP, MultiplierType.After, 400.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 625, SkillBuffKind.ThunderDamage, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 650, SkillPassiveKind.SDDamageCutMultiplier, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 675, SkillBuffKind.ThunderDamage, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 700, () => Localization.WizardSkillsString(4)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 725, SkillBuffKind.ThunderDamage, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.MDEF, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 775, SkillBuffKind.ThunderDamage, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.SDDamageCutMultiplier, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 825, SkillBuffKind.ThunderDamage, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 875, SkillBuffKind.ThunderDamage, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 925, SkillBuffKind.ThunderDamage, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Thunder;
  }

  get debuff() {
    return Debuff.Electric;
  }
}
