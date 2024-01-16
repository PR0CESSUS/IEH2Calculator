import { Localization } from ".";
import { Util } from "../Util";
import { EquipmentEffectKind } from "../type/EquipmentEffectKind";
import { MaterialKind } from "../type/MaterialKind";

export function EquipmentEffect(kind: EquipmentEffectKind, value: number, isLevelMaxEffect: boolean = false, perLevelValue: number = 0.0, isOnlyEffectValue: boolean = false) {
  let str;
  switch (kind) {
    case EquipmentEffectKind.Nothing:
      if (isOnlyEffectValue) return "";
      str = !isLevelMaxEffect ? "[Enchant Available]" : "Enchant Slot + " + Util.tDigit(value);
      break;
    case EquipmentEffectKind.HPAdder:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "HP + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MPAdder:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "MP + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ATKAdder:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "ATK + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MATKAdder:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "MATK + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DEFAdder:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "DEF + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MDEFAdder:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "MDEF + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SPDAdder:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      if (value < 0.0) {
        str = "SPD <span class='red'>" + Util.tDigit(value, 1) + "</span>";
        if (perLevelValue > 0.0) {
          str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
          break;
        }
        break;
      }
      str = "SPD + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.HPMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "HP + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MPMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      if (value < 0.0) {
        str = "MP <span class='red'>" + Util.percent(value) + "</span>";
        if (perLevelValue > 0.0) {
          str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
          break;
        }
        break;
      }
      str = "MP + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ATKMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      if (value < 0.0) {
        str = "ATK <span class='red'>" + Util.percent(value) + "</span>";
        if (perLevelValue > 0.0) {
          str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
          break;
        }
        break;
      }
      str = "ATK + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MATKMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      if (value < 0.0) {
        str = "MATK <span class='red'>" + Util.percent(value) + "</span>";
        if (perLevelValue > 0.0) {
          str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
          break;
        }
        break;
      }
      str = "MATK + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DEFMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      if (value < 0.0) {
        str = "DEF <span class='red'>" + Util.percent(value) + "</span>";
        if (perLevelValue > 0.0) {
          str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
          break;
        }
        break;
      }
      str = "DEF + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MDEFMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      if (value < 0.0) {
        str = "MDEF <span class='red'>" + Util.percent(value) + "</span>";
        if (perLevelValue > 0.0) {
          str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
          break;
        }
        break;
      }
      str = "MDEF + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ATKPropotion:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "ATK + " + Util.percent(value) + " of Hero Level";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MATKPropotion:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "MATK + " + Util.percent(value) + " of Hero Level";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DEFPropotion:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "DEF + " + Util.percent(value) + " of Hero Level";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MDEFPropotion:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "MDEF + " + Util.percent(value) + " of Hero Level";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FireResistance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Fire Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.IceResistance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Ice Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThunderResistance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Thunder Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LightResistance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Light Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DarkResistance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Dark Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PhysicalAbsorption:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Physical Absorption + " + Util.percent(value) + " of received damage";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FireAbsorption:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Fire Absorption + " + Util.percent(value) + " of received damage";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.IceAbsorption:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Ice Absorption + " + Util.percent(value) + " of received damage";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThunderAbsorption:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Thunder Absorption + " + Util.percent(value) + " of received damage";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LightAbsorption:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Light Absorption + " + Util.percent(value) + " of received damage";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DarkAbsorption:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Dark Absorption + " + Util.percent(value) + " of received damage";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DebuffResistance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = value >= 0.0 ? "Debuff Resistance + " + Util.percent(value) : "Debuff Resistance <span class='red'> " + Util.percent(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.EquipmentDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 4);
      str = "Equipment Drop Chance + " + Util.percent(value, 4);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SlimeDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.OilOfSlime) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MagicSlimeDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.EnchantedCloth) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SpiderDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.SpiderSilk) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.BatDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.BatWing) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FairyDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.FairyDust) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FoxDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.FoxTail) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DevilFishDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.FishScales) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TreantDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.CarvedBranch) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FlameTigerDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.ThickFur) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.UnicornDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = Localization.Material(MaterialKind.UnicornHorn) + " Drop Chance (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ColorMaterialDropChance:
      if (isOnlyEffectValue) return Util.percent(value, 4);
      str = "Rare Material Drop Chance (Global) + " + Util.percent(value, 4);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PhysicalCritical:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Physical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MagicalCritical:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Magical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.EXPGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = value >= 0.0 ? "EXP Gain + " + Util.percent(value) : "EXP Gain <span class='red'>" + Util.percent(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SkillProficiency:
      if (isOnlyEffectValue) return Util.percent(value);
      str = value >= 0.0 ? "Skill Proficiency Gain + " + Util.percent(value) : "Skill Proficiency Gain <span class='red'>" + Util.percent(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.EquipmentProficiency:
      if (isOnlyEffectValue) return Util.percent(value);
      str = value >= 0.0 ? "Equipment Proficiency Gain + " + Util.percent(value) : "Equipment Proficiency Gain <span class='red'>" + Util.percent(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MoveSpeedMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      if (value < 0.0) {
        str = "Move Speed <span class='red'>" + Util.percent(value) + "</span>";
        if (perLevelValue > 0.0) {
          str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
          break;
        }
        break;
      }
      str = "Move Speed + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.GoldGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = value >= 0.0 ? "Gold Gain (Global) + " + Util.percent(value) : "Gold Gain (Global) <span class='red'>" + Util.percent(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.StoneGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Stone Gain (Global) + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.CrystalGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Crystal Gain (Global) + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LeafGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Leaf Gain (Global) + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.WarriorSkillLevel:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "Warrior Skill Level (Global) + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.WizardSkillLevel:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "Wizard Skill Level (Global) + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.AngelSkillLevel:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "Angel Skill Level (Global) + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThiefSkillLevel:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "Thief Skill Level (Global) + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ArcherSkillLevel:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "Archer Skill Level (Global) + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TamerSkillLevel:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "Tamer Skill Level (Global) + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.AllSkillLevel:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = value >= 0.0 ? "All Skill Level (Global) + " + Util.tDigit(value, 1) : "All Skill Level (Global) <span class='red'>" + Util.tDigit(value, 1) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SlimeKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Slime + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MagicSlimeKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Magicslime + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SpiderKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Spider + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.BatKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Bat + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FairyKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Fairy + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FoxKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Fox + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DevilFishKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Devilfish + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TreantKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Treant + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FlameTigerKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Flametiger + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.UnicornKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Unicorn + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PhysicalDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Physical Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FireDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Fire Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.IceDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Ice Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThunderDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Thunder Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LightDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Light Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DarkDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Dark Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.HpRegen:
      if (isOnlyEffectValue) return Util.tDigit(value, 2);
      str = "HP Regeneration + " + Util.tDigit(value, 2) + " / sec";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MpRegen:
      if (isOnlyEffectValue) return Util.tDigit(value, 2);
      str = "MP Regeneration + " + Util.tDigit(value, 2) + " / sec";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TamingPoint:
      if (isOnlyEffectValue) return Util.percent(value);
      str = value >= 0.0 ? "Taming Point Gain + " + Util.percent(value) : "Taming Point Gain <span class='red'>" + Util.percent(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.WarriorSkillRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Warrior's Class Skills Range (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.WizardSkillRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Wizard's Class Skills Range (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.AngelSkillRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Angel's Class Skills Range (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThiefSkillRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Thief's Class Skills Range (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ArcherSkillRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Archer's Class Skills Range (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TamerSkillRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Tamer's Class Skills Range (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TownMatGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Town Material Gain + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TownMatAreaClearGain:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "Town Material Gain from Area Clear + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.RebirthPointGain1:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Tier 1 Rebirth Point Gain + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.RebirthPointGain2:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Tier 2 Rebirth Point Gain + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.RebirthPointGain3:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Tier 3 Rebirth Point Gain + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.CriticalDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Critical Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.BlessingEffect:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Blessing Effect + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MoveSpeedAdder:
      if (isOnlyEffectValue) return Util.meter(value);
      str = value >= 0.0 ? "Move Speed + " + Util.meter(value) : "Move Speed <span class='red'>" + Util.meter(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.meter(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PetEXPGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Pet EXP Gain + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LoyaltyPointGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = value >= 0.0 ? "Loyalty Point Gain + " + Util.percent(value) : "Loyalty Point Gain <span class='red'>" + Util.percent(value) + "</span>";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.CatalystDoubleCriticalChance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Catalyst Double Critical Chance (Global) + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.WarriorSkillEffectRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Warrior's Class Skills Area of Effect (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.WizardSkillEffectRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Wizard's Class Skills Area of Effect (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.AngelSkillEffectRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Angel's Class Skills Area of Effect (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThiefSkillEffectRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Thief's Class Skills Area of Effect (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ArcherSkillEffectRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Archer's Class Skills Area of Effect (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TamerSkillEffectRange:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Tamer's Class Skills Area of Effect (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.HpRegenMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "HP Regeneration / sec + " + Util.percent(value, 3) + " of Max HP";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MpRegenMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "MP Regeneration / sec + " + Util.percent(value, 3) + " of Max MP";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ArmoredFury:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Armored Fury + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.WardedFury:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Warded Fury + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PetPhysicalCriticalChance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Pet Physical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PetMagicalCriticalChance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Pet Magical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PetCriticalDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Pet Critical Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PetDebuffResistance:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Pet Debuff Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.StoneTownResearchPower:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Stone Research Power (Global) + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.CrystalTownResearchPower:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Crystal Research Power (Global) + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LeafTownResearchPower:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Leaf Research Power (Global) + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.GuildEXPGain:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Guild EXP Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SPDMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "SPD + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.CriticalDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Critical Damage + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SkillProficiencyMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Skill Proficiency Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.EquipmentProficiencyMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Equipment Proficiency Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.EXPGainMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative EXP Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.GoldGainMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Gold Gain (Global) + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PhysicalDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Physical Damage + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FireDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Fire Damage + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.IceDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Ice Damage + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThunderDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Thunder Damage + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LightDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Light Damage + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DarkDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Dark Damage + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TamingPointMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Taming Point Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PetEXPGainMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Pet EXP Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LoyaltyPointGainMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Loyalty Point Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.BlessingEffectMultiplier:
      if (isOnlyEffectValue) return Util.percent(value, 3);
      str = "Multiplicative Blessing Effect + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PhysicalCriticalMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Multiplicative Physical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MagicalCriticalMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Multiplicative Magical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ChallengeBossKnowledge:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Damage to Challenge Boss + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.HPAfter:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "After HP + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MPAfter:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "After MP + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ATKAfter:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "After ATK + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MATKAfter:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "After MATK + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DEFAfter:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "After DEF + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MDEFAfter:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "After MDEF + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SPDAfter:
      if (isOnlyEffectValue) return Util.tDigit(value, 1);
      str = "After SPD + " + Util.tDigit(value, 1);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.tDigit(perLevelValue, 2) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MoveSpeedAfter:
      if (isOnlyEffectValue) return Util.meter(value);
      str = "After Move Speed + " + Util.meter(value) + " / sec";
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.meter(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PhysicalCriticalAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Physical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MagicalCriticalAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Magical Critical Chance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.CriticalDamageAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Critical Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DebuffResistanceAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Debuff Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.PhysicalDamageAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Physical Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FireDamageAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Fire Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.IceDamageAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Ice Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThunderDamageAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Thunder Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LightDamageAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Light Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DarkDamageAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Dark Damage + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FireResistanceAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Fire Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.IceResistanceAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Ice Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ThunderResistanceAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Thunder Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.LightResistanceAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Light Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DarkResistanceAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Dark Resistance + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SlimeKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Slime + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Magicslime + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SpiderKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Spider + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.BatKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Bat + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FairyKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Fairy + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FoxKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Fox + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DevilFishKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Devilfish + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.TreantKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Treant + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FlameTigerKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Flametiger + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.UnicornKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Unicorn + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "After Damage to Challenge Boss + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SDDamageMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "SD Damage Multiplier + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.SDDamageCutMultiplier:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "SD Damage Cut Multiplier + " + Util.percent(value);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.FameGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Fame Gain + " + Util.percent(value, 3);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 3) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.DungeonCoinGain:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Dungeon Coin Gain + " + Util.percent(value, 4);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    case EquipmentEffectKind.ExtraAfterDamage:
      if (isOnlyEffectValue) return Util.percent(value);
      str = "Extra After Damage + " + Util.percent(value, 4);
      if (perLevelValue > 0.0) {
        str = str + " ( + " + Util.percent(perLevelValue, 4) + " / Lv )";
        break;
      }
      break;
    default:
      if (isOnlyEffectValue) return Util.tDigit(value);
      str = kind + " + " + Util.tDigit(value);
      break;
  }
  return str;
}
