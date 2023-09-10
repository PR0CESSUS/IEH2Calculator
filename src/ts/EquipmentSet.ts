import { Equipment } from "./type/Equipment";
import { enchantKind } from "./type/EnchantKind";
// import { Equipment } from "./type/Equipment";

export class EquipmentSet {
  set: Equipment[] = [];
  itemList;
  constructor(set = []) {
    // this.itemList = this.getItems();
    // talisman
    // pet
    // town
    this.update();
  }

  addItem(item: Equipment) {
    this.set.push(item);
    this.itemList = this.getItems();
  }

  update() {
    this.itemList = this.getItems();
  }

  getItems() {
    let list = {
      Equipment: {
        Weapon: {},
        Armor: {},
        Jewelry: {},
      },
      Enchantment: {},
    };
    for (let index = 0; index < this.set.length; index++) {
      const item = this.set[index];
      const enchantments = this.set[index].enchants;

      for (let index = 0; index < enchantments.length; index++) {
        const enchant = enchantKind[enchantments[index]];

        list.Enchantment[enchant] = list.Enchantment[enchant] ? list.Enchantment[enchant] + 1 : 1;
      }

      list.Equipment[item.part][item.kind] = list.Equipment[item.part][item.kind] ? list.Equipment[item.part][item.kind] + 1 : 1;
    }
    // console.log("finished itemList");

    return JSON.stringify(list, null, 2);
  }
}
