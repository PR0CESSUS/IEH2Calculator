import { Util } from "@/Util";

export function ThiefSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "This skill's Hit Count + 1";
    case 1:
      return "+" + Util.percent(value) + " Physical Critical Chance (Add) while this skill is equipped";
    case 2:
      return "Enables a penetrating attack for this skill";
    case 3:
      return "This skill's damage";
    case 4:
      return "+" + Util.percent(value) + " Magical Critical Chance (Add) while this skill is equipped";
    case 5:
      return "Steal Chance";
    case 6:
      return "This skill's Area of Effect + ";
    case 7:
      return "Placeholder";
    case 8:
      return "This skill's critical chance : ";
    case 9:
      return "Disappear briefly and reappear at the furthest monster to deal damage";
    case 10:
      return " chance to steal a loot material every trigger";
    case 11:
      return "Steal more 1 material while this skill is equipped";
    case 12:
      return "+" + Util.percent(value) + " Physical Critical Chance (Mul) while this skill is equipped";
    case 13:
      return "+" + Util.percent(value) + " Magical Critical Chance (Mul) while this skill is equipped";
    default:
      return "";
  }
}
