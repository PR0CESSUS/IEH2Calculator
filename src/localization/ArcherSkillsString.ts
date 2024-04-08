import { Util } from "@/Util";

export function ArcherSkillsString(id, value = 0.0) {
  switch (id) {
    case 0:
      return "Hit Count +1 for this Skill";
    case 1:
      return "Physical Damage +" + Util.percent(value) + " while this Skill is equipped";
    case 2:
      return "Enables piercing of Enemies for this Skill";
    case 3:
      return "Placeholder";
    case 4:
      return "Shoot multiple Arrows that target all the Monsters in the field";
    case 5:
      return "Thunder Damage +" + Util.percent(value) + " while this Skill is equipped";
    case 6:
      return "Ice Damage +" + Util.percent(value) + " while this Skill is equipped";
    case 7:
      return "Strike a piercing Ice Arrow at the furthest Monster";
    case 8:
      return "Fire Damage +" + Util.percent(value) + " while this Skill is equipped";
    case 9:
      return "Light Damage +" + Util.percent(value) + " while this Skill is equipped";
    case 10:
      return "Dark Damage +" + Util.percent(value) + " while this Skill is equipped";
    case 11:
      return "Shoots an Arrow at the center that pulls all Monsters on the field toward it";
    case 12:
      return "Circle the edge of the field to move out of melee range of Monsters with a Move Speed modifier during Auto Move mode";
    default:
      return "";
  }
}
