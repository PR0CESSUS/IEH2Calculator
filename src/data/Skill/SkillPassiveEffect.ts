import { MultiplierInfo } from "@/data/Multiplier";
import { Util } from "@/Util";
import { Enums } from "@/Enums";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Element } from "@type/Element";
import { Stats } from "@type/Stats";
import { EquipmentEffectKind } from "@type/EquipmentEffectKind";
import { SkillPassiveEffectKind } from "@type/SkillPassiveEffectKind";
import { GlobalStats } from "@type/GlobalStats";
import { SKILL } from "./SKILL";
import { SkillPassiveKind } from "@/type/SkillPassiveKind";
import { SkillBuffKind } from "@/type/SkillBuffKind";
import { SkillLevel } from "./SkillLevel";
import { DATA } from "..";
import { Localization } from "@/localization";

export class SkillPassiveEffect {
  data: DATA;
  skill: SKILL;
  level: SkillLevel;
  requiredLevel;
  effectKind: SkillPassiveEffectKind;
  basicStatsKind: BasicStatsKind;
  statsKind: Stats;
  globalStatsKind: GlobalStats;
  multiplierType: MultiplierType;
  description = () => "not implemented";
  value;

  constructor() {}

  static BasicStats(skill: SKILL, requiredLevel: number, basicStatsKind: BasicStatsKind, multiplierType: MultiplierType, value: number) {
    const instance = new SkillPassiveEffect();
    let flag = true;
    let tempDescription = "";
    instance.data = skill.data;
    instance.effectKind = SkillPassiveEffectKind.BasicStats;
    instance.skill = skill;
    instance.level = skill.level;
    instance.requiredLevel = requiredLevel;
    instance.basicStatsKind = basicStatsKind;
    instance.multiplierType = multiplierType;
    instance.value = value;

    if (multiplierType == MultiplierType.Add) flag = false;

    tempDescription = `${BasicStatsKind[basicStatsKind]} + ${
      multiplierType == MultiplierType.Add || multiplierType == MultiplierType.After ? Util.tDigit(instance.value) : Util.percent(instance.value)
    }`;
    if (flag) tempDescription = instance.MultiplierTypeString(multiplierType, tempDescription);
    instance.description = () => tempDescription;
    instance.SetEffect();
    return instance;
  }

  static Stats(skill: SKILL, requiredLevel, statsKind: Stats, multiplierType: MultiplierType, value) {
    const instance = new SkillPassiveEffect();
    let flag = true;
    let tempDescription = "";
    instance.data = skill.data;
    instance.effectKind = SkillPassiveEffectKind.HeroStats;
    instance.skill = skill;
    instance.level = skill.level;
    instance.requiredLevel = requiredLevel;
    instance.statsKind = statsKind;
    instance.multiplierType = multiplierType;
    instance.value = value;

    tempDescription = `${Localization.Stat(statsKind)} + ${Util.percent(instance.value)}`;
    if (flag) tempDescription = instance.MultiplierTypeString(multiplierType, tempDescription);
    instance.description = () => tempDescription;
    instance.SetEffect();
    return instance;
  }

  static GlobalStats(skill: SKILL, requiredLevel, globalStatsKind: GlobalStats, multiplierType: MultiplierType, value) {
    const instance = new SkillPassiveEffect();
    let flag = true;
    let tempDescription = "";
    instance.data = skill.data;
    instance.effectKind = SkillPassiveEffectKind.GlobalStats;
    instance.skill = skill;
    instance.level = skill.level;
    instance.requiredLevel = requiredLevel;
    instance.globalStatsKind = globalStatsKind;
    instance.multiplierType = multiplierType;
    instance.value = value;

    tempDescription = `${Localization.GlobalStatsString(globalStatsKind)} + ${Util.percent(instance.value)}`;
    if (flag) tempDescription = instance.MultiplierTypeString(multiplierType, tempDescription);
    instance.description = () => tempDescription;
    instance.SetEffect();
    return instance;
  }

  static Register(skill: SKILL, requiredLevel, description, registerInfo: Function = null) {
    const instance = new SkillPassiveEffect();
    instance.data = skill.data;
    instance.effectKind = SkillPassiveEffectKind.Others;
    instance.skill = skill;
    instance.level = skill.level;
    instance.requiredLevel = requiredLevel;
    instance.description = description;
    if (registerInfo != null) registerInfo(() => instance.IsActivated());
    return instance;
  }

