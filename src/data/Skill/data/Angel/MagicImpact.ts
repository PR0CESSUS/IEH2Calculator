import { MultiplierInfo } from "@/data/Multiplier";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Stats } from "@type/Stats";
import { SkillType } from "@type/SkillType";
import { Buff } from "@type/Buff";
import { SkillPassiveKind } from "@type/SkillPassiveKind";

export class MagicImpact extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.MATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 20, Stats.MagCritChance, MultiplierType.Add, 0.01));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MATK, MultiplierType.Add, 30.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.MATK, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.MATK, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 60, SkillPassiveKind.LightDamage, 0.05, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 80, SkillPassiveKind.LightDamage, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 100, Stats.MagCritChance, MultiplierType.Add, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 140, BasicStatsKind.MATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.MATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.LightDamage, 0.15, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MATK, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.MATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 275, () => Localization.AngelSkillsString(17, 100.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 300, BasicStatsKind.MATK, MultiplierType.After, 50.0));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 350, SkillPassiveKind.SDChallengeBossDamageMultiplier, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 375, BasicStatsKind.MATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 400, () => Localization.AngelSkillsString(18, 1.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.LightDamage, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 450, () => Localization.AngelSkillsString(17, 500.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 475, BasicStatsKind.MATK, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 500, BasicStatsKind.MATK, MultiplierType.After, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.LightDamage, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.SDChallengeBossDamageMultiplier, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 575, BasicStatsKind.MATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 600, () => Localization.AngelSkillsString(18, 2.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.LightDamage, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 650, () => Localization.AngelSkillsString(17, 5000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 675, BasicStatsKind.MATK, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 700, BasicStatsKind.MATK, MultiplierType.After, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.LightDamage, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.SDChallengeBossDamageMultiplier, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.LightDamage, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 800, () => Localization.AngelSkillsString(18, 4.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.SDChallengeBossDamageMultiplier, 0.4, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 850, () => Localization.AngelSkillsString(17, 50000.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 875, BasicStatsKind.MATK, MultiplierType.Mul, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 900, BasicStatsKind.MATK, MultiplierType.After, 20000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.SDChallengeBossDamageMultiplier, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.LightDamage, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  BuffEffectValueMAtkAfter() {
    let num = 0.0;
    if (this.level.value >= 275) num += 100.0;
    if (this.level.value >= 450) num += 500.0;
    if (this.level.value >= 650) num += 5000.0;
    if (this.level.value >= 850) num += 50000.0;
    return num;
  }

  BuffEffectValueSDDamageMul() {
    let num = 0.0;
    if (this.level.value >= 400) num++;
    if (this.level.value >= 600) num += 2.0;
    if (this.level.value >= 800) num += 4.0;
    return num;
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.MatkUp;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffPercent(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.BasicStats(heroKind, BasicStatsKind.MATK).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.After,
      () => this.BuffEffectValueMAtkAfter(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.BasicStats(heroKind, BasicStatsKind.MATK).RegisterMultiplier(multiplierInfo2);
    let multiplierInfo3 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffEffectValueSDDamageMul(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.battles[heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(multiplierInfo3);
  }
}
