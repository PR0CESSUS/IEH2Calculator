import { MultiplierInfo } from "../../../../Multiplier";
import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { Debuff } from "../../../../type/Debuff";
import { MultiplierType } from "../../../../type/MultiplierType";
import { MultiplierKind } from "../../../../type/MultiplierKind";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Element } from "../../../../type/Element";
import { Stats } from "../../../../type/Stats";
import { Buff } from "../../../../type/Buff";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class ShockArrow extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);

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
    globalThis.data.stats.ElementDamage(heroKind, Element.Thunder).RegisterMultiplier(multiplierInfo);
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
