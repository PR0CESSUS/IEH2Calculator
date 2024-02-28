import { TownMaterialKind } from "../type/TownMaterialKind";

export function TownMaterialNameString(kind: TownMaterialKind) {
  switch (kind) {
    case TownMaterialKind.MudBrick:
      return "Mud Brick";
    case TownMaterialKind.LimestoneBrick:
      return "Limestone Brick";
    case TownMaterialKind.MarbleBrick:
      return "Marble Brick";
    case TownMaterialKind.GraniteBrick:
      return "Granite Brick";
    case TownMaterialKind.BasaltBrick:
      return "Basalt Brick";
    case TownMaterialKind.PineLog:
      return "Pine Log";
    case TownMaterialKind.MapleLog:
      return "Maple Log";
    case TownMaterialKind.AshLog:
      return "Ash Log";
    case TownMaterialKind.MahoganyLog:
      return "Mahogany Log";
    case TownMaterialKind.RosewoodLog:
      return "Rosewood Log";
    case TownMaterialKind.JasperShard:
      return "Jasper Shard";
    case TownMaterialKind.OpalShard:
      return "Opal Shard";
    case TownMaterialKind.OnyxShard:
      return "Onyx Shard";
    case TownMaterialKind.JadeShard:
      return "Jade Shard";
    case TownMaterialKind.SapphireShard:
      return "Sapphire Shard";
    default:
      return kind;
  }
}
