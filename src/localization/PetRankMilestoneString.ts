export function PetRankMilestoneString(id, text: any = "") {
  switch (id) {
    case 0:
      return "Taming Point Gain + " + text;
    case 1:
      return "Loyalty Point Gain + " + text;
    case 2:
      return "Pet EXP Gain + " + text;
    case 3:
      return "Pet Stats + " + text;
    case 4:
      return "Pet Passive Effect + " + text;
    case 5:
      return "Double Capture Chance + " + text;
    case 6:
      return "Triple Capture Chance + " + text;
    case 7:
      return "Improves Pet Active Effect of " + text;
    case 8:
      return "Common Material Drop Chance + " + text + " (Multiplicative)";
    case 9:
      return "Rare Material Drop Chance + " + text + " (Multiplicative)";
    case 10:
      return "Active Pet Slot + " + text;
    case 11:
      return "Pets can be summoned and sent on Expeditions simultaneously";
    case 12:
      return "Pets can be summoned by multiple Heroes simultaneously";
    default:
      return "";
  }
}
