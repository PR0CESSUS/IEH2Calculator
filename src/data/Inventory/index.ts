import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Enums } from "../../Enums";
import { InventoryParameter } from "./InventoryParameter";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { HeroKind } from "../../type/HeroKind";
import { Equipment } from "../Equipment/Equipment";
import { EquipmentPart } from "../../type/EquipmentPart";
import { EquipmentPotion } from "../Equipment/EquipmentPotion";
import { CopyKind } from "../../type/CopyKind";

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
  potionSlots: EquipmentPotion[] = Array(InventoryParameter.allPotionSlotId);
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
      this.equipmentSlots[index] = new Equipment(index);
      this.equipmentSlots[index].Start();
    }

    for (let index = 0; index < this.potionSlots.length; index++) {
      this.potionSlots[index] = new EquipmentPotion(index);
      this.potionSlots[index].Start();
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

  Update() {
    this.equipmentSlots.forEach((equipment, index) => {
      if (equipment.IsEquipped()) {
        equipment.Start();
      } else {
        equipment.IsEffectRegisteredClear();
      }
    });

    for (let index = 260; index < this.potionSlots.length; index++) {
      this.potionSlots[index].Start();
    }
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.UpdateSetItemEquippedNumHero(index);
    }
  }

  getHeroBySlotId(slotId) {
    if (slotId >= 520 && slotId < 1240) {
      return HeroKind.Warrior;
    } else if (slotId >= 1240 && slotId < 1960) {
      return HeroKind.Wizard;
    } else if (slotId >= 1960 && slotId < 2680) {
      return HeroKind.Angel;
    } else if (slotId >= 2680 && slotId < 3400) {
      return HeroKind.Thief;
    } else if (slotId >= 3400 && slotId < 4120) {
      return HeroKind.Archer;
    } else if (slotId >= 4120 && slotId < 4840) {
      return HeroKind.Tamer;
    }
  }

  getPartBySlotId(slotId) {
    const heroKind = this.getHeroBySlotId(slotId);
    const slot = slotId - this.getOffset(heroKind);
    // console.log(slotId, this.getOffset(heroKind), slot);

    if (slot < 24) {
      return EquipmentPart.Weapon;
    } else if (slot >= 24 && slot < 48) {
      return EquipmentPart.Armor;
    } else {
      return EquipmentPart.Jewelry;
    }
  }

  getSetPart(heroKind: HeroKind = HeroKind.Warrior, part: EquipmentPart = EquipmentPart.Weapon) {
    let offset = this.getOffset(heroKind) + this.getPartOffset(part);
    return this.equipmentSlots.slice(offset, offset + 24);
  }

  getPotionOffset(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return 260;
      case HeroKind.Wizard:
        return 266;
      case HeroKind.Angel:
        return 272;
      case HeroKind.Thief:
        return 278;
      case HeroKind.Archer:
        return 284;
      case HeroKind.Tamer:
        return 290;
      default:
        return 260;
    }
  }

  getPotion(heroKind: HeroKind) {
    const offset = this.getPotionOffset(heroKind);
    return this.potionSlots.slice(offset, offset + 6);
  }

  getLoadout(heroKind: HeroKind) {
    return {
      Weapon: this.getSetPart(heroKind, EquipmentPart.Weapon),
      Armor: this.getSetPart(heroKind, EquipmentPart.Armor),
      Jewelry: this.getSetPart(heroKind, EquipmentPart.Jewelry),
      Utility: this.getPotion(heroKind),
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
        if (
          this.equipmentSlots[equipInventorySlotId].globalInfo.kind == equipmentKind &&
          this.equipmentSlots[equipInventorySlotId].IsEquipped() &&
          !this.equipmentSlots[equipInventorySlotId].isDisabled()
        ) {
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

  getOffset(heroKind: HeroKind) {
    // 520 + globalThis.data.source.equipmentLoadoutIds[heroKind] * 72 + globalThis.data.source.currentHero * 720
    switch (heroKind) {
      case HeroKind.Warrior:
        return 520 + globalThis.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Wizard:
        return 1240 + globalThis.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Angel:
        return 1960 + globalThis.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Thief:
        return 2680 + globalThis.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Archer:
        return 3400 + globalThis.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Tamer:
        return 4120 + globalThis.data.source.equipmentLoadoutIds[heroKind] * 72;
      default:
        return 0;
    }
  }

  CopyCurrentLoadout() {
    let array = [];
    const INITIAL_OFFSET = 520 + globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] * 72 + globalThis.data.source.currentHero * 720;
    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      array.push(globalThis.data.inventory.equipmentSlots[index].Copy(CopyKind.Equipment));
    }

    return array;
  }

  PasteLoadout(data) {
    let i = 0;
    const INITIAL_OFFSET = 520 + globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] * 72 + globalThis.data.source.currentHero * 720;
    // console.log("INITIAL_OFFSET", INITIAL_OFFSET);

    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.equipmentSlots[index];
      globalThis.data.source.equipmentKinds[equipment.id] = data[i].kind;

      equipment.optionEffects.forEach((effect, o) => {
        effect.SetKind(data[i].optionEffects[o].kind);
        effect.SetEffectValue(data[i].optionEffects[o].effectValue);
        effect.SetLevel(data[i].optionEffects[o].level);
      });

      equipment.forgeEffects.forEach((forge, f) => {
        forge.SetEffectValue(data[i].forgeEffects[f].effectValue);
      });

      // equipment.Start();

      // console.log(i);
      // equipment.Paste(CopyKind.Equipment, data[i]);
      i++;
    }
    this.Update();
  }
}
