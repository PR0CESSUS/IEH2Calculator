import { DATA } from "..";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierInfo } from "../Multiplier";

export function SuperDungeonShop(DATA: DATA) {
  DATA.equipment.effectMultiplierModifierForArtifact.RegisterMultiplier(
    new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Add, () => DATA.sdg.shopCtrl.itemStatBonusList[0].effectValue)
  );
}
