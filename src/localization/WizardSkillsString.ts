export function WizardSkillsString(id) {
  switch (id) {
    case 0:
      return "This skill's Area of Effect + ";
    case 1:
      return "This skill's Hit Count + 1";
    case 2:
      return "This skill's Area of Effect + ";
    case 3:
      return "This skill's MP Consumption -50%";
    case 4:
      return "This skill's MP Gain + 100%";
    case 5:
      return "This skill's Cast Time -50%";
    case 6:
      return "Placeholder";
    default:
      return "";
  }
}
