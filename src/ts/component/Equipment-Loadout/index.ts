import { set, get, startCase } from "lodash";
import template from "./template.html";
import { HeroStats } from "../../data/Stats/HeroStats";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Util } from "../../Util";
import { Element } from "../../type/Element";
import { Stats } from "../../type/Stats";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { HeroKind } from "../../type/HeroKind";
import { HeroSuperStats } from "../../data/SuperStats/HeroSuperStats";
import { SuperDungeonController } from "../../data/SuperDungeon/SuperDungeonController";
import { MultiplierInfo } from "../../Multiplier";
import { Multiplier_Info } from "../multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { DataStorage } from "../DataStorage";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";
import { ComponentHeroStat } from "../HeroStat";
import { SkillParameter } from "../../data/Skill/SkillParameter";
import { customSelect } from "../Select";
import { EquipmentPart } from "../../type/EquipmentPart";
import { Enums } from "../../Enums";
import { EquipmentKind } from "../../type/EquipmentKind";
import { CustomSelectType } from "../../type/CustomSelectType";
import { Localization } from "../../localization";

document.body.innerHTML += template;
export class ComponentEquipmentLoadout extends HTMLElement {
  dataStorage: DataStorage;
  data: HeroStats;
  dataSD: SuperDungeonController;
  hero: HeroKind;

