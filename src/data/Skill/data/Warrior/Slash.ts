import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Stats } from "../../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class Slash extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 3.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.02));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 100, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.03));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 150, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 200, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }
}
