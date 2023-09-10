export const equipmentSetKind = ["Nothing", "Slime", "Magicslime", "Spider", "Bat", "Fairy", "Fox", "Devilfish", "Treant", "Flametiger"] as const;

export type EquipmentSetKind = (typeof equipmentSetKind)[number];
