import { MultiplierInfo, Multiplier } from "../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { PotionParameter } from "./PotionParameter";

export class DataCatalyst {
  criticalChanceMultiplier: Multiplier;
  catalystLevelCap: Multiplier;
  catalystCostReduction: Multiplier;
  catalystDoubleCriticalChance: Multiplier;
  catalysts = [];
  essenceProductions = [];
  essenceProductionMultiplier: Multiplier;
  essenceProductionDiminishing: Multiplier;
  availableNum: Multiplier;

  constructor() {
    this.catalystLevelCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => PotionParameter.catalystMaxLevel));
    this.catalystCostReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 0.5,
      () => 0.0
    );
    this.catalystDoubleCriticalChance = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 1.0,
      () => 0.0
    );
    // this.catalysts.Add((Catalyst) new SlimeCatalyst(this));
    // this.catalysts.Add((Catalyst) new ManaCatalyst(this));
    // this.catalysts.Add((Catalyst) new FrostCatalyst(this));
    // this.catalysts.Add((Catalyst) new FlameCatalyst(this));
    // this.catalysts.Add((Catalyst) new StormCatalyst(this));
    // this.catalysts.Add((Catalyst) new SoulCatalyst(this));
    // this.catalysts.Add((Catalyst) new SunCatalyst(this));
    // this.catalysts.Add((Catalyst) new VoidCatalyst(this));

    this.availableNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.essenceProductionDiminishing = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 2.0,
      () => 1.1
    );
    this.essenceProductionDiminishing.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 2.0));
    this.essenceProductionMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.criticalChanceMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  }
}
