import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Debuff } from "@type/Debuff";
import { GlobalStats } from "@type/GlobalStats";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class SwordAttack extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.HP, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 20, GlobalStats.StoneGain, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 30, Stats.SkillProficiencyGain, MultiplierType.Add, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 40, GlobalStats.StoneGain, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 50, Stats.SkillProficiencyGain, MultiplierType.Add, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 60, GlobalStats.StoneGain, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 70, Stats.SkillProficiencyGain, MultiplierType.Add, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 80, GlobalStats.StoneGain, MultiplierType.Mul, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 90, Stats.SkillProficiencyGain, MultiplierType.Add, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 110, GlobalStats.StoneGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 120, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 130, GlobalStats.StoneGain, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 140, Stats.SkillProficiencyGain, MultiplierType.Add, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 150, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 160, GlobalStats.StoneGain, MultiplierType.Mul, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 170, Stats.SkillProficiencyGain, MultiplierType.Add, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 180, GlobalStats.StoneGain, MultiplierType.Mul, 16.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 190, Stats.SkillProficiencyGain, MultiplierType.Add, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 210, GlobalStats.StoneGain, MultiplierType.Mul, 32.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 220, Stats.SkillProficiencyGain, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 230, GlobalStats.StoneGain, MultiplierType.Mul, 64.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 240, Stats.SkillProficiencyGain, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 250, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 275, GlobalStats.StoneGain, MultiplierType.Mul, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 300, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 350, GlobalStats.StoneGain, MultiplierType.Mul, 1000000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 375, SkillBuffKind.PhysicalDamage, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 400, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 425, SkillBuffKind.PhysicalDamage, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 450, Stats.SkillProficiencyGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 475, SkillBuffKind.PhysicalDamage, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 525, SkillBuffKind.PhysicalDamage, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 550, GlobalStats.StoneGain, MultiplierType.Mul, 1000000000000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 575, SkillBuffKind.PhysicalDamage, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 625, SkillBuffKind.PhysicalDamage, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 650, Stats.SkillProficiencyGain, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 675, SkillBuffKind.PhysicalDamage, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 700, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 725, SkillBuffKind.PhysicalDamage, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 750, GlobalStats.StoneGain, MultiplierType.Mul, 1e20));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 775, SkillBuffKind.PhysicalDamage, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 825, SkillBuffKind.PhysicalDamage, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.SkillProficiencyGain, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 875, SkillBuffKind.PhysicalDamage, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 925, SkillBuffKind.PhysicalDamage, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.ThisSkillCastTime, 0.5, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 975, GlobalStats.StoneGain, MultiplierType.Mul, 1e30));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get debuff() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value() > 0.0 ? Debuff.Poison : Debuff.Nothing;
  }

  DebuffChance() {
    return this.data.skill.baseAttackPoisonChance[this.heroKind].Value() > 0.0 ? this.data.skill.baseAttackPoisonChance[this.heroKind].Value() : 0.0;
  }

  Range() {
    return this.Range();
  }
}
