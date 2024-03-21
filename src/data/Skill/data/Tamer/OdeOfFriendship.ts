import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Buff } from "@type/Buff";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { SkillType } from "@type/SkillType";

export class OdeOfFriendship extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.HP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 15, SkillPassiveKind.ExpeditionPetExpGain, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 25, SkillPassiveKind.ExpeditionPetExpGain, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 40, SkillPassiveKind.ExpeditionPetExpGain, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.TamerSkillsString(11) + "20%"));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 60, SkillPassiveKind.ExpeditionPetExpGain, 0.4, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 80, SkillPassiveKind.ExpeditionPetExpGain, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.TamerSkillsString(11) + "20%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MP, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 140, () => Localization.TamerSkillsString(11) + "20%"));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 160, SkillPassiveKind.ExpeditionPetExpGain, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.MP, MultiplierType.Mul, 0.35));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.TamerSkillsString(11) + "20%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MP, MultiplierType.Mul, 1.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 250, SkillPassiveKind.ExpeditionPetExpGain, 1.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 275, SkillPassiveKind.ExpeditionPetExpGain, 2.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 300, SkillPassiveKind.PetPassiveEffect, 0.025, MultiplierType.Mul));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 350, SkillPassiveKind.ExpeditionPetExpGain, 5.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ExpeditionPassiveEffect, 0.025, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 400, SkillPassiveKind.PetPassiveEffect, 0.025, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.ExpeditionPetExpGain, 7.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 450, SkillPassiveKind.ExpeditionPetExpGain, 10.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ExpeditionPetExpGain, 12.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.ExpeditionPassiveEffect, 0.05, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.ExpeditionPetExpGain, 20.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.PetPassiveEffect, 0.05, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.ExpeditionPetExpGain, 30.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.ExpeditionPetExpGain, 40.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ExpeditionPetExpGain, 100.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 650, SkillPassiveKind.ExpeditionPetExpGain, 200.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.ExpeditionPetExpGain, 300.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 700, SkillPassiveKind.ExpeditionPassiveEffect, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.ExpeditionPetExpGain, 400.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.PetPassiveEffect, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ExpeditionPetExpGain, 500.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ExpeditionPassiveEffect, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ExpeditionPetExpGain, 1000.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.PetPassiveEffect, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ExpeditionPetExpGain, 2000.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ExpeditionPassiveEffect, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.ExpeditionPetExpGain, 5000.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.PetPassiveEffect, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.Nothing;
  }

  SetBuff(heroKind: HeroKind) {}

  IncrementBuffPercentPerLevel() {
    return this.incrementDamage;
  }

  BuffPercent() {
    return Math.min(1.0, this.BuffPercent());
  }

  Chance() {
    if (this.lv >= 200) return 1.0;
    if (this.lv >= 140) return 0.8;
    if (this.lv >= 100) return 0.6;
    return this.lv >= 50 ? 0.4 : 0.2;
  }
}
