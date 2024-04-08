import { Util } from "@/Util";

export function AngelSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "Projectile +1 for this Skill";
    case 1:
      return "Heal twice as much at 25% chance";
    case 2:
      return "Cure Debuffs at 25% chance";
    case 3:
      return "Heal 10% of Max HP at 5% chance";
    case 4:
      return "Heal 100% of Max HP at 0.5% chance";
    case 5:
      return "HP Regeneration +" + Util.tDigit(value, 1) + "/sec while this Skill is equipped";
    case 6:
      return "Physical Nullify Chance +" + Util.percent(value) + " while this Skill is equipped";
    case 7:
      return "Move Speed +" + Util.percent(value) + " while this Skill is equipped";
    case 8:
      return "";
    case 9:
      return "";
    case 10:
      return "Hit Count +1 for this Skill";
    case 11:
      return "Cast Time -25% for this Skill";
    case 12:
      return "Placeholder";
    case 13:
      return "Debuff Resistance +" + Util.percent(value) + " while this Skill is equipped";
    case 14:
      return "HP Regeneration +" + Util.tDigit(value, 1) + "/sec (After) while this Skill is equipped";
    case 15:
      return "HP +" + Util.tDigit(value, 1) + " (After) while this Skill is equipped";
    case 16:
      return "ATK +" + Util.tDigit(value, 1) + " (After) while this Skill is equipped";
    case 17:
      return "MATK +" + Util.tDigit(value, 1) + " (After) while this Skill is equipped";
    case 18:
      return "SD Damage Multiplier +" + Util.percent(value) + " (Mul) while this Skill is equipped";
    case 19:
      return "Magical Nullify Chance +" + Util.percent(value) + " while this Skill is equipped";
    case 21:
      return "Hit Count +" + Util.tDigit(value) + " for this Skill";
    case 22:
      return "Cast Time -" + Util.percent(value, 0) + " for this Skill";
    default:
      return "";
  }
}
