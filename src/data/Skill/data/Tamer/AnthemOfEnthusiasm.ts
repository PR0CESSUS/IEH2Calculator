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

export class AnthemOfEnthusiasm extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MP, MultiplierType.Add, 250.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 50, Stats.MoveSpeed, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.ATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MATK, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.ATK, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 100, Stats.MoveSpeed, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 110, BasicStatsKind.ATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 130, BasicStatsKind.ATK, MultiplierType.Mul, 0.35));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.MATK, MultiplierType.Mul, 0.35));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.TamerSkillsString(15, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 175, Stats.MoveSpeed, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.TamerSkillsString(15, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.ATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
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
    this.data.stats.heroes[heroKind].summonPetATKMATKMultiplier.RegisterMultiplier(multiplierInfo1);
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
    if (this.level.value >= 200) return 0.1;
    return this.level.value >= 150 ? 0.05 : 0.0;
  }
}
