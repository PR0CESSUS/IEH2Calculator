import { MonsterPet } from "../Data/Monster/MonsterPet";
import { Util } from "../Util";
import { MaterialKind } from "../type/MaterialKind";
import { PetPassiveEffectKind } from "../type/PetPassiveEffectKind";

export function MonsterPetPassiveEffectString(pet: MonsterPet) {
  switch (pet.passiveEffectKind) {
    case PetPassiveEffectKind.Nothing:
      return "Stay tuned for future updates!";
    case PetPassiveEffectKind.ResourceGain:
      return "Resource Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.PotionEffect:
      return "Potion Effect + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.TamingPointGain:
      return "Taming Point Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.GoldCap:
      return "Multiply Gold Cap by " + Util.percent(1.0 + pet.effectValue);
    case PetPassiveEffectKind.GoldGain:
      return "Gold Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.ExpGain:
      return "EXP Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.DoubleMaterialChance:
      return "Lucky Material Chance for Doubled Material Gain : " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.GoldGainOnDisassemblePotion:
      return "Gold Gain on Disassembling Potions + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.DisassembleTownMatGain:
      return "Town Material Gain on Disassembling Equipment + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.TownMatGainFromDungeonReward:
      return "Town Material Gain from Dungeon Reward + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.OilOfSlimeDropChance:
      return this.Material(MaterialKind.OilOfSlime) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.EnchantedClothDropChance:
      return this.Material(MaterialKind.EnchantedCloth) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.SpiderSilkDropChance:
      return this.Material(MaterialKind.SpiderSilk) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.BatWingDropChance:
      return this.Material(MaterialKind.BatWing) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.FairyDustDropChance:
      return this.Material(MaterialKind.FairyDust) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.FoxTailDropChance:
      return this.Material(MaterialKind.FoxTail) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.FishScalesDropChance:
      return this.Material(MaterialKind.FishScales) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.CarvedBranchDropChance:
      return this.Material(MaterialKind.CarvedBranch) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.ThickFurDropChance:
      return this.Material(MaterialKind.ThickFur) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.UnicornHornDropChance:
      return this.Material(MaterialKind.UnicornHorn) + " Drop Chance + " + Util.percent(pet.effectValue, 3);
    case PetPassiveEffectKind.EquipProfGain:
      return "Equipment Proficiency Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.MysteriousWaterGain:
      return "Mysterious Water Gain + " + Util.tDigit(pet.effectValue, 3) + " / sec ";
    case PetPassiveEffectKind.ChestPortalOrbChance:
      return "Finding Portal Orb from Chest Chance : " + Util.percent(pet.effectValue, 4);
    case PetPassiveEffectKind.SkillProfGain:
      return "Skill Proficiency Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.TownMatGain:
      return "Multiply Town Material Gain by " + Util.percent(1.0 + pet.effectValue);
    case PetPassiveEffectKind.ResearchPowerStone:
      return "Stone Research Power + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.ResearchPowerCrystal:
      return "Crystal Research Power + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.ResearchPowerLeaf:
      return "Leaf Research Power + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.CatalystCriticalChance:
      return "Multiplies Critical Chance of Catalyst by " + Util.percent(1.0 + pet.effectValue);
    case PetPassiveEffectKind.MysteriousWaterCap:
      return "Max Mysterious Water Cap + " + Util.tDigit(pet.effectValue);
    case PetPassiveEffectKind.BlessingEffect:
      return "Blessing Effect + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.LoyaltyPointGain:
      return "Loyalty Point Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.PetExpGain:
      return "Pet EXP Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.ExpeditionExpGain:
      return "Expedition EXP Gain + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.EssenceConversionRate:
      return "Essence Conversion Rate + " + Util.percent(pet.effectValue);
    case PetPassiveEffectKind.SlimeCoinEfficiency:
      return "Multiplies Slime Coin Gain by " + Util.percent(1.0 + pet.effectValue);
    case PetPassiveEffectKind.SlimeCoinCap:
      return "Multiplies Slime Coin Cap by " + Util.percent(1.0 + pet.effectValue);
    case PetPassiveEffectKind.EquipmentEffect:
      return "Multiplies Equipment Effect by " + Util.percent(1.0 + pet.effectValue);
    case PetPassiveEffectKind.AlchemyPointGain:
      return "Alchemy Point Gain + " + Util.percent(pet.effectValue);
    default:
      return "";
  }
}
