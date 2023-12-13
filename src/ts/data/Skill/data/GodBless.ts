import { MultiplierInfo } from "../../../Multiplier";
import { SkillPassiveEffect } from "../SkillPassiveEffect";
import { SKILL } from "../SKILL";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Stats } from "../../../type/Stats";
import { SkillType } from "../../../type/SkillType";
import { Buff } from "../../../type/Buff";
import { SkillPassiveEffectKind } from "../../../type/SkillPassiveEffectKind";
import { GlobalStats } from "../../../type/GlobalStats";


export class GodBless extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);
    
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MDEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.DEF, MultiplierType.Add, 25.0));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 80, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Mul, 0.025));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.GlobalStats, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Mul, 0.05));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get type() {return SkillType.Buff;}

  get buff() {return Buff.HpUp;}

  

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => this.BuffPercent, (() => this.IsActiveBuff(heroKind)));
    globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Add, () => this.RegenValue, (() => this.IsActiveBuff(heroKind)));
    globalThis.data.stats.HpRegenerate(heroKind).RegisterMultiplier(multiplierInfo2);
  }

  RegenValue() {
    if (this.level < 50)
      return 0.0;
    if (this.level < 100)
      return 10.0;
    if (this.level < 150)
      return 25.0;
    return this.level < 200 ? 45.0 : 70.0;
  }

  
}
