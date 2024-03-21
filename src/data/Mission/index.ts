import { DATA } from "..";
import { MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Stats } from "../../type/Stats";

export class DataMission {
  data: DATA;
  constructor(DATA: DATA) {
    this.data = DATA;
    // console.log(this.clearNum);
  }

  Start() {
    if (this.clearNum > 5) this.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.2));
    if (this.clearNum > 10) this.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.1));
    if (this.clearNum > 15) this.data.town.SetEffectTownMatGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 20) this.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    if (this.clearNum > 25) this.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.3));
    if (this.clearNum > 30) this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));
    if (this.clearNum > 35) this.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.2));
    if (this.clearNum > 40)
      this.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));
    if (this.clearNum > 45) this.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    if (this.clearNum > 50) this.data.town.SetEffectTownMatGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 60) this.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 70) this.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));
    if (this.clearNum > 80) this.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));
    if (this.clearNum > 90) this.data.monster.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.5));

    if (this.clearNum > 120) this.data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 140) this.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 160) this.data.expedition.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.25));
    if (this.clearNum > 180) this.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 10.0));
    // if (this.clearNum > 200) this.#data.upgrade.costReductionFromMissionMilestone.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.25));
    // if (this.clearNum > 225) this.#data.inventory.enchantUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    // if (this.clearNum > 250) this.#data.equipment.loadoutUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 1.0));
    if (this.clearNum > 275) this.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 300) this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 325) this.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 350) this.data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.25));
    // if (this.clearNum > 375) this.#data.inventory.enchantUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    if (this.clearNum > 400) this.data.blessingInfo.SetEffectMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    // if (this.clearNum > 425) this.#data.monster.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 5.0));
    // if (this.clearNum > 450) this.#data.catalyst.catalystLevelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 25.0));
    if (this.clearNum > 475) this.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 500.0));
    // if (this.clearNum > 500) this.#data.skill.loadoutUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 1.0));
    if (this.clearNum > 550) this.data.town.SetEffectLevelBonusForAllBuilding(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));
    // if (this.clearNum > 600) this.#data.upgrade.resourceGainTierFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.05));
    if (this.clearNum > 650) this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 5.0));
    // if (this.clearNum > 700) this.#data.upgrade.resourceCostIncrementPerLevelReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.1));
    if (this.clearNum > 750) this.data.monster.loyaltyCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 100.0));

    // if (this.clearNum > 850) this.#data.monster.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 5.0));
    if (this.clearNum > 900) this.data.monster.petRankCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 50.0));
    // if (this.clearNum > 950) this.#data.upgrade.costReductionFromMissionMilestone.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));

    // if (this.clearNum > 1250) this.#data.nitro.maxNitroSpeed.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 1300) this.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 2.5));
    if (this.clearNum > 1350) this.data.town.SetEffectLevelBonusForAllBuilding(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));

    if (this.clearNum > 1450) this.data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 0.25));
    // if (this.clearNum > 1500) this.#data.upgrade.resourceCostIncrementPerLevelReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.1));
    if (this.clearNum > 1550) this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 7.5));
    if (this.clearNum > 1600)
      this.data.alchemy.catalyst.essenceProductionDiminishing.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => -0.3));
    if (this.clearNum > 1650) this.data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    if (this.clearNum > 1700) this.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Mul, () => 1.0));
    // if (this.clearNum > 1750) this.#data.nitro.maxNitroSpeed.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.5));
    if (this.clearNum > 1800) this.data.resource.slimeCoinInterest.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.025));
    // if (this.clearNum > 1850) this.#data.sdg.lootGainOnDie.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.25));
    if (this.clearNum > 1900) this.data.area.swarmScoreMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.2));

    if (this.clearNum > 2100) this.data.monster.loyaltyCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 100.0));
    if (this.clearNum > 2300) this.data.town.SetEffectLevelBonusForAllBuilding(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 10.0));

    if (this.clearNum > 2600)
      this.data.alchemy.catalyst.essenceProductionDiminishing.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => -0.2));
    if (this.clearNum > 2700) this.data.resource.slimeCoinInterest.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.05));
    if (this.clearNum > 2900) this.data.area.swarmScoreMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 0.3));
    if (this.clearNum > 3100) this.data.town.SetEffectLevelBonusForAllBuilding(new MultiplierInfo(MultiplierKind.MissionMilestone, MultiplierType.Add, () => 20.0));
  }

  get clearNum() {
    return this.data.area.TotalClearedMissionNum();
  }
}
