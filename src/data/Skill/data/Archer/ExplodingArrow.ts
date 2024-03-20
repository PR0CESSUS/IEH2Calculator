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

export class ExplodingArrow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 10, () => Localization.ArcherSkillsString(8, 0.2)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 30, Stats.FireRes, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MATK, MultiplierType.Add, 40.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 50, Stats.MagCritChance, MultiplierType.Add, 0.03));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 75, () => Localization.ArcherSkillsString(8, 0.3)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 125, Stats.FireRes, MultiplierType.Add, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 150, BasicStatsKind.MATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 175, () => Localization.ArcherSkillsString(8, 0.5)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MATK, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.MATK, MultiplierType.Mul, 1.0));
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
    this.data.stats.ElementDamage(heroKind, Element.Fire).RegisterMultiplier(multiplierInfo);
  }

  DamageValue() {
    let num = 0.0;
    if (this.level.value >= 10) num += 0.2;
    if (this.level.value >= 75) num += 0.3;
    if (this.level.value >= 175) num += 0.5;
    return num;
  }

  get element() {
    return Element.Fire;
  }

  get debuff() {
    return Debuff.FireResDown;
  }
}
