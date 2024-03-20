import { MultiplierInfo } from "@/data/Multiplier";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { Stats } from "@type/Stats";
import { SkillType } from "@type/SkillType";
import { Buff } from "@type/Buff";
import { GlobalStats } from "@type/GlobalStats";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class ProtectWall extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.DEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MDEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.DEF, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MDEF, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.HP, MultiplierType.Add, 2000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.MP, MultiplierType.Add, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.DEF, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MDEF, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.DEF, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MDEF, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.AngelSkillsString(6, 0.025)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.HP, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.DEF, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MDEF, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.HP, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MP, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.HP, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.AngelSkillsString(6, 0.075)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 275, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 300, () => Localization.AngelSkillsString(6, 0.1)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 350, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.SDDamageCutMultiplier, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 400, () => Localization.AngelSkillsString(6, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 425, Stats.ArmoredFury, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 450, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 475, Stats.WardedFury, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 500, () => Localization.AngelSkillsString(6, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 525, Stats.ArmoredFury, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 550, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 625, Stats.WardedFury, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 600, () => Localization.AngelSkillsString(6, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.SDDamageCutMultiplier, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 650, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.SDArmoredFury, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 700, () => Localization.AngelSkillsString(6, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.SDWardedFury, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 750, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.SDArmoredFury, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 800, () => Localization.AngelSkillsString(6, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.SDWardedFury, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 850, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.SDDamageCutMultiplier, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 900, () => Localization.AngelSkillsString(6, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.GlobalStats(this, 925, GlobalStats.GoldGain, MultiplierType.Mul, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 950, () => Localization.AngelSkillsString(19, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  PhysicalNullifiedValue() {
    let num = 0.0;
    if (this.level.value >= 100) num += 0.025;
    if (this.level.value >= 200) num += 0.075;
    if (this.level.value >= 300) num += 0.1;
    if (this.level.value >= 400) num += 0.1;
    if (this.level.value >= 500) num += 0.1;
    if (this.level.value >= 600) num += 0.1;
    if (this.level.value >= 700) num += 0.1;
    if (this.level.value >= 800) num += 0.1;
    if (this.level.value >= 900) num += 0.1;
    return num;
  }

  MagicalNullifiedValue() {
    let num = 0.0;
    if (this.level.value >= 275) num += 0.1;
    if (this.level.value >= 350) num += 0.1;
    if (this.level.value >= 450) num += 0.1;
    if (this.level.value >= 550) num += 0.1;
    if (this.level.value >= 650) num += 0.1;
    if (this.level.value >= 750) num += 0.1;
    if (this.level.value >= 850) num += 0.1;
    if (this.level.value >= 950) num += 0.1;
    return num;
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.DefMDefUp;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffPercent(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.BasicStats(heroKind, BasicStatsKind.DEF).RegisterMultiplier(multiplierInfo1);
    this.data.stats.BasicStats(heroKind, BasicStatsKind.MDEF).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.PhysicalNullifiedValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.ElementInvalid(heroKind, Element.Physical).RegisterMultiplier(multiplierInfo2);
    let multiplierInfo3 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Add,
      () => this.MagicalNullifiedValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.ElementInvalid(heroKind, Element.Fire).RegisterMultiplier(multiplierInfo3);
    this.data.stats.ElementInvalid(heroKind, Element.Ice).RegisterMultiplier(multiplierInfo3);
    this.data.stats.ElementInvalid(heroKind, Element.Thunder).RegisterMultiplier(multiplierInfo3);
    this.data.stats.ElementInvalid(heroKind, Element.Light).RegisterMultiplier(multiplierInfo3);
    this.data.stats.ElementInvalid(heroKind, Element.Dark).RegisterMultiplier(multiplierInfo3);
  }
}
