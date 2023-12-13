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


export class AnthemOfEnthusiasm extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);
    
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 250.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 70, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 80, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 90, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 100, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 110, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 120, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 130, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.35));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 140, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.35));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.05));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get type() {return SkillType.Buff;}

  get buff() {return Buff.Nothing;}

  

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => this.BuffPercent, (() => this.IsActiveBuff(heroKind)));
    globalThis.data.stats.heroes[heroKind].summonPetATKMATKMultiplier.RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Add, () => this.CritChance, (() => this.IsActiveBuff(heroKind)));
    globalThis.data.stats.HeroStats(heroKind, Stats.PetPhysCritChance).RegisterMultiplier(multiplierInfo2);
    globalThis.data.stats.HeroStats(heroKind, Stats.PetMagCritChance).RegisterMultiplier(multiplierInfo2);
  }

  CritChance() {
    if (this.level >= 200)
      return 0.1;
    return this.level >= 150 ? 0.05 : 0.0;
  }

  
}
