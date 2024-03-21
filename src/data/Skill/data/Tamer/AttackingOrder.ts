import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Stats } from "@type/Stats";
import { SkillType } from "@type/SkillType";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class AttackingOrder extends SKILL {
  tempMul;

  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MP, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.ATK, MultiplierType.Mul, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MATK, MultiplierType.Mul, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.TamerSkillsString(2) + "200%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.ATK, MultiplierType.Mul, 0.02));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MATK, MultiplierType.Mul, 0.02));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.ATK, MultiplierType.Mul, 0.03));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MATK, MultiplierType.Mul, 0.03));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.TamerSkillsString(2) + "200%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 110, BasicStatsKind.ATK, MultiplierType.Mul, 0.04));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MATK, MultiplierType.Mul, 0.04));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 130, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.TamerSkillsString(2) + "200%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 180, Stats.PetCriticalDamage, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.TamerSkillsString(2) + "200%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.TamerSkillsString(2) + "300%"));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 275, Stats.PetCriticalDamage, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 300, SkillPassiveKind.PetPassiveEffect, 0.025, MultiplierType.Mul));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 350, Stats.PetCriticalDamage, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ExpeditionPassiveEffect, 0.025, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 400, SkillPassiveKind.PetPassiveEffect, 0.025, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 425, () => Localization.TamerSkillsString(2) + "500%"));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 450, Stats.PetCriticalDamage, MultiplierType.Add, 2.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 475, Stats.PetCriticalDamage, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.ExpeditionPassiveEffect, 0.05, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 525, Stats.PetCriticalDamage, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.PetPassiveEffect, 0.05, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 575, Stats.PetCriticalDamage, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.PetCriticalDamage, MultiplierType.Mul, 2.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 625, Stats.PetCriticalDamage, MultiplierType.Mul, 3.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 650, Stats.PetCriticalDamage, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.PetCriticalDamage, MultiplierType.Mul, 7.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 700, SkillPassiveKind.ExpeditionPassiveEffect, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 725, Stats.PetCriticalDamage, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.PetPassiveEffect, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 775, Stats.PetCriticalDamage, MultiplierType.Mul, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ExpeditionPassiveEffect, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 825, Stats.PetCriticalDamage, MultiplierType.Mul, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.PetPassiveEffect, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 875, Stats.PetCriticalDamage, MultiplierType.Mul, 40.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ExpeditionPassiveEffect, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 925, Stats.PetCriticalDamage, MultiplierType.Mul, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.PetPassiveEffect, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get type() {
    return SkillType.Order;
  }

  EffectValue() {
    this.tempMul = this.lv < 425 ? (this.lv < 250 ? (this.lv < 200 ? (this.lv < 150 ? (this.lv < 100 ? (this.lv < 50 ? 1.0 : 2.0) : 4.0) : 8.0) : 16.0) : 48.0) : 240.0;
    let num = this.Damage() * this.tempMul;
    if (this.isLog && num >= 1.0) num = 1.0 + Math.log10(num * 100.0) / 100.0;
    return num;
  }
}
