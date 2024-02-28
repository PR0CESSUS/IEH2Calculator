import { MultiplierInfo } from "../../../Multiplier";
import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { MultiplierType } from "../../../../type/MultiplierType";
import { MultiplierKind } from "../../../../type/MultiplierKind";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Stats } from "../../../../type/Stats";
import { SkillType } from "../../../../type/SkillType";
import { Buff } from "../../../../type/Buff";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class Haste extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.15));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 300.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 350.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 400.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.SpdUp;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffPercent,
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.BasicStats(heroKind, BasicStatsKind.SPD).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.MoveSpeedValue,
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.MoveSpeed).RegisterMultiplier(multiplierInfo2);
  }

  MoveSpeedValue() {
    if (this.level >= 200) return 0.5;
    if (this.level >= 150) return 0.25;
    return this.level >= 100 ? 0.1 : 0.0;
  }
}
