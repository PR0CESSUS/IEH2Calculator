import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Stats } from "@type/Stats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class PiercingArrow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.ATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 20, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 50, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 60, Stats.PhysCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 70, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 80, Stats.PhysCritChance, MultiplierType.Add, 0.02));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 90, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 100, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 110, Stats.PhysCritChance, MultiplierType.Add, 0.03));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 120, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 130, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 140, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 150, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 170, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 190, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 210, BasicStatsKind.ATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 220, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 230, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 240, BasicStatsKind.ATK, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 250, SkillPassiveKind.ThisSkillDamage, 64.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.MDEF, MultiplierType.After, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 300, BasicStatsKind.MDEF, MultiplierType.After, 15.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.MDEF, MultiplierType.After, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.EquipmentProficiency, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 400, BasicStatsKind.MDEF, MultiplierType.After, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.ThisSkillDamage, 128.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.MP, MultiplierType.After, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillHitCount, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 500, Stats.MagCritChance, MultiplierType.After, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.ThisSkillDamage, 256.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 550, BasicStatsKind.MDEF, MultiplierType.After, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.EquipmentProficiency, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.MagCritChance, MultiplierType.After, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ThisSkillDamage, 512.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 650, BasicStatsKind.MDEF, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 675, BasicStatsKind.ATK, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.MP, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 725, Stats.ExpGain, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.MDEF, MultiplierType.After, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.ThisSkillDamage, 1024.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 800, Stats.MagCritChance, MultiplierType.After, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.SlimeCoinCap, 2.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.SlimeCoinCap, 4.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.SlimeCoinCap, 6.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.MDEF, MultiplierType.After, 25000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.SlimeCoinCap, 8.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.SlimeCoinCap, 10.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }
}
