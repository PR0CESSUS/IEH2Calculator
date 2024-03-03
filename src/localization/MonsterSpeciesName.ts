import { MonsterSpecies } from "../type/MonsterSpecies";

export function MonsterSpeciesName(species: MonsterSpecies) {
  switch (species) {
    case MonsterSpecies.Slime:
      return "Slime";
    case MonsterSpecies.MagicSlime:
      return "Magicslime";
    case MonsterSpecies.Spider:
      return "Spider";
    case MonsterSpecies.Bat:
      return "Bat";
    case MonsterSpecies.Fairy:
      return "Fairy";
    case MonsterSpecies.Fox:
      return "Fox";
    case MonsterSpecies.DevilFish:
      return "Devilfish";
    case MonsterSpecies.Treant:
      return "Treant";
    case MonsterSpecies.FlameTiger:
      return "Flametiger";
    case MonsterSpecies.Unicorn:
      return "Unicorn";
    case MonsterSpecies.Mimic:
      return "Mimic";
    default:
      return species;
  }
}
