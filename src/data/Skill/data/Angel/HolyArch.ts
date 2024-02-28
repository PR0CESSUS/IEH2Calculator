import { MultiplierInfo } from "../../../Multiplier";
import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";

import { MultiplierType } from "../../../../type/MultiplierType";
import { MultiplierKind } from "../../../../type/MultiplierKind";
import { HeroKind } from "../../../../type/HeroKind";
import { Stats } from "../../../../type/Stats";
import { SkillType } from "../../../../type/SkillType";
import { Buff } from "../../../../type/Buff";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class HolyArch extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.SkillLevelUp;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.BuffPercent,
      () => this.IsActiveBuff(heroKind)
    );
    this.data.skill.skillLevelBonusFromHolyArch[heroKind].RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.DebuffResValue,
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.DebuffRes).RegisterMultiplier(multiplierInfo2);
  }

  DebuffResValue() {
    if (this.level >= 250) return 0.7;
    if (this.level >= 150) return 0.45;
    if (this.level >= 100) return 0.25;
    return this.level >= 50 ? 0.1 : 0.0;
  }

  get levelBonus() {
    return this.data.skill.skillLevelBonus[this.heroKind].Value();
  }

  BuffPercent() {
    return 20.0 + this.IncrementBuffPercentPerLevel() * this.Level();
  }

  IncrementBuffPercentPerLevel() {
    return 0.1 + 0.05 * this.Rank();
  }
}
