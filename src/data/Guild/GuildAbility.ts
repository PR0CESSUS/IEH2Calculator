import { Enums } from "@/Enums";
import { Multiplier, MultiplierInfo } from "@/data/Multiplier";
import { GuildAbilityKind } from "@/type/GuildAbilityKind";
import { Element } from "@type/Element";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { Stats } from "@type/Stats";
import { DataGuild } from ".";
import { DATA } from "..";
import { GuildParameter } from "./GuildParameter";
import { Localization } from "@/localization";

export class GuildAbility {
  data: DATA;
  levelCap: Multiplier;
  guildCtrl: DataGuild;
  kind: GuildAbilityKind;

  constructor(guildCtrl: DataGuild, kind: GuildAbilityKind) {
    this.data = guildCtrl.data;
    this.guildCtrl = guildCtrl;
    this.kind = kind;
    // this.levelCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, (() => GuildParameter.Ability(kind).maxLevel)));
  }

  Start() {
    return this.SetEffect();
  }

  get effectValue() {
    return GuildParameter.AbilityEffectValue(this.kind, this.level);
  }

  get level() {
    return this.data.source.guildAbilityLevels[this.kind];
  }
  set level(value) {
    this.data.source.guildAbilityLevels[this.kind] = value;
  }

  SetEffect() {
    switch (this.kind) {
      case GuildAbilityKind.StoneGain:
        this.data.stats.globalStats[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.CrystalGain:
        this.data.stats.globalStats[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.LeafGain:
        this.data.stats.globalStats[3].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.GuildExpGain:
        this.data.stats.SetEffectGuildExp(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
      case GuildAbilityKind.EquipmentInventory:
        this.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
      case GuildAbilityKind.EnchantInventory:
        this.data.inventory.enchantUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
      case GuildAbilityKind.PotionInventory:
        this.data.inventory.potionUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
      case GuildAbilityKind.MysteriousWater:
        this.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.SkillProficiency:
        this.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.GlobalSkillSlot:
        this.data.stats.globalSkillSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
      case GuildAbilityKind.GoldCap:
        this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.GoldGain:
        this.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.Trapping:
        for (let index = 0; index < this.data.monster.doubleCaptureChance.length; index++)
          this.data.monster.doubleCaptureChance[index].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
      case GuildAbilityKind.UpgradeCost:
        this.data.upgrade.costReductionFromGuildAbility.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
      case GuildAbilityKind.PhysicalAbsorption:
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementAbsorption(index, Element.Physical).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        }
        break;
      case GuildAbilityKind.MagicalAbsoption:
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.ElementAbsorption(index, Element.Fire).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
          this.data.stats.ElementAbsorption(index, Element.Ice).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
          this.data.stats.ElementAbsorption(index, Element.Thunder).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
          this.data.stats.ElementAbsorption(index, Element.Light).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
          this.data.stats.ElementAbsorption(index, Element.Dark).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        }
        break;
      case GuildAbilityKind.ExpGain:
        this.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.EquipmentProficiency:
        this.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.effectValue));
        break;
      case GuildAbilityKind.MaterialDrop:
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats.MaterialLootGain(index).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        }
        break;
      case GuildAbilityKind.NitroCap:
        this.data.nitro.nitroCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.effectValue));
        break;
    }
  }

  NameString() {
    return Localization.GuildAbilityName(this.kind);
  }

  EffectString() {
    return Localization.GuildAbilityEffect(this.kind, this.effectValue);
  }

  IsUnlocked() {
    // if (this.kind < GuildAbilityKind.GoldCap)
    //   return true;
    // switch (this.kind) {
    //   case GuildAbilityKind.GoldCap:
    //     return this.data.ascension.worldAscensions[0].performedNum > 0;
    //   case GuildAbilityKind.GoldGain:
    //     return this.data.ascension.worldAscensions[0].performedNum > 0;
    //   case GuildAbilityKind.Trapping:
    //     return this.data.ascension.worldAscensions[0].performedNum > 0;
    //   case GuildAbilityKind.UpgradeCost:
    //     return this.data.ascension.worldAscensions[0].performedNum > 0;
    //   default:
    //     return false;
    // }
    return true;
  }
}
