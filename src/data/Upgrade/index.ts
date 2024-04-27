import { DATA } from "..";
import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { UpgradeKind } from "../../type/UpgradeKind";
import { SlimeBankUpgradeKind } from "./../../type/SlimeBankUpgradeKind";
import { UPGRADE } from "./UPGRADE";
import { ResourceUpgrade } from "./upgrade/ResourceUpgrade";
import { BasicStatsUpgrade } from "./upgrade/BasicStatsUpgrade";
import { GoldCapUpgrade } from "./upgrade/GoldCapUpgrade";
import { GoldGainUpgrade } from "./upgrade/GoldGainUpgrade";
import { ExpGainUpgrade } from "./upgrade/ExpGainUpgrade";
import { SB_SlimeCoinCap } from "./upgrade/SB_SlimeCoinCap";
import { SB_SlimeCoinCap2 } from "./upgrade/SB_SlimeCoinCap2";
import { SB_SlimeCoinEfficiency } from "./upgrade/SB_SlimeCoinEfficiency";
import { SB_UpgradeCostReduction } from "./upgrade/SB_UpgradeCostReduction";
import { SB_ResourceBooster } from "./upgrade/SB_ResourceBooster";
import { SB_StatsBooster } from "./upgrade/SB_StatsBooster";
import { SB_GoldCapBooster } from "./upgrade/SB_GoldCapBooster";
import { SB_GoldGain } from "./upgrade/SB_GoldGain";
import { SB_MysteriousWaterGain } from "./upgrade/SB_MysteriousWaterGain";
import { SB_SPD } from "./upgrade/SB_SPD";
import { SB_FireRes } from "./upgrade/SB_FireRes";
import { SB_IceRes } from "./upgrade/SB_IceRes";
import { SB_ThunderRes } from "./upgrade/SB_ThunderRes";
import { SB_LightRes } from "./upgrade/SB_LightRes";
import { SB_DarkRes } from "./upgrade/SB_DarkRes";
import { SB_DebuffRes } from "./upgrade/SB_DebuffRes";
import { SB_ShopTimer } from "./upgrade/SB_ShopTimer";
import { SB_MaterialFinder } from "./upgrade/SB_MaterialFinder";
import { SB_EquipmentProf } from "./upgrade/SB_EquipmentProf";
import { SB_SkillProf } from "./upgrade/SB_SkillProf";
import { SB_ResearchPower } from "./upgrade/SB_ResearchPower";
import { EquipmentInventoryUpgrade } from "./upgrade/EquipmentInventoryUpgrade";
import { SB_CritDamage } from "./upgrade/SB_CritDamage";
import { Parameter } from "../Parameter";

