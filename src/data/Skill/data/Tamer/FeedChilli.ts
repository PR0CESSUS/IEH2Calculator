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

export class FeedChilli extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 10, () => Localization.TamerSkillsString(17, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.SPD, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 30, () => Localization.TamerSkillsString(17, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.SPD, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.TamerSkillsString(17, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.SPD, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.ATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.TamerSkillsString(17, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.SPD, MultiplierType.Add, 400.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.ATK, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MATK, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.SPD, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MATK, MultiplierType.Mul, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.ATK, MultiplierType.Mul, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.TamerSkillsString(17, 0.25)));
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
    this.data.stats.heroes[heroKind].summonPetSPDMoveSpeedMultiplier.RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.CritChance(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.PetPhysCritChance).RegisterMultiplier(multiplierInfo2);
    this.data.stats.HeroStats(heroKind, Stats.PetMagCritChance).RegisterMultiplier(multiplierInfo2);
  }

  CritChance() {
    if (this.level.value >= 250) return 0.5;
    if (this.level.value >= 100) return 0.25;
    if (this.level.value >= 50) return 0.15;
    if (this.level.value >= 30) return 0.1;
    return this.level.value >= 10 ? 0.05 : 0.0;
  }
}
