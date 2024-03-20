import { DATA } from "@/data/";
import { MultiplierInfo } from "@/data/Multiplier";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillType } from "@type/SkillType";

export class Heal extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.HP, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.MP, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.DEF, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MDEF, MultiplierType.Add, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.AngelSkillsString(1)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.DEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MDEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.AngelSkillsString(2)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 125, BasicStatsKind.HP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.AngelSkillsString(3)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 175, BasicStatsKind.HP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.HP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.AngelSkillsString(4)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 275, () => Localization.AngelSkillsString(14, 5.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 300, () => Localization.AngelSkillsString(14, 15.0)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 350, () => Localization.AngelSkillsString(14, 30.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 375, BasicStatsKind.HP, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 400, () => Localization.AngelSkillsString(14, 50.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 425, BasicStatsKind.MP, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 450, () => Localization.AngelSkillsString(14, 100.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 475, BasicStatsKind.HP, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 500, () => Localization.AngelSkillsString(14, 300.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 525, BasicStatsKind.MP, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 550, () => Localization.AngelSkillsString(14, 500.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 575, BasicStatsKind.HP, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 600, () => Localization.AngelSkillsString(14, 2000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 625, BasicStatsKind.MP, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 650, () => Localization.AngelSkillsString(14, 3000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 675, BasicStatsKind.HP, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 700, () => Localization.AngelSkillsString(14, 4000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 725, BasicStatsKind.MP, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 750, () => Localization.AngelSkillsString(14, 5000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 775, BasicStatsKind.HP, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 800, () => Localization.AngelSkillsString(14, 7500.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 825, BasicStatsKind.MP, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 850, () => Localization.AngelSkillsString(14, 10000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 875, BasicStatsKind.HP, MultiplierType.Mul, 15.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 900, () => Localization.AngelSkillsString(14, 20000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 925, BasicStatsKind.MP, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 950, () => Localization.AngelSkillsString(14, 30000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo: MultiplierInfo = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.After,
      () => this.BuffEffectValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HpRegenerate(heroKind).RegisterMultiplier(multiplierInfo);
  }

  BuffEffectValue() {
    let num = 0.0;
    if (this.level.value >= 275) num += 5.0;
    if (this.level.value >= 300) num += 15.0;
    if (this.level.value >= 350) num += 30.0;
    if (this.level.value >= 400) num += 50.0;
    if (this.level.value >= 450) num += 100.0;
    if (this.level.value >= 500) num += 300.0;
    if (this.level.value >= 550) num += 500.0;
    if (this.level.value >= 600) num += 2000.0;
    if (this.level.value >= 650) num += 3000.0;
    if (this.level.value >= 700) num += 4000.0;
    if (this.level.value >= 750) num += 5000.0;
    if (this.level.value >= 800) num += 7500.0;
    if (this.level.value >= 850) num += 10000.0;
    if (this.level.value >= 900) num += 20000.0;
    if (this.level.value >= 950) num += 30000.0;
    return num;
  }

  get type() {
    return SkillType.Heal;
  }
}
