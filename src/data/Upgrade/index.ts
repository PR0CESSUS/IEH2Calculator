import { DATA } from "..";
import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { UpgradeKind } from "../../type/UpgradeKind";
import { SlimeBankUpgradeKind } from "./../../type/SlimeBankUpgradeKind";
import { UPGRADE } from "./UPGRADE";

export class DataUpgrade {
  data: DATA;
  upgrades: UPGRADE[][];
  //   resourceUpgrades: ResourceUpgrade[] = new ResourceUpgrade[Parameter.resourceUpgradeTier];
  //   basicStatsUpgrades: BasicStatsUpgrade[] = new BasicStatsUpgrade[Enum.GetNames(typeof (BasicStatsKind)).length];
  goldGainUpgrade: UPGRADE;
  expGainUpgrade: UPGRADE;
  equipmentInventoryUpgrade: UPGRADE;
  //   goldCapUpgrades: GoldCapUpgrade[] = new GoldCapUpgrade[Enums.ResourceKind];
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
    // for (let id = 0; id < this.resourceUpgrades.length; id++)
    //   this.resourceUpgrades[id] = new ResourceUpgrade(id);
    // for (let index = 0; index < this.basicStatsUpgrades.length; index++) {
    //   this.basicStatsUpgrades[index] = new BasicStatsUpgrade(index);
    // }
    // this.goldGainUpgrade =  new GoldGainUpgrade();
    // this.expGainUpgrade = new ExpGainUpgrade();
    // for (let index = 0; index < this.goldCapUpgrades.length; index++) {
    //   this.goldCapUpgrades[index] = new GoldCapUpgrade(index);
    // }
    // this.equipmentInventoryUpgrade = (UPGRADE) new EquipmentInventoryUpgrade();
    // this.generalUpgradeList.AddRange((IEnumerable<UPGRADE>) this.resourceUpgrades);
    // this.generalUpgradeList.AddRange((IEnumerable<UPGRADE>) this.basicStatsUpgrades);
    // this.generalUpgradeList.push(this.goldGainUpgrade);
    // this.generalUpgradeList.push(this.expGainUpgrade);
    // this.generalUpgradeList.AddRange((IEnumerable<UPGRADE>) this.goldCapUpgrades);
    // this.generalUpgradeList.push(this.equipmentInventoryUpgrade);
    // this.sb1ist.push((UPGRADE) new SB_SlimeCoinCap());
    // this.sb1ist.push((UPGRADE) new SB_SlimeCoinCap2());
    // this.sb1ist.push((UPGRADE) new SB_SlimeCoinEfficiency());
    // this.sb1ist.push((UPGRADE) new SB_UpgradeCostReduction());
    // this.sb1ist.push((UPGRADE) new SB_ResourceBooster());
    // this.sb1ist.push((UPGRADE) new SB_StatsBooster());
    // this.sb1ist.push((UPGRADE) new SB_GoldCapBooster());
    // this.sb2ist.push((UPGRADE) new SB_GoldGain());
    // this.sb2ist.push((UPGRADE) new SB_MysteriousWaterGain());
    // this.sb2ist.push((UPGRADE) new SB_SPD());
    // this.sb2ist.push((UPGRADE) new SB_FireRes());
    // this.sb2ist.push((UPGRADE) new SB_IceRes());
    // this.sb2ist.push((UPGRADE) new SB_ThunderRes());
    // this.sb2ist.push((UPGRADE) new SB_LightRes());
    // this.sb2ist.push((UPGRADE) new SB_DarkRes());
    // this.sb3ist.push((UPGRADE) new SB_DebuffRes());
    // this.sb3ist.push((UPGRADE) new SB_SkillProf());
    // this.sb3ist.push((UPGRADE) new SB_EquipmentProf());
    // this.sb3ist.push((UPGRADE) new SB_MaterialFinder());
    // this.sb3ist.push((UPGRADE) new SB_ShopTimer());
    this.sb3ist.push(new UPGRADE(this.data, UpgradeKind.SlimeBank, SlimeBankUpgradeKind.SkillProf));
    this.sb3ist.push(new UPGRADE(this.data, UpgradeKind.SlimeBank, SlimeBankUpgradeKind.CritDamage));
    // this.sb3ist.push((UPGRADE) new SB_ResearchPower());
    // this.slimebankUpgradeList.AddRange((IEnumerable<UPGRADE>) this.sb1ist);
    // this.slimebankUpgradeList.AddRange((IEnumerable<UPGRADE>) this.sb2ist);
    // this.slimebankUpgradeList.AddRange((IEnumerable<UPGRADE>) this.sb3ist);
    // for (let kind = 0; kind < Enum.GetNames(typeof (ResourceKind)).length; kind++)
    //   globalThis.data.stats.ResourceGain(kind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, (() => this.ResourceGain())));
    // this.upgrades = new UPGRADE[7][]
    // {
    //   (UPGRADE[]) this.resourceUpgrades,
    //   (UPGRADE[]) this.basicStatsUpgrades,
    //   new UPGRADE[1]{ this.goldGainUpgrade },
    //   new UPGRADE[1]{ this.expGainUpgrade },
    //   (UPGRADE[]) this.goldCapUpgrades,
    //   this.slimebankUpgradeList.ToArray(),
    //   new UPGRADE[1]{ this.equipmentInventoryUpgrade }
    // };
    this.upgradeList = [...this.sb3ist];
    // this.upgradeList.AddRange((IEnumerable<UPGRADE>) this.slimebankUpgradeList);
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
    let num = 0;
    for (let index = 0; index < this.upgrades[kind].length; index++) num += this.upgrades[kind][index].level;
    return num;
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
