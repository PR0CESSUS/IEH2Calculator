import { ComponentHeroStat } from "./../Hero-Stat/index";
import { Equipment } from "./../../data/Equipment/Equipment";
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

import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";
import { SkillParameter } from "../../data/Skill/SkillParameter";
import { EquipmentPart } from "../../type/EquipmentPart";
import { Enums } from "../../Enums";
import { EquipmentKind } from "../../type/EquipmentKind";
import { CustomSelectType } from "../../type/CustomSelectType";
import { Localization } from "../../localization";
import style from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
import { CopyKind } from "../../type/CopyKind";
import { ComponentCustomClipboard } from "../Clipboard";
import { Buff } from "../../type/Buff";
import brotliPromise from "brotli-wasm"; // Import the default export

export class ComponentEquipmentLoadout extends HTMLElement {
  data: HeroStats;
  dataSD: SuperDungeonController;
  hero: HeroKind;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML += `<style>@import "./styles-bundle.css";${style}</style>`;
    this.shadowRoot.innerHTML += template;
    // console.log(this.dataset.hero);

    (this.shadowRoot.querySelector(`[name="hero"]`) as HTMLDivElement).innerHTML = `<custom-select data-type="${CustomSelectType.HeroKind}"
    data-endpoint="data.source.currentHero">${globalThis.data.source.currentHero}</custom-select>`;

    // ${
    //   globalThis.data.custom.isSuperDungeon
    //     ? `Grade: ${globalThis.data.superStats.heroes[globalThis.data.source.currentHero].grade}`
    //     : `Level: ${globalThis.data.stats.heroes[globalThis.data.source.currentHero].level}`
    // }
    (this.shadowRoot.querySelector(`[name="copy-loadout"]`) as HTMLButtonElement).onclick = (event) => {
      // console.log("butnn");
      const clipboard = document.querySelector("custom-clipboard") as ComponentCustomClipboard;
      const loadoutData = globalThis.data.inventory.CopyCurrentLoadout();

      // console.log(array);
      clipboard.type = CopyKind.EquipmentLoadout;
      clipboard.data = loadoutData;
      // console.log(loadoutData);

      brotliPromise.then((brotli) => {
        // console.log(val);
        const textEncoder = new TextEncoder();
        const uncompressedData = textEncoder.encode(JSON.stringify(loadoutData));
        const compressedData = brotli.compress(uncompressedData, { quality: 11 });
        // console.log(compressedData.byteLength);

        navigator.clipboard.writeText(
          JSON.stringify({
            type: CopyKind.EquipmentLoadout,
            data: Util.encoder(compressedData),
          })
        );
      });

      // console.log("JSON length", JSON.stringify(loadoutData).length);

      // const compressedBytes = Util.compress(JSON.stringify(loadoutData), "gzip");
      // compressedBytes.then((arrayBuffer) => {
      //   const buffer = Buffer.from(arrayBuffer).toString("base64");

      //   console.log("base64 length", buffer.length);
      //   console.log("custom encoder", Util.encoder(Buffer.from(arrayBuffer)).length);
      // });

      // const buffer = Util.compressEquipmentLoadout(loadoutData);

      // console.log("custom buffer base 64", buffer.toString("hex").length);
      // console.log("custom buffer base 64", buffer.toJSON());

      // const data = {
      //   type: CopyKind.EquipmentLoadout,
      //   data: loadoutData,
      // };
      // navigator.clipboard.writeText(JSON.stringify(data));

      // console.log(navigator.clipboard.readText().then());
    };
    // this.onkeydown = (event) => {
    //   const clipboard = document.querySelector("custom-clipboard") as ComponentCustomClipboard;
    //   if (event.ctrlKey && event.key == "v") {
    //     // this.render();
    //     (document.querySelector("hero-stat") as ComponentHeroStat).render();
    //   } else if (event.ctrlKey && event.key == "c") {
    //     console.log("asd");

