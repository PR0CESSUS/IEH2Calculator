import { MaterialKind } from "../type/MaterialKind";

export function Material(kind: MaterialKind) {
  switch (kind) {
    case MaterialKind.MonsterFluid:
      return "Monster Fluid";
    case MaterialKind.FlameShard:
      return "Flame Shard";
    case MaterialKind.FrostShard:
      return "Frost Shard";
    case MaterialKind.LightningShard:
      return "Lightning Shard";
    case MaterialKind.NatureShard:
      return "Nature Shard";
    case MaterialKind.PoisonShard:
      return "Poison Shard";
    case MaterialKind.BlackPearl:
      return "Black Pearl";
    case MaterialKind.OilOfSlime:
      return "Oil of Slime";
    case MaterialKind.EnchantedCloth:
      return "Magical Cloth";
    case MaterialKind.SpiderSilk:
      return "Spider Silk";
    case MaterialKind.BatWing:
      return "Bat Wing";
    case MaterialKind.FairyDust:
      return "Fairy Dust";
    case MaterialKind.FoxTail:
      return "Fox Tail";
    case MaterialKind.FishScales:
      return "Fish Scales";
    case MaterialKind.CarvedBranch:
      return "Carved Branch";
    case MaterialKind.ThickFur:
      return "Thick Fur";
    case MaterialKind.UnicornHorn:
      return "Unicorn Horn";
    case MaterialKind.SlimeBall:
      return "Slime Ball";
    case MaterialKind.ManaSeed:
      return "Mana Seed";
    case MaterialKind.UnmeltingIce:
      return "Unmelting Ice";
    case MaterialKind.EternalFlame:
      return "Eternal Flame";
    case MaterialKind.AncientBattery:
      return "Ancient Battery";
    case MaterialKind.Ectoplasm:
      return "Ectoplasm";
    case MaterialKind.Stardust:
      return "Stardust";
    case MaterialKind.VoidEgg:
      return "Void Egg";
    case MaterialKind.EnchantedShard:
      return "Enchanted Shard";
    default:
      return kind;
  }
}
