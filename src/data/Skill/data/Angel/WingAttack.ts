import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { Debuff } from "../../../../type/Debuff";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Stats } from "../../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";
import { GlobalStats } from "../../../../type/GlobalStats";

export class WingAttack extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.3));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.1));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.2));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.3));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.4));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get debuff() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value() > 0.0 ? Debuff.Poison : Debuff.Nothing;
  }

  DebuffChance() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value();
  }
}
