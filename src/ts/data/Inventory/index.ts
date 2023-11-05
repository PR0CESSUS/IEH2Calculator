import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Enums } from "../../Enums";
import { InventoryParameter } from "./InventoryParameter";

export class DataInventory {
  //   isCalledUpdateSetItemEquippedNumInThisSec: boolean[] = Array(Enums.heroKindLength);
  //   int[][] setItemEquippedNums = new int[Enums.EquipmentSetKind)][];
  //   canCreatePotionNums: number[] = Array(Enums.PotionKind);
  //   tempCanCreatePotionNums: number[] = Array(Enums.PotionKind);
  //   double[] potionEquipNums = new double[Enums.PotionKind) * Enums.HeroKind)];
  //   double[] tempPotionEquipNums = new double[Enums.PotionKind) * Enums.HeroKind)];
  //   Action slotUIAction;
  lastPotionSlotUIActionTime = -1.0;
  //   EquipmentSlot[] equipmentSlots = new EquipmentSlot[InventoryParameter.allEquipmentSlotId];
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
    // for (let index = 0; index < this.equipmentSlots.length; index++)
    //   this.equipmentSlots[index].Start();
    // for (let index = 0; index < this.potionSlots.length; index++)
    //   this.potionSlots[index].Start();
    // this.UpdateCanCreatePotion();
    // this.UpdatePotionEquipNum();
  }
}
