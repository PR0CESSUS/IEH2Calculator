import { Game } from "@/Game";
import { Util } from "@/Util";
import { Multiplier } from "@/data/Multiplier";
import { EquipmentForgeEffectKind } from "@/type/EquipmentForgeEffectKind";
import { EquipmentKind } from "@/type/EquipmentKind";
import { EquipmentRarity } from "@/type/EquipmentRarity";
import { EquipmentSetKind } from "@/type/EquipmentSetKind";
import { Equipment } from "./Equipment";
import { EquipmentBestEnchantment } from "./EquipmentBestEnchantement";
import { clearLoadout } from "./EquipmentClear";

export class FindBestEquipment {
  game: Game;
  INITIAL_OFFSET: number;
  INITIAL_VALUE: number;
  multiplier: Multiplier;
  bestValue: number;
  bestEquipment: EquipmentKind;
  currentValue: number;
  currentEquipment: Equipment;

  constructor(multiplier: Multiplier, offset?: number) {
    this.game = globalThis.Game;
    this.multiplier = multiplier;
    console.time("Generation Time");
    if (offset) {
      this.FindBest(offset);
    } else {
      this.INITIAL_OFFSET = this.game.data.equipment.currentLoadoutInitialOffset;
      this.INITIAL_VALUE = multiplier.Value();
      this.bestValue = this.INITIAL_VALUE;
      this.bestEquipment = EquipmentKind.Nothing;
      clearLoadout();
      this.Start();
      console.timeEnd("Generation Time");
    }
  }

  Start() {
    const debug = [];
    // alternate betwen weapon, armor, jewelery
    // anvil effect?
    // enchants?
    let i = 0;
    for (let index = this.INITIAL_OFFSET; index < this.INITIAL_OFFSET + 24; index++) {
      i++;
      // this.FindBest(index)
      // this.FindBest(index + 24);
      // this.FindBest(index + 48);

      debug.push(this.FindBest(index));
      debug.push(this.FindBest(index + 24));
      debug.push(this.FindBest(index + 48));
      console.log(i);
    }
    console.log("finished");
    console.log(debug);
  }

  FindBest(offset: number) {
    const currentEquipment = this.game.data.inventory.equipmentSlots[offset];
    // currentEquipment.forgeEffects[EquipmentForgeEffectKind.ReduceRequiredAbility].SetEffectValue(0);
    currentEquipment.forgeEffects[EquipmentForgeEffectKind.ReduceRequiredHeroLevel].SetEffectValue(1000000);
    currentEquipment.forgeEffects[EquipmentForgeEffectKind.IncreaseEffect].SetEffectValue(18);
    currentEquipment.forgeEffects[EquipmentForgeEffectKind.IncreaseEffectIncrement].SetEffectValue(1.8);
    currentEquipment.forgeEffects[EquipmentForgeEffectKind.EqLevel].SetEffectValue(180);
    this.currentEquipment = currentEquipment;
    if (currentEquipment.isDisabled()) return;
    let bestEquipment = EquipmentKind.Nothing;
    let initialValue = this.multiplier.Value();
    let bestValue = initialValue;

    let result = {
      initialValue: initialValue,
      initialValueString: Util.tDigit(initialValue),

      bestValue: 0,
      bestEquipment: null,
      itemTested: [],
    };

    for (let kind = 0; kind < this.game.data.equipment.globalInformations.length; kind++) {
      const checkedEquipment = this.game.data.equipment.globalInformations[kind];
      if (
        currentEquipment.slotPart != checkedEquipment.part ||
        checkedEquipment.rarity == EquipmentRarity.Common ||
        checkedEquipment.rarity == EquipmentRarity.Uncommon ||
        checkedEquipment.isArtifact ||
        checkedEquipment.setKind == EquipmentSetKind.Slime ||
        checkedEquipment.setKind == EquipmentSetKind.Bat ||
        checkedEquipment.setKind == EquipmentSetKind.Spider ||
        checkedEquipment.setKind == EquipmentSetKind.Devilfish ||
        checkedEquipment.setKind == EquipmentSetKind.Magicslime ||
        checkedEquipment.setKind == EquipmentSetKind.Treant
      )
        continue;

      currentEquipment.kind = kind;
      new EquipmentBestEnchantment(this.multiplier, currentEquipment);
      // enchantments.FindBest();
      const currentValue = this.multiplier.Value();

      if (bestValue < currentValue) {
        bestValue = currentValue;
        bestEquipment = kind;
        // console.log("checking", EquipmentKind[kind], "value", currentValue, "new BEST!");
      }
      result.itemTested.push({ item: EquipmentKind[kind], value: Util.tDigit(currentValue), diff: Util.tDigit(currentValue - initialValue) });
      // console.log("value", currentValue, "checking", EquipmentKind[kind]);
    }
    currentEquipment.kind = bestEquipment;
    result.bestEquipment = EquipmentKind[bestEquipment];
    result.bestValue = bestValue - result.initialValue;

    // console.log("Best Item Found:", EquipmentKind[bestEquipment]);
    // console.log(result);

    return result;
  }
}
