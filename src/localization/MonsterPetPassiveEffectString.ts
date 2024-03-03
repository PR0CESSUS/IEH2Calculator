import { MonsterPet } from "../Data/Monster/MonsterPet";
import { Util } from "../Util";
import { MaterialKind } from "../type/MaterialKind";
import { PetPassiveEffectKind } from "../type/PetPassiveEffectKind";

export function MonsterPetPassiveEffectString(pet: MonsterPet) {
  switch (pet.passiveEffectKind) {
    case PetPassiveEffectKind.Nothing:
      return "Stay tuned for future updates!";
    case PetPassiveEffectKind.ResourceGain:
      return "Resource Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.PotionEffect:
      return "Potion Effect + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue, 3) + " / Rank )";
    case PetPassiveEffectKind.TamingPointGain:
      return "Taming Point Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.GoldCap:
      return "Multiply Gold Cap by " + Util.percent(1.0 + pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue, 3) + " / Rank )";
    case PetPassiveEffectKind.GoldGain:
      return "Gold Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue, 3) + " / Rank )";
    case PetPassiveEffectKind.ExpGain:
      return "EXP Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.DoubleMaterialChance:
      return "Lucky Material Chance for Doubled Material Gain : " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.GoldGainOnDisassemblePotion:
      return "Gold Gain on Disassembling Potions + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.DisassembleTownMatGain:
      return "Town Material Gain on Disassembling Equipment + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.TownMatGainFromDungeonReward:
      return "Town Material Gain from Dungeon Reward + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.OilOfSlimeDropChance:
      return this.Material(MaterialKind.OilOfSlime) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.EnchantedClothDropChance:
      return this.Material(MaterialKind.EnchantedCloth) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.SpiderSilkDropChance:
      return this.Material(MaterialKind.SpiderSilk) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.BatWingDropChance:
      return this.Material(MaterialKind.BatWing) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.FairyDustDropChance:
      return this.Material(MaterialKind.FairyDust) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.FoxTailDropChance:
      return this.Material(MaterialKind.FoxTail) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.FishScalesDropChance:
      return this.Material(MaterialKind.FishScales) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.CarvedBranchDropChance:
      return this.Material(MaterialKind.CarvedBranch) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.ThickFurDropChance:
      return this.Material(MaterialKind.ThickFur) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.UnicornHornDropChance:
      return this.Material(MaterialKind.UnicornHorn) + " Drop Chance + " + Util.percent(pet.effectValue, 3) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.EquipProfGain:
      return "Equipment Proficiency Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.MysteriousWaterGain:
      return "Mysterious Water Gain + " + Util.tDigit(pet.effectValue, 3) + " / sec ( + " + Util.tDigit(pet.effectIncrementValue, 3) + " / Rank )";
    case PetPassiveEffectKind.ChestPortalOrbChance:
      return "Finding Portal Orb from Chest Chance : " + Util.percent(pet.effectValue, 4) + " ( + " + Util.percent(pet.effectIncrementValue, 4) + " / Rank )";
    case PetPassiveEffectKind.SkillProfGain:
      return "Skill Proficiency Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.TownMatGain:
      return "Multiply Town Material Gain by " + Util.percent(1.0 + pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.ResearchPowerStone:
      return "Stone Research Power + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue, 3) + " / Rank )";
    case PetPassiveEffectKind.ResearchPowerCrystal:
      return "Crystal Research Power + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue, 3) + " / Rank )";
    case PetPassiveEffectKind.ResearchPowerLeaf:
      return "Leaf Research Power + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue, 3) + " / Rank )";
    case PetPassiveEffectKind.CatalystCriticalChance:
      return "Multiplies Critical Chance of Catalyst by " + Util.percent(1.0 + pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.MysteriousWaterCap:
      return "Max Mysterious Water Cap + " + Util.tDigit(pet.effectValue) + " ( + " + Util.tDigit(pet.effectIncrementValue, 2) + " / Rank )";
    case PetPassiveEffectKind.BlessingEffect:
      return "Blessing Effect + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.LoyaltyPointGain:
      return "Loyalty Point Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.PetExpGain:
      return "Pet EXP Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.ExpeditionExpGain:
      return "Expedition EXP Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.EssenceConversionRate:
      return "Essence Conversion Rate + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.SlimeCoinEfficiency:
      return "Multiplies Slime Coin Gain by " + Util.percent(1.0 + pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.SlimeCoinCap:
      return "Multiplies Slime Coin Cap by " + Util.percent(1.0 + pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.EquipmentEffect:
      return "Multiplies Equipment Effect by " + Util.percent(1.0 + pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    case PetPassiveEffectKind.AlchemyPointGain:
      return "Alchemy Point Gain + " + Util.percent(pet.effectValue) + " ( + " + Util.percent(pet.effectIncrementValue) + " / Rank )";
    default:
      return "";
  }
}
