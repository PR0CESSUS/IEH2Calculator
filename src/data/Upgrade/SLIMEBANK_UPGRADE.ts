import { UpgradeKind } from "../../type/UpgradeKind";
import { UPGRADE } from "./UPGRADE";

export class SLIMEBANK_UPGRADE extends UPGRADE {
  kind = UpgradeKind.SlimeBank;

  // Name() {return Localized.localized.SlimeBankUpgradeString(this).name;}

  // Description() {return Localized.localized.SlimeBankUpgradeString(this).description;}

  get resource() {
    return 0;
  }

  constructor() {
    super();
    this.id = this.slimebankKind;
  }
}
