import { Util } from "@/Util";

export function WarriorSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "Hit Count +1 for this Skill";
    case 1:
      return "MP Consumption -50% for this Skill";
    case 2:
      return "Area of Effect +" + Util.meter(value) + " for this Skill";
    case 3:
      return "Cast Time -50% for this Skill";
    case 4:
      return "MP Consumption -100% for this Skill";
    case 5:
      return "Range +" + Util.meter(value) + " for this Skill";
    case 6:
      return "Cast Time -25% for this Skill";
    case 7:
      return "Placeholder";
    case 8:
      return "Damage +50% per dash meter for this Skill";
    case 9:
      return "Makes a running dash toward the target Monster to attack.";
    case 10:
      return "Cast Time ready on Area start for this Skill";
    default:
      return "";
  }
}
