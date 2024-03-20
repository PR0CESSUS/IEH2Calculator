import { DATA } from "@/data/";
import { MultiplierInfo } from "@/data/Multiplier";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Buff } from "@type/Buff";
import { GlobalStats } from "@type/GlobalStats";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { SkillType } from "@type/SkillType";

export class GodBless extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.HP, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MDEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.DEF, MultiplierType.Add, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.AngelSkillsString(5, 10.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.HP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MP, MultiplierType.Add, 250.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.HP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MP, MultiplierType.Add, 250.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.AngelSkillsString(5, 15.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 125, GlobalStats.GoldGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.AngelSkillsString(5, 20.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 175, BasicStatsKind.HP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.AngelSkillsString(5, 25.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.HP, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 275, () => Localization.AngelSkillsString(15, 50.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 300, () => Localization.AngelSkillsString(15, 250.0)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 350, () => Localization.AngelSkillsString(15, 500.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.GuildExp, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 400, () => Localization.AngelSkillsString(15, 1000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.BlessingEffect, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 450, () => Localization.AngelSkillsString(15, 2000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.GuildExp, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 500, () => Localization.AngelSkillsString(15, 5000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.BlessingEffect, 0.4, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 550, () => Localization.AngelSkillsString(15, 10000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.GuildExp, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 600, () => Localization.AngelSkillsString(15, 50000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.BlessingEffect, 0.6, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 650, () => Localization.AngelSkillsString(15, 100000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.GuildExp, 0.4, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 700, () => Localization.AngelSkillsString(15, 500000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.BlessingEffect, 0.8, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 750, () => Localization.AngelSkillsString(15, 1000000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.GuildExp, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 800, () => Localization.AngelSkillsString(15, 2000000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.BlessingEffect, 2.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 850, () => Localization.AngelSkillsString(15, 3000000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.GuildExp, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 900, () => Localization.AngelSkillsString(15, 4000000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.BlessingEffect, 6.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 950, () => Localization.AngelSkillsString(15, 5000000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  BuffEffectValue() {
    let num = 0.0;
    if (this.level.value >= 275) num += 50.0;
    if (this.level.value >= 300) num += 250.0;
    if (this.level.value >= 350) num += 500.0;
    if (this.level.value >= 400) num += 1000.0;
    if (this.level.value >= 450) num += 2000.0;
    if (this.level.value >= 500) num += 5000.0;
    if (this.level.value >= 550) num += 10000.0;
    if (this.level.value >= 600) num += 50000.0;
    if (this.level.value >= 650) num += 100000.0;
    if (this.level.value >= 700) num += 500000.0;
    if (this.level.value >= 750) num += 1000000.0;
    if (this.level.value >= 800) num += 2000000.0;
    if (this.level.value >= 850) num += 3000000.0;
    if (this.level.value >= 900) num += 4000000.0;
    if (this.level.value >= 950) num += 5000000.0;
    return num;
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.HpUp;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffPercent(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.BasicStats(heroKind, BasicStatsKind.HP).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.RegenValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HpRegenerate(heroKind).RegisterMultiplier(multiplierInfo2);
    let multiplierInfo3 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.After,
      () => this.BuffEffectValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.BasicStats(heroKind, BasicStatsKind.HP).RegisterMultiplier(multiplierInfo3);
  }

  RegenValue() {
    if (this.level.value < 50) return 0.0;
    if (this.level.value < 100) return 10.0;
    if (this.level.value < 150) return 25.0;
    return this.level.value < 200 ? 45.0 : 70.0;
  }
}
