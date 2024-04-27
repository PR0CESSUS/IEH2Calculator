import { BuildingKind } from "../type/BuildingKind";

export function BuildingString(kind: BuildingKind) {
  switch (kind) {
    case BuildingKind.StatueOfHeroes:
      return "Statue of Heroes";
    case BuildingKind.AlchemistsHut:
      return "Alchemist's Hut";
    case BuildingKind.Cartographer:
      return "Cartographer";
    case BuildingKind.AdventuringParty:
      return "Adventuring Party";
    case BuildingKind.Blacksmith:
      return "Blacksmith";
    case BuildingKind.Temple:
      return "Temple";
    case BuildingKind.SlimeBank:
      return "Slime Bank";
    case BuildingKind.MysticArena:
      return "Mystic Arena";
    case BuildingKind.ArcaneResearcher:
      return "Arcane Researcher";
    case BuildingKind.Tavern:
      return "Tavern";
    case BuildingKind.Dojo:
      return "Dojo";
    case BuildingKind.Trapper:
      return "Trapper";
    default:
      return "Not Implemented";
  }
}