    //     // clipboard.type = CopyKind.Equipment;
    //     // clipboard.data = this.equipment.Copy(CopyKind.Equipment);
    //   }
    // };
    // this.shadowRoot.innerHTML += `<custom-select data-type="${CustomSelectType.EquipmentForgeEffectKind}"
    // data-endpoint="">23</custom-select>`;
    // this.onfocus = (event) => {
    //   console.log(event);
    //   event.preventDefault();
    //   event.stopPropagation();
    // };
    const equipmentListBtn = this.shadowRoot.querySelector('[slot="button"]') as HTMLButtonElement;
    const equipmentListContent = this.shadowRoot.querySelector('[slot="dialog"]') as HTMLDivElement;

    equipmentListContent.innerHTML = this.renderEquipmentList();
    // equipmentListBtn.onclick = (event) => {
    //   console.log("click");
    // };

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
    // globalThis.data.save();

    globalThis.data.inventory.Update();
    this.Update();
  }

  render(value = 0) {
    let html = ``;
    let OFFSET = 520 + 72 * 0;
    const INITIAL_OFFSET = 520 + globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] * 72 + globalThis.data.source.currentHero * 720;

    for (let i = 0; i < Enums.EquipmentPart; i++) {
      const part = EquipmentPart[i];

      html += `<table class="equipment"><tbody>`;
      for (let index = 0; index < 24; index++) {
        const offset = INITIAL_OFFSET + index + i * 24;

        if (index % 8 == 0) html += `<tr style="height: 8px;"></tr>`;
        if (index % 4 == 0) html += `<tr>`;
        html += `<td><equipment-info data-id="${offset}" id="Equipment${offset}"></equipment-info></td>`;
        if (index % 4 == 3) html += "</tr>";
      }
      html += "</tbody></table>";
    }

    // Potion
    html += `<table class="equipment"><tbody>`;
    for (let index = 0; index < 6; index++) {
      const offset = 260 + 6 * globalThis.data.source.currentHero + index;

      if (index % 2 == 0 && index != 0) html += `<tr style="height: 8px;"></tr>`;
      html += `<tr><td><potion-info data-id="${offset}" id="Potion${offset}"></potion-info>`;
    }
    html += `</td></tr>`;
    html += "</tbody></table>";
    // END Potion

    (this.shadowRoot.querySelector(`[name="content"]`) as HTMLDivElement).innerHTML = html;
  }

  getEquipmentList() {
    const INITIAL_OFFSET = 520 + globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] * 72 + globalThis.data.source.currentHero * 720;
    let str = "";
    let list = {};
    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      if (globalThis.data.inventory.equipmentSlots[index].kind == 0) continue;
      let equipment = Localization.EquipmentName(globalThis.data.inventory.equipmentSlots[index].kind);

      list[equipment] = list[equipment] ? list[equipment] + 1 : 1;
    }

    for (const [key, value] of Object.entries(list)) {
      str += `${key}: ${value}<br>`;
    }
    return str;
  }

  getEquipmentEffectList() {
    const INITIAL_OFFSET = 520 + globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] * 72 + globalThis.data.source.currentHero * 720;
    let str = "";
    let list = {};
    for (let index = INITIAL_OFFSET; index < INITIAL_OFFSET + 72; index++) {
      if (globalThis.data.inventory.equipmentSlots[index].kind == 0) continue;
      for (let i = 0; i < globalThis.data.inventory.equipmentSlots[index].optionEffects.length; i++) {
        if (globalThis.data.inventory.equipmentSlots[index].optionEffects[i].kind == 0) continue;
        const effect = Localization.EquipmentEffectName(globalThis.data.inventory.equipmentSlots[index].optionEffects[i].kind);
        list[effect] = list[effect] ? list[effect] + 1 : 1;
      }
    }

    for (const [key, value] of Object.entries(list)) {
      str += `${key}: ${value}<br>`;
    }
    return str;
  }

  renderEquipmentList() {
    let str = ``;
    str += `<div style="float:left;"><h3>Equipment List</h3>${this.getEquipmentList()}</div>`;
    str += `<div style="float:right"><h3>Enchantment List</h3>${this.getEquipmentEffectList()}</div>`;

    return str;
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
    // (document.querySelector("hero-stat") as ComponentHeroStat).render();
  }

  Update() {
    // console.log(this.shadowRoot.querySelector("hero-stat"));
    this.render();

    (document.querySelector("hero-stat") as ComponentHeroStat).Update();
  }
}
