import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { SkillType } from "@type/SkillType";
import { Stats } from "@type/Stats";

export class SoothingBallad extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.HP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 20, BasicStatsKind.HP, MultiplierType.Add, 500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.HP, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.HP, MultiplierType.Add, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.TamerSkillsString(6)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.MP, MultiplierType.Add, 250.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 70, SkillPassiveKind.PetExpGain, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.HP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 90, SkillPassiveKind.PetExpGain, 0.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.TamerSkillsString(7)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.HP, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 140, () => Localization.TamerSkillsString(8)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 160, BasicStatsKind.HP, MultiplierType.Add, 1500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.PetExpGain, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.MP, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.HP, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.TamerSkillsString(9)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 275, SkillBuffKind.LoyaltyPoint, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.PetDebuffResistance, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 350, SkillBuffKind.LoyaltyPoint, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.PetExpGain, 1.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.PetDebuffResistance, MultiplierType.Add, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.PetExpGain, 2.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 450, SkillBuffKind.LoyaltyPoint, 3.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.PetExpGain, 4.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 500, Stats.PetDebuffResistance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 525, SkillPassiveKind.PetExpGain, 8.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 550, SkillBuffKind.LoyaltyPoint, 5.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.PetExpGain, 16.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 600, Stats.PetDebuffResistance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.PetExpGain, 32.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 650, SkillBuffKind.LoyaltyPoint, 10.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.PetExpGain, 64.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 700, Stats.PetDebuffResistance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.PetExpGain, 128.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 750, SkillBuffKind.LoyaltyPoint, 25.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.PetExpGain, 500.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 800, Stats.PetDebuffResistance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.PetExpGain, 1000.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 850, SkillBuffKind.LoyaltyPoint, 55.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.PetExpGain, 5000.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 900, Stats.PetDebuffResistance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 925, SkillPassiveKind.PetExpGain, 10000.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 950, SkillBuffKind.LoyaltyPoint, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get type() {
    return SkillType.Heal;
  }
}