export class DataUpgrade {
  data: DATA;
  upgrades: UPGRADE[];
  resourceUpgrades: ResourceUpgrade[] = [];
  basicStatsUpgrades: BasicStatsUpgrade[] = [];
  goldGainUpgrade: UPGRADE;
  expGainUpgrade: UPGRADE;
  equipmentInventoryUpgrade: UPGRADE;
  goldCapUpgrades: GoldCapUpgrade[] = [];
  generalUpgradeList: UPGRADE[] = [];
  sb1ist: UPGRADE[] = [];
  sb2ist: UPGRADE[] = [];
  sb3ist: UPGRADE[] = [];
  slimebankUpgradeList: UPGRADE[] = [];
  upgradeList: UPGRADE[] = [];
  costReduction: Multiplier;
  costReductionFromGuildAbility: Multiplier;
  costReductionFromGuildSuperAbility: Multiplier;
  costReductionFromWA: Multiplier;
  costReductionFromMissionMilestone: Multiplier;
  resourceMultiplier: Multiplier;
  statsMultiplier: Multiplier;
  goldcapMultiplier: Multiplier;
  goldcapMultipliers: Multiplier[] = Array(Enums.ResourceKind);
  resourceCostIncrementPerLevelReduction: Multiplier;
  resourceGainTierFactor: Multiplier;
  availableQueue: Multiplier;
  tempCheapestCost;
  tempCheapestid;
  tempCost;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.costReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 0.99,
      () => 0.0
    );
    this.costReductionFromGuildAbility = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 0.99,
      () => 0.0
    );
    this.costReductionFromGuildSuperAbility = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 0.99,
      () => 0.0
    );
    this.costReductionFromWA = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 0.99,
      () => 0.0
    );
    this.costReductionFromMissionMilestone = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 0.99,
      () => 0.0
    );
    this.resourceMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.statsMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.goldcapMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    for (let index = 0; index < this.goldcapMultipliers.length; index++)
      this.goldcapMultipliers[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.resourceCostIncrementPerLevelReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 0.9,
      () => 0.0
    );
    this.resourceGainTierFactor = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 5.0,
      () => 0.0
    );
    for (let id = 0; id < Parameter.resourceUpgradeTier; id++) this.resourceUpgrades.push(new ResourceUpgrade(this.data, id));
    for (let index = 0; index < 6; index++) this.basicStatsUpgrades.push(new BasicStatsUpgrade(this.data, index));
    //
    this.goldGainUpgrade = new GoldGainUpgrade(this.data);
    this.expGainUpgrade = new ExpGainUpgrade(this.data);
    for (let index = 0; index < 3; index++) this.goldCapUpgrades[index] = new GoldCapUpgrade(this.data, index);
    //
    this.equipmentInventoryUpgrade = new EquipmentInventoryUpgrade(this.data);

    this.generalUpgradeList = [
      ...this.resourceUpgrades,
      ...this.basicStatsUpgrades,
      this.goldGainUpgrade,
      this.expGainUpgrade,
      ...this.goldCapUpgrades,
      this.equipmentInventoryUpgrade,
    ];
    this.sb1ist.push(new SB_SlimeCoinCap(this.data));
    this.sb1ist.push(new SB_SlimeCoinCap2(this.data));
    this.sb1ist.push(new SB_SlimeCoinEfficiency(this.data));
    this.sb1ist.push(new SB_UpgradeCostReduction(this.data));
    this.sb1ist.push(new SB_ResourceBooster(this.data));
    this.sb1ist.push(new SB_StatsBooster(this.data));
    this.sb1ist.push(new SB_GoldCapBooster(this.data));
    this.sb2ist.push(new SB_GoldGain(this.data));
    this.sb2ist.push(new SB_MysteriousWaterGain(this.data));
    this.sb2ist.push(new SB_SPD(this.data));
    this.sb2ist.push(new SB_FireRes(this.data));
    this.sb2ist.push(new SB_IceRes(this.data));
    this.sb2ist.push(new SB_ThunderRes(this.data));
    this.sb2ist.push(new SB_LightRes(this.data));
    this.sb2ist.push(new SB_DarkRes(this.data));
    this.sb3ist.push(new SB_DebuffRes(this.data));
    this.sb3ist.push(new SB_SkillProf(this.data));
    this.sb3ist.push(new SB_EquipmentProf(this.data));
    this.sb3ist.push(new SB_MaterialFinder(this.data));
    this.sb3ist.push(new SB_ShopTimer(this.data));
    this.sb3ist.push(new SB_CritDamage(this.data));

    this.sb3ist.push(new SB_ResearchPower(this.data));

    this.slimebankUpgradeList = [...this.sb1ist, ...this.sb2ist, ...this.sb3ist];
    // for (let kind = 0; kind < Enum.GetNames(typeof (ResourceKind)).length; kind++)
    //   globalThis.data.stats.ResourceGain(kind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, (() => this.ResourceGain())));
    this.upgrades = [...this.generalUpgradeList, ...this.slimebankUpgradeList];

    this.upgradeList = this.upgrades;

    this.availableQueue = new Multiplier();
  }

  Start() {
    for (let index = 0; index < this.upgradeList.length; index++) this.upgradeList[index].Start();
  }
  Upgrade(kind: UpgradeKind, id) {
    return this.upgrades[kind][id];
  }

  SlimeBankUpgrade(kind: SlimeBankUpgradeKind) {
    for (let index = 0; index < this.slimebankUpgradeList.length; index++) {
      if (this.slimebankUpgradeList[index].slimebankKind == kind) return this.slimebankUpgradeList[index];
    }
    return this.slimebankUpgradeList[0];
  }
  TotalLevel(kind: UpgradeKind) {
    return kind;
    // kind = 0
    // let num = 0;
    // for (let index = 0; index < this.upgrades.length; index++) num += this.upgrades[index].level.value;
    // return num;
  }

  //   ResourceGain(isNextValue = false, id = 0) {
  //     long[] numArray = new long[this.resourceUpgrades.length];
  //     let num1 = 1.0;
  //     for (let index = 0; index < numArray.length; index++)
  //       numArray[index] = !isNextValue || index != id ? this.resourceUpgrades[index].level.value : this.resourceUpgrades[index].transaction.ToLevel();
  //     for (let index = 0; index < numArray.length; index++)
  //       num1 += (numArray[index] / (1 + index));
  //     for (let index1 = 1; index1 < numArray.length; index1++) {
  //       let num2 = 0.0;
  //       for (index2 = index1; index2 < numArray.length; index2++) {
  //         if (index2 > 14)
  //           num2 += Math.pow(2.0, (index2 - 14)) * (index2 - 8) * Math.pow(numArray[index2], 1.0 + this.resourceGainTierFactor.Value() * index2) / Math.pow(1.0 + index2, 1.0 / (1.0 + index2)) / 2.0;
  //         if (index2 > 9)
  //           num2 += (index2 - 8) * Math.pow(numArray[index2], 1.0 + this.resourceGainTierFactor.Value() * index2) / Math.pow(1.0 + index2, 1.0 / (1.0 + index2)) / 2.0;
  //         else
  //           num2 += Math.pow(numArray[index2], 1.0 + this.resourceGainTierFactor.Value() * index2) / Math.pow(1.0 + index2, 1.0 / (1.0 + index2)) / 2.0;
  //       }
  //       num1 *= 1.0 + num2;
  //     }
  //     return num1 * this.resourceMultiplier.Value();
  //   }
}
