import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { Element } from "../../../../type/Element";
import { Stats } from "../../../../type/Stats";
import { SkillType } from "../../../../type/SkillType";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class TuneOfTotalTaming extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get type() {
    return SkillType.Attack;
  }

  get element() {
    return Element.Light;
  }

  TamingChance() {
    return Math.min(1.0, 0.005 + 5e-5 * this.Level());
  }
}
