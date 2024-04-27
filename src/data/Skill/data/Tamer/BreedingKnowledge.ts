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
import { SkillBuffKind } from "@type/SkillBuffKind";

export class BreedingKnowledge extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.MP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MP, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 50, SkillBuffKind.LoyaltyPoint, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 60, Stats.ExpGain, MultiplierType.Add, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 70, Stats.TamingPointGain, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 90, Stats.TamingPointGain, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 100, Stats.TamingPointGain, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 120, Stats.ExpGain, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 140, SkillBuffKind.LoyaltyPoint, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 160, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 180, Stats.TamingPointGain, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 200, Stats.TamingPointGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 225, Stats.ExpGain, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 250, SkillBuffKind.LoyaltyPoint, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 275, Stats.TamingPointGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 300, SkillBuffKind.LoyaltyPoint, 2.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 350, Stats.TamingPointGain, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 375, Stats.TamingPointGain, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 400, SkillBuffKind.LoyaltyPoint, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 425, Stats.TamingPointGain, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 450, Stats.TamingPointGain, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 475, Stats.TamingPointGain, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 500, SkillBuffKind.LoyaltyPoint, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 525, Stats.TamingPointGain, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 550, Stats.TamingPointGain, MultiplierType.Mul, 6.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 575, Stats.TamingPointGain, MultiplierType.Mul, 7.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 600, SkillBuffKind.LoyaltyPoint, 16.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 625, Stats.TamingPointGain, MultiplierType.Mul, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 650, Stats.TamingPointGain, MultiplierType.Mul, 9.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.TamingPointGain, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 700, SkillBuffKind.LoyaltyPoint, 32.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 725, Stats.TamingPointGain, MultiplierType.Mul, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 750, Stats.TamingPointGain, MultiplierType.Mul, 40.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 775, Stats.TamingPointGain, MultiplierType.Mul, 80.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 800, SkillBuffKind.LoyaltyPoint, 64.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 825, Stats.TamingPointGain, MultiplierType.Mul, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.TamingPointGain, MultiplierType.Mul, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 875, Stats.TamingPointGain, MultiplierType.Mul, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 900, SkillBuffKind.LoyaltyPoint, 128.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 925, Stats.TamingPointGain, MultiplierType.Mul, 400.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 950, Stats.TamingPointGain, MultiplierType.Mul, 1000.0));
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.Nothing;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffPercent(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.heroes[heroKind].petExpGainPerDefeat.RegisterMultiplier(multiplierInfo);
  }
}
