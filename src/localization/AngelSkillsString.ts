import { Util } from "@/Util";

export function AngelSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "This skill fires an additional projectile";
    case 1:
      return "25% chance to double Heal Point every trigger";
    case 2:
      return "25% chance to cure debuffs every trigger";
    case 3:
      return "5% chance to additionally restore 10% of Max HP";
    case 4:
      return "0.5% chance to Full Heal every trigger";
    case 5:
      return "HP Regeneration + " + Util.tDigit(value, 1) + " / sec while this skill is equipped";
    case 6:
      return "+" + Util.percent(value) + " Physical Nullified Chance while this skill is equipped";
    case 7:
      return "Move Speed + " + Util.percent(value) + " while this skill is equipped";
    case 8:
      return "This skill's damage + 50% per dash meter";
    case 9:
      return "This skill's Area of Effect + ";
    case 10:
      return "This skill's Hit Count + 1";
    case 11:
      return "This skill's Cast Time -25%";
    case 12:
      return "Placeholder";
    case 13:
      return "+" + Util.percent(value) + " Debuff Resistance while this skill is equipped";
    case 14:
      return "HP Regeneration + " + Util.tDigit(value, 1) + " / sec (After) while this skill is equipped";
    case 15:
      return "HP + " + Util.tDigit(value, 1) + " (After) while this skill is equipped";
    case 16:
      return "ATK + " + Util.tDigit(value, 1) + " (After) while this skill is equipped";
    case 17:
      return "MATK + " + Util.tDigit(value, 1) + " (After) while this skill is equipped";
    case 18:
      return "SD Damage Multiplier + " + Util.percent(value, 1) + " (Mul) while this skill is equipped";
    case 19:
      return "+" + Util.percent(value) + " Magical Nullified Chance while this skill is equipped";
    case 20:
      return "increase Hero's skill +" + Util.tDigit(value, 1) + " without increase MPConsumption while this skill is equipped";
    case 21:
      return "This skill's Hit Count + " + Util.tDigit(value);
    case 22:
      return "This skill's Cast Time -" + Util.percent(value, 0);
    default:
      return "";
  }
}
