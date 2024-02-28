import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Element } from "../../../../type/Element";
import { Stats } from "../../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class MeteorStrike extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.HeroStats, Stats.MagCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 1000.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 150, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.75));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get element() {
    return Element.Fire;
  }
}
