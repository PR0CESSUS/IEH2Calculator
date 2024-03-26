//TODO Delate unused methods

import { MultiplierInfo, Multiplier } from "../Multiplier";
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
import { DATA } from "..";
import { Localization } from "@/localization";

export class DataInventory {
  data: DATA;
  setItemEquippedNums: any[] = Array(Enums.EquipmentSetKind);
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

  constructor(DATA: DATA) {
    this.data = DATA;
    for (let index = 0; index < Enums.EquipmentSetKind; index++) {
      this.setItemEquippedNums[index] = new Array(Enums.HeroKind).fill(0);
    }

    this.SetUnlockedNum();
  }

  SetUnlockedNum() {
    this.equipInventoryUnlockedNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 26.0));
    this.equipInventoryUnlockedNum.maxValue = () => InventoryParameter.equipmentInventorySlotNum;
    this.enchantUnlockedNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 6.0));
    this.potionUnlockedNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 6.0));

    for (let index = 0; index < Enums.HeroKind; index++) {
      this.equipWeaponUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.equipArmorUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.equipJewelryUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.equipPotionUnlockedNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    }
  }

  Start() {
    // console.log("Start inventory");

    for (let index = 0; index < this.equipmentSlots.length; index++) {
      this.equipmentSlots[index] = new Equipment(this.data, index);
      this.equipmentSlots[index].Start();
    }

    for (let index = 0; index < this.potionSlots.length; index++) {
      this.potionSlots[index] = new EquipmentPotion(this.data, index);
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
    this.equipmentSlots.forEach((equipment, index) => (equipment.IsEquipped() ? equipment.Start() : equipment.IsEffectRegisteredClear()));

    for (let index = 260; index < this.potionSlots.length; index++) this.potionSlots[index].Start();

    for (let index = 0; index < Enums.HeroKind; index++) this.UpdateSetItemEquippedNumHero(index);
    this.data.requireUpdate.value = true;
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

    // console.log(this.#data.equipment.setItemArray[kind]);
    // return;

    for (let index = 0; index < this.data.equipment.setItemArray[kind].length; index++) {
      const equipmentKind = this.data.equipment.setItemArray[kind][index];
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
    // 520 + this.#data.source.equipmentLoadoutIds[heroKind] * 72 + this.#data.source.currentHero * 720
    switch (heroKind) {
      case HeroKind.Warrior:
        return 520 + this.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Wizard:
        return 1240 + this.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Angel:
        return 1960 + this.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Thief:
        return 2680 + this.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Archer:
        return 3400 + this.data.source.equipmentLoadoutIds[heroKind] * 72;
      case HeroKind.Tamer:
        return 4120 + this.data.source.equipmentLoadoutIds[heroKind] * 72;
      default:
        return 0;
    }
  }

  CopyCurrentLoadout() {
    let array = [];
    const INITIAL_OFFSET = 520 + this.data.source.equipmentLoadoutIds[this.data.source.currentHero] * 72 + this.data.source.currentHero * 720;
    const UTILITY_INITIAL_OFFSET = 260 + this.data.source.currentHero * 6;
    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) array.push(this.data.inventory.equipmentSlots[index].Copy(CopyKind.Equipment));
    for (let index = UTILITY_INITIAL_OFFSET; index < UTILITY_INITIAL_OFFSET + 6; index++) array.push(this.data.inventory.potionSlots[index].Copy());

    return array;
  }

  PasteLoadout(data) {
    // console.log("starting adding new equipment", data);

    let i = 0;

    const INITIAL_OFFSET = 520 + this.data.source.equipmentLoadoutIds[this.data.source.currentHero] * 72 + this.data.source.currentHero * 720;
    const UTILITY_INITIAL_OFFSET = 260 + this.data.source.currentHero * 6;
    // console.log("INITIAL_OFFSET", INITIAL_OFFSET);

    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.equipmentSlots[index];

      equipment.SetKind(data[i].kind);
      equipment.optionEffects.forEach((effect, o) => {
        effect.SetKind(data[i].optionEffects[o].kind);
        effect.SetEffectValue(data[i].optionEffects[o].effectValue);
        effect.SetLevel(data[i].optionEffects[o].level);
      });

      equipment.forgeEffects.forEach((forge, f) => forge.SetEffectValue(data[i].forgeEffects[f].effectValue));
      i++;
    }
    for (let index = UTILITY_INITIAL_OFFSET; index < UTILITY_INITIAL_OFFSET + 6; index++) {
      const utility = this.potionSlots[index];
      utility.Paste(data[i]);
      i++;
    }

    // console.log(i);

    this.Update();
  }

  GetLoadoutBreakdownList() {
    const INITIAL_OFFSET = 520 + this.data.source.currentHero * 720 + this.data.source.equipmentLoadoutIds[this.data.source.currentHero] * 72;
    const UTILITY_INITIAL_OFFSET = 260 + this.data.source.currentHero * 6;
    let list = {
      weapons: {},
      armors: {},
      jewelry: {},
      utility: {},
      enchants: {},
    };

    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.equipmentSlots[index];
      if (equipment.kind == 0 || equipment.isDisabled()) continue;
      let name = equipment.Name();
      const effects = equipment.GetOptionEffects(true);
      effects.forEach((effect) => (list.enchants[effect.Name()] = list.enchants[effect.Name()] ? list.enchants[effect.Name()] + 1 : 1));
      switch (equipment.slotPart) {
        case EquipmentPart.Weapon:
          list.weapons[name] = list.weapons[name] ? list.weapons[name] + 1 : 1;
          break;
        case EquipmentPart.Armor:
          list.armors[name] = list.armors[name] ? list.armors[name] + 1 : 1;
          break;
        case EquipmentPart.Jewelry:
          list.jewelry[name] = list.jewelry[name] ? list.jewelry[name] + 1 : 1;
          break;
        default:
          break;
      }
    }

    for (let index = UTILITY_INITIAL_OFFSET; index < UTILITY_INITIAL_OFFSET + 6; index++) {
      const utility = this.potionSlots[index];
      if (utility.kind == 0 || utility.isDisabled()) continue;
      const utilityName = Localization.PotionName(utility.kind);
      list.utility[utilityName] = list.utility[utilityName] ? list.utility[utilityName] + 1 : 1;
    }

    return list;
  }

  GetLoadoutEnchantments(excludeEmpty: boolean = true) {
    const INITIAL_OFFSET = 520 + this.data.source.currentHero * 720 + this.data.source.equipmentLoadoutIds[this.data.source.currentHero] * 72;
    let list = [];
    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.equipmentSlots[index];
      if (equipment.kind == 0 || equipment.isDisabled()) continue;
      const effects = equipment.GetOptionEffects(excludeEmpty);

      if (effects.length) list.push(...effects);
    }

    return list;
  }

  ApplyLoadoutEnchantments(data: { kind: number; value: number }[]) {
    const TOTAL = data.reduce((a, b) => a + b.value, 0);
    let dataIndex = 0;

    if (TOTAL > this.GetLoadoutEnchantments(false).length) return;

    const INITIAL_OFFSET = 520 + this.data.source.currentHero * 720 + this.data.source.equipmentLoadoutIds[this.data.source.currentHero] * 72;

    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      const equipment = this.equipmentSlots[index];
      if (equipment.kind == 0 || equipment.isDisabled()) continue;
      const effects = equipment.GetOptionEffects();

      for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        if (data[dataIndex].value == 0) dataIndex++;
        if (dataIndex == data.length || data[dataIndex].value == 0) {
          this.Update();
          return;
        }

        effect.SetKind(data[dataIndex].kind);
        data[dataIndex].value--;
      }
    }
  }
}
