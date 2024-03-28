import { DATA } from "..";
import { Enums } from "../../Enums";
import { MultiplierInfo } from "../Multiplier";
import { EpicStoreKind } from "../../type/EpicStoreKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { InAppPurchaseKind } from "../../type/InAppPurchaseKind";

export class DataEpicStore {
  data: DATA;
  constructor(DATA: DATA) {
    this.data = DATA;
  }

  Start() {
    for (let heroKind = 0; heroKind < Enums.HeroKind; heroKind++) {
      this.data.inventory.equipWeaponUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => this.data.source.epicStorePurchasedNum[EpicStoreKind.EquipmentWeaponSlot1])
      );
      this.data.inventory.equipArmorUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => this.data.source.epicStorePurchasedNum[EpicStoreKind.EquipmentArmorSlot1])
      );
      this.data.inventory.equipJewelryUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => this.data.source.epicStorePurchasedNum[EpicStoreKind.EquipmentJewelrySlot1])
      );
      this.data.inventory.equipPotionUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => this.data.source.epicStorePurchasedNum[EpicStoreKind.EquipUtilitySlot1])
      );
    }

    this.data.expedition.unlockedExpeditionSlotNum.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Add, () => this.data.source.epicStorePurchasedNum[EpicStoreKind.ExpeditionTeamSlot1])
    );
    this.data.expedition.unlockedExpeditionSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.EpicStore,
        MultiplierType.Add,
        () => 1,
        () => this.data.source.inAppPurchasedNum[InAppPurchaseKind.UpdateBundle2]
      )
    );
    this.data.expedition.unlockedExpeditionSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.EpicStore,
        MultiplierType.Add,
        () => 1,
        () => this.data.source.inAppPurchasedNum[InAppPurchaseKind.UpdateBundle3]
      )
    );
    this.data.nitro.nitroCap.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.EpicStore, MultiplierType.Mul, () => 0.1 * this.data.source.epicStorePurchasedNum[EpicStoreKind.NitroCapExpansion])
    );
    this.data.nitro.nitroCap.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.EpicStore,
        MultiplierType.Mul,
        () => 0.5,
        () => this.data.source.inAppPurchasedNum[InAppPurchaseKind.UpdateBundle1]
      )
    );
  }
}
