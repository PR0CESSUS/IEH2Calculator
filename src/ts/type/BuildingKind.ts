export const buildingKind = [
  "StatueOfHeroes",
  "Cartographer",
  "AlchemistsHut",
  "Blacksmith",
  "Temple",
  "Trapper",
  "SlimeBank",
  "MysticArena",
  "ArcaneResearcher",
  "Tavern",
  "Dojo",
  "AdventuringParty",
] as const;

// export type BuildingKind = (typeof buildingKind)[number];
export type BuildingKind = {
  [K in (typeof buildingKind)[number]]?: Building;
};

type Building = {
  effect: number;
  research: {
    stone: {
      effect: number;
      level: number;
    };
    crystal: { effect: number; level: number };
    leaf: { effect: number; level: number };
  };
};
