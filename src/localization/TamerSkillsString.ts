import { Util } from "@/Util";

export function TamerSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "+" + Util.tDigit(value) + " Pet Summon Slot while this skill is equipped";
    case 1:
      return "Enables to summon pets\n- Pet's Basic Attack Damage Multiplier : ";
    case 2:
      return "Multiplies this skill's Damage Multiplier by ";
    case 3:
      return "Gives the summoned pets an attack order regardless their cooldown\n- Pet's Attack Damage Multiplier : ";
    case 4:
      return "Gives the summoned pets an order to let them rush to random monsters\n- Pet's Attack Damage Multiplier : ";
    case 5:
      return "Gives the summoned pets an order to let them come back to the hero and attack the closest monster to the hero\n- Pet's Attack Damage Multiplier : ";
    case 6:
      return "25% chance to double Heal Point every trigger";
    case 7:
      return "25% chance to cure debuffs every trigger";
    case 8:
      return "5% chance to additionally restore 10% of Max HP";
    case 9:
      return "0.5% chance to Full Heal every trigger";
    case 10:
      return "Restore the summoned pets' HP";
    case 11:
      return "This skill's chance effect + ";
    case 12:
      return " chance that each summoned pet randomly uses a skill that the hero equips every ";
    case 13:
      return "\n- Pets use no MP to trigger a skill regardless its cooldown";
    case 14:
      return "\n- Skill Proficiency Gain Rate by the pet use : ";
    case 15:
      return "+" + Util.percent(value) + " Pet's Critical Chance while this skill is equipped";
    case 16:
      return "The summoned pet's ATK & MATK : + ";
    case 17:
      return "+" + Util.percent(value) + " Pet's Critical Chance while this skill is equipped";
    case 18:
      return "The summoned pet's Attack Speed & Move Speed : + ";
    case 19:
      return "+" + Util.percent(value) + " Loyalty Point Gain while this skill is equipped";
    case 20:
      return "Pet EXP Gain : + ";
    case 21:
      return "Placeholder";
    case 22:
      return " chance to capture the target monster without traps every trigger ( + ";
    case 23:
      return "\n- To capture, the color trap must be unlocked in Shop with enough capturable level";
    case 24:
      return "Attempts to capture all monsters of the same color as the target in the AOE";
    case 25:
      return "Priority is given to capturing monsters of the color of the equipped traps";
    case 26:
      return "+" + Util.percent(value) + " Taming Point Gain while this skill is equipped";
    case 27:
      return "+" + Util.percent(value) + " chance to double Capture while this skill is equipped";
    case 28:
      return "+" + Util.percent(value) + " chance to Triple Capture while this skill is equipped";
    default:
      return "";
  }
}
