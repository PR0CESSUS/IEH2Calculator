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


export class BreedingKnowledge extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 150.0));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 80, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 100, SkillPassiveEffectKind.HeroStats, Stats.TamingPointGain, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 0.5));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.GlobalStats, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 200, SkillPassiveEffectKind.HeroStats, Stats.TamingPointGain, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 1.0));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get type() {return SkillType.Buff;}

  get buff() {return Buff.Nothing;}

  

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => this.BuffPercent, (() => this.IsActiveBuff(heroKind)));
    globalThis.data.stats.heroes[heroKind].petExpGainPerDefeat.RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => this.LoyaltyGain, (() => this.IsActiveBuff(heroKind)));
    globalThis.data.stats.heroes[heroKind].loyaltyPoingGain.RegisterMultiplier(multiplierInfo2);
  }

  LoyaltyGain() {
    if (this.level >= 250)
      return 2.0;
    if (this.level >= 150)
      return 1.0;
    return this.level >= 50 ? 0.5 : 0.0;
  }

  
}
