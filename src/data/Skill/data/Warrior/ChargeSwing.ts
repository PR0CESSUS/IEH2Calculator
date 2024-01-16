import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { Debuff } from "../../../../type/Debuff";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Stats } from "../../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class ChargeSwing extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.05));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 5000.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.05));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 1.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.1));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get debuff() {
    return Debuff.MatkDown;
  }

  Range() {
    return this.level >= 100 ? this.Range() + 30 * globalThis.data.skill.skillRangeMultiplier[this.heroKind].Value() : this.Range();
  }

  EffectRange() {
    if (this.level >= 150) return this.EffectRange() + 170 * globalThis.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    return this.level >= 30 ? this.EffectRange() + 70 * globalThis.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();
  }

  Interval() {
    return this.level >= 200 ? this.Interval() * 0.75 : this.Interval();
  }
}
