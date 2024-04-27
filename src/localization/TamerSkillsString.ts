import { Util } from "@/Util";

export function TamerSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "Pet Summon Slot +" + Util.tDigit(value) + " while this Skill is equipped";
    case 1:
      return "Enables to summon Pets\n- Pet's Attack Damage Multiplier: ";
    case 2:
      return "Pet Damage Multiplier +" + Util.percent(value, 0) + " (Mul) for this Skill";
    case 3:
      return "Gives summoned Pets an Attack Order, regardless of their Cast Time\n- Pet Damage Multiplier: ";
    case 4:
      return "Gives summoned Pets an Order to rush to random Monsters\n- Pet Damage Multiplier: ";
    case 5:
      return "Gives summoned Pets an Order to come back and attack the closest Monster to the Hero\n- Pet Damage Multiplier: ";
    case 6:
      return "Heal twice as much at 25% chance";
    case 7:
      return "Cure Debuffs at 25% chance";
    case 8:
      return "Heal 10% of Max HP at 5% chance";
    case 9:
      return "Heal 100% of Max HP at 0.5% chance";
    case 10:
      return "Heal the summoned Pets";
    case 11:
      return "Effect Chance +" + Util.percent(value, 0) + " for this Skill";
    case 12:
      return " chance for summoned Pets to randomly use a Skill that the Hero has equipped every ";
    case 13:
      return "\n- Pets use no MP to trigger a Skill regardless of the Cast Time";
    case 14:
      return "\n- Skill Proficiency Gain by the Pet Cast: ";
    case 15:
      return "Pets' Critical Chance +" + Util.percent(value) + " while this Skill is equipped";
    case 16:
      return "Summoned Pets' ATK & MATK: +";
    case 17:
      return "Pets' Critical Chance +" + Util.percent(value) + " while this Skill is equipped";
    case 18:
      return "Summoned Pets' Attack Speed & Move Speed: +";
    case 19:
      return "Loyalty Point Gain +" + Util.percent(value) + " while this Skill is equipped";
    case 20:
      return "Pet EXP Gain: +";
    case 21:
      return "Placeholder";
    case 22:
      return " chance to capture the target Monster without Nets ( +";
    case 23:
      return "\n- To capture, the type of Net must be unlocked with enough capturable Level";
    case 24:
      return "Allows the capturing of all Monsters of the same color within the AoE";
    case 25:
      return "Prioritizes the color of Monsters matching your equipped Nets";
    default:
      return "";
  }
}
