export const expeditionKind = ["Brick", "Log", "Shard", "PetRank", "Equipment", "PetExp", "WalkDistance"] as const;

export type ExpeditionKind = {
  [K in (typeof expeditionKind)[number]]?: number;
};
