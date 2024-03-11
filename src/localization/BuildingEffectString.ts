import { Util } from "../Util";
import { BuildingKind } from "../type/BuildingKind";

export function BuildingEffectString(kind: BuildingKind, value: number) {
  switch (kind) {
    case BuildingKind.StatueOfHeroes:
      return `EXP Gain ${Util.percent(value)}`;
    case BuildingKind.AlchemistsHut:
      return `Shop Material's Max Stock # ${Util.tDigit(value, 0)}`;
    case BuildingKind.Cartographer:
      return `Gold Gain ${Util.percent(value)}`;
    case BuildingKind.AdventuringParty:
      return `Multiply Expedition Speed by ${Util.percent(value)}`;
    case BuildingKind.Blacksmith:
      return `Multiply Equipment's Effect by ${Util.percent(value)}`;
    case BuildingKind.Temple:
      return `Rebirth Point Gain ${Util.percent(value)}`;
    case BuildingKind.SlimeBank:
      return `Slime Coin Gain ${Util.percent(value)}`;
    case BuildingKind.MysticArena:
      return `Damage to Challenge Boss ${Util.percent(value)}`;
    case BuildingKind.ArcaneResearcher:
      return `Multiply Research Power by ${Util.percent(value)}`;
    case BuildingKind.Tavern:
      return `-`;
    case BuildingKind.Dojo:
      return `-`;
    case BuildingKind.Trapper:
      return `Capturable Monster Max Lv : ${Util.tDigit(value, 0)}`;
    default:
      return `Not Implemented`;
  }
}
