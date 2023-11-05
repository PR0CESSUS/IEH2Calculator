import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { StatueOfHeroes } from "./StatueOfHeroes";
import { AdventuringParty } from "./AdventuringParty";
import { AlchemistsHut } from "./AlchemistsHut";
import { ArcaneResearcher } from "./ArcaneResearcher";
import { MysticArena } from "./MysticArena";
import { Dojo } from "./Dojo";
import { Cartographer } from "./Cartographer";
import { SlimeBank } from "./SlimeBank";
import { Tavern } from "./Tavern";
import { Temple } from "./Temple";
import { Trapper } from "./Trapper";
import { Blacksmith } from "./Blacksmith";

export class DataTown {
  maxRank = new Multiplier();
  townMaterials = [];
  townMaterialGainMultiplier: Multiplier[] = Array(Enums.HeroKind).fill(new Multiplier());
  townLevelEffectMultiplier: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  townLevelEffectMultipliers: Multiplier[] = Array(Enums.ResourceKind);
  levelCostReduction: Multiplier = new Multiplier(
    new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
    () => 0.9,
    () => 0.0
  );
  buildings: any[] = [];
  researchPower: Multiplier[] = Array(3)
    .fill(null)
    .map(
      (_, index) =>
        new Multiplier(
          new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => Math.log10(10.0 + globalThis.data.resource.Resource(index).value)),
          () => 1e20,
          () => 1.0
        )
    );

  maxResearchNum: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  researchEffectMultipliers: Multiplier[] = Array(3);

  constructor() {
    // globalThis.data.stat.townCtrl = this;
    // for (let index = 0; index < this.townMaterialGainMultiplier.length; index++)
    //   this.townMaterialGainMultiplier[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));

    for (let index = 0; index < Enums.ResourceKind; index++) {
      this.townLevelEffectMultipliers[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    }
  }

  Start() {
    this.buildings[0] = new StatueOfHeroes();
    this.buildings[3] = new Blacksmith();
    this.buildings[1] = new Cartographer();
    this.buildings[9] = new Tavern();
    this.buildings[4] = new Temple();
    this.buildings[10] = new Dojo();
    this.buildings[5] = new Trapper();
    this.buildings[7] = new MysticArena();
    this.buildings[6] = new SlimeBank();
    this.buildings[8] = new ArcaneResearcher();
    this.buildings[2] = new AlchemistsHut();
    this.buildings[11] = new AdventuringParty();
  }

  SetEffectTownMatGain(info) {
    for (let index = 0; index < this.townMaterialGainMultiplier.length; index++) this.townMaterialGainMultiplier[index].RegisterMultiplier(info);
  }

  TotalBuildingLevel() {
    let num = 0;
    for (let index = 0; index < this.buildings.length; index++) num += this.buildings[index].level.value;
    return num;
  }

  SetEffectLevelBonusForAllBuilding(info) {
    // console.log(info);

    for (let index = 0; index < this.buildings.length; index++) {
      this.buildings[index].levelBonus.RegisterMultiplier(info);
    }
  }
}
