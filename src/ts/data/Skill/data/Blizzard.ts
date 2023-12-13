import { SkillPassiveEffect } from "../SkillPassiveEffect";
import { SKILL } from "../SKILL";
import { Debuff } from "../../../type/Debuff";
import { MultiplierType } from "../../../type/MultiplierType";
import { HeroKind } from "../../../type/HeroKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Element } from "../../../type/Element";
import { Stats } from "../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../type/SkillPassiveEffectKind";


export class Blizzard extends SKILL {
  constructor(heroKind: HeroKind, id) {
    super(heroKind, id);
    
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Add, 100.0));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.HeroStats, Stats.MagCritChance, MultiplierType.Add, 0.05));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.HeroStats, Stats.MagCritChance, MultiplierType.Add, 0.05));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 150, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 2000.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.MagCritChance, MultiplierType.Add, 0.1));
    
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 3000.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  ConsumeMp() {return this.level >= 200 ? this.ConsumeMp() * 0.5 : this.ConsumeMp();}

  EffectRange() {
    if (this.level >= 100)
      return this.EffectRange() + 250 * globalThis.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    if (this.level >= 50)
      return this.EffectRange() + 150 * globalThis.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    return this.level >= 20 ? this.EffectRange() + 50 * globalThis.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();
  }

  get element() {return Element.Ice;}

  get debuff() {return Debuff.SpdDown;}

  

}
