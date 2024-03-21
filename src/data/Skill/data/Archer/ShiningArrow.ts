import { DATA } from "@/data/";
import { SKILL } from "@/data/skill/SKILL";
import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { Localization } from "@/localization/";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Debuff } from "@type/Debuff";
import { Element } from "@type/Element";
import { HeroKind } from "@type/HeroKind";
import { MultiplierType } from "@type/MultiplierType";
import { SkillBuffKind } from "@type/SkillBuffKind";
import { SkillPassiveKind } from "@type/SkillPassiveKind";
import { Stats } from "@type/Stats";

export class ShiningArrow extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 5, BasicStatsKind.MATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 10, SkillBuffKind.LightDamage, 0.2));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 15, SkillPassiveKind.LightDamage, 0.2, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 20, Stats.LightRes, MultiplierType.Add, 0.05));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 25, BasicStatsKind.MATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 30, BasicStatsKind.MP, MultiplierType.Add, 200.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 40, SkillPassiveKind.LightDamage, 0.3, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 50, SkillBuffKind.LightDamage, 0.3));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 60, BasicStatsKind.DEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 70, BasicStatsKind.MDEF, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 80, BasicStatsKind.MP, MultiplierType.Mul, 0.025));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 90, BasicStatsKind.HP, MultiplierType.Add, 1500.0));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 100, Stats.LightRes, MultiplierType.Add, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 120, BasicStatsKind.MP, MultiplierType.Add, 1000.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillBuff(this, 140, SkillBuffKind.LightDamage, 0.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 160, SkillPassiveKind.LightDamage, 0.5, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 180, BasicStatsKind.MATK, MultiplierType.Mul, 0.75));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 200, BasicStatsKind.DEF, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 225, BasicStatsKind.MDEF, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(SkillPassiveEffect.BasicStats(this, 250, BasicStatsKind.MATK, MultiplierType.Mul, 1.5));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 275, SkillPassiveKind.LightDamage, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 300, Stats.LightRes, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 350, SkillPassiveKind.ThisSkillDamage, 1.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 375, SkillPassiveKind.AlchemyPoint, 0.5, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 400, Stats.LightRes, MultiplierType.Mul, 0.4));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 425, SkillPassiveKind.ThisSkillCastTime, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 450, SkillPassiveKind.LightDamage, 0.15, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 475, SkillPassiveKind.ThisSkillDamage, 2.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 500, SkillPassiveKind.ArtifactProficiency, 0.1, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 525, Stats.LightRes, MultiplierType.Mul, 0.6));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 550, SkillPassiveKind.LightDamage, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 575, SkillPassiveKind.ThisSkillDamage, 4.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 600, SkillPassiveKind.ArtifactProficiency, 0.2, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 625, Stats.LightRes, MultiplierType.Mul, 0.8));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 650, SkillPassiveKind.ThisSkillCastTime, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 675, SkillPassiveKind.LightDamage, 0.3, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 700, Stats.LightRes, MultiplierType.Mul, 2.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 725, SkillPassiveKind.TownMaterialGain, 2.0, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 750, SkillPassiveKind.ThisSkillCastTime, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 775, SkillPassiveKind.LightDamage, 1.25, MultiplierType.Mul));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 800, SkillPassiveKind.ThisSkillDamage, 8.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 825, SkillPassiveKind.ThisSkillCastTime, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 850, Stats.LightRes, MultiplierType.Mul, 4.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 875, SkillPassiveKind.ThisSkillDamage, 16.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 900, SkillPassiveKind.ThisSkillCastTime, 0.1, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Stats(this, 925, Stats.LightRes, MultiplierType.Mul, 8.0));
    this.passiveEffectLists.push(SkillPassiveEffect.SkillPassive(this, 950, SkillPassiveKind.ThisSkillDamage, 32.0, MultiplierType.Add));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 1000, () => Localization.WarriorSkillsString(7)));
  }

  get element() {
    return Element.Light;
  }

  get debuff() {
    return Debuff.LightResDown;
  }
}
