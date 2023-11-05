import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Stats } from "../../type/Stats";

export class DataMission {
  constructor() {
    // console.log(this.clearNum);
  }

  Start() {
    if (this.clearNum > 5) globalThis.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.2));
    if (this.clearNum > 10) globalThis.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.1));
    if (this.clearNum > 15) globalThis.data.town.SetEffectTownMatGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 20) globalThis.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    if (this.clearNum > 25) globalThis.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.3));
    if (this.clearNum > 30) globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));
    if (this.clearNum > 35) globalThis.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.2));
    if (this.clearNum > 40) globalThis.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));
    if (this.clearNum > 45) globalThis.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    if (this.clearNum > 50) globalThis.data.town.SetEffectTownMatGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 60) globalThis.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 70) globalThis.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));
    if (this.clearNum > 80) globalThis.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 90) globalThis.data.monster.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));

    if (this.clearNum > 120) globalThis.data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 140) globalThis.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 160) globalThis.data.expedition.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.25));
    if (this.clearNum > 180) globalThis.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 10.0));
    // if (this.clearNum > 200) globalThis.data.upgrade.costReductionFromMissionMilestone.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.25));
    // if (this.clearNum > 225) globalThis.data.inventory.enchantUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    // if (this.clearNum > 250) globalThis.data.equipment.loadoutUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 1.0));
    if (this.clearNum > 275) globalThis.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 300) globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 325) globalThis.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 350) globalThis.data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.25));
    // if (this.clearNum > 375) globalThis.data.inventory.enchantUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    if (this.clearNum > 400) globalThis.data.blessingInfo.SetEffectMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    // if (this.clearNum > 425) globalThis.data.monster.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 5.0));
    // if (this.clearNum > 450) globalThis.data.catalyst.catalystLevelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 25.0));
    if (this.clearNum > 475) globalThis.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 500.0));
    // if (this.clearNum > 500) globalThis.data.skill.loadoutUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 1.0));
    if (this.clearNum > 550) globalThis.data.town.SetEffectLevelBonusForAllBuilding(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    // if (this.clearNum > 600) globalThis.data.upgrade.resourceGainTierFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.05));
    if (this.clearNum > 650) globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 5.0));
    // if (this.clearNum > 700) globalThis.data.upgrade.resourceCostIncrementPerLevelReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.1));
    if (this.clearNum > 750) globalThis.data.monster.loyaltyCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 100.0));

    // if (this.clearNum > 850) globalThis.data.monster.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 5.0));
    if (this.clearNum > 900) globalThis.data.monster.petRankCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 50.0));
    // if (this.clearNum > 950) globalThis.data.upgrade.costReductionFromMissionMilestone.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));

    // if (this.clearNum > 1250) globalThis.data.nitro.maxNitroSpeed.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 1300) globalThis.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 2.5));
    if (this.clearNum > 1350) globalThis.data.town.SetEffectLevelBonusForAllBuilding(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));

    if (this.clearNum > 1450) globalThis.data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.25));
    // if (this.clearNum > 1500) globalThis.data.upgrade.resourceCostIncrementPerLevelReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.1));
    if (this.clearNum > 1550) globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 7.5));
    if (this.clearNum > 1600) globalThis.data.alchemy.catalyst.essenceProductionDiminishing.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => -0.3));
    if (this.clearNum > 1650) globalThis.data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 1700) globalThis.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    // if (this.clearNum > 1750) globalThis.data.nitro.maxNitroSpeed.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 1800) globalThis.data.resource.slimeCoinInterest.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.025));
    // if (this.clearNum > 1850) globalThis.data.sdg.lootGainOnDie.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.25));
    if (this.clearNum > 1900) globalThis.data.area.swarmScoreMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.2));

    if (this.clearNum > 2100) globalThis.data.monster.loyaltyCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 100.0));
    if (this.clearNum > 2300) globalThis.data.town.SetEffectLevelBonusForAllBuilding(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));

    if (this.clearNum > 2600) globalThis.data.alchemy.catalyst.essenceProductionDiminishing.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => -0.2));
    if (this.clearNum > 2700) globalThis.data.resource.slimeCoinInterest.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.05));
    if (this.clearNum > 2900) globalThis.data.area.swarmScoreMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.3));
  }

  get clearNum() {
    return globalThis.data.area.TotalClearedMissionNum();
  }
}
