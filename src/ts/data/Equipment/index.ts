import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { EquipmentKind } from "../../type/EquipmentKind";
import { HeroKind } from "../../type/HeroKind";
import { Enums } from "../../Enums";

export class DataEquipment {
  globalInformations = [];
  setItemArray = [];
  dictionaryUpgradeEffectMultiplier: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  equipments = [];
  dictionaryUpgradeMaxLevel: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50.0));
  dictionaryPointLeft;
  dictionaryUpgrades = [];
  artifactChance: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.01));
  sdEnchantChance: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  loadoutUnlockedNum: Multiplier = new Multiplier();
  effectMultiplier: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  effectMultiplierModifierForArtifact: Multiplier = new Multiplier();
  forgeEffectCapAdderEQEffect: Multiplier = new Multiplier();
  forgeEffectCapAdderEffectIncrement: Multiplier = new Multiplier();
  forgeEffectCapAdderEQLevel: Multiplier = new Multiplier();
  maxLevels: Multiplier[] = Array(Enums.HeroKind);
  disassembleMultiplier: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  autoDisassembleAvailableNum: Multiplier = new Multiplier();
  dictionaryEquipmentArray: EquipmentKind[];

  constructor() {
    for (let kind = 0; kind < this.globalInformations.length; kind++)
      // this.globalInformations[kind] = new EquipmentGlobalInformation((EquipmentKind) kind);

      this.artifactChance;
    this.sdEnchantChance;
  }

  Start() {
    // for (let index = 0; index < this.equipments.length; index++) this.equipments[index].Start();
  }
}
