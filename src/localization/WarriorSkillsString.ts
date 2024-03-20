export function WarriorSkillsString(id) {
  switch (id) {
    case 0:
      return "This skill's Hit Count + 1";
    case 1:
      return "This skill's MP Consumption -50%";
    case 2:
      return "This skill's Area of Effect + ";
    case 3:
      return "This skill's Cast Time -50%";
    case 4:
      return "Remove this skill's MP Consumption";
    case 5:
      return "This skill's Range + ";
    case 6:
      return "This skill's Cast Time -25%";
    case 7:
      return "Placeholder";
    case 8:
      return "This skill's damage + 50% per dash meter";
    case 9:
      return "Makes a running dash toward the target monster to attack.";
    case 10:
      return "This skill's cast time starts at full on area start";
    default:
      return "";
  }
}
