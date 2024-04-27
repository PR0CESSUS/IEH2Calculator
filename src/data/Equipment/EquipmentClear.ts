import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { EquipmentKind } from "@/type/EquipmentKind";

export function clearLoadout(type: "all" | "enchant" | "forge" | "equipment" = "all") {
  const game = globalThis.Game;
  const INITIAL_OFFSET = game.data.equipment.currentLoadoutInitialOffset;

  for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
    const equipment = game.data.inventory.equipmentSlots[index];
    if (equipment.isDisabled()) continue;

    if (type == "all" || type == "enchant") for (let index = 0; index < equipment.optionEffects.length; index++) equipment.optionEffects[index].kind = EquipmentEffectKind.Nothing;

    if (type == "all" || type == "forge") for (let index = 0; index < equipment.forgeEffects.length; index++) equipment.forgeEffects[index].SetEffectValue(0);

    if (type == "all" || type == "equipment") equipment.kind = EquipmentKind.Nothing;
  }
}
