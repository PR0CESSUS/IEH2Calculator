import { Util } from "@/Util";

export function ThiefSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "Hit Count +1 for this Skill";
    case 1:
      return "Physical Critical Chance +" + Util.percent(value) + " (Add) while this Skill is equipped";
    case 2:
      return "Enables piercing of Enemies for this Skill";
    case 3:
      return "Damage +" + Util.percent(value, 0) + " for this Skill";
    case 4:
      return "Magical Critical Chance +" + Util.percent(value) + " (Add) while this Skill is equipped";
    case 5:
      return "Steal Chance +" + Util.percent(value) + " for this Skill";
    case 6:
      return "";
    case 7:
      return "Placeholder";
    case 8:
      return "Critical chance: ";
    case 9:
      return "Disappear briefly and reappear at the furthest Monster to deal damage";
    case 10:
      return "Chance to steal Common Materials: " + Util.percent(value);
    case 12:
      return "Physical Critical Chance +" + Util.percent(value) + " (Mul) while this Skill is equipped";
    case 13:
      return "Magical Critical Chance +" + Util.percent(value) + " (Mul) while this Skill is equipped";
    default:
      return "";
  }
}
