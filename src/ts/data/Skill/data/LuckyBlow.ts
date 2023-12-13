import { MultiplierInfo } from "../../../Multiplier";
import { SkillPassiveEffect } from "../SkillPassiveEffect";
import { SKILL } from "../SKILL";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Stats } from "../../../type/Stats";
import { Buff } from "../../../type/Buff";
import { SkillPassiveEffectKind } from "../../../type/SkillPassiveEffectKind";


export class LuckyBlow extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);
    
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 15, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.025));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 50.0));
    
    
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 0.5));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.PhysCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 200, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.SPD, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Add, () => this.CriticalValue, (() => this.IsActiveBuff(heroKind)));
    globalThis.data.stats.HeroStats(heroKind, Stats.PhysCritChance).RegisterMultiplier(multiplierInfo);
  }

  EffectRange() {return this.level >= 100 ? this.EffectRange() + 100 * globalThis.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();}

  ThisSkillCriticalChance() {return Math.min(1.0, 0.25 + 1.0 / 400.0 * this.Level());}

  CriticalValue() {
    let num = 0.0;
    if (this.level >= 25)
      num += 0.05;
    if (this.level >= 50)
      num += 0.05;
    if (this.level >= 75)
      num += 0.05;
    if (this.level >= 150)
      num += 0.1;
    return num;
  }

  
  
}
