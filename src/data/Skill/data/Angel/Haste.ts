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

export class Haste extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.SPD, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 10, Stats.MoveSpeed, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 15, BasicStatsKind.SPD, MultiplierType.Add, 75.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.SPD, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 25, BasicStatsKind.SPD, MultiplierType.Add, 125.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 30, Stats.MoveSpeed, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.SPD, MultiplierType.Add, 150.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 50, BasicStatsKind.SPD, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 75, Stats.MoveSpeed, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.AngelSkillsString(7, 0.1)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 125, BasicStatsKind.SPD, MultiplierType.Add, 300.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.AngelSkillsString(7, 0.15)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 175, BasicStatsKind.SPD, MultiplierType.Add, 350.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.AngelSkillsString(7, 0.25)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.SPD, MultiplierType.Add, 400.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.SPD, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 275, BasicStatsKind.SPD, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 300, () => Localization.AngelSkillsString(7, 0.4)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 350, BasicStatsKind.SPD, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 375, Stats.MoveSpeed, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 400, () => Localization.AngelSkillsString(7, 0.6)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.EquipmentProficiency, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 450, BasicStatsKind.SPD, MultiplierType.Mul, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 475, Stats.MoveSpeed, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 500, () => Localization.AngelSkillsString(7, 0.85)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.EquipmentProficiency, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 550, BasicStatsKind.SPD, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 575, Stats.MoveSpeed, MultiplierType.Mul, 0.35));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 600, () => Localization.AngelSkillsString(7, 1.15)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ArtifactProficiency, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 650, BasicStatsKind.SPD, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.MoveSpeed, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 700, () => Localization.AngelSkillsString(7, 1.5)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.EquipmentProficiency, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 750, BasicStatsKind.SPD, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 775, Stats.MoveSpeed, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 800, () => Localization.AngelSkillsString(7, 1.9)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ArtifactProficiency, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 850, BasicStatsKind.SPD, MultiplierType.Mul, 0.7));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 875, Stats.MoveSpeed, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 900, () => Localization.AngelSkillsString(7, 2.35)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.ArtifactProficiency, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 950, BasicStatsKind.SPD, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  MoveSpeedValue() {
    if (this.level.value >= 900) return 9.25;
    if (this.level.value >= 800) return 6.9;
    if (this.level.value >= 700) return 5.0;
    if (this.level.value >= 600) return 3.5;
    if (this.level.value >= 500) return 2.35;
    if (this.level.value >= 400) return 1.5;
    if (this.level.value >= 300) return 0.9;
    if (this.level.value >= 200) return 0.5;
    if (this.level.value >= 150) return 0.25;
    return this.level.value >= 100 ? 0.1 : 0.0;
  }

  get type() {
    return SkillType.Buff;
  }

  get buff() {
    return Buff.SpdUp;
  }

  SetBuff(heroKind: HeroKind) {
    let multiplierInfo1 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.BuffPercent(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.BasicStats(heroKind, BasicStatsKind.SPD).RegisterMultiplier(multiplierInfo1);
    let multiplierInfo2 = new MultiplierInfo(
      MultiplierKind.Buff,
      MultiplierType.Mul,
      () => this.MoveSpeedValue(),
      () => this.IsActiveBuff(heroKind)
    );
    this.data.stats.HeroStats(heroKind, Stats.MoveSpeed).RegisterMultiplier(multiplierInfo2);
  }
}
