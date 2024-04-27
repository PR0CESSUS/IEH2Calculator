import { DATA } from "@/data/";
import { MultiplierInfo } from "@/data/Multiplier";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { Buff } from "@type/Buff";
import { GlobalStats } from "@type/GlobalStats";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { SkillType } from "@type/SkillType";
import { Stats } from "@type/Stats";

export class HolyArch extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 5, SkillPassiveKind.TownMaterialGain, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 10, SkillPassiveKind.TownMaterialGain, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 15, SkillPassiveKind.TownMaterialGain, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 20, SkillPassiveKind.TownMaterialGain, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 25, SkillPassiveKind.TownMaterialGain, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 30, SkillPassiveKind.TownMaterialGain, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 35, SkillPassiveKind.TownMaterialGain, 0.3, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 40, SkillPassiveKind.TownMaterialGain, 0.3, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 45, SkillPassiveKind.TownMaterialGain, 0.3, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.AngelSkillsString(13, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 60, GlobalStats.GoldGain, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 70, SkillPassiveKind.TownMaterialGain, 0.4, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 80, SkillPassiveKind.TownMaterialGain, 0.4, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 90, SkillPassiveKind.TownMaterialGain, 0.4, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.AngelSkillsString(13, 0.15)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 110, SkillPassiveKind.TownMaterialGain, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 120, SkillPassiveKind.TownMaterialGain, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 130, SkillPassiveKind.TownMaterialGain, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 140, SkillPassiveKind.TownMaterialGain, 0.4, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.AngelSkillsString(13, 0.2)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 160, SkillPassiveKind.TownMaterialGain, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 180, GlobalStats.GoldGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.TownMaterialGain, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 225, SkillPassiveKind.TownMaterialGain, 1.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.AngelSkillsString(13, 0.25)));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 275, GlobalStats.GoldGain, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 300, SkillPassiveKind.TownMaterialGain, 2.0, MultiplierType.Mul));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 350, GlobalStats.GoldGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.SkillLevelUp;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.BuffPercent(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.skill.skillLevelBonusFromHolyArch[heroKind].RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.DebuffResValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.DebuffRes).RegisterMultiplier(multiplierInfo2);
  }

  DebuffResValue() {
    if (this.level.value >= 250) return 0.7;
    if (this.level.value >= 150) return 0.45;
    if (this.level.value >= 100) return 0.25;
    return this.level.value >= 50 ? 0.1 : 0.0;
  }

  get levelBonus() {
    return this.data.skill.skillLevelBonus[this.heroKind].Value();
  }

  BuffPercent() {
    return 20.0 + this.IncrementBuffPercentPerLevel() * this.Level();
  }

  IncrementBuffPercentPerLevel() {
    return 0.1 + 0.05 * this.Rank();
  }
}
