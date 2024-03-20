import { Util } from "@/Util";
import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Debuff } from "@type/Debuff";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class ChargeSwing extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.ATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 10, BasicStatsKind.ATK, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 20, Stats.PhysCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 30, () => Localization.WarriorSkillsString(2) + Util.meter(70.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 40, BasicStatsKind.HP, MultiplierType.Add, 5000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 50, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 60, Stats.PhysCritChance, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 70, Stats.CriticalDamage, MultiplierType.Add, 0.1));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 80, SkillPassiveKind.PhysicalDamage, 0.5, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 90, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.WarriorSkillsString(5) + Util.meter(30.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 110, Stats.CriticalDamage, MultiplierType.Add, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.ATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 130, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 140, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.WarriorSkillsString(2) + Util.meter(100.0)));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 160, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 170, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 180, SkillPassiveKind.ThisSkillDamage, 64.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 190, SkillPassiveKind.ThisSkillDamage, 128.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 200, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 225, SkillPassiveKind.ThisSkillDamage, 256.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.ATK, MultiplierType.Mul, 3.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 275, SkillPassiveKind.ThisSkillDamage, 512.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.PhysCritChance, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 350, SkillPassiveKind.ThisSkillDamage, 1024.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 375, SkillBuffKind.SDDamageMul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 400, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 425, Stats.ArmoredFury, MultiplierType.Mul, 0.35));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 450, SkillBuffKind.SDDamageMul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillDamage, 2048.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.SDDamageMultiplier, 15.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 525, Stats.CriticalDamage, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.ThisSkillDamage, 4096.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.ThisSkillCastTime, 0.25, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 600, SkillBuffKind.SDDamageMul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 625, SkillPassiveKind.ThisSkillDamage, 8192.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 650, Stats.CriticalDamage, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 675, Stats.ArmoredFury, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 700, SkillPassiveKind.ThisSkillDamage, 16384.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.ThisSkillDamage, 32768.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 750, SkillBuffKind.SDDamageMul, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 775, Stats.ArmoredFury, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ThisSkillDamage, 65536.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 825, Stats.PhysCritChance, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 850, SkillPassiveKind.ThisSkillDamage, 131072.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ThisSkillDamage, 262144.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ThisSkillDamage, 524288.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 950, SkillBuffKind.SDDamageMul, 16.0));
  }

  get debuff() {
    return Debuff.MatkDown;
  }

  Range() {
    return this.level.value >= 100 ? this.Range() + 30 * this.data.skill.skillRangeMultiplier[this.heroKind].Value() : this.Range();
  }

  EffectRange() {
    if (this.level.value >= 150) return this.EffectRange() + 170 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value();
    return this.level.value >= 30 ? this.EffectRange() + 70 * this.data.skill.skillEffectRangeMultiplier[this.heroKind].Value() : this.EffectRange();
  }
}
