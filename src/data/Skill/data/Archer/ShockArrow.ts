import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Debuff } from "../../../../type/Debuff";
import { Element } from "../../../../type/Element";
import { HeroKind } from "../../../../type/HeroKind";
import { MultiplierKind } from "../../../../type/MultiplierKind";
import { MultiplierType } from "../../../../type/MultiplierType";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";
import { Stats } from "../../../../type/Stats";
import { MultiplierInfo } from "../../../Multiplier";
import { SKILL } from "../../SKILL";
import { SkillPassiveEffect } from "../../SkillPassiveEffect";

export class ShockArrow extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 5.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.HeroStats, Stats.ThunderRes, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.HeroStats, Stats.MagCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 70, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 80, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 20.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Mul, 0.025));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.ThunderRes, MultiplierType.Add, 0.15));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Mul, 0.05));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.DamageValue,
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.ElementDamage(heroKind, Element.Thunder).RegisterMultiplier(multiplierInfo);
  }

  DamageValue() {
    let num = 0.0;
    if (this.level >= 20) num += 0.2;
    if (this.level >= 150) num += 0.3;
    if (this.level >= 250) num += 0.5;
    return num;
  }

  get element() {
    return Element.Thunder;
  }

  get debuff() {
    return Debuff.ThunderResDown;
  }
}
