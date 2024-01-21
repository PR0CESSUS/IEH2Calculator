import { set, get, startCase } from "lodash";
import template from "./template.html";
import style from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
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
import { Localization } from "../../localization";
import { Database } from "../../Database";

export class ComponentDataOverview extends HTMLElement {
  database = {
    tab: "gemritual",
  };
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML += `<style>@import "./styles-bundle.css";${style}</style>`;
    this.shadowRoot.innerHTML += template;
    this.database = globalThis.app.database.Connect("data-overview", this.database);

    // this.dataBattle = globalThis.

    this.shadowRoot.querySelector(`[name="${this.database.tab}"]`).classList.add("active");
    // console.log(this.data);
    // console.log(this.dataSD);

    this.render(this.database.tab);
    // console.log("heroStat constructor after render");
    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      li.onclick = this.changeTab.bind(this);
    });
    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }

  changeTab(event) {
    const name = (event.composedPath()[0] as HTMLLIElement).attributes.getNamedItem("name").value;
    this.shadowRoot.querySelector(`[name="${this.database.tab}"]`).classList.remove("active");
    this.shadowRoot.querySelector(`[name="${name}"]`).classList.add("active");
    this.database.tab = name;
    this.render(this.database.tab);
    globalThis.app.database.Save();
    // console.log(this.dataStorage.data.tab);
  }

  render(name = "") {
    let str = "";
    str += `<table>`;
    switch (name) {
      case "main":
        str += `<tr><th>Hero</th><th>Status</th></tr>`;
        globalThis.data.source.isActiveBattle.forEach((status, index) => {
          str += `<tr><td>${HeroKind[index]}: </td><td>${status ? (globalThis.data.source.currentHero == index ? "active" : "passive") : "inactive"}</td></tr>`;
        });
        break;
      case "gemritual":
        str += `<tr><th>Name</th><th>Level</th></tr>`;
        globalThis.data.sdg.sdGemRitualCtrl.sdGemList.forEach((upgrade, index) => {
          const localization = Localization.SDGemString(upgrade.kind);
          str += `<tr><td>${localization.name}: </td><td><custom-input data-endpoint="data.sdg.sdGemRitualCtrl.sdGemList[${index}].level"></custom-input></td></tr>`;
        });
        break;
      case "rubyshop":
        str += `<tr><th>Name</th><th>Level</th></tr>`;
        globalThis.data.sdg.shopCtrl.itemStatBonusList.forEach((upgrade, index) => {
          const localization = Localization.SDShopString(4 + index * 2);
          str += `<tr><td>${localization}: </td><td><custom-input data-endpoint="data.sdg.shopCtrl.itemStatBonusList[${index}].purchasedNum"></custom-input></td></tr>`;
        });
        break;
      case "sdupgrade":
        str += `<tr><th>Name</th><th>Level</th></tr>`;
        globalThis.data.sdg.upgradeCtrl.upgrade1ist.forEach((upgrade, index) => {
          const localization = Localization.SDUpgradeString(upgrade.kind, upgrade.EffectValue().toString());
          str += `<tr><td>${localization.name}: </td><td><custom-input data-endpoint="data.sdg.upgradeCtrl.upgrade1ist[${index}].level"></custom-input></td></tr>`;
        });
        break;
      case "talisman":
        str += `<tr><th>Name</th><th>Disassambled</th></tr>`;
        globalThis.data.potion.talismans.forEach((upgrade, index) => {
          const localization = Localization.PotionName(upgrade.kind);
          str += `<tr><td>${localization}: </td><td><custom-input data-endpoint="data.potion.talismans[${index}].disassembledNum"></custom-input></td></tr>`;
        });
        break;
      case "expedition":
        str += `<tr><th>Name</th><th>Level</th></tr>`;
        globalThis.data.expedition.expeditions.forEach((expedition, index) => {
          const localization = Localization.ExpeditionGlobalInformationString(expedition);

          str += `<tr><td>${localization.name}: </td><td><custom-input data-endpoint="data.expedition.expeditions[${index}].level"></custom-input></td></tr>`;
        });
        break;
      case "sdpowerup":
        str += `<tr><th>Name</th><th>Rank</th><th>Purchased</th><th>Level</th><th>Passive Effect</th></tr>`;
        globalThis.data.battle.superDungeonCtrl.powerupList.forEach((powerup, index) => {
          const localization = Localization.SDPowerupString(powerup.kind, powerup.PermanentEffectValue());
          // console.log(powerup.purchasedNum);
          // globalThis.data.battles[${globalThis.data.source.currentHero}].superDungeonCtrl.powerupList
          str += `<tr>`;
          str += `<td>${localization.name}: </td>`;
          str += `<td><custom-input data-endpoint="data.battle.superDungeonCtrl.powerupList[${index}].rank"></custom-input></td>`;
          str += `<td><custom-input data-endpoint="data.battle.superDungeonCtrl.powerupList[${index}].purchasedNum"></custom-input></td>`;
          str += `<td><custom-input data-endpoint="data.custom.powerup[${index}]"></custom-input></td>`;
          str += `<td>${localization.passive}</td>`;
          str += `</tr>`;
        });
        break;
      default:
        break;
    }
    str += `</table>`;
    if (name != "") this.shadowRoot.querySelector(`[name="content"]`).innerHTML = str;
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }
}
