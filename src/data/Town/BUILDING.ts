import { DATA } from "..";
import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { BuildingKind } from "../../type/BuildingKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ResourceKind } from "../../type/ResourceKind";
import { Stats } from "../../type/Stats";

export class BUILDING {
  #data: DATA;
  townCtrl;
  kind: BuildingKind;
  rank;
  level: number[];
  levelBonus: Multiplier;
  researchLevels: any[];
  researchExps: any[] = [];

  constructor(DATA: DATA, kind: BuildingKind) {
    this.#data = DATA;
    this.kind = kind;
    this.level = this.#data.source.buildingLevels;
    this.townCtrl = this.#data.town;
    this.researchLevels = [this.#data.source.buildingResearchLevelsStone, this.#data.source.buildingResearchLevelsCrystal, this.#data.source.buildingResearchLevelsLeaf];
    this.levelBonus = new Multiplier();
    this.SetEffect();
    this.SetResearch();
  }

  Rank() {
    return this.rank.value;
  }

  Level() {
    return this.level[this.kind] + this.levelBonus.Value();
  }

  MaxLevel(rank) {
    return 20 * rank;
  }
  EffectValue() {
    switch (this.kind) {
      case BuildingKind.AdventuringParty:
        return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.AlchemistsHut:
        return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.ArcaneResearcher:
        return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.Blacksmith:
        return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
      case BuildingKind.Cartographer:
        return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
      case BuildingKind.MysticArena:
        return this.Level() * 0.025 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
      case BuildingKind.Trapper:
        return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.Temple:
        return this.Level() * 0.01 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
      case BuildingKind.StatueOfHeroes:
        return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
      case BuildingKind.SlimeBank:
        return this.Level() * 0.01 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
      default:
        return 0;
    }
  }
  SetCost() {}

  SetEffect() {
    switch (this.kind) {
      case BuildingKind.AdventuringParty:
        this.#data.expedition.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
        break;
      case BuildingKind.Blacksmith:
        this.#data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
        break;
      case BuildingKind.MysticArena:
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.#data.stats
            .MonsterDamage(index, MonsterSpecies.ChallengeBoss)
            .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => this.EffectValue()));
        }
        break;
      case BuildingKind.Temple:
        this.#data.rebirth.SetPointMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
        break;

      default:
        break;
    }
  }

  SetResearch() {
    switch (this.kind) {
      case BuildingKind.AdventuringParty:
        this.#data.expedition.rewardMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0))
        );
        this.#data.expedition.expGainMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))
        );
        this.#data.expedition.petExpGainMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.1 * this.ResearchMul(2))
        );
        break;
      case BuildingKind.AlchemistsHut:
        this.#data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0))
        );
        this.#data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 0.01 * this.ResearchMul(1))
        );
        this.#data.alchemy.maxMysteriousWaterExpandedCapNum.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf) * 5 * this.ResearchMul(2))
        );
        break;
      case BuildingKind.ArcaneResearcher:
        this.townCtrl.researchPower[0].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.05 * this.ResearchMul(0))
        );
        this.townCtrl.researchPower[1].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))
        );
        this.townCtrl.researchPower[2].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.05 * this.ResearchMul(2))
        );
        break;
      case BuildingKind.Blacksmith:
        this.#data.equipment.autoDisassembleAvailableNum.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 2 * this.ResearchMul(0))
        );
        this.#data.equipment.disassembleMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))
        );
        this.#data.craft.costReduction.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(2)))
        );
        break;
      case BuildingKind.Cartographer:
        this.#data.area.areaDebuffReduction.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.9, this.ResearchLevel(ResourceKind.Crystal) * (3.0 / 400.0) * this.ResearchMul(1)))
        );
        this.#data.area.townMaterialGainBonus.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(2))
        );
        break;
      case BuildingKind.MysticArena:
        this.#data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * this.ResearchMul(0))
        );
        this.#data.challenge.permanentRewardMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.025 * this.ResearchMul(1))
        );
        this.#data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.025 * this.ResearchMul(2))
        );
        break;
      case BuildingKind.Trapper:
        this.#data.monster.colorMaterialDropChance.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 2e-5 * this.ResearchMul(0))
        );
        this.#data.shop.restockNumTrap.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * this.ResearchMul(1))
        );
        this.#data.stats.SetEffectStats(
          Stats.TamingPointGain,
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.02 * this.ResearchMul(2))
        );
        break;
      case BuildingKind.Temple:
        this.#data.blessingInfo.SetEffectMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 0.025 * this.ResearchMul(0))
        );
        this.#data.blessingInfo.duration.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 5 * this.ResearchMul(1))
        );
        this.#data.rebirth.requiredHeroLevelReduction.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(2))
        );
        break;
      case BuildingKind.StatueOfHeroes:
        this.#data.stats.SetEffectResourceGain(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.1 * this.ResearchMul(0))
        );
        this.#data.resource.goldCap.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))
        );
        this.townCtrl.levelCostReduction.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(2)))
        );
        break;
      case BuildingKind.SlimeBank:
        this.#data.resource.slimeCoinInterest.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 0.001 * this.ResearchMul(0))
        );
        this.#data.shop.restockNumMaterial.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * this.ResearchMul(1))
        );
        this.#data.resource.slimeCoinCap.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.02 * this.ResearchMul(2))
        );
        break;
      default:
        break;
    }
  }

  ResearchLevel(kind: ResourceKind) {
    // console.log(this.researchLevels[kind]);

    return this.researchLevels[kind][this.kind];
  }

  ResearchMul(kind: ResourceKind) {
    return this.townCtrl.researchEffectMultipliers[kind].Value();
  }
}
