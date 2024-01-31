import { Util } from "./../Util/index";
import { SDGemKind } from "../type/SDGemKind";

export function SDGemString(kind: SDGemKind, value = 0) {
  let str1;
  let str2;
  switch (kind) {
    case SDGemKind.Sunstone:
      str1 = "Sunstone";
      str2 = "Multiplies Guild EXP Gain by " + Util.percent(value + 1);
      break;
    case SDGemKind.Morganite:
      str1 = "Morganite";
      str2 = "Expands the limit of Hero Level increment at once (default: Lv+30) by " + Util.tDigit(value, 0);
      break;
    case SDGemKind.Tanzanite:
      str1 = "Tanzanite";
      str2 = "Multiplies Stone Town Research Effect by " + Util.percent(value);
      break;
    case SDGemKind.Heliodor:
      str1 = "Heliodor";
      str2 = "Multiplies Crystal Town Research Effect by " + Util.percent(value);
      break;
    case SDGemKind.Peridot:
      str1 = "Peridot";
      str2 = "Multiplies Leaf Town Research Effect by " + Util.percent(value);
      break;
    case SDGemKind.Obsidian:
      str1 = "Obsidian";
      str2 = "Increases Monster Defeated # gain per defeat by " + Util.tDigit(value, 0);
      break;
    case SDGemKind.Amber:
      str1 = "Amber";
      str2 = "Increases Dungeon Clear # and Clear Reward by " + Util.tDigit(value, 0);
      break;
    case SDGemKind.Hackmanite:
      str1 = "Hackmanite";
      str2 = "Lowers the expedition minimum time (default: 15m) by " + Util.secondsToDhms(value);
      break;
    case SDGemKind.Turquoise:
      str1 = "Turquoise";
      str2 = "Reduce the efficiency penalty of longer expeditions - Current : [Hour]^" + Util.tDigit(0.85 + value, 3);
      break;
    case SDGemKind.Kunzite:
      str1 = "Kunzite";
      str2 = "Expand the cap of Forging Effect [Equipment Effect +%] by " + Util.percent(value);
      break;
    case SDGemKind.Carnelian:
      str1 = "Carnelian";
      str2 = "Expand the cap of Forging Effect [Effect Incement / Lv +%] by " + Util.percent(value);
      break;
    case SDGemKind.BlueTourmaline:
      str1 = "Blue Tourmaline";
      str2 = "Expand the cap of Forging Effect [Equipment Level +] by " + Util.tDigit(value, 0);
      break;
    case SDGemKind.Diamond:
      str1 = "Diamond";
      str2 = "Multiplies Talisman Passive Effect by " + Util.percent(value + 1);
      break;
    case SDGemKind.Almandine:
      str1 = "Almandine";
      str2 = "Nitro Speed + " + Util.tDigit(value, 1) + "x";
      break;
    case SDGemKind.Emerald:
      str1 = "Emerald";
      str2 = "Multiplies SD Powerups Permanent Effect by " + Util.percent(value + 1);
      break;
    default:
      str1 = kind;
      str2 = "";
      break;
  }
  return { name: str1, description: str2 };
}
