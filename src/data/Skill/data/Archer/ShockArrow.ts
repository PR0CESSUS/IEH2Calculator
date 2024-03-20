import { DATA } from "@/data/";
import { MultiplierInfo } from "@/data/Multiplier";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Debuff } from "@type/Debuff";
import { Element } from "@type/Element";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class ShockArrow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 20, () => Localization.ArcherSkillsString(5, 0.2)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 40, Stats.ThunderRes, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 50, Stats.MagCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MATK, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 125, BasicStatsKind.MP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.ArcherSkillsString(5, 0.3)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 175, Stats.ThunderRes, MultiplierType.Add, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.ArcherSkillsString(5, 0.5)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.DamageValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.ElementDamage(heroKind, Element.Thunder).RegisterMultiplier(multiplierInfo);
  }

  DamageValue() {
    let num = 0.0;
    if (this.level.value >= 20) num += 0.2;
    if (this.level.value >= 150) num += 0.3;
    if (this.level.value >= 250) num += 0.5;
    return num;
  }

  get element() {
    return Element.Thunder;
  }

  get debuff() {
    return Debuff.ThunderResDown;
  }
}
