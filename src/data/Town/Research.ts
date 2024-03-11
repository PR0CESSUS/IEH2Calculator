import { DataTown } from ".";
import { DATA } from "..";
import { Util } from "../../Util";
import { BuildingKind } from "../../type/BuildingKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ResourceKind } from "../../type/ResourceKind";
import { Stats } from "../../type/Stats";
import { MultiplierInfo } from "../Multiplier";
import { BUILDING } from "./BUILDING";

export class Research {
  data: DATA;
  building: BUILDING;
  kind: ResourceKind;
  townCtrl: DataTown;
  constructor(building: BUILDING, kind: ResourceKind) {
    this.data = building.data;
    this.townCtrl = building.townCtrl;
    this.building = building;
    this.kind = kind;
    this.SetResearch();
  }

  get level() {
    switch (this.kind) {
      case ResourceKind.Stone:
        return this.data.source.buildingResearchLevelsStone[this.building.kind];
      case ResourceKind.Crystal:
        return this.data.source.buildingResearchLevelsCrystal[this.building.kind];
      case ResourceKind.Leaf:
        return this.data.source.buildingResearchLevelsLeaf[this.building.kind];

      default:
        return 0;
    }
  }

  set level(value) {
    switch (this.kind) {
      case ResourceKind.Stone:
        this.data.source.buildingResearchLevelsStone[this.building.kind] = Math.min(this.building.Level(), value);
        break;
      case ResourceKind.Crystal:
        this.data.source.buildingResearchLevelsCrystal[this.building.kind] = Math.min(this.building.Level(), value);
        break;
      case ResourceKind.Leaf:
        this.data.source.buildingResearchLevelsLeaf[this.building.kind] = Math.min(this.building.Level(), value);
        break;

      default:
        break;
    }
  }

  get effectValue() {
    const effect = [
      [0.1, 0.05, 3.0 / 400.0],
      [0, 3.0 / 400.0, 1],
      [0.01, 0.01, 5],
      [2, 0.05, 3.0 / 400.0],
      [0.025, 5, 1],
      [2e-5, 1, 0.02],
      [0.001, 1, 0.02],
      [0, 0.025, 0.025],
      [0.05, 0.05, 0.05],
      [],
      [],
      [0.01, 0.05, 0.1],
    ];
    // cartographer crystal  Math.min(0.9, )
    // blacksmith leaf  Math.min(0.9, )
    // statue of hearo leaf  Math.min(0.9, )

    const value = this.level * effect[this.building.kind][this.kind] * this.townCtrl.researchEffectMultipliers[this.kind].Value();
    if (this.building.kind == BuildingKind.Cartographer && this.kind == ResourceKind.Crystal) return Math.min(0.9, value);
    if (this.building.kind == BuildingKind.Blacksmith && this.kind == ResourceKind.Leaf) return Math.min(0.9, value);
    if (this.building.kind == BuildingKind.StatueOfHeroes && this.kind == ResourceKind.Leaf) return Math.min(0.9, value);
    if (this.building.kind == BuildingKind.Temple && this.kind == ResourceKind.Leaf) return Math.min(100, value);
    if (this.building.kind == BuildingKind.Blacksmith && this.kind == ResourceKind.Crystal) return Math.min(10, value);
    if (this.building.kind == BuildingKind.Blacksmith && this.kind == ResourceKind.Stone) return Math.min(250, value);

    return value;
  }

  SetResearch() {
    switch (this.building.kind) {
      case BuildingKind.AdventuringParty:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.expedition.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.expedition.petExpGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
        }
        break;
      case BuildingKind.AlchemistsHut:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.alchemy.maxMysteriousWaterExpandedCapNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.ArcaneResearcher:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.townCtrl.researchPower[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.townCtrl.researchPower[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.townCtrl.researchPower[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.Blacksmith:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.equipment.autoDisassembleAvailableNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.equipment.disassembleMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.craft.costReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.Cartographer:
        switch (this.kind) {
          case ResourceKind.Stone:
            break;
          case ResourceKind.Crystal:
            this.data.area.areaDebuffReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.area.townMaterialGainBonus.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.MysticArena:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.challenge.permanentRewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.Trapper:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.monster.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.shop.restockNumTrap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.Temple:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.blessingInfo.SetEffectMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.blessingInfo.duration.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.rebirth.requiredHeroLevelReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.StatueOfHeroes:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.townCtrl.levelCostReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
        }

        break;
      case BuildingKind.SlimeBank:
        switch (this.kind) {
          case ResourceKind.Stone:
            this.data.resource.slimeCoinInterest.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Crystal:
            this.data.shop.restockNumMaterial.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.effectValue));
            break;
          case ResourceKind.Leaf:
            this.data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.effectValue));
            break;
        }

