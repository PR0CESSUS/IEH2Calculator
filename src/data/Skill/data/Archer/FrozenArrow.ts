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

export class FrozenArrow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 10, SkillBuffKind.IceDamage, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.MP, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 30, Stats.MagCritChance, MultiplierType.Add, 0.02));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 40, Stats.IceRes, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.MDEF, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.DEF, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MDEF, MultiplierType.Add, 40.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.DEF, MultiplierType.Add, 40.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 100, SkillBuffKind.IceDamage, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 110, SkillPassiveKind.IceDamage, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 120, Stats.IceRes, MultiplierType.Add, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 130, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.HP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 150, SkillPassiveKind.IceDamage, 0.3, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MDEF, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.IceDamage, 0.5, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.DEF, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 225, SkillBuffKind.IceDamage, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.HP, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 275, SkillPassiveKind.IceDamage, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.IceRes, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 350, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.GuildExp, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.IceRes, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.GuildExp, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 450, SkillPassiveKind.IceDamage, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.GuildExp, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 525, Stats.IceRes, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.IceDamage, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 575, BasicStatsKind.HP, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.GuildExp, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 625, Stats.IceRes, MultiplierType.Mul, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 650, SkillPassiveKind.GuildExp, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.IceDamage, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 700, Stats.IceRes, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.GuildExp, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.GuildExp, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.IceDamage, 1.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.GuildExp, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.IceRes, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.HP, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 925, Stats.IceRes, MultiplierType.Mul, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Ice;
  }

  get debuff() {
    return Debuff.IceResDown;
  }
}
