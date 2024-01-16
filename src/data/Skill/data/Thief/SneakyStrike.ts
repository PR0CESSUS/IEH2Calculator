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

export class SneakyStrike extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.HeroStats, Stats.MagCritChance, MultiplierType.Add, 0.025));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.05));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 150.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 200, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.1));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.CriticalValue,
      () => this.IsActiveBuff(heroKind)
    );
    globalThis.data.stats.HeroStats(heroKind, Stats.MagCritChance).RegisterMultiplier(multiplierInfo);
  }

  CriticalValue() {
    let num = 0.0;
    if (this.level >= 75) num += 0.05;
    if (this.level >= 125) num += 0.05;
    if (this.level >= 175) num += 0.05;
    if (this.level >= 225) num += 0.1;
    return num;
  }

  get element() {
    return Element.Dark;
  }

  get debuff() {
    return Debuff.MdefDown;
  }
}
