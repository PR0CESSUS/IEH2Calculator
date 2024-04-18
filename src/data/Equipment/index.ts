import { DATA } from "..";
import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { DictionaryUpgrade } from "./DictionaryUpgrade";
import { EquipmentGlobalInformation } from "./EquipmentGlobalInformation";
import { EquipmentParameter } from "./EquipmentParameter";
import { SDModifierKind } from "../../type/SDModifierKind";
import { EquipmentEffectOptimizer } from "./EnchantmentOptimizer";
import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { EquipmentEvaluateController } from "./EquipmentEvaluateController";

export class DataEquipment {
  data: DATA;
  globalInformations: EquipmentGlobalInformation[] = Array(Enums.EquipmentKind);
  setItemArray: EquipmentKind[][] = Array(Enums.EquipmentSetKind);
  dictionaryUpgradeEffectMultiplier: Multiplier;
  equipments = [];
  activeEquipments = Array(Enums.HeroKind);
  dictionaryUpgradeMaxLevel: Multiplier;
  dictionaryPointLeft;
  dictionaryUpgrades = Array(Enums.DictionaryUpgradeKind);
  artifactChance: Multiplier;
  sdEnchantChance: Multiplier;
  loadoutUnlockedNum: Multiplier;
  effectMultiplier: Multiplier;
  effectMultiplierModifierForArtifact: Multiplier;
  forgeEffectCapAdderEQEffect: Multiplier;
  forgeEffectCapAdderEffectIncrement: Multiplier;
  forgeEffectCapAdderEQLevel: Multiplier;
  maxLevels: Multiplier[] = Array(Enums.HeroKind);
  disassembleMultiplier: Multiplier;
  autoDisassembleAvailableNum: Multiplier;
  dictionaryEquipmentArray: EquipmentKind[];
  optimizer: EquipmentEffectOptimizer;
  evaluateController: EquipmentEvaluateController;

  constructor(DATA: DATA) {
    this.data = DATA;

    for (let kind = 0; kind < this.globalInformations.length; kind++) this.globalInformations[kind] = new EquipmentGlobalInformation(this.data, kind);
    this.autoDisassembleAvailableNum = new Multiplier();
    this.forgeEffectCapAdderEQLevel = new Multiplier();
    this.forgeEffectCapAdderEffectIncrement = new Multiplier();
    this.forgeEffectCapAdderEQEffect = new Multiplier();
    this.loadoutUnlockedNum = new Multiplier();
    this.dictionaryUpgradeEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.dictionaryUpgradeMaxLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50.0));
    this.effectMultiplierModifierForArtifact = new Multiplier();
    this.effectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.effectMultiplier.name = "Equipment Effect";
    this.disassembleMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.artifactChance = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.01));
    this.sdEnchantChance = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));

    this.artifactChance.name = "Artifact Drop Chance";
    this.sdEnchantChance.name = "SD Enchant Chance";
    for (let index = 0; index < this.maxLevels.length; index++)
      this.maxLevels[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => EquipmentParameter.maxLevelForEachHero));
    for (let index = 0; index < Enums.EquipmentSetKind; index++) {
      this.setItemArray[index] = this.SetItemList(index);
    }

    for (let kind = 0; kind < this.dictionaryUpgrades.length; ++kind) this.dictionaryUpgrades[kind] = new DictionaryUpgrade(this, kind);
  }

  SetItemList(kind: EquipmentSetKind) {
    let equipmentKindList: EquipmentKind[] = [];
    for (let index = 0; index < this.globalInformations.length; index++) {
      if (this.globalInformations[index].setKind == kind) equipmentKindList.push(this.globalInformations[index].kind);
    }
    return equipmentKindList;
  }

  Start() {
    for (let index = 0; index < this.dictionaryUpgrades.length; index++) this.dictionaryUpgrades[index].Start();
  }

  Initialize() {
    this.optimizer = new EquipmentEffectOptimizer(this.data);
    this.evaluateController = new EquipmentEvaluateController(this.data);
  }
  EffectMultiplier() {
    if (this.data.source.isSuperDungeon && this.data.source.isActiveSdModifiersCustom[SDModifierKind.RemoveEquipmentEffectBonuses]) {
      return 1;
    }

    return this.effectMultiplier.Value();
  }

  ArtifactEffectMultiplier() {
    return 1.0 + (this.EffectMultiplier() - 1.0) * this.effectMultiplierModifierForArtifact.Value();
  }

  get currentLoadoutInitialOffset() {
    return 520 + this.data.source.currentHero * 720 + this.data.source.equipmentLoadoutIds[this.data.source.currentHero] * 72;
  }

  ClearLoadout(type: "all" | "enchant" | "forge" | "equipment" = "all") {
    const INITIAL_OFFSET = this.data.equipment.currentLoadoutInitialOffset;

    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.data.inventory.equipmentSlots[index];
      if (equipment.isDisabled()) continue;

      if (type == "all" || type == "enchant")
        for (let index = 0; index < equipment.optionEffects.length; index++) equipment.optionEffects[index].kind = EquipmentEffectKind.Nothing;

      if (type == "all" || type == "forge") for (let index = 0; index < equipment.forgeEffects.length; index++) equipment.forgeEffects[index].SetEffectValue(0);

      if (type == "all" || type == "equipment") equipment.kind = EquipmentKind.Nothing;
    }
  }
  ApplyLoadoutForge(data: number[] = [0, 0, 0, 0, 0, 0, 0]) {
    const INITIAL_OFFSET = this.data.equipment.currentLoadoutInitialOffset;

    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.data.inventory.equipmentSlots[index];

      for (let i = 0; i < equipment.forgeEffects.length; i++) equipment.forgeEffects[i].SetEffectValue(data[i]);
    }
    this.StartLoadout();
  }

  StartLoadout() {
    const INITIAL_OFFSET = this.data.equipment.currentLoadoutInitialOffset;

    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.data.inventory.equipmentSlots[index];
      equipment.Start();
    }
  }
}
