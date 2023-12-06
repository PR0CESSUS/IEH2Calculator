import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { PotionKind } from "../../type/PotionKind";
import { HeroKind } from "../../type/HeroKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { Stats } from "../../type/Stats";
import { EquipmentParameter } from "./EquipmentParameter";
import { EquipmentOptionEffect } from "./EquipmentOptionEffect";
import { EquipmentForgeEffect } from "./EquipmentForgeEffect";
import { InventoryParameter } from "../Inventory/InventoryParameter";
import { Equipment } from "./Equipment";
import { EquipmentPotion } from "./EquipmentPotion";

export type EquipmentSetData = {
  Weapon: Equipment[];
  Armor: Equipment[];
  Jewelry: Equipment[];
  Utility: EquipmentPotion[];
};

export class EquipmentSet {
  items: EquipmentSetData = {
    Weapon: Array(24),
    Armor: Array(24),
    Jewelry: Array(24),
    Utility: Array(6),
  };
  itemsList = Array(72);
  heroKind: HeroKind;
  setBonus = Array(Enums.EquipmentSetKind);
  isEffectRegistered: boolean[] = Array(Enums.HeroKind);
  isMasteryEffectRegistered;
  isOptionEffectRegistered: boolean[] = Array(Enums.HeroKind).fill([]);

  constructor(heroKind: HeroKind, set) {
    this.heroKind = heroKind;
    this.items = set;

    for (let index = 0; index < 24; index++) {
      this.items.Weapon[index].set = this;
      this.items.Armor[index].set = this;
      this.items.Jewelry[index].set = this;

      if (index < 6) this.items.Utility[index].index = index;
    }

    this.itemsList = [...this.items.Weapon, ...this.items.Armor, ...this.items.Jewelry];

    // if (heroKind == HeroKind.Archer) console.log(this);
    this.getSetBonus();
    // console.log(this.setBonus[5].size);
    //
  }

  getSetBonus() {
    for (let index = 0; index < this.setBonus.length; index++) {
      this.setBonus[index] = new Set();
    }

    for (let index = 0; index < this.itemsList.length; index++) {
      if (this.itemsList[index].setKind == undefined) continue;
      // console.log(this.itemsList[index].setKind);

      this.setBonus[this.itemsList[index].setKind].add(EquipmentKind[this.itemsList[index].kind]);
    }
  }

  Edit() {}

  Start() {
    // this.CalculateRequiredLevel();
    // this.CalculateRequiredAbilityPoint();
  }
}
