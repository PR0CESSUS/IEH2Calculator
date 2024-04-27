import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { Debuff } from "@type/Debuff";
import { MultiplierType } from "@type/MultiplierType";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { Stats } from "@type/Stats";
import { GlobalStats } from "@type/GlobalStats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class StaffAttack extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 20, GlobalStats.CrystalGain, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 30, Stats.SkillProficiencyGain, MultiplierType.Add, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 40, GlobalStats.CrystalGain, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 50, Stats.SkillProficiencyGain, MultiplierType.Add, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 60, GlobalStats.CrystalGain, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 70, Stats.SkillProficiencyGain, MultiplierType.Add, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 80, GlobalStats.CrystalGain, MultiplierType.Mul, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 90, Stats.SkillProficiencyGain, MultiplierType.Add, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 110, GlobalStats.CrystalGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 120, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 130, GlobalStats.CrystalGain, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 140, Stats.SkillProficiencyGain, MultiplierType.Add, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 150, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 160, GlobalStats.CrystalGain, MultiplierType.Mul, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 170, Stats.SkillProficiencyGain, MultiplierType.Add, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 180, GlobalStats.CrystalGain, MultiplierType.Mul, 16.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 190, Stats.SkillProficiencyGain, MultiplierType.Add, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 210, GlobalStats.CrystalGain, MultiplierType.Mul, 32.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 220, Stats.SkillProficiencyGain, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 230, GlobalStats.CrystalGain, MultiplierType.Mul, 64.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 240, Stats.SkillProficiencyGain, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 250, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 275, GlobalStats.CrystalGain, MultiplierType.Mul, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 300, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 350, GlobalStats.CrystalGain, MultiplierType.Mul, 1000000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 400, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 425, BasicStatsKind.MATK, MultiplierType.After, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 450, Stats.SkillProficiencyGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.SDDamageMultiplier, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.SDDamageMultiplier, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 550, GlobalStats.CrystalGain, MultiplierType.Mul, 1000000000000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.SDDamageMultiplier, 0.75, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.SDDamageMultiplier, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 650, Stats.SkillProficiencyGain, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 700, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.SDDamageMultiplier, 2.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 750, GlobalStats.CrystalGain, MultiplierType.Mul, 1e20));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.SDDamageMultiplier, 5.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.SkillProficiencyGain, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.SDDamageMultiplier, 10.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.SDDamageMultiplier, 20.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 975, GlobalStats.CrystalGain, MultiplierType.Mul, 1e30));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Fire;
  }

  get debuff() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value() > 0.0 ? Debuff.Poison : Debuff.Nothing;
  }

  DebuffChance() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value();
  }
}
