import { Util } from "@/Util";

export function ArcherSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "This skill's Hit Count + 1";
    case 1:
      return "+" + Util.percent(value) + " Physical Damage while this skill is equipped";
    case 2:
      return "Enables a penetrating attack for this skill";
    case 3:
      return "Placeholder";
    case 4:
      return "Shoot multiple arrows that target all the monsters in the field";
    case 5:
      return "+" + Util.percent(value) + " Thunder Damage while this skill is equipped";
    case 6:
      return "+" + Util.percent(value) + " Ice Damage while this skill is equipped";
    case 7:
      return "Strike a penetrating ice arrow at the furthest monster";
    case 8:
      return "+" + Util.percent(value) + " Fire Damage while this skill is equipped";
    case 9:
      return "+" + Util.percent(value) + " Light Damage while this skill is equipped";
    case 10:
      return "+" + Util.percent(value) + " Dark Damage while this skill is equipped";
    case 11:
      return "Shoots an arrow at the center that pulls all monsters on screen toward it";
    case 12:
      return "Circle the edge of the field to move out of melee range of monsters with a movement penalty during Auto Move mode";
    default:
      return "";
  }
}
