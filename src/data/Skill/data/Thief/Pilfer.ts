import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Element } from "../../../../type/Element";
import { Stats } from "../../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";
import { GlobalStats } from "../../../../type/GlobalStats";

export class Pilfer extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 5, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MDEF, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 15, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 25, SkillPassiveEffectKind.HeroStats, Stats.EquipmentDropChance, MultiplierType.Add, 0.0005));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.DEF, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MDEF, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 50, SkillPassiveEffectKind.BasicStats, BasicStatsKind.DEF, MultiplierType.Add, 30.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 70, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 80, SkillPassiveEffectKind.GlobalStats, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 90, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MP, MultiplierType.Add, 250.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.HeroStats, Stats.EquipmentDropChance, MultiplierType.Add, 0.0005));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 200, SkillPassiveEffectKind.HeroStats, Stats.EquipmentDropChance, MultiplierType.Add, 0.001));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.HP, MultiplierType.Mul, 0.3));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get element() {
    return Element.Dark;
  }

  PilferChance() {
    let num = 0.05;
    if (this.level >= 60) num += 0.05;
    if (this.level >= 100) num += 0.05;
    if (this.level >= 150) num += 0.1;
    if (this.level >= 250) num += 0.25;
    return num;
  }
}
