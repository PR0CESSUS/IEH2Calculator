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
import { Localization } from "../../localization";

document.body.innerHTML += template;
export class ComponentDataOverview extends HTMLElement {
  dataStorage: DataStorage;
  constructor() {
    super();

    this.dataStorage = new DataStorage(this, "ComponentDataOverview", {
      tab: "gemritual",
    });

    // this.dataBattle = globalThis.

    this.attachShadow({ mode: "open" }).appendChild(
      (document.getElementById("data-overview") as HTMLTemplateElement).content.cloneNode(true)
    );

    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}"]`).classList.add("active");
    // console.log(this.data);
    // console.log(this.dataSD);

    this.render(this.dataStorage.data.tab);
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
    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}"]`).classList.remove("active");
    this.shadowRoot.querySelector(`[name="${name}"]`).classList.add("active");
    this.dataStorage.data.tab = name;
    this.render(this.dataStorage.data.tab);
    this.dataStorage.Save();
    // console.log(this.dataStorage.data.tab);
  }

  render(name = "") {
    let str = "";
    str += `<table>`;
    switch (name) {
      case "gemritual":
        globalThis.data.sdg.sdGemRitualCtrl.sdGemList.forEach((upgrade, index) => {
          const localization = Localization.SDGemString(upgrade.kind);
          str += `<tr><td>${localization.name}: </td><td><user-input data-endpoint="data.sdg.sdGemRitualCtrl.sdGemList[${index}].level"></user-input></td></tr>`;
        });
        break;
      case "rubyshop":
        globalThis.data.sdg.shopCtrl.itemStatBonusList.forEach((upgrade, index) => {
          const localization = Localization.SDShopString(4 + index * 2);
          str += `<tr><td>${localization}: </td><td><user-input data-endpoint="data.sdg.shopCtrl.itemStatBonusList[${index}].purchasedNum"></user-input></td></tr>`;
        });
        break;
      case "sdupgrade":
        globalThis.data.sdg.upgradeCtrl.upgrade1ist.forEach((upgrade, index) => {
          const localization = Localization.SDUpgradeString(upgrade.kind, upgrade.EffectValue().toString());
          str += `<tr><td>${localization.name}: </td><td><user-input data-endpoint="data.sdg.upgradeCtrl.upgrade1ist[${index}].level"></user-input></td></tr>`;
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
