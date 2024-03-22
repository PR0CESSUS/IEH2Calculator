import { UpgradeKind } from "@type/UpgradeKind";

import { Localization } from "@/localization/";
import { UPGRADE } from "@/data/upgrade/UPGRADE";
import { DATA } from "..";

export class SLIMEBANK_UPGRADE extends UPGRADE {
  constructor(DATA: DATA) {
    super(DATA);
    this.id = this.slimebankKind;
  }
  get kind() {
    return UpgradeKind.SlimeBank;
  }

  Description() {
    return Localization.SlimeBankUpgradeString(this).description;
  }

  EffectString() {
    return Localization.SlimeBankUpgradeString(this).effect;
  }

  Name() {
    return Localization.SlimeBankUpgradeString(this).name;
  }
}
