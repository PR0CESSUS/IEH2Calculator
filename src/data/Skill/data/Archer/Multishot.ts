import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";

export class Multishot extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.ATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.ATK, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 15, BasicStatsKind.ATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.ATK, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 25, BasicStatsKind.ATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.ATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.ATK, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.ATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 75, BasicStatsKind.ATK, MultiplierType.Mul, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.ArcherSkillsString(2)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 125, BasicStatsKind.ATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.ArcherSkillsString(3)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.ArcherSkillsString(3)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.ArcherSkillsString(3)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
  }
}
