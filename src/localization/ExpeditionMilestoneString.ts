export function ExpeditionMilestoneString(id, text: any = "") {
  switch (id) {
    case 0:
      return "Unlocks 1 Expedition Team";
    case 1:
      return "Expedition Milestone Lv 10";
    case 2:
      return "Unlocks a new Distant Expedition";
    case 3:
      return "Unlocks 1 Expedition Team";
    case 4:
      return "Expedition Milestone Lv 20";
    case 5:
      return "Unlocks a new Distant Expedition";
    case 6:
      return "Unlocks 1 Expedition Team";
    case 7:
      return "Expedition Milestone Lv 50";
    case 8:
      return "Unlocks a new Distant Expedition";
    case 9:
      return "Expedition Milestone Lv 75";
    case 10:
      return "Unlocks a new Distant Expedition";
    case 11:
      return "Expedition Pets persist on WA (only 1st slot until WA1 Accomp #65)";
    case 12:
      return "Expedition progress persists on WA (requires WA1 Accomp #65)";
    case 13:
      return "Expedition Passive Effect + 25%";
    case 14:
      return "Expedition Speed + 25%";
    case 15:
      return "Expedition [Field Training] Passive Effect + " + text;
    case 16:
      return "Expedition EXP Gain + " + text;
    case 17:
      return "Expedition Reward + " + text;
    case 18:
      return "Expedition Passive Effect + " + text;
    case 19:
      return "Expedition Speed + " + text;
    case 20:
      return "Pet Stats + " + text;
    case 21:
      return "Gold Cap + " + text;
    default:
      return "";
  }
}
