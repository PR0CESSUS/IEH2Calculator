import { DATA } from "..";
import { Enums } from "../../Enums";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { NumberType } from "../../type/NumberType";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { BUILDING } from "./BUILDING";
import { AdventuringParty } from "./building/AdventuringParty";
import { AlchemistsHut } from "./building/AlchemistsHut";
import { ArcaneResearcher } from "./building/ArcaneResearcher";
import { Blacksmith } from "./building/Blacksmith";
import { Cartographer } from "./building/Cartographer";
import { Dojo } from "./building/Dojo";
import { MysticArena } from "./building/MysticArena";
import { SlimeBank } from "./building/SlimeBank";
import { StatueOfHeroes } from "./building/StatueOfHeroes";
import { Tavern } from "./building/Tavern";
import { Temple } from "./building/Temple";
import { Trapper } from "./building/Trapper";

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
    this.buildings[0] = new StatueOfHeroes(this.data);
    this.buildings[3] = new Blacksmith(this.data);
    this.buildings[1] = new Cartographer(this.data);
    this.buildings[9] = new Tavern(this.data);
    this.buildings[4] = new Temple(this.data);
    this.buildings[10] = new Dojo(this.data);
    this.buildings[5] = new Trapper(this.data);
    this.buildings[7] = new MysticArena(this.data);
    this.buildings[6] = new SlimeBank(this.data);
    this.buildings[8] = new ArcaneResearcher(this.data);
    this.buildings[2] = new AlchemistsHut(this.data);
    this.buildings[11] = new AdventuringParty(this.data);
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
