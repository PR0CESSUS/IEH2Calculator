import { Util } from "@/Util";

export function AchievementString(id, value = 0.0, valueString: number | string = "") {
  switch (id) {
    case 0:
      return "Complete all the tutorial quests";
    case 1:
      return "Unlock Wizard";
    case 2:
      return "Unlock Angel";
    case 3:
      return "Unlock Thief";
    case 4:
      return "Unlock Archer";
    case 5:
      return "Unlock Tamer";
    case 6:
      return "Consume " + Util.tDigit(value) + " nitro in total";
    case 7:
      return "Capture " + Util.tDigit(value) + " monsters in total";
    case 8:
      return "Open " + Util.tDigit(value) + " Treasure Chest(s)";
    case 9:
      return "Defeat " + Util.tDigit(value) + " Mimic(s)";
    case 10:
      return "Vanquish " + Util.tDigit(value) + " swarm(s)";
    case 11:
      return "Walk around the earth [" + valueString + " meters]";
    case 12:
      return "Walk around the earth twice [" + valueString + " meters]";
    case 13:
      return "Walk around the earth 3 times [" + valueString + " meters]";
    case 14:
      return "Walk around the earth 5 times [" + valueString + " meters]";
    case 15:
      return "Walk to the moon [" + valueString + " meters]";
    case 16:
      return "Walk to the moon and back [" + valueString + " meters]";
    case 17:
      return "Walk to the sun [" + valueString + " meters]";
    case 18:
      return "Spend " + Util.tDigit(value) + " Epic Coin";
    case 19:
      return "Unlock " + valueString;
    case 20:
      return "Gain all " + valueString + " Set Unique Equipment";
    case 21:
      return "Gain " + valueString + " Gold in total";
    case 22:
      return "Gain " + valueString + " Stone in total";
    case 23:
      return "Gain " + valueString + " Crystal in total";
    case 24:
      return "Gain " + valueString + " Leaf in total";
    case 25:
      return "Reach Guild Level " + Util.tDigit(value);
    case 26:
      return "Clear Raid Boss Battle [" + valueString + "]";
    case 27:
      return "Reach total Potion level " + Util.tDigit(value);
    case 28:
      return "Gain " + valueString + " Alchemy Points in total";
    case 29:
      return "Gain " + Util.tDigit(value) + " Equipment in total";
    case 30:
      return "Have " + Util.tDigit(value) + " Weapon Equipment Slot of " + valueString;
    case 31:
      return "Have " + Util.tDigit(value) + " Armor Equipment Slot of " + valueString;
    case 32:
      return "Have " + Util.tDigit(value) + " Jewelry Equipment Slot of " + valueString;
    case 33:
      return "Have " + Util.tDigit(value) + " Utility Equipment Slot of " + valueString;
    case 34:
      return "Have " + Util.tDigit(value) + " Class Skill Slot of " + valueString;
    case 35:
      return "Have 8 Global Class Skill Slot";
    case 36:
      return "Perform Tier " + Util.tDigit(value) + " Rebirth of " + valueString;
    case 37:
      return "Perform Tier " + Util.tDigit(value) + " World Ascension";
    case 38:
      return "Play IEH2 for " + Util.tDigit(value) + " day(s) playtime";
    case 39:
      return "Play IEH2 for " + Util.tDigit(value) + " week(s) playtime";
    case 40:
      return "Play IEH2 for " + Util.tDigit(value) + " month(s) playtime";
    case 41:
      return "Play IEH2 for " + Util.tDigit(value) + " year(s) playtime";
    case 42:
      return "Walk to the sirius [8.6 light years]";
    case 43:
      return "Walk to the edge of the universe [13.8 Bill light years]";
    case 44:
      return "Total Skill Trigger #" + Util.tDigit(value);
    case 45:
      return "TOTAL CLEARED # ";
    case 46:
      return "Total Clear Bonus : Gold Gain ";
    case 47:
      return " ( + 1% / clear )";
    case 48:
      return "Achievements";
    default:
      return "";
  }
}
