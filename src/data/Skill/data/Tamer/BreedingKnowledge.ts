import { MultiplierInfo } from "@/data/Multiplier";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Stats } from "@type/Stats";
import { SkillType } from "@type/SkillType";
import { Buff } from "@type/Buff";
import { GlobalStats } from "@type/GlobalStats";

export class BreedingKnowledge extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.MP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MP, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.TamerSkillsString(19, 0.5)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 60, Stats.ExpGain, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 100, Stats.TamingPointGain, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 125, Stats.ExpGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.TamerSkillsString(19, 0.5)));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 175, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 200, Stats.TamingPointGain, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 225, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.TamerSkillsString(19, 1.0)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.Nothing;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffPercent(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.heroes[heroKind].petExpGainPerDefeat.RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.LoyaltyGain(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.heroes[heroKind].loyaltyPoingGain.RegisterMultiplier(multiplierInfo2);
  }

  LoyaltyGain() {
    if (this.level.value >= 250) return 2.0;
    if (this.level.value >= 150) return 1.0;
    return this.level.value >= 50 ? 0.5 : 0.0;
  }
}
