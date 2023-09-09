export function PetPassiveEffectValue(kind, rank) {
  switch (kind) {
    case "ResourceGain":
      return 0.1 * rank;
    case "PotionEffect":
      return 0.005 * rank;
    case "TamingPointGain":
      return 0.05 * rank;
    case "GoldCap":
      return 0.025 * rank;
    case "GoldGain":
      return 0.025 * rank;
    case "ExpGain":
      return 0.1 * rank;
    case "DoubleMaterialChance":
      return Math.min(0.0005 * rank, 0.1);
    case "GoldGainOnDisassemblePotion":
      return 0.05 * rank;
    case "DisassembleTownMatGain":
      return 0.01 * rank;
    case "TownMatGainFromDungeonReward":
      return 0.01 * rank;
    case "OilOfSlimeDropChance":
      return 0.001 * rank;
    case "EnchantedClothDropChance":
      return 0.001 * rank;
    case "SpiderSilkDropChance":
      return 0.001 * rank;
    case "BatWingDropChance":
      return 0.001 * rank;
    case "FairyDustDropChance":
      return 0.001 * rank;
    case "FoxTailDropChance":
      return 0.001 * rank;
    case "FishScalesDropChance":
      return 0.001 * rank;
    case "CarvedBranchDropChance":
      return 0.001 * rank;
    case "ThickFurDropChance":
      return 0.001 * rank;
    case "UnicornHornDropChance":
      return 0.001 * rank;
    case "EquipProfGain":
      return 0.01 * rank;
    case "MysteriousWaterGain":
      return 0.01 * rank;
    case "ChestPortalOrbChance":
      return Math.min(5e-6 * rank, 0.001);
    case "SkillProfGain":
      return 0.01 * rank;
    case "TownMatGain":
      return 0.01 * rank;
    case "ResearchPowerStone":
      return 0.025 * rank;
    case "ResearchPowerCrystal":
      return 0.025 * rank;
    case "ResearchPowerLeaf":
      return 0.025 * rank;
    case "CatalystCriticalChance":
      return 0.01 * rank;
    case "MysteriousWaterCap":
      return 2 * rank;
    case "BlessingEffect":
      return 0.02 * rank;
    case "LoyaltyPointGain":
      return 0.025 * rank;
    case "PetExpGain":
      return 0.05 * rank;
    case "ExpeditionExpGain":
      return 0.005 * rank;
    case "EssenceConversionRate":
      return 0.005 * rank;
    case "SlimeCoinEfficiency":
      return 0.005 * rank;
    case "SlimeCoinCap":
      return 0.025 * rank;
    case "EquipmentEffect":
      return 0.001 * rank;
    case "AlchemyPointGain":
      return 0.01 * rank;
    default:
      return 0.0;
  }
}
