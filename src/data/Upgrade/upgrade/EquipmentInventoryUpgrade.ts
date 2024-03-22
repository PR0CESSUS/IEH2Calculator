import { MultiplierInfo } from "@/data/Multiplier";
import { UPGRADE } from "@/data/upgrade/UPGRADE";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { UpgradeKind } from "@type/UpgradeKind";
import { Util } from "@/Util";

export class EquipmentInventoryUpgrade extends UPGRADE {
  get kind() {
    return UpgradeKind.EquipmentInventory;
  }

  Start() {
    this.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  //   get resource() {return this.data.resource.gold;}

  Cost(level) {
    return 5000.0 * Math.pow(10.0, level / 5.0);
  }

  EffectValue() {
    let level = this.level.value;
    return level;
  }

  Name(): string {
    return `Equipment Inventory Slot`;
  }

  EffectString() {
    return `Increase Equipment Inventory Slot by ${Util.tDigit(this.EffectValue(), 0)}`;
  }
}
