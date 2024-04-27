export function GradeMilestone(id, text: any = "") {
  switch (id) {
    case 0:
      return "Available Class Skill Slot + " + text;
    case 1:
      return "Available Weapon Equipment Slot + " + text;
    case 2:
      return "Available Armor Equipment Slot + " + text;
    case 3:
      return "Available Jewelry Equipment Slot + " + text;
    case 4:
      return "Available Utility Equipment Slot + " + text;
    case 5:
      return "SD Damage Multiplier + " + text;
    case 6:
      return "SD Damage Cut Multiplier + " + text;
    case 7:
      return "SD Challenge Boss Damage Multiplier + " + text;
    case 8:
      return "SD Challenge Boss Damage Cut Multiplier + " + text;
    case 9:
      return "SD Armored Fury + " + text;
    case 10:
      return "SD Warded Fury + " + text;
    default:
      return text;
  }
}
