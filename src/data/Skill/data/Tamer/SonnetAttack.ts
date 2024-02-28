import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Debuff } from "../../../../type/Debuff";
import { Element } from "../../../../type/Element";
import { GlobalStats } from "../../../../type/GlobalStats";
import { HeroKind } from "../../../../type/HeroKind";
import { MultiplierKind } from "../../../../type/MultiplierKind";
import { MultiplierType } from "../../../../type/MultiplierType";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";
import { Stats } from "../../../../type/Stats";
import { MultiplierInfo } from "../../../Multiplier";
import { SKILL } from "../../SKILL";
import { SkillPassiveEffect } from "../../SkillPassiveEffect";

export class SonnetAttack extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.GlobalStats, GlobalStats.LeafGain, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.1));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 150, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 1000.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.3));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 0.4));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get element() {
    return Element.Light;
  }

  SummonPetNum() {
    if (this.level >= 200) return 3.0;
    return this.level >= 100 ? 2.0 : 1.0;
  }

  SetBuff(heroKind: HeroKind) {
    return this.data.stats.heroes[heroKind].summonPetSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Skill,
        MultiplierType.Add,
        () => this.SummonPetNum,
        () => this.IsEquipped(heroKind)
      )
    );
  }

  EffectValue() {
    let num = this.Damage();
    if (this.isLog && num >= 1.0) num = 1.0 + Math.log10(num * 100.0) / 100.0;
    return num;
  }

  get debuff() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value() > 0.0 ? Debuff.Poison : Debuff.Nothing;
  }

  DebuffChance() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value();
  }
}
