import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Stats } from "@type/Stats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class PiercingArrow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.ATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 40, Stats.PhysCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 50, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 75, Stats.PhysCritChance, MultiplierType.Add, 0.02));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 125, Stats.PhysCritChance, MultiplierType.Add, 0.03));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 150, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 175, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.ATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.ATK, MultiplierType.Mul, 0.3));
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
}
