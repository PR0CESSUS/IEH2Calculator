export class DebugEquipment {
  constructor() {}

  hero(heroKind) {
    const loadout = globalThis.data.source.equipmentLoadoutIds[heroKind];
    const offset = 520 + heroKind * 720 + loadout * 72;

    for (let index = offset; index < offset + 72; index++) {
      this.item(index);
    }
  }

  item(slotId: number) {
    console.log(
      "Equipment slotId#",
      slotId,
      "IsEquipped",
      globalThis.data.inventory.equipmentSlots[slotId].IsEquipped(),
      "isDisabled",
      globalThis.data.inventory.equipmentSlots[slotId].isDisabled()
    );
  }
}
