import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Enums } from "../../Enums";
import { InventoryParameter } from "./InventoryParameter";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { HeroKind } from "../../type/HeroKind";
import { Equipment } from "../Equipment/Equipment";
import { EquipmentPart } from "../../type/EquipmentPart";

export class DataInventory {
  //   isCalledUpdateSetItemEquippedNumInThisSec: boolean[] = Array(Enums.heroKindLength);
  setItemEquippedNums: any[] = Array(Enums.EquipmentSetKind);
  //   canCreatePotionNums: number[] = Array(Enums.PotionKind);
  //   tempCanCreatePotionNums: number[] = Array(Enums.PotionKind);
  //   double[] potionEquipNums = new double[Enums.PotionKind) * Enums.HeroKind)];
  //   double[] tempPotionEquipNums = new double[Enums.PotionKind) * Enums.HeroKind)];
  //   Action slotUIAction;
  lastPotionSlotUIActionTime = -1.0;
  equipmentSlots: Equipment[] = Array(InventoryParameter.allEquipmentSlotId);
  //   EnchantSlot[] enchantSlots = new EnchantSlot[InventoryParameter.enchantSlotId];
  //   PotionSlot[] potionSlots = new PotionSlot[InventoryParameter.allPotionSlotId];
  equipInventoryUnlockedNum: Multiplier;
  equipWeaponUnlockedNum: Multiplier[] = Array(Enums.HeroKind);
  equipArmorUnlockedNum: Multiplier[] = Array(Enums.HeroKind);
  equipJewelryUnlockedNum: Multiplier[] = Array(Enums.HeroKind);
  enchantUnlockedNum: Multiplier;
  potionUnlockedNum: Multiplier;
  equipPotionUnlockedNum: Multiplier[] = Array(Enums.HeroKind);

  constructor() {
    for (let index = 0; index < Enums.EquipmentSetKind; index++) {
      this.setItemEquippedNums[index] = new Array(Enums.HeroKind).fill(0);
    }

    this.SetUnlockedNum();
  }

