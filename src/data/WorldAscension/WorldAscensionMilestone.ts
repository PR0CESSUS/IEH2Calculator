import { DATA } from "..";
import { Enums } from "../../Enums";
import { MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Stats } from "../../type/Stats";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";

export class WorldAscensionMilestone {
  #data: DATA;
  kind: WorldAscensionMiletoneKind;

  constructor(DATA: DATA, kind: WorldAscensionMiletoneKind) {
    this.#data = DATA;
    this.kind = kind;
  }

  get maxLevelReached() {
    return this.#data.source.ascensionMilestoneLevelReached;
  }

  get currentPassiveEffectValue() {
    return this.PassiveEffectValue(this.maxLevelReached[this.kind]);
  }

  Start() {
    this.SetEffect();
  }

  PassiveEffectValue(level: number) {
    switch (this.kind) {
      case WorldAscensionMiletoneKind.TownBuldingLevel:
        return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
      case WorldAscensionMiletoneKind.MissionClearNum:
        return level * 0.5;
      case WorldAscensionMiletoneKind.DictionaryPoint:
        return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
      case WorldAscensionMiletoneKind.DisassembleEquipment:
        return 0.2 * level * Math.pow(2.0, (level - 1.0) / 9.0);
      case WorldAscensionMiletoneKind.MoveDistance:
        return 0.01 * Math.pow(level, 2.0);
      case WorldAscensionMiletoneKind.UpgradeLevel:
        return Math.max(0.0, Math.pow(2.0, level) - 1.0);
      case WorldAscensionMiletoneKind.RebirthPointGainTier1:
        return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
      case WorldAscensionMiletoneKind.RebirthPointGainTier2:
        return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
      default:
        return 0;
    }
  }

  SetEffect() {
    switch (this.kind) {
      case WorldAscensionMiletoneKind.TownBuldingLevel:
        this.#data.town.townLevelEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue));
        break;

      case WorldAscensionMiletoneKind.MissionClearNum:
        this.#data.area.townMaterialGainPerDifficultyMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue)
        );
        break;
      case WorldAscensionMiletoneKind.DictionaryPoint:
        this.#data.equipment.dictionaryUpgradeEffectMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue)
        );
        break;
      case WorldAscensionMiletoneKind.DisassembleEquipment:
        this.#data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
        break;
      case WorldAscensionMiletoneKind.MoveDistance:
        this.#data.stats.SetEffectStats(Stats.MoveSpeed, new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
        break;
      case WorldAscensionMiletoneKind.RebirthPointGainTier1:
        for (let heroKind = 0; heroKind < Enums.HeroKind; heroKind++) {
          this.#data.rebirth
            .Rebirth(heroKind, 0)
            .rebirthPointGainFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
        }
        break;
      case WorldAscensionMiletoneKind.RebirthPointGainTier2:
        for (let heroKind = 0; heroKind < Enums.HeroKind; heroKind++) {
          this.#data.rebirth
            .Rebirth(heroKind, 1)
            .rebirthPointGainFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
        }
        break;
      default:
        break;
    }
  }
}
