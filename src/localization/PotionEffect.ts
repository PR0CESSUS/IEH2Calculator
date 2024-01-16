import { PotionKind } from "../type/PotionKind";
import { Util } from "../Util/";

export function PotionEffect(kind: PotionKind, effectValue: number, isPassive: boolean = false) {
  switch (kind) {
    case PotionKind.MinorHealthPotion:
      return "Restores HP + " + Util.tDigit(effectValue) + "</color>";
    case PotionKind.MinorRegenerationPoultice:
      return "HP Regenerate + " + Util.tDigit(effectValue, 2) + " / sec" + "</color>";
    case PotionKind.MinorResourcePoultice:
      return "Resource Gain (Global) + " + Util.percent(effectValue) + "</color>";
    case PotionKind.SlickShoeSolution:
      return "Move Speed + " + Util.percent(effectValue) + "</color>";
    case PotionKind.MinorManaRegenerationPoultice:
      return "MP Regenerate + " + Util.tDigit(effectValue, 2) + " / sec" + "</color>";
    case PotionKind.MaterialMultiplierMist:
      return "Increases dropped amount of materials by " + Util.tDigit(effectValue) + "</color>";
    case PotionKind.BasicElixirOfBrawn:
      return "Physical Damage + " + Util.percent(effectValue) + "</color>";
    case PotionKind.BasicElixirOfBrains:
      return "Magical Damage + " + Util.percent(effectValue) + "</color>";
    case PotionKind.BasicElixirOfFortitude:
      return "HP + " + Util.tDigit(effectValue) + "</color>";
    case PotionKind.BasicElixirOfConcentration:
      return "MP + " + Util.tDigit(effectValue) + "</color>";
    case PotionKind.BasicElixirOfUnderstanding:
      return "Skill Proficiency Gain + " + Util.percent(effectValue) + "</color>";
    case PotionKind.ChilledHealthPotion:
      return "Restores HP + " + Util.tDigit(effectValue) + "</color>";
    case PotionKind.ChilledRegenerationPoultice:
      return "HP Regenerate + " + Util.tDigit(effectValue, 2) + " / sec" + "</color>";
    case PotionKind.FrostyDefensePotion:
      return "Ice Resistance + " + Util.percent(effectValue) + "</color>";
    case PotionKind.IcyAuraDraught:
      return "Generates an aura of cold around hero that has " + Util.percent(effectValue) + "</color> chance every second to give monsters SPD Down" + " debuff";
    case PotionKind.SlightlyStickySalve:
      return "Gold Gain (Global) + " + Util.percent(effectValue) + "</color>";
    case PotionKind.SlickerShoeSolution:
      return "Move Speed + " + Util.percent(effectValue) + "</color>";
    case PotionKind.CoolHeadOintment:
      return "EXP Gain + " + Util.percent(effectValue) + "</color>";
    case PotionKind.FrostySlayersOil:
      return "Changes skills' damage type to Ice and adds extra " + Util.percent(effectValue) + "</color> ice damage";
    case PotionKind.BurningDefensePotion:
      return "Fire Resistance + " + Util.percent(effectValue) + "</color>";
    case PotionKind.BlazingAuraDraught:
      return "Generates an aura of fire around hero that has " + Util.percent(effectValue) + "</color> chance every second to knockback monsters";
    case PotionKind.FierySlayersOil:
      return "Changes skills' damage type to Fire and adds extra " + Util.percent(effectValue) + "</color> fire damage";
    case PotionKind.ElectricDefensePotion:
      return "Thunder Resistance + " + Util.percent(effectValue) + "</color>";
    case PotionKind.WhirlingAuraDraught:
      return "Generates an aura of thunder around hero that has " + Util.percent(effectValue) + "</color> chance every second to give monsters Electric" + " debuff";
    case PotionKind.ShockingSlayersOil:
      return "Changes skills' damage type to Thunder and adds extra " + Util.percent(effectValue) + "</color> thunder damage";
    case PotionKind.ThrowingNet:
      return "Right-click to capture <color=green>Normal Type</color> monsters";
    case PotionKind.IceRope:
      return "Right-click to capture <color=green>Blue Type</color> monsters";
    case PotionKind.ThunderRope:
      return "Right-click to capture <color=green>Yellow Type</color> monsters";
    case PotionKind.FireRope:
      return "Right-click to capture <color=green>Red Type</color> monsters";
    case PotionKind.LightRope:
      return "Right-click to capture <color=green>Green Type</color> monsters";
    case PotionKind.DarkRope:
      return "Right-click to capture <color=green>Purple Type</color> monsters";
    case PotionKind.GuildMembersEmblem:
      return isPassive ? "Reduces Guild EXP requirement to level by " + Util.percent(effectValue) : "Multiplies Guild EXP Gain by " + Util.percent(1.0 + effectValue);
    case PotionKind.CertificateOfCompetence:
      return isPassive ? "Multiplies Skill Proficiency Gain by " + Util.percent(1.0 + effectValue) : "Reduces Skill's Cast Time by " + Util.percent(effectValue);
    case PotionKind.MasonsTrowel:
      return isPassive ? "Increases Town Building's level effect by " + Util.percent(effectValue) : "Increases Town Material Gain by " + Util.percent(effectValue);
    case PotionKind.EnchantedAlembic:
      return isPassive ? "Mysterious Water Gain + " + Util.tDigit(effectValue) + " / sec" : "Potion Effect (Global) + " + Util.percent(effectValue);
    case PotionKind.TrackersMap:
      return isPassive
        ? "Epic Swarm Chance + " + Util.percent(effectValue) + " instead of Large Swarm"
        : "Increases Area Clear # and Clear Reward by " + Util.tDigit(effectValue, 1);
    case PotionKind.BerserkersStone:
      return isPassive ? "Equipment Effect + " + Util.percent(effectValue) : "Multiplicative Damage to Challenge Boss by " + Util.percent(effectValue);
    case PotionKind.TrappersTag:
      return isPassive ? "Multiplies Taming Point Gain by " + Util.percent(1.0 + effectValue) : "Triple Capture Chance + " + Util.percent(effectValue);
    case PotionKind.FlorzporbDoll:
      return isPassive
        ? "Multiplies Gold Gain by " + Util.percent(1.0 + effectValue)
        : "Gives additional Slime Ball attack to Base Attack Skill with " + Util.percent(effectValue) + " damage";
    case PotionKind.ArachnettaDoll:
      return isPassive ? "Gold Cap + " + Util.percent(effectValue) : "Gives Poison debuff to Base Attack Skill with " + Util.percent(Math.min(1.0, effectValue)) + " chance";
    case PotionKind.GuardianKorDoll:
      return isPassive
        ? "Multiplies Equipment Proficiency Gain by " + Util.percent(1.0 + effectValue)
        : "If damage taken " + Util.percent(Math.min(0.25, effectValue)) + " or less of HP, nullifies it (Max:25%)";
    case PotionKind.SlimeBadge:
      return isPassive ? "HP + " + Util.tDigit(effectValue, 1) : "HP + " + Util.percent(effectValue);
    case PotionKind.MagicslimeBadge:
      return isPassive ? "MDEF + " + Util.tDigit(effectValue, 1) : "MDEF + " + Util.percent(effectValue);
    case PotionKind.SpiderBadge:
      return isPassive ? "DEF + " + Util.tDigit(effectValue, 1) : "DEF + " + Util.percent(effectValue);
    case PotionKind.BatBadge:
      return isPassive ? "ATK + " + Util.tDigit(effectValue, 1) : "ATK + " + Util.percent(effectValue);
    case PotionKind.FairyBadge:
      return isPassive ? "MATK + " + Util.tDigit(effectValue, 1) : "MATK + " + Util.percent(effectValue);
    case PotionKind.FoxBadge:
      return isPassive ? "MP + " + Util.tDigit(effectValue, 1) : "MP + " + Util.percent(effectValue);
    case PotionKind.DevilfishBadge:
      return isPassive ? "Stone Gain + " + Util.percent(effectValue) : "Move Speed + " + Util.percent(effectValue);
    case PotionKind.TreantBadge:
      return isPassive ? "Crystal Gain + " + Util.percent(effectValue) : "EXP Gain + " + Util.percent(effectValue);
    case PotionKind.FlametigerBadge:
      return isPassive ? "Leaf Gain + " + Util.percent(effectValue) : "Equipment Proficiency Gain + " + Util.percent(effectValue);
    case PotionKind.UnicornBadge:
      return isPassive ? "SPD + " + Util.tDigit(effectValue, 1) : "SPD + " + Util.percent(effectValue);
    case PotionKind.AscendedFromIEH1:
      return isPassive ? "Nothing" : "Multiplies EXP Gain by " + Util.percent(1.0 + effectValue);
    case PotionKind.WarriorsBadge:
      return isPassive ? "Reduces Warrior's Skill Rank Cost by " + Util.percent(effectValue) : "Multiplies Physical Critical Chance by " + Util.percent(1.0 + effectValue);
    case PotionKind.WizardsBadge:
      return isPassive ? "Reduces Wizard's Skill Rank Cost by " + Util.percent(effectValue) : "Multiplies Magical Critical Chance by " + Util.percent(1.0 + effectValue);
    case PotionKind.AngelsBadge:
      return isPassive ? "Reduces Angel's Skill Rank Cost by " + Util.percent(effectValue) : "Multiplies Skill Proficiency Gain by " + Util.percent(1.0 + effectValue);
    case PotionKind.ThiefsBadge:
      return isPassive ? "Reduces Thief's Skill Rank Cost by " + Util.percent(effectValue) : "Multiplies Equipment Drop Chance by " + Util.percent(1.0 + effectValue);
    case PotionKind.ArchersBadge:
      return isPassive ? "Reduces Archer's Skill Rank Cost by " + Util.percent(effectValue) : "Multiplies Critical Damage by " + Util.percent(1.0 + effectValue);
    case PotionKind.TamersBadge:
      return isPassive ? "Reduces Tamer's Skill Rank Cost by " + Util.percent(effectValue) : "Multiplies Pet EXP Gain by " + Util.percent(1.0 + effectValue);
    case PotionKind.NostroDoll:
      return isPassive ? "Physical Absorption + " + Util.percent(effectValue) : "Increase MP Regeneration / sec by " + Util.percent(effectValue) + " of Max MP";
    case PotionKind.LadyEmeldaDoll:
      return isPassive
        ? "Magical Absorption + " + Util.percent(effectValue)
        : "Damage-Type Skill's damage + " + Util.percent(effectValue) + " along with its MP Consumption increasing + " + Util.percent(4.0 * effectValue);
    case PotionKind.NariSuneDoll:
      return isPassive ? "Large Swarm Chance + " + Util.percent(effectValue) + " instead of Regular Swarm" : "Skill's Range + " + Util.percent(effectValue);
    case PotionKind.OctobaddieDoll:
      return isPassive ? "Slime Coin Gain + " + Util.percent(effectValue) : "Skill's Area of Effect + " + Util.percent(effectValue);
    case PotionKind.AncientSlimeBadge:
      return isPassive ? "After Damage to Slime + " + Util.percent(effectValue) : "Multiplicative Damage to Slime + " + Util.percent(effectValue);
    case PotionKind.AncientMagicslimeBadge:
      return isPassive ? "After Damage to Magicslime + " + Util.percent(effectValue) : "Multiplicative Damage to Magicslime + " + Util.percent(effectValue);
    case PotionKind.AncientSpiderBadge:
      return isPassive ? "After Damage to Spider + " + Util.percent(effectValue) : "Multiplicative Damage to Spider + " + Util.percent(effectValue);
    case PotionKind.AncientBatBadge:
      return isPassive ? "After Damage to Bat + " + Util.percent(effectValue) : "Multiplicative Damage to Bat + " + Util.percent(effectValue);
    case PotionKind.AncientFairyBadge:
      return isPassive ? "After Damage to Fairy + " + Util.percent(effectValue) : "Multiplicative Damage to Fairy + " + Util.percent(effectValue);
    case PotionKind.AncientFoxBadge:
      return isPassive ? "After Damage to Fox + " + Util.percent(effectValue) : "Multiplicative Damage to Fox + " + Util.percent(effectValue);
    case PotionKind.AncientDevilfishBadge:
      return isPassive ? "After Damage to Devilfish + " + Util.percent(effectValue) : "Multiplicative Damage to Devilfish + " + Util.percent(effectValue);
    case PotionKind.AncientTreantBadge:
      return isPassive ? "After Damage to Treant + " + Util.percent(effectValue) : "Multiplicative Damage to Treant + " + Util.percent(effectValue);
    case PotionKind.AncientFlametigerBadge:
      return isPassive ? "After Damage to Flametiger + " + Util.percent(effectValue) : "Multiplicative Damage to Flametiger + " + Util.percent(effectValue);
    case PotionKind.AncientUnicornBadge:
      return isPassive ? "After Damage to Unicorn + " + Util.percent(effectValue) : "Multiplicative Damage to Unicorn + " + Util.percent(effectValue);
    case PotionKind.AncientWarriorsBadge:
      return isPassive ? "SD Damage Multiplier + " + Util.percent(effectValue) : "Multiplies Physical Damage by " + Util.percent(1.0 + effectValue);
    case PotionKind.AncientWizardsBadge:
      return isPassive ? "SD Challenge Boss Damage Multiplier " + Util.percent(effectValue) : "Multiplies Magical Damage by " + Util.percent(1.0 + effectValue);
    case PotionKind.AncientAngelsBadge:
      return isPassive ? "SD Damage Cut Multiplier + " + Util.percent(effectValue) : "Multiplies Equipment Proficiency Gain by " + Util.percent(1.0 + effectValue);
    case PotionKind.AncientThiefsBadge:
      return isPassive ? "SD Armored Fury + " + Util.percent(effectValue) : "Multiplies Armored Fury by " + Util.percent(1.0 + effectValue);
    case PotionKind.AncientArchersBadge:
      return isPassive ? "SD Warded Fury + " + Util.percent(effectValue) : "Multiplies Warded Fury by " + Util.percent(1.0 + effectValue);
    case PotionKind.AncientTamersBadge:
      return isPassive ? "Dungeon Coin Gain + " + Util.percent(effectValue) : "Multiplies Taming Point Gain by " + Util.percent(1.0 + effectValue);
    default:
      return "Nothing";
  }
}
