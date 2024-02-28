import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Element } from "../../../../type/Element";
import { HeroKind } from "../../../../type/HeroKind";
import { MultiplierKind } from "../../../../type/MultiplierKind";
import { MultiplierType } from "../../../../type/MultiplierType";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";
import { Stats } from "../../../../type/Stats";
import { MultiplierInfo } from "../../../Multiplier";
import { SKILL } from "../../SKILL";
import { SkillPassiveEffect } from "../../SkillPassiveEffect";

export class BurstArrow extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 5.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 15, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 25, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 30.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 40.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 0.5));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.15));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.DamageValue,
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.ElementDamage(heroKind, Element.Physical).RegisterMultiplier(multiplierInfo);
  }

  DamageValue() {
    let num = 0.0;
    if (this.level >= 10) num += 0.2;
    if (this.level >= 75) num += 0.3;
    if (this.level >= 175) num += 0.5;
    return num;
  }
}
