const equipmentRarity = ["Common", "Uncommon", "Rare", "SuperRare", "Epic"] as const;

export type EquipmentRarity = (typeof equipmentRarity)[number];
