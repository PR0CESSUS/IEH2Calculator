import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { Multiplier } from "../Multiplier";
import { Equipment } from "./Equipment";
import { EquipmentOptionEffect } from "./EquipmentOptionEffect";
import { Game } from "@/Game";

export class EquipmentBestEnchantment {
  game: Game;
  enchantmentList: EquipmentEffectKind[] = [];
  multiplier: Multiplier;
  equipment: Equipment;
  INITIAL_OFFSET: number;

  constructor(multiplier: Multiplier, equipment?: Equipment) {
    this.game = globalThis.Game;
    this.INITIAL_OFFSET = this.game.data.equipment.currentLoadoutInitialOffset;
    this.multiplier = multiplier;
    this.equipment = equipment;
    this.GenerateEnchantmentList();
    if (equipment) {
      this.FindBest(equipment);
    } else {
      for (let offset = this.INITIAL_OFFSET; offset < this.INITIAL_OFFSET + 72; offset++) {
        this.FindBest(this.game.data.inventory.equipmentSlots[offset]);
      }
    }
  }

  FindBest(equipment: Equipment) {
    // console.log(this.Test(this.equipment.optionEffects[0]));
    const totalOptionNum = equipment.totalOptionNum.Value();
    // return;
    for (let index = 0; index < equipment.optionEffects.length; index++) {
      const slot = equipment.optionEffects[index];

      if (slot.optionId >= totalOptionNum) continue;

      this.Test(slot);
    }
  }

  Test(slot: EquipmentOptionEffect) {
    let initialValue = this.multiplier.Value();
    let bestValue = initialValue;
    let bestEnchantment = EquipmentEffectKind.Nothing;
    const result = {
      initialValue: initialValue,
      bestEnchantment: "Nothing",
      value: 0,
      diff: 0,
      tested: [],
    };

    for (let index = 0; index < this.enchantmentList.length; index++) {
      const testEnchantment = this.enchantmentList[index];
      slot.kind = testEnchantment;
      const currentValue = this.multiplier.Value();

      if (currentValue > bestValue) {
        bestEnchantment = testEnchantment;
        bestValue = currentValue;
      }
      result.tested.push({ kind: EquipmentEffectKind[testEnchantment], value: currentValue });
    }
    result.value = bestValue;
    result.bestEnchantment = EquipmentEffectKind[bestEnchantment];
    result.diff = result.value - result.initialValue;

    // slot.kind = EquipmentEffectKind.Nothing;

    // return result;
    if (bestEnchantment != EquipmentEffectKind.Nothing) slot.kind = bestEnchantment;
  }

  GenerateEnchantmentList() {
    if (this.multiplier.name == "Skill Proficiency Gain") {
      this.enchantmentList = [
        EquipmentEffectKind.BlessingEffect,
        EquipmentEffectKind.BlessingEffectMultiplier,
        EquipmentEffectKind.SkillProficiency,
        EquipmentEffectKind.SkillProficiencyMultiplier,
      ];
    }
  }
}
