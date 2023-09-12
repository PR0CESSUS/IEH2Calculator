import { Equipment } from "./type/Equipment";
import { enchantKind } from "./type/EnchantKind";
import { equipmentSetKind } from "./type/EquipmentSetKind";
// import { Equipment } from "./type/Equipment";

export class EquipmentSet {
  set: Equipment[] = [];
  setBonus = {
    Slime: new Set(),
    Magicslime: new Set(),
    Spider: new Set(),
    Bat: new Set(),
    Fairy: new Set(),
    Fox: new Set(),
    Devilfish: new Set(),
    Treant: new Set(),
    Flametiger: new Set(),
  };
  constructor(set = []) {
    // this.itemList = this.getItems();
    // talisman
    // pet
    // town
    this.update();
    // console.log(equipmentSetKind.join(" : new Set(),\n"));
  }

  addItem(item: Equipment) {
    this.set.push(item);
    if (item.setKind != "Nothing") {
      this.setBonus[item.setKind].add(item.kind);
    }
    // console.log(this.setBonus.Flametiger.size);

    // this.itemList = this.getItems();
  }

  getSetBonus() {
    const FlameTiger = new Set();
    FlameTiger.add("FlametigerCostume");
    FlameTiger.add("FlametigerVolcanicShield");
    FlameTiger.add("FlametigerVolcanicShield");
    // Delete any point with `x > 10`.

    console.log(FlameTiger.size);
    // Expected output: 1
    FlameTiger.forEach((value, a2, a3) => console.log(value));
  }

  update() {
    // this.itemList = this.getItems();
  }

  itemList() {
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

      if (item.kind == "Nothing") {
        continue;
      }

      for (let index = 0; index < enchantments.length; index++) {
        const enchant = enchantKind[enchantments[index]];
        if (enchant == "Nothing") {
          continue;
        }
        if (enchant === undefined) {
          console.log(item, enchantKind[enchantments[index]], index);
        }

        list.Enchantment[enchant] = list.Enchantment[enchant] ? list.Enchantment[enchant] + 1 : 1;
      }

      list.Equipment[item.part][item.kind] = list.Equipment[item.part][item.kind] ? list.Equipment[item.part][item.kind] + 1 : 1;
    }
    // console.log("finished itemList");

    return JSON.stringify(list, null, 2);
  }
}
