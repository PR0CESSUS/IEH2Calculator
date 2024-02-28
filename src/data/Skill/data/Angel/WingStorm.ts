import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { Debuff } from "../../../../type/Debuff";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Element } from "../../../../type/Element";
import { Stats } from "../../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class WingStorm extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 15, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 150.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.1));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Mul, 0.125));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get element() {
    return Element.Light;
  }

  get debuff() {
    return Debuff.Knockback;
  }
}
