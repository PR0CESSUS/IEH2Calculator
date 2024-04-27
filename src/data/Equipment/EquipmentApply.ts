export function applyLoadoutForge(data: number[] = [0, 0, 0, 0, 0, 0, 0]) {
  const game = globalThis.Game;
  const INITIAL_OFFSET = game.data.equipment.currentLoadoutInitialOffset;

  for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
    const equipment = game.data.inventory.equipmentSlots[index];
    if (equipment.isDisabled()) continue;

    for (let index = 0; index < equipment.forgeEffects.length; index++) equipment.forgeEffects[index].SetEffectValue(data[index]);
  }
}
