import { DictionaryParameter } from "./DictionaryParameter";
import { DataEquipment } from "./index";
import { Enums } from "./../../Enums";
import { DictionaryUpgradeKind } from "../../type/DictionaryUpgradeKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierInfo } from "./../../Multiplier";
import { HeroKind } from "./../../type/HeroKind";
import { Stats } from "./../../type/Stats";
// Decompiled with JetBrains decompiler
// Type: DictionaryUpgrade
// Assembly: Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 767F62AD-B0C4-49B4-ACA2-E19F2B058744
// Assembly location: D:\SteamLibrary\steamapps\common\Incremental Epic Hero 2\Incremental Epic Hero 2_Data\Managed\Assembly-CSharp.dll

export class DictionaryUpgrade {
  equipmentCtrl: DataEquipment;
  kind: DictionaryUpgradeKind;

  constructor(equipmentCtrl: DataEquipment, kind: DictionaryUpgradeKind) {
    this.equipmentCtrl = equipmentCtrl;
    this.kind = kind;

    this.SetEffect();
  }
  get level() {
    return globalThis.data.source.dictionaryUpgradeLevels[this.kind];
  }

  get effectValue() {
    return DictionaryParameter.EffectValue(this.kind, this.level) * this.equipmentCtrl.dictionaryUpgradeEffectMultiplier.Value();
  }

  SetEffect() {
    switch (this.kind) {
      case DictionaryUpgradeKind.EquipmentProficiencyGainWarrior:
        globalThis.data.stats
          .HeroStats(HeroKind.Warrior, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EquipmentProficiencyGainWizard:
        globalThis.data.stats
          .HeroStats(HeroKind.Wizard, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EquipmentProficiencyGainAngel:
        globalThis.data.stats
          .HeroStats(HeroKind.Angel, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EquipmentProficiencyGainThief:
        globalThis.data.stats
          .HeroStats(HeroKind.Thief, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EquipmentProficiencyGainArcher:
        globalThis.data.stats
          .HeroStats(HeroKind.Archer, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EquipmentProficiencyGainTamer:
        globalThis.data.stats
          .HeroStats(HeroKind.Tamer, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EquipmentDropChance:
        globalThis.data.stats.SetEffectStats(Stats.EquipmentDropChance, new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EnchantedEffectChance1:
        for (let index = 0; index < Enums.HeroKind; ++index)
          globalThis.data.stats.OptionEffectChance(index, 0).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EnchantedEffectChance2:
        for (let index = 0; index < Enums.HeroKind; ++index)
          globalThis.data.stats.OptionEffectChance(index, 1).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
      case DictionaryUpgradeKind.EnchantedEffectChance3:
        for (let index = 0; index < Enums.HeroKind; ++index)
          globalThis.data.stats.OptionEffectChance(index, 2).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Dictionary, MultiplierType.Add, () => this.effectValue));
        break;
    }
  }
}
