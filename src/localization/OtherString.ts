export function OtherString(id, text = "") {
  switch (id) {
    case 0:
      return text + " hour(s)";
    case 1:
      return "<size=24>BONUS CODE</size>\nPlease enter the bonus code here.";
    case 2:
      return "You cannot equip the same Talisman.";
    case 3:
      return "You cannot equip the same Trap.";
    case 4:
      return "You cannot equip the same type.";
    case 5:
      return "Tier " + text;
    case 6:
      return "Non-" + text;
    case 7:
      return "Total Realtime Played";
    case 8:
      return "Total Time Played";
    case 9:
      return "Quit Background Mode";
    case 10:
      return "Start " + text;
    case 11:
      return "Sold Out";
    case 12:
      return text + " Drop Chance";
    case 13:
      return "Switching to " + text;
    case 14:
      return "Current Progress";
    case 15:
      return "Select order";
    case 16:
      return "Apply";
    case 17:
      return "Skill Cast Speed";
    case 18:
      return "Input a name for " + text;
    case 19:
      return text + " while this skill is equipped";
    case 20:
      return "Poison Damage";
    case 21:
      return "Skill Level Milestone [" + text + "]";
    case 22:
      return "Total highest Skill levels reached";
    case 23:
      return "Damage-type skill's damage : <color=green>" + text + "x</color> ( 2x per Lv 100 )";
    case 24:
      return "2x per Lv 50";
    case 25:
      return "Artifact Gain Chance";
    case 26:
      return "SD Enchant Gain Chance";
    case 27:
      return "Right click to select this hero to swap current equipment from.";
    case 28:
      return "Right click to swap " + text + "'s current equipment for this hero's current equipment.";
    default:
      return text;
  }
}
