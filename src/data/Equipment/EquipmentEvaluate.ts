import { EquipmentKind } from "@/type/EquipmentKind";
import { EquipmentGlobalInformation } from "./EquipmentGlobalInformation";
import { DATA } from "..";
import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { EquipmentEvaluateController } from "./EquipmentEvaluateController";
import { EquipmentParameter } from "./EquipmentParameter";

type EquipmentEvaluateScore = {
  type: string;
  score: number;
  kind?: string;
  value?: number;
};

export class EquipmentEvaluate {
  name: string;
  score: number = 0;
  kind: EquipmentKind;
  setBonus: number;
  data: DATA;
  info: EquipmentGlobalInformation;
  controller: EquipmentEvaluateController;
  slots: number;
  scoreList: EquipmentEvaluateScore[] = [];

  constructor(controller: EquipmentEvaluateController, info: EquipmentGlobalInformation) {
    this.info = info;
    this.data = info.data;
    this.controller = controller;
    this.kind = info.kind;
    this.name = EquipmentKind[info.kind];
    this.slots = info.levelMaxEffects[3].initValue() + 4;
    let highestValue = this.controller.enchantmentsTestList[0]; // Initialize with the first element

    // get highest score enchantment
    for (const num of this.controller.enchantmentsTestList) {
      if (num.value > highestValue.value) {
        highestValue = num;
      }
    }
    this.scoreList.push({
      type: "Slots",
      score: this.slots,
      // score: this.slots * highestValue.value * EquipmentParameter.EffectCalculation(highestValue.kind, EquipmentParameter.MaxLevel(highestValue.kind) + 1),
      value: EquipmentParameter.EffectCalculation(highestValue.kind, EquipmentParameter.MaxLevel(highestValue.kind) + 1),
      kind: EquipmentEffectKind[highestValue.kind],
      // score: this.slots * highestValue,
    });

    // this.setBonus = this.data.inventory.SetItemEquippedNum(info.setKind, this.data.source.currentHero);
    this.setBonus = this.SetBonus();

    // values for anvils

    for (let indexEffect = 0; indexEffect < this.info.effects.length; indexEffect++) {
      const effect = this.info.effects[indexEffect];
      if (this.data.equipment.optimizer.list.includes(effect.kind)) {
        const value = effect.EffectValue(120 + this.controller.anvilBonusLevel, 1 + this.controller.anvilIncrement);
        this.scoreList.push({
          type: "Effect",
          score: value * this.controller.enchantmentsTestList.filter((test) => test.kind)[0].value,
          kind: EquipmentEffectKind[effect.kind],
          value: value,
        });
      }
    }

    for (let indexEffect = 0; indexEffect < this.info.levelMaxEffects.length; indexEffect++) {
      const effect = this.info.levelMaxEffects[indexEffect];
      if (this.data.equipment.optimizer.list.includes(effect.kind)) {
        const value = effect.EffectValue(120 + this.controller.anvilBonusLevel, 1 + this.controller.anvilIncrement);
        this.scoreList.push({
          type: "Mastery",
          score: value * this.controller.enchantmentsTestList.filter((test) => test.kind)[0].value,
          kind: EquipmentEffectKind[effect.kind],
          value: value,
        });
      }
    }
    let totalScore = this.controller.TotalScoreDifference(this);
    this.scoreList.push({
      type: "Bonus",
      score: totalScore,
    });
    for (let index = 0; index < this.scoreList.length; index++) {
      if (this.scoreList[index].type != "Bonus") this.score += this.scoreList[index].score;
    }
    //TODO przeliczenie ile by to zmieniło scora dla dotychczasowych itemków

    this.score *= this.setBonus;

    this.score += this.scoreList.filter((score) => score.type == "Bonus")[0].score;
  }

  SetBonus() {
    let setItemsNum = this.controller.selectedSet[this.info.setKind].size;

    if (!this.controller.selectedSet[this.info.setKind].has(this.info.kind)) setItemsNum++;

    switch (setItemsNum) {
      case 2:
        return 1.05;
      case 3:
        return 1.1;
      case 4:
        return 1.15;
      case 5:
        return 1.2;
      case 6:
        return 1.25;
      case 7:
        return 1.35;
      case 8:
        return 1.5;
      default:
        return 1.0;
    }
  }

  GetScore() {
    let score = 0;
    for (let index = 0; index < this.scoreList.length; index++) score += this.scoreList[index].score;
    score *= this.SetBonus();
    return score;
  }
}
