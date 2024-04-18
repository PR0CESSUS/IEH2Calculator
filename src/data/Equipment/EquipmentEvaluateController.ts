import { Enums } from "@/Enums";
import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { EquipmentEffectOptimizerKind } from "@/type/EquipmentEffectOptimizerKind";
import { EquipmentKind } from "@/type/EquipmentKind";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { DATA } from "..";
import { MultiplierInfo } from "../Multiplier";
import { Equipment } from "./Equipment";
import { EquipmentEvaluate } from "./EquipmentEvaluate";
import { EquipmentGlobalInformation } from "./EquipmentGlobalInformation";

type EquipmentEvaluateEnchantTest = {
  kind: EquipmentEffectKind;
  value: number;
  name: string;
};

type EquipmentEvaluateHistory = {
  winnerKind: EquipmentKind;
  tested: EquipmentEvaluate[];
};

export class EquipmentEvaluateController {
  data: DATA;
  equipmentTestSetList: [];
  equipmentTestList: EquipmentGlobalInformation[] = [];
  enchantmentsTestList: EquipmentEvaluateEnchantTest[] = [];
  anvilBonusLevel = 160;
  anvilIncrement = 1.7;
  history: EquipmentEvaluateHistory[];
  selected: EquipmentEvaluate[];
  selectedSet: Set<EquipmentKind>[] = Array(Enums.EquipmentSetKind);

  constructor(DATA: DATA) {
    this.data = DATA;

    // this.UpdateScoring();
    this.Initialize();
  }

  Initialize() {
    this.history = [];
    this.selected = [];
    for (let index = 0; index < this.selectedSet.length; index++) {
      this.selectedSet[index] = new Set();
    }
    this.equipmentTestList = this.data.equipment.globalInformations.filter(
      (equipment) =>
        this.data.equipment.optimizer.filterRarity[equipment.rarity] &&
        this.data.equipment.optimizer.filterSetKind[equipment.setKind] &&
        this.data.equipment.optimizer.filterArtifact == equipment.isArtifact
    );
  }

  Test(equipment: Equipment) {
    let testedEquipmentList: EquipmentEvaluate[] = [];
    this.UpdateScoring();

    for (let i = 0; i < this.equipmentTestList.length; i++) {
      const testedEquipment = this.equipmentTestList[i];

      // dodać filtry
      if (testedEquipment.part != equipment.slotPart) continue;
      testedEquipmentList.push(new EquipmentEvaluate(this, testedEquipment));

      // equipment.EffectMultiplierFromSetItem(equipment.heroKind)
      // equipment.kind = testedEquipment.kind;
      // const value = multiplier.Value();

      // if (value > bestValue) {
      //   bestValue = value;
      //   bestKind = i;
      // }
    }
    const max = testedEquipmentList.reduce((prev, current) => (prev && prev.score > current.score ? prev : current)); //returns object
    this.history.push({ winnerKind: max.kind, tested: testedEquipmentList });
    this.selected.push(max);
    this.selectedSet[max.info.setKind].add(max.info.kind);
    return max.info.kind;
  }

  TotalScore() {
    let score = 0;
    for (let index = 0; index < this.selected.length; index++) {
      const equipment = this.selected[index];
      score += equipment.GetScore();
    }

    return score;
  }
  TotalScoreDifference(equipment: EquipmentEvaluate) {
    let score = this.TotalScore();
    if (this.selectedSet[equipment.info.setKind].has(equipment.info.kind)) return 0;

    this.selectedSet[equipment.info.setKind].add(equipment.info.kind);
    let after = this.TotalScore();
    this.selectedSet[equipment.info.setKind].delete(equipment.info.kind);

    return after - score;
  }

  UpdateScoring() {
    this.enchantmentsTestList = [];
    console.log("this.UpdateScoring();");
    if (this.data.equipment.optimizer.kind == EquipmentEffectOptimizerKind.DPS) return;

    for (let index = 0; index < this.data.equipment.optimizer.list.length; index++) {
      const kind = this.data.equipment.optimizer.list[index];
      const multiplier = this.data.equipment.optimizer.GetMultiplier();
      const valueBefore = multiplier.Value();
      //TODO multiplier type for different enchants
      const type = kind == 77 ? MultiplierType.Add : MultiplierType.Mul;

      const unregister = multiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, type, () => 1));

      const valueAfter = multiplier.Value();
      unregister();

      this.enchantmentsTestList.push({ kind: kind, name: EquipmentEffectKind[kind], value: valueAfter - valueBefore });
    }
  }
}
