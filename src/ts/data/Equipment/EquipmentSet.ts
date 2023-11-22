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

export class EquipmentSet {
  items: {
    Weapon: Equipment[];
    Armor: Equipment[];
    Jewelry: Equipment[];
    Utility: EquipmentPotion[];
  } = {
    Weapon: Array(24),
    Armor: Array(24),
    Jewelry: Array(24),
    Utility: Array(6),
  };
  hero;
  isEffectRegistered: boolean[] = Array(Enums.HeroKind);
  isMasteryEffectRegistered;
  isOptionEffectRegistered: boolean[] = Array(Enums.HeroKind).fill([]);

  constructor(hero, set = null) {
    this.hero = hero;

    if (set == null) {
      for (let index = 0; index < 24; index++) {
        this.items.Weapon[index] = new Equipment({ kind: 0, forgeEffects: Array(7).fill(0), optionEffects: Array(7).fill([0, 0, 0]) });

        this.items.Armor[index] = new Equipment({ kind: 157, forgeEffects: Array(7).fill(0), optionEffects: Array(7).fill([0, 0, 0]) });

        this.items.Jewelry[index] = new Equipment({ kind: 0, forgeEffects: Array(7).fill(0), optionEffects: Array(7).fill([0, 0, 0]) });

        if (index < 6) {
          this.items.Utility[index] = new EquipmentPotion(this, 1, 1);
          this.items.Utility[index].index = index;
        }
      }
    } else {
      for (let index = 0; index < 24; index++) {
        this.items.Weapon[index] = set.Weapon[index];

        this.items.Armor[index] = set.Armor[index];

        this.items.Jewelry[index] = set.Jewelry[index];

        if (index < 6) {
          this.items.Utility[index] = new EquipmentPotion(this, 1, 1);
          this.items.Utility[index].index = index;
        }
      }
    }

    //
  }

  get html() {
    const endpoint = `globalThis.app.page['equipment'].set.${this.hero}.items`;
    let html = ``;

    // weapons

    for (let i = 0; i < Enums.EquipmentPart; i++) {
      const part = EquipmentPart[i];
      // console.log(part);

      html += `<table class="equipment"><thead><tr><th colspan="4">${part}</th></tr></thead><tbody>`;
      for (let index = 0; index < 24; index++) {
        if (index % 8 == 0) html += `<tr style="height: 8px;"></tr>`;
        if (index % 4 == 0) html += `<tr>`;

        const equipment = this.items[part][index];
        // console.log(index, equipment);
        html += `<td><equipment-info data-endpoint="page['equipment'].set.${this.hero}.items.${part}[${index}]"  data-slot="${part}"></equipment-info></td>`;

        if (index % 4 == 3) html += "</tr>";
      }
      html += "</tbody></table>";
    }

    // Utility
    html += `<table class="equipment"><thead><tr><th style="font-size: 13px;">Utility</th></tr></thead><tbody>`;
    for (let index = 0; index < this.items.Utility.length; index++) {
      if (index % 2 == 0) html += `<tr style="height: 8px;"></tr>`;
      html += `<tr><td><equipment-info data-endpoint="page['equipment'].set.${this.hero}.items.Utility[${index}]" data-slot="Utility"></equipment-info>`;
    }

    html += `</td></tr>`;

    html += "</tbody></table>";

    return html;
  }

  Edit() {}

  Start() {
    // this.CalculateRequiredLevel();
    // this.CalculateRequiredAbilityPoint();
  }
}
