import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";

export class DataChallenge {
  raidbossList = [];
  solobossList = [];
  handicapList = [];
  superdungeonList = [];
  challengeList = [];
  permanentRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  sdStatRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));

  constructor() {}
}