  static SkillPassive(skill: SKILL, requiredLevel, kind: SkillPassiveKind, value, type: MultiplierType) {
    const instance = new SkillPassiveEffect();
    instance.data = skill.data;
    instance.effectKind = SkillPassiveEffectKind.Others;
    instance.skill = skill;
    instance.level = skill.level;
    instance.requiredLevel = requiredLevel;
    instance.value = value;
    instance.onInstanceRegister(kind, type);
    return instance;
  }

  onInstanceRegister(kind: SkillPassiveKind, type: MultiplierType) {
    let flag = true;
    let tempDescription = "";
    let value = this.value;
    let skill = this.skill;
    let multiplier: Function = () => (skill.heroKind == this.data.source.currentHero ? value : value * this.data.skill.skillPassiveShareFactors[skill.heroKind].Value());

    switch (kind) {
      case SkillPassiveKind.SDDamageMultiplier:
        tempDescription = Localization.GradeMilestone(5, Util.percent(value));
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.battles[index].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.SDDamageCutMultiplier:
        tempDescription = Localization.GradeMilestone(6, Util.percent(value));
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.battles[index].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.SDChallengeBossDamageMultiplier:
        tempDescription = Localization.GradeMilestone(7, Util.percent(value));
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.battles[index].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.SDChallengeBossDamageCutMultiplier:
        tempDescription = Localization.GradeMilestone(8, Util.percent(value));
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.battles[index].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.SDArmoredFury:
        tempDescription = Localization.GradeMilestone(9, Util.percent(value));
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.battles[index].superDungeonCtrl.armoredFury.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.SDWardedFury:
        tempDescription = Localization.GradeMilestone(10, Util.percent(value));
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.battles[index].superDungeonCtrl.wardedFury.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.GuildExp:
        tempDescription = "Guild Exp + " + Util.percent(value);
        this.data.stats.SetEffectGuildExp(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        break;
      case SkillPassiveKind.ThisSkillDamage:
        tempDescription = Localization.ThiefSkillsString(3) + ` + ${Util.percent(value)}`;
        skill.damageMultiplier.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.SkillPassive,
            MultiplierType.Add,
            () => value,
            () => this.IsActivated()
          )
        );
        flag = false;
        break;
      case SkillPassiveKind.ThisSkillHitCount:
        tempDescription = Localization.AngelSkillsString(21, value);
        skill.extraHitCount.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.SkillPassive,
            MultiplierType.Add,
            () => value,
            () => this.IsActivated()
          )
        );
        flag = false;
        break;
      case SkillPassiveKind.ThisSkillCastTime:
        tempDescription = Localization.AngelSkillsString(22, value);
        skill.casttimeReductionPercent.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.SkillPassive,
            MultiplierType.Add,
            () => value,
            () => this.IsActivated()
          )
        );
        flag = false;
        break;
      case SkillPassiveKind.PhysicalDamage:
        tempDescription = `Physical Damage + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementDamage(index, Element.Physical).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.FireDamage:
        tempDescription = `Fire Damage + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementDamage(index, Element.Fire).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.IceDamage:
        tempDescription = `Ice Damage + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementDamage(index, Element.Ice).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.ThunderDamage:
        tempDescription = `Thunder Damage + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementDamage(index, Element.Thunder).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.LightDamage:
        tempDescription = `Light Damage + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementDamage(index, Element.Light).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.DarkDamage:
        tempDescription = `Dark Damage + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementDamage(index, Element.Dark).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.BlessingEffect:
        tempDescription = `Blessing Effect + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.blessingInfo.effectMultipliers[index].RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.TownMaterialGain:
        tempDescription = `Town Material Gain + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.town.townMaterialGainMultiplier[index].RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.EquipmentProficiency:
        tempDescription = Localization.Stat(Stats.EquipmentProficiencyGain) + ` + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.HeroStats(index, Stats.EquipmentProficiencyGain).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.ArtifactProficiency:
        tempDescription = Localization.Stat(Stats.ArtifactProficiencyGain) + ` + ${Util.percent(value)}`;
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.HeroStats(index, Stats.ArtifactProficiencyGain).RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              type,
              () => this.EffectValue(index),
              () => this.IsActivated()
            )
          );
        }
        break;
      case SkillPassiveKind.EssenceConversionRate:
        tempDescription = `Essence Conversion Rate + ${Util.percent(value)}`;
        this.data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        flag = false;
        break;
      case SkillPassiveKind.AlchemyPoint:
        tempDescription = `Alchemy Point Gain + ${Util.percent(value)}`;
        this.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        flag = false;
        break;
      case SkillPassiveKind.StoneResearchPower:
        tempDescription = Localization.EquipmentEffectName(EquipmentEffectKind.StoneTownResearchPower) + ` + ${Util.percent(value)}`;
        this.data.town.researchPower[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        flag = false;
        break;
      case SkillPassiveKind.CrystalResearchPower:
        tempDescription = Localization.EquipmentEffectName(EquipmentEffectKind.CrystalTownResearchPower) + ` + ${Util.percent(value)}`;
        this.data.town.researchPower[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        flag = false;
        break;
      case SkillPassiveKind.LeafResearchPower:
        tempDescription = Localization.EquipmentEffectName(EquipmentEffectKind.LeafTownResearchPower) + ` + ${Util.percent(value)}`;
        this.data.town.researchPower[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        flag = false;
        break;
      case SkillPassiveKind.GoldCap:
        tempDescription = `Gold Cap + ${Util.percent(value)}`;
        this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        flag = false;
        break;
      case SkillPassiveKind.SlimeCoinCap:
        tempDescription = `Slime Coin Cap + ${Util.percent(value)}`;
        this.data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SkillPassive, type, multiplier, () => this.IsActivated()));
        flag = false;
        break;
    }
    if (flag) tempDescription = this.MultiplierTypeString(type, tempDescription);

    this.description = () => tempDescription;
  }

  static SkillBuff(skill: SKILL, requiredLevel, buffKind: SkillBuffKind, value) {
    const instance = new SkillPassiveEffect();
    instance.data = skill.data;
    instance.effectKind = SkillPassiveEffectKind.Others;
    instance.skill = skill;
    instance.level = skill.level;
    instance.requiredLevel = requiredLevel;
    instance.value = value;
    instance.onInstanceRegister2(buffKind);

    return instance;
  }

  onInstanceRegister2(buffKind) {
    let tempDescription = "";
    let skill = this.skill;
    let value = this.value;

    for (let index = 0; index < Enums.HeroKind; index++) {
      let heroKind: HeroKind = index;
      let trigger = () => skill.IsActiveBuff(heroKind) && this.IsActivated();
      switch (buffKind) {
        case SkillBuffKind.PhysicalDamage:
          tempDescription = Localization.ArcherSkillsString(1, value);
          this.data.stats.ElementDamage(heroKind, Element.Physical).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.FireDamage:
          tempDescription = Localization.ArcherSkillsString(8, value);
          this.data.stats.ElementDamage(heroKind, Element.Fire).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.IceDamage:
          tempDescription = Localization.ArcherSkillsString(6, value);
          this.data.stats.ElementDamage(heroKind, Element.Ice).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.ThunderDamage:
          tempDescription = Localization.ArcherSkillsString(5, value);
          this.data.stats.ElementDamage(heroKind, Element.Thunder).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.LightDamage:
          tempDescription = Localization.ArcherSkillsString(9, value);
          this.data.stats.ElementDamage(heroKind, Element.Light).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.DarkDamage:
          tempDescription = Localization.ArcherSkillsString(10, value);
          this.data.stats.ElementDamage(heroKind, Element.Dark).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.ArmoredFury:
          tempDescription = Localization.OtherString(19, Localization.Stat(Stats.ArmoredFury) + " + " + Util.percent(value));
          this.data.stats.HeroStats(heroKind, Stats.ArmoredFury).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.WardedFury:
          tempDescription = Localization.OtherString(19, Localization.Stat(Stats.WardedFury) + " + " + Util.percent(value));
          this.data.stats.HeroStats(heroKind, Stats.WardedFury).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.PhysicalCritAdd:
          tempDescription = Localization.ThiefSkillsString(1, value);
          this.data.stats.HeroStats(heroKind, Stats.PhysCritChance).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Add, () => value, trigger));
          break;
        case SkillBuffKind.MagicalCritAdd:
          tempDescription = Localization.ThiefSkillsString(4, value);
          this.data.stats.HeroStats(heroKind, Stats.MagCritChance).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Add, () => value, trigger));
          break;
        case SkillBuffKind.PhysicalCritMul:
          tempDescription = Localization.ThiefSkillsString(12, value);
          this.data.stats.HeroStats(heroKind, Stats.PhysCritChance).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.MagicalCritMul:
          tempDescription = Localization.ThiefSkillsString(13, value);
          this.data.stats.HeroStats(heroKind, Stats.MagCritChance).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.CriticalDamage:
          tempDescription = Localization.OtherString(19, Localization.Stat(Stats.CriticalDamage) + " + " + Util.percent(value));
          this.data.stats.HeroStats(heroKind, Stats.CriticalDamage).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.EquipmentProf:
          tempDescription = Localization.OtherString(19, Localization.Stat(Stats.EquipmentProficiencyGain) + " + " + Util.percent(value));
          this.data.stats.HeroStats(heroKind, Stats.EquipmentProficiencyGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.ArtifactProf:
          tempDescription = Localization.OtherString(19, Localization.Stat(Stats.ArtifactProficiencyGain) + " + " + Util.percent(value));
          this.data.stats.HeroStats(heroKind, Stats.ArtifactProficiencyGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.TamingPoint:
          tempDescription = Localization.OtherString(19, Localization.Stat(Stats.TamingPointGain) + " + " + Util.percent(value));
          this.data.stats.HeroStats(heroKind, Stats.TamingPointGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.LoyaltyPoint:
          tempDescription = Localization.OtherString(19, "Loyalty Point Gain + " + Util.percent(value));
          this.data.stats.heroes[index].loyaltyPoingGain.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.Mul, () => value, trigger));
          break;
        case SkillBuffKind.EquipmentDropChanceAfter:
          tempDescription = Localization.OtherString(19, Localization.Stat(Stats.EquipmentDropChance) + " (After) + " + Util.percent(value));
          this.data.stats.HeroStats(heroKind, Stats.EquipmentDropChance).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Buff, MultiplierType.After, () => value, trigger));
          break;
        case SkillBuffKind.SDDamageMul:
          tempDescription = Localization.OtherString(19, Localization.GradeMilestone(5, Util.percent(value)));
          this.data.battles[index].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              MultiplierType.Mul,
              () => this.EffectValue(heroKind),
              () => this.IsActivated()
            )
          );
          break;
        case SkillBuffKind.SDArmoredFury:
          tempDescription = Localization.OtherString(19, Localization.GradeMilestone(9, Util.percent(value)));
          this.data.battles[index].superDungeonCtrl.armoredFury.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              MultiplierType.Mul,
              () => this.EffectValue(heroKind),
              () => this.IsActivated()
            )
          );
          break;
        case SkillBuffKind.SDWardedFury:
          tempDescription = Localization.OtherString(19, Localization.GradeMilestone(10, Util.percent(value)));
          this.data.battles[index].superDungeonCtrl.wardedFury.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.SkillPassive,
              MultiplierType.Mul,
              () => this.EffectValue(heroKind),
              () => this.IsActivated()
            )
          );
          break;
      }
    }
    this.description = () => tempDescription;
  }

  MultiplierTypeString(type, string) {
    switch (type) {
      case MultiplierType.Add:
        return string + " (Add)";
      case MultiplierType.Mul:
        return string + " (Mul)";

      case MultiplierType.After:
        return string + " (After)";
    }
  }

  IsActivated() {
    return this.IsEnoughLevel();
  }

  IsEnoughLevel() {
    return this.data.skill.unlockSkillPassivePersist ? this.level.maxReachedLevel >= this.requiredLevel : this.level >= this.requiredLevel;
  }

  SetEffect() {
    switch (this.effectKind) {
      case SkillPassiveEffectKind.BasicStats:
        for (let index = 0; index < Enums.HeroKind; index++) {
          let multiplierInfo: MultiplierInfo = new MultiplierInfo(
            MultiplierKind.SkillPassive,
            this.multiplierType,
            () => this.EffectValue(index),
            () => this.IsActivated()
          );
          this.data.stats.BasicStats(index, this.basicStatsKind).RegisterMultiplier(multiplierInfo);
        }
        break;
      case SkillPassiveEffectKind.HeroStats:
        for (let index = 0; index < Enums.HeroKind; index++) {
          let multiplierInfo: MultiplierInfo = new MultiplierInfo(
            MultiplierKind.SkillPassive,
            this.multiplierType,
            () => this.EffectValue(index),
            () => this.IsActivated()
          );
          this.data.stats.HeroStats(index, this.statsKind).RegisterMultiplier(multiplierInfo);
        }
        break;
      case SkillPassiveEffectKind.GlobalStats:
        let multiplierInfo1 = new MultiplierInfo(
          MultiplierKind.SkillPassive,
          this.multiplierType,
          () => (this.skill.heroKind == this.data.source.currentHero ? this.value : this.value * this.data.skill.skillPassiveShareFactors[this.skill.heroKind].Value()),
          () => this.IsActivated()
        );
        this.data.stats.globalStats[this.globalStatsKind].RegisterMultiplier(multiplierInfo1);
        break;
    }
  }

  EffectValue(heroKind: HeroKind) {
    let num = this.value;
    if (heroKind != this.skill.heroKind) num *= this.data.skill.skillPassiveShareFactors[this.skill.heroKind].Value();
    return num;
  }
}