        break;
      default:
        break;
    }
  }

  EffectValueString() {
    switch (this.building.kind) {
      case BuildingKind.StatueOfHeroes:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Resource Gain ${Util.percent(this.effectValue)}`;
          case ResourceKind.Crystal:
            return `Gold Cap ${Util.percent(this.effectValue)}`;
          case ResourceKind.Leaf:
            return `Reduce the cost of all building levels by ${Util.percent(this.effectValue)}`;
        }
      case BuildingKind.AlchemistsHut:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Mysterious Water Gain ${Util.tDigit(this.effectValue)} / sec`;
          case ResourceKind.Crystal:
            return `Essence Conversion Rate ${Util.percent(this.effectValue)}`;
          case ResourceKind.Leaf:
            return `Max Mysterious Water Cap ${Util.tDigit(this.effectValue, 0)}`;
        }
      case BuildingKind.Cartographer:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Dungeon's Time Limit ${Util.tDigit(this.effectValue)} sec`;
          case ResourceKind.Crystal:
            return `Reduce Field Debuff effect by ${Util.percent(this.effectValue)}`;
          case ResourceKind.Leaf:
            return `Town Material Gain from clearing areas ${Util.tDigit(this.effectValue, 0)}`;
        }
      case BuildingKind.AdventuringParty:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Expedition Reward Amount ${Util.percent(this.effectValue)}`;
          case ResourceKind.Crystal:
            return `Expedition EXP Gain ${Util.percent(this.effectValue)}`;
          case ResourceKind.Leaf:
            return `Expedition Pet EXP Gain ${Util.percent(this.effectValue)}`;
        }
      case BuildingKind.Blacksmith:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Auto-Disassemble EQ Slot ${Util.tDigit(this.effectValue, 0)}`;
          case ResourceKind.Crystal:
            return `Material Gain on Disassembling EQ ${Util.percent(this.effectValue)}`;
          case ResourceKind.Leaf:
            return `Reduce the cost of crafting by ${Util.percent(this.effectValue)}`;
        }
      case BuildingKind.Temple:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Blessing Effect ${Util.percent(this.effectValue)}`;
          case ResourceKind.Crystal:
            return `Blessing's duration ${Util.tDigit(this.effectValue, 0)} sec`;
          case ResourceKind.Leaf:
            return `Rebirth's level requirements -${Util.tDigit(this.effectValue, 0)}`;
        }
      case BuildingKind.SlimeBank:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Grants interest on currently held Slime Coin every 10 minutes : ${Util.percent(this.effectValue)}`;
          case ResourceKind.Crystal:
            return `Restock amount of materials in Shop ${Util.tDigit(this.effectValue, 0)}`;
          case ResourceKind.Leaf:
            return `Multiply Slime Coin Cap by ${Util.percent(this.effectValue + 1)}`;
        }
      case BuildingKind.MysticArena:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Equipment Inventory Slot ${Util.tDigit(this.effectValue, 0)}`;
          case ResourceKind.Crystal:
            return `Multiply Handicapped Challenge's Passive Stats Reward by ${Util.percent(this.effectValue + 1)}`;
          case ResourceKind.Leaf:
            return `Alchemy Point Gain ${Util.percent(this.effectValue)}`;
        }
      case BuildingKind.ArcaneResearcher:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Stone Research Power ${Util.percent(this.effectValue)}`;
          case ResourceKind.Crystal:
            return `Crystal Research Power ${Util.percent(this.effectValue)}`;
          case ResourceKind.Leaf:
            return `Leaf Research Power ${Util.percent(this.effectValue)}`;
        }
      case BuildingKind.Tavern:
        return "-";
      case BuildingKind.Dojo:
        return "-";
      case BuildingKind.Trapper:
        switch (this.kind) {
          case ResourceKind.Stone:
            return `Rare Material Drop Chance ${Util.percent(this.effectValue, 4)}`;
          case ResourceKind.Crystal:
            return `Restock amount of traps in Shop ${Util.tDigit(this.effectValue, 0)}`;
          case ResourceKind.Leaf:
            return `Multiply Taming Point Gain by ${Util.percent(this.effectValue + 1)}`;
        }
      default:
        return "Not Implemented";
    }
  }
}
