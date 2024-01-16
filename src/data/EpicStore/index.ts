import { Enums } from "../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { EpicStoreKind } from "../../type/EpicStoreKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";

export class DataEpicStore {
  constructor() {
    // console.log(EpicStoreKind);

    // console.log(globalThis.data.source.epicStorePurchasedNum[EpicStoreKind.EquipmentWeaponSlot1]);
    for (let heroKind = 0; heroKind < Enums.HeroKind; heroKind++) {
      globalThis.data.inventory.equipWeaponUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => globalThis.data.source.epicStorePurchasedNum[EpicStoreKind.EquipmentWeaponSlot1])
      );
      globalThis.data.inventory.equipArmorUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => globalThis.data.source.epicStorePurchasedNum[EpicStoreKind.EquipmentArmorSlot1])
      );
      globalThis.data.inventory.equipJewelryUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => globalThis.data.source.epicStorePurchasedNum[EpicStoreKind.EquipmentJewelrySlot1])
      );
      globalThis.data.inventory.equipPotionUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => globalThis.data.source.epicStorePurchasedNum[EpicStoreKind.EquipUtilitySlot1])
      );
    }

    // case RebirthUpgradeKind.EQWeaponSlot:

    //     break;
    //   case RebirthUpgradeKind.EQArmorSlot:
    //     globalThis.data.inventory.equipArmorUnlockedNum[heroKind].RegisterMultiplier(
    //       new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => effectValue(kind, getLevel(kind, heroKind)))
    //     );
    //     break;
    //   case RebirthUpgradeKind.EQJewelrySlot:
    //     globalThis.data.inventory.equipJewelryUnlockedNum[heroKind].RegisterMultiplier(
    //       new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => effectValue(kind, getLevel(kind, heroKind)))
    //     );
  }
}
