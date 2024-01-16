import { SDGemKind } from "../type/SDGemKind";

export function SDGemString(kind: SDGemKind, text = "") {
  let str1;
  let str2;
  switch (kind) {
    case SDGemKind.Sunstone:
      str1 = "Sunstone";
      str2 = "Multiplies Guild EXP Gain by " + text;
      break;
    case SDGemKind.Morganite:
      str1 = "Morganite";
      str2 = "Expands the limit of Hero Level increment at once (default: Lv+30) by " + text;
      break;
    case SDGemKind.Tanzanite:
      str1 = "Tanzanite";
      str2 = "Multiplies Stone Town Research Effect by " + text;
      break;
    case SDGemKind.Heliodor:
      str1 = "Heliodor";
      str2 = "Multiplies Crystal Town Research Effect by " + text;
      break;
    case SDGemKind.Peridot:
      str1 = "Peridot";
      str2 = "Multiplies Leaf Town Research Effect by " + text;
      break;
    case SDGemKind.Obsidian:
      str1 = "Obsidian";
      str2 = "Increases Monster Defeated # gain per defeat by " + text;
      break;
    case SDGemKind.Amber:
      str1 = "Amber";
      str2 = "Increases Dungeon Clear # and Clear Reward by " + text;
      break;
    case SDGemKind.Hackmanite:
      str1 = "Hackmanite";
      str2 = "Lowers the expedition minimum time (default: 15m) by " + text;
      break;
    case SDGemKind.Turquoise:
      str1 = "Turquoise";
      str2 = "Reduce the efficiency penalty of longer expeditions - Current : [Hour]^" + text;
      break;
    case SDGemKind.Kunzite:
      str1 = "Kunzite";
      str2 = "Expand the cap of Forging Effect [Equipment Effect +%] by " + text;
      break;
    case SDGemKind.Carnelian:
      str1 = "Carnelian";
      str2 = "Expand the cap of Forging Effect [Effect Incement / Lv +%] by " + text;
      break;
    case SDGemKind.BlueTourmaline:
      str1 = "Blue Tourmaline";
      str2 = "Expand the cap of Forging Effect [Equipment Level +] by " + text;
      break;
    case SDGemKind.Diamond:
      str1 = "Diamond";
      str2 = "Multiplies Talisman Passive Effect by " + text;
      break;
    case SDGemKind.Almandine:
      str1 = "Almandine";
      str2 = "Nitro Speed + " + text + "x";
      break;
    case SDGemKind.Emerald:
      str1 = "Emerald";
      str2 = "Multiplies SD Powerups Permanent Effect by " + text;
      break;
    default:
      str1 = kind;
      str2 = "";
      break;
  }
  return { name: str1, description: str2 };
}
