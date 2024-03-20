import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillType } from "@type/SkillType";

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
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 175, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.TamerSkillsString(2) + "200%"));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.TamerSkillsString(2) + "300%"));
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
    return SkillType.Order;
  }

  EffectValue() {
    this.tempMul =
      this.level.value < 250 ? (this.level.value < 200 ? (this.level.value < 150 ? (this.level.value < 100 ? (this.level.value < 50 ? 1.0 : 2.0) : 4.0) : 8.0) : 16.0) : 48.0;
    let num = this.Damage() * this.tempMul;
    if (this.isLog && num >= 1.0) num = 1.0 + Math.log10(num * 100.0) / 100.0;
    return num;
  }
}
