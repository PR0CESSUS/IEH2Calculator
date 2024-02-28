import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { DATA } from "..";
import { BUILDING } from "./BUILDING";
import { BuildingKind } from "../../type/BuildingKind";
import { NumberType } from "../../type/NumberType";

export class DataTown {
  data: DATA;
  maxRank: Multiplier;
  townMaterials = [];
  townMaterialGainMultiplier: Multiplier[] = Array(Enums.HeroKind);
  townLevelEffectMultiplier: Multiplier;
  townLevelEffectMultipliers: Multiplier[] = Array(Enums.ResourceKind);
  levelCostReduction: Multiplier;
  buildings: BUILDING[] = [];
  researchPower: Multiplier[] = Array(Enums.ResourceKind);

  maxResearchNum: Multiplier;
  researchEffectMultipliers: Multiplier[] = Array(Enums.ResourceKind);

  constructor(DATA: DATA) {
    this.data = DATA;
    for (let index = 0; index < this.townMaterialGainMultiplier.length; index++) {
      this.townMaterialGainMultiplier[index] = new Multiplier();
    }
    this.maxResearchNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.townLevelEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.maxRank = new Multiplier();
    this.levelCostReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 0.9,
      () => 0.0
    );
    for (let index = 0; index < this.researchPower.length; index++) {
      this.researchPower[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => Math.log10(10.0 + this.data.resource.Resource(index))),
        () => 1e20,
        () => 1.0
      );
      this.researchPower[index].numberType = NumberType.Normal;
      this.researchEffectMultipliers[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    }

    for (let index = 0; index < Enums.ResourceKind; index++) {
      this.townLevelEffectMultipliers[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    }
  }

  Start() {
    this.buildings[0] = new BUILDING(this.data, BuildingKind.StatueOfHeroes);
    this.buildings[3] = new BUILDING(this.data, BuildingKind.Blacksmith);
    this.buildings[1] = new BUILDING(this.data, BuildingKind.Cartographer);
    this.buildings[9] = new BUILDING(this.data, BuildingKind.Tavern);
    this.buildings[4] = new BUILDING(this.data, BuildingKind.Temple);
    this.buildings[10] = new BUILDING(this.data, BuildingKind.Dojo);
    this.buildings[5] = new BUILDING(this.data, BuildingKind.Trapper);
    this.buildings[7] = new BUILDING(this.data, BuildingKind.MysticArena);
    this.buildings[6] = new BUILDING(this.data, BuildingKind.SlimeBank);
    this.buildings[8] = new BUILDING(this.data, BuildingKind.ArcaneResearcher);
    this.buildings[2] = new BUILDING(this.data, BuildingKind.AlchemistsHut);
    this.buildings[11] = new BUILDING(this.data, BuildingKind.AdventuringParty);
    // this.SetEffectLevelBonusForAllBuilding()
  }

  SetEffectTownMatGain(info) {
    for (let index = 0; index < this.townMaterialGainMultiplier.length; index++) this.townMaterialGainMultiplier[index].RegisterMultiplier(info);
  }

  TotalBuildingLevel() {
    let num = 0;
    for (let index = 0; index < this.buildings.length; index++) num += this.buildings[index].Level();
    return num;
  }

  SetEffectLevelBonusForAllBuilding(info: MultiplierInfo) {
    // console.log(info);

    for (let index = 0; index < this.buildings.length; index++) {
      this.buildings[index].levelBonus.RegisterMultiplier(info);
    }
  }

  MaxTownMaterialGainMultiplier() {
    let num = 0.0;
    for (let index = 0; index < this.townMaterialGainMultiplier.length; ++index) {
      if (this.townMaterialGainMultiplier[index].Value() > num && this.data.source.isActiveBattle[index]) num = this.townMaterialGainMultiplier[index].Value();
    }
    return num;
  }
}