  SetUnlockedNum() {
    this.equipInventoryUnlockedNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 26.0));
    this.equipInventoryUnlockedNum.maxValue = () => InventoryParameter.equipmentInventorySlotNum;
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.equipWeaponUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.equipArmorUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.equipJewelryUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    }
    this.enchantUnlockedNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 6.0));
    this.potionUnlockedNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 6.0));
    for (let index = 0; index < this.equipPotionUnlockedNum.length; index++)
      this.equipPotionUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  }

  Start() {
    // console.log("Start inventory");

    for (let index = 0; index < this.equipmentSlots.length; index++) {
      // this.equipmentSlots[index].Start();
      const id = globalThis.data.source.equipmentId[index] as number;
      let item = {
        kind: globalThis.data.source.equipmentKinds[id],
        optionEffects: [
          {
            kind: globalThis.data.source.equipment1stOptionEffectKinds[id],
            level: globalThis.data.source.equipment1stOptionLevels[id],
            value: globalThis.data.source.equipment1stOptionEffectValues[id],
          },

          {
            kind: globalThis.data.source.equipment2ndOptionEffectKinds[id],
            level: globalThis.data.source.equipment2ndOptionLevels[id],
            value: globalThis.data.source.equipment2ndOptionEffectValues[id],
          },

          {
            kind: globalThis.data.source.equipment3rdOptionEffectKinds[id],
            level: globalThis.data.source.equipment3rdOptionLevels[id],
            value: globalThis.data.source.equipment3rdOptionEffectValues[id],
          },

          {
            kind: globalThis.data.source.equipment4thOptionEffectKinds[id],
            level: globalThis.data.source.equipment4thOptionLevels[id],
            value: globalThis.data.source.equipment4thOptionEffectValues[id],
          },

          {
            kind: globalThis.data.source.equipment5thOptionEffectKinds[id],
            level: globalThis.data.source.equipment5thOptionLevels[id],
            value: globalThis.data.source.equipment5thOptionEffectValues[id],
          },

          {
            kind: globalThis.data.source.equipment6thOptionEffectKinds[id],
            level: globalThis.data.source.equipment6thOptionLevels[id],
            value: globalThis.data.source.equipment6thOptionEffectValues[id],
          },

          {
            kind: globalThis.data.source.equipment7thOptionEffectKinds[id],
            level: globalThis.data.source.equipment7thOptionLevels[id],
            value: globalThis.data.source.equipment7thOptionEffectValues[id],
          },
        ],
        forgeEffects: [
          globalThis.data.source.equipment1stForgeValues[id],
          globalThis.data.source.equipment2ndForgeValues[id],
          globalThis.data.source.equipment3rdForgeValues[id],
          globalThis.data.source.equipment4thForgeValues[id],
          globalThis.data.source.equipment5thForgeValues[id],
          globalThis.data.source.equipment6thForgeValues[id],
          globalThis.data.source.equipment6thForgeValues[id],
        ],
      };
      this.equipmentSlots[index] = new Equipment(item);

      this.equipmentSlots[index].slotId = index;
    }
    // for (let index = 0; index < this.potionSlots.length; index++)
    //   this.potionSlots[index].Start();
    // this.UpdateCanCreatePotion();
    // this.UpdatePotionEquipNum();
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.UpdateSetItemEquippedNumHero(index);
    }
    // console.log(this.setItemEquippedNums[0]);

    // this.setItemEquippedNums[0][0] = 7;
  }

  getSetPart(heroKind: HeroKind = HeroKind.Warrior, part: EquipmentPart = EquipmentPart.Weapon) {
    let offset = this.getOffset(heroKind) + this.getPartOffset(part);
    return this.equipmentSlots.slice(offset, offset + 24);
  }

  getSet(heroKind: HeroKind) {
    return {
      Weapon: this.getSetPart(heroKind, EquipmentPart.Weapon),
      Armor: this.getSetPart(heroKind, EquipmentPart.Armor),
      Jewelry: this.getSetPart(heroKind, EquipmentPart.Jewelry),
    };
  }

  getPartOffset(part: EquipmentPart) {
    switch (part) {
      case EquipmentPart.Weapon:
        return 0;
      case EquipmentPart.Armor:
        return 24;
      case EquipmentPart.Jewelry:
        return 48;
      default:
        return 0;
    }
  }

  SetItemEquippedNum(kind: EquipmentSetKind, heroKind: HeroKind) {
    // console.log(this.setItemEquippedNums[kind][heroKind]);

    return this.setItemEquippedNums[kind][heroKind];
  }

  UpdateSetItemEquippedNum(kind: EquipmentSetKind, heroKind: HeroKind) {
    let num = 0;
    let start = this.getOffset(heroKind);
    let stop = start + 72;

    // console.log(globalThis.data.equipment.setItemArray[kind]);
    // return;

    for (let index = 0; index < globalThis.data.equipment.setItemArray[kind].length; index++) {
      const equipmentKind = globalThis.data.equipment.setItemArray[kind][index];
      for (let equipInventorySlotId = start; equipInventorySlotId < stop; equipInventorySlotId++) {
        if (this.equipmentSlots[equipInventorySlotId].globalInfo.kind == equipmentKind) {
          num++;
          break;
        }
      }
    }

    this.setItemEquippedNums[kind][heroKind] = num;
    // if (heroKind == HeroKind.Wizard) console.log(num, this.setItemEquippedNums[kind][heroKind]);
  }

  UpdateSetItemEquippedNumHero(heroKind: HeroKind) {
    for (let kind = 0; kind < Enums.EquipmentSetKind; kind++) this.UpdateSetItemEquippedNum(kind, heroKind);
  }

  getOffset(hero) {
    switch (hero) {
      case HeroKind.Warrior:
        return 4840;
      case HeroKind.Wizard:
        return 4912;
      case HeroKind.Angel:
        return 4984;
      case HeroKind.Thief:
        return 5056;
      case HeroKind.Archer:
        return 5128;
      case HeroKind.Tamer:
        return 5200;
      default:
        return 0;
    }
  }
}