  constructor() {
    super();

    // console.log(this.dataset.hero);

    // this.dataStorage = new DataStorage(this, "ComponentEquipmentLoadout", {
    //   dungeon: 0,
    //   multiplier: 0,
    //   powerup: [0, 0, 0, 0, 0, 0, 0, 0],
    //   applyPowerup: false,
    // });

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("equipment-loadout") as HTMLTemplateElement).content.cloneNode(true));

    (this.shadowRoot.querySelector(`[name="hero"]`) as HTMLDivElement).innerHTML = `<custom-select data-type="${CustomSelectType.HeroKind}"
    data-endpoint="data.source.currentHero">${globalThis.data.source.currentHero}</custom-select>      `;

    // ${
    //   globalThis.data.custom.isSuperDungeon
    //     ? `Grade: ${globalThis.data.superStats.heroes[globalThis.data.source.currentHero].grade}`
    //     : `Level: ${globalThis.data.stats.heroes[globalThis.data.source.currentHero].level}`
    // }

    // this.shadowRoot.innerHTML += `<custom-select data-type="${CustomSelectType.EquipmentForgeEffectKind}"
    // data-endpoint="">23</custom-select>`;

    this.shadowRoot.querySelector(`[name="loadout${globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero]}"]`).classList.add("active");
    // globalThis.data.source.equipmentLoadoutIds[index] + 1
    // console.log(this.data);
    // console.log(this.dataSD);
    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      li.onclick = this.ChangeLoadout.bind(this);
    });
    // globalThis.data.inventory.equipmentSlots.forEach((equipment, index) => {
    //   if (equipment.IsEquipped()) equipment.Start();
    // });
    this.render();
    // this.onkeydown = (event) => {
    //   if (event.ctrlKey && event.key == "v") {
    //     console.log(event);
    //     console.log(event.composedPath());
    //   }
    // };
  }

  ChangeLoadout(event) {
    const id = (event.composedPath()[0] as HTMLLIElement).attributes.getNamedItem("name").value.slice(7);

    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });
    (event.composedPath()[0] as HTMLLIElement).classList.add("active");
    // console.log(globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero]);

    globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] = parseInt(id);
    // console.log(globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero]);
    globalThis.data.save();

    globalThis.data.inventory.Update();
    this.render();
    (document.querySelector("hero-stat") as ComponentHeroStat).render();
  }

  Save(event) {
    this.dataStorage.data.dungeon = (this.shadowRoot.querySelector(`[name="dungeon"]`) as HTMLSelectElement).value;
    this.dataStorage.data.multiplier = (this.shadowRoot.querySelector(`[name="multiplier"]`) as HTMLSelectElement).value;

    for (let index = 0; index < this.dataStorage.data.powerup.length; index++) {
      this.dataStorage.data.powerup[index] = (this.shadowRoot.querySelector(`[name="powerup${index}"]`) as HTMLInputElement).value;
    }
    this.dataStorage.Save();
    this.render();
  }
  isDisabled(part: EquipmentPart, value) {
    if (globalThis.data.custom.isSuperDungeon == false) {
      switch (part) {
        case EquipmentPart.Weapon:
          return globalThis.data.inventory.equipWeaponUnlockedNum[globalThis.data.source.currentHero].Value() <= value;
        case EquipmentPart.Armor:
          return globalThis.data.inventory.equipArmorUnlockedNum[globalThis.data.source.currentHero].Value() <= value;
        case EquipmentPart.Jewelry:
          return globalThis.data.inventory.equipJewelryUnlockedNum[globalThis.data.source.currentHero].Value() <= value;
        default:
          return false;
      }
    } else {
      switch (part) {
        case EquipmentPart.Weapon:
          return globalThis.data.battles[globalThis.data.source.currentHero].superDungeonCtrl.eqWeaponSlotNum.value <= value;
        case EquipmentPart.Armor:
          return globalThis.data.battles[globalThis.data.source.currentHero].superDungeonCtrl.eqArmorSlotNum.value <= value;
        case EquipmentPart.Jewelry:
          return globalThis.data.battles[globalThis.data.source.currentHero].superDungeonCtrl.eqJewelrySlotNum.value <= value;
        default:
          return false;
      }
    }
  }
  render(value = 0) {
    let html = ``;
    let OFFSET = 520 + 72 * 0;
    const INITIAL_OFFSET = 520 + globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] * 72 + globalThis.data.source.currentHero * 720;
    // console.log(OFFSET);

    // console.log(INITIAL_OFFSET);

    // test1.copyWithin(5, 9);
    // console.log(globalThis.data.source.equipmentId);
    // globalThis.data.source.currentHero * 72 +
    const part = EquipmentPart.Weapon;
    const isDisabled = "";

    for (let i = 0; i < Enums.EquipmentPart; i++) {
      const part = EquipmentPart[i];

      html += `<table class="equipment"><tbody>`;
      for (let index = 0; index < 24; index++) {
        let isDisabled = this.isDisabled(i, index) ? 'data-disabled="true"' : "";
        const offset = INITIAL_OFFSET + index + i * 24;

        // if (!this.isDisabled(i, index)) {
        //   globalThis.data.inventory.equipmentSlots[offset].SetAgainAllEffect();
        // } else {
        //   globalThis.data.inventory.equipmentSlots[offset].IsEffectRegisteredClear();
        // }
        // if (index == 1) isDisabled = 'class="TEST';

        if (index % 8 == 0) html += `<tr style="height: 8px;"></tr>`;
        if (index % 4 == 0) html += `<tr>`;
        html += `<td><equipment-info data-id="${offset}" data-slot="${part}" ${isDisabled}></equipment-info></td>`;
        if (index % 4 == 3) html += "</tr>";
      }
      html += "</tbody></table>";
    }

    // Potion
    html += `<table class="equipment"><tbody>`;
    for (let index = 0; index < 6; index++) {
      const offset = 260 + 6 * globalThis.data.source.currentHero + index;
      if (index % 2 == 0) html += `<tr style="height: 8px;"></tr>`;
      html += `<tr><td><equipment-info data-id="${offset}" data-slot="Potion"></equipment-info>`;
    }
    html += `</td></tr>`;
    html += "</tbody></table>";
    // END Potion

    (this.shadowRoot.querySelector(`[name="content"]`) as HTMLDivElement).innerHTML = html;
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
    // (document.querySelector("hero-stat") as ComponentHeroStat).render();
  }
}
