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
import { SkillPassiveKind } from "@type/SkillPassiveKind";

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
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 90, () => Localization.TamerSkillsString(17, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 100, Stats.PetPhysCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 110, Stats.PetMagCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.SPD, MultiplierType.Add, 400.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 130, BasicStatsKind.ATK, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.MATK, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 150, Stats.PetPhysCritChance, MultiplierType.Add, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 160, Stats.PetMagCritChance, MultiplierType.Add, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.SPD, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MATK, MultiplierType.Mul, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.ATK, MultiplierType.Mul, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.TamerSkillsString(17, 0.25)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 275, Stats.PetPhysCritChance, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.PetMagCritChance, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 350, SkillPassiveKind.ExpeditionSpeed, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ExpeditionSpeed, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 400, SkillPassiveKind.ExpeditionSpeed, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 425, Stats.PetPhysCritChance, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 450, Stats.PetMagCritChance, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ExpeditionSpeed, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.ExpeditionSpeed, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.ExpeditionSpeed, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.ExpeditionSpeed, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 575, Stats.PetPhysCritChance, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.PetMagCritChance, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ExpeditionSpeed, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 650, SkillPassiveKind.ExpeditionSpeed, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.PetPhysCritChance, MultiplierType.Mul, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 700, Stats.PetMagCritChance, MultiplierType.Mul, 1.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.ExpeditionSpeed, 0.75, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.ExpeditionSpeed, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ExpeditionSpeed, 2.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ExpeditionPassiveEffect, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ExpeditionSpeed, 3.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.PetPassiveEffect, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ExpeditionSpeed, 4.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ExpeditionPassiveEffect, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.ExpeditionSpeed, 5.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.PetPassiveEffect, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
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
    if (this.lv >= 250) return 0.5;
    if (this.lv >= 90) return 0.25;
    if (this.lv >= 50) return 0.15;
    if (this.lv >= 30) return 0.1;
    return this.lv >= 10 ? 0.05 : 0.0;
  }
}
