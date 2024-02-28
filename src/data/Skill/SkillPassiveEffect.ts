import { DATA } from "..";
import { Enums } from "../../Enums";
import { MultiplierInfo } from "../Multiplier";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { SkillPassiveEffectKind } from "../../type/SkillPassiveEffectKind";
import { SKILL } from "./SKILL";

export class SkillPassiveEffect {
  data: DATA;
  skill: SKILL;
  level: number;
  requiredLevel;
  effectKind: SkillPassiveEffectKind;
  // basicStatsKind: BasicStatsKind;
  // statsKind: Stats;
  // globalStatsKind: GlobalStats;
  multiplierType: MultiplierType;
  value;
  kind: number;

  constructor(skill: SKILL, requiredLevel, type: SkillPassiveEffectKind, kind: number, multiplierType: MultiplierType, value) {
    this.data = skill.data;
    this.effectKind = type;
    this.skill = skill;
    this.level = skill.level;
    this.requiredLevel = requiredLevel;
    this.kind = kind;
    this.multiplierType = multiplierType;
    this.value = value;
    this.SetEffect();
  }

  //   SkillPassiveEffect(
  //     skill: SKILL,
  //     requiredLevel,
  //     statsKind: Stats,
  //     multiplierType: MultiplierType,
  //     value)
  //   {
  //     this.effectKind = SkillPassiveEffectKind.HeroStats;
  //     this.skill = skill;
  //     this.level = skill.level;
  //     this.requiredLevel = requiredLevel;
  //     this.statsKind = statsKind;
  //     this.multiplierType = multiplierType;
  //     this.value = value;
  //     this.SetEffect();
  //   }

  //   SkillPassiveEffect(
  //     skill: SKILL,
  //     requiredLevel,
  //     globalStatsKind: GlobalStats,
  //     multiplierType: MultiplierType,
  //     value)
  //   {
  //     this.effectKind = SkillPassiveEffectKind.GlobalStats;
  //     this.skill = skill;
  //     this.level = skill.level;
  //     this.requiredLevel = requiredLevel;
  //     this.globalStatsKind = globalStatsKind;
  //     this.multiplierType = multiplierType;
  //     this.value = value;
  //     this.SetEffect();
  //   }

  //   SkillPassiveEffect(
  //     skill: SKILL,
  //     requiredLevel,
  //     Func<string> description,
  //     Action<Func<bool>> registerInfo = null)
  //   {
  //     this.effectKind = SkillPassiveEffectKind.Others;
  //     this.skill = skill;
  //     this.level = skill.level;
  //     this.requiredLevel = requiredLevel;
  //     this.description = description;
  //     if (registerInfo == null)
  //       return;
  //     registerInfo(new Func<bool>(this.IsActivated));
  //   }

  IsActivated() {
    return this.IsEnoughLevel();
  }

  IsEnoughLevel() {
    return this.level >= this.requiredLevel;
  }

  SetEffect() {
    switch (this.effectKind) {
      case SkillPassiveEffectKind.BasicStats:
        for (let index = 0; index < Enums.HeroKind; index++) {
          let multiplierInfo = new MultiplierInfo(
            MultiplierKind.SkillPassive,
            this.multiplierType,
            () => this.EffectValue(index),
            () => this.IsActivated
          );
          this.data.stats.BasicStats(index, this.kind).RegisterMultiplier(multiplierInfo);
        }
        break;
      case SkillPassiveEffectKind.HeroStats:
        for (let index = 0; index < Enums.HeroKind; index++) {
          let multiplierInfo = new MultiplierInfo(
            MultiplierKind.SkillPassive,
            this.multiplierType,
            () => this.EffectValue(index),
            () => this.IsActivated
          );
          this.data.stats.HeroStats(index, this.kind).RegisterMultiplier(multiplierInfo);
        }
        break;
      case SkillPassiveEffectKind.GlobalStats:
        let multiplierInfo1 = new MultiplierInfo(
          MultiplierKind.SkillPassive,
          this.multiplierType,
          () => this.value * this.data.skill.skillPassiveShareFactors[this.skill.heroKind].Value(),
          () => this.IsActivated()
        );
        this.data.stats.globalStats[this.kind].RegisterMultiplier(multiplierInfo1);
        break;
    }
  }

  EffectValue(heroKind: HeroKind) {
    let num = this.value;
    if (heroKind != this.skill.heroKind) num *= this.data.skill.skillPassiveShareFactors[this.skill.heroKind].Value();
    return num;
  }
}
