import { MultiplierInfo } from "../../../Multiplier";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Debuff } from "../../../../type/Debuff";
import { Element } from "../../../../type/Element";
import { HeroKind } from "../../../../type/HeroKind";
import { MultiplierKind } from "../../../../type/MultiplierKind";
import { MultiplierType } from "../../../../type/MultiplierType";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";
import { Stats } from "../../../../type/Stats";
import { SKILL } from "../../SKILL";
import { SkillPassiveEffect } from "../../SkillPassiveEffect";

export class FrozenArrow extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.HeroStats, Stats.MagCritChance, MultiplierType.Add, 0.02));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.HeroStats, Stats.IceRes, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MDEF, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.BasicStats, BasicStatsKind.DEF, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 70, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 80, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MDEF, MultiplierType.Add, 40.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 90, SkillPassiveEffectKind.BasicStats, BasicStatsKind.DEF, MultiplierType.Add, 40.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.HeroStats, Stats.IceRes, MultiplierType.Add, 0.15));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 150, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MDEF, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 200, SkillPassiveEffectKind.BasicStats, BasicStatsKind.DEF, MultiplierType.Mul, 0.15));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.DamageValue,
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.ElementDamage(heroKind, Element.Ice).RegisterMultiplier(multiplierInfo);
  }

  DamageValue() {
    let num = 0.0;
    if (this.level >= 10) num += 0.2;
    if (this.level >= 100) num += 0.3;
    if (this.level >= 225) num += 0.5;
    return num;
  }

  get element() {
    return Element.Ice;
  }

  get debuff() {
    return Debuff.IceResDown;
  }
}
