import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { GlobalStats } from "@type/GlobalStats";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class Pilfer extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MDEF, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 15, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 25, Stats.EquipmentDropChance, MultiplierType.Add, 0.0005));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.DEF, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MDEF, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.DEF, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 60, () => Localization.ThiefSkillsString(5) + " + 5%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 80, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MP, MultiplierType.Add, 250.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.ThiefSkillsString(5) + " + 5%"));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 125, Stats.EquipmentDropChance, MultiplierType.Add, 0.0005));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.ThiefSkillsString(5) + " + 10%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 175, BasicStatsKind.HP, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 200, Stats.EquipmentDropChance, MultiplierType.Add, 0.001));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.HP, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.ThiefSkillsString(5) + " + 25%"));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 275, Stats.EquipmentDropChance, MultiplierType.After, 0.005));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 300, SkillBuffKind.EquipmentDropChanceAfter, 0.005));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 350, Stats.ExpGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.ArtifactGainChance, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 400, SkillBuffKind.EquipmentDropChanceAfter, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 425, Stats.ExpGain, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 450, SkillPassiveKind.ArtifactGainChance, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 475, SkillBuffKind.EquipmentDropChanceAfter, 0.015));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 500, GlobalStats.GoldGain, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.ArtifactGainChance, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 550, SkillBuffKind.EquipmentDropChanceAfter, 0.03));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 575, Stats.ExpGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 600, GlobalStats.GoldGain, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ArtifactGainChance, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 650, SkillBuffKind.EquipmentDropChanceAfter, 0.04));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.ExpGain, MultiplierType.Mul, 2.5));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 700, GlobalStats.GoldGain, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.ArtifactGainChance, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 750, SkillBuffKind.EquipmentDropChanceAfter, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 775, Stats.ExpGain, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 800, GlobalStats.GoldGain, MultiplierType.Mul, 2.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ArtifactGainChance, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 850, SkillBuffKind.EquipmentDropChanceAfter, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 875, Stats.ExpGain, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 900, GlobalStats.GoldGain, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.ArtifactGainChance, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 950, SkillBuffKind.EquipmentDropChanceAfter, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Dark;
  }

  PilferChance() {
    let num = 0.05;
    if (this.lv >= 60) num += 0.05;
    if (this.lv >= 100) num += 0.05;
    if (this.lv >= 150) num += 0.1;
    if (this.lv >= 250) num += 0.25;
    return num;
  }
}
