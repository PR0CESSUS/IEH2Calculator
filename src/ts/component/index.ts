import { ComponentHeroStat } from "./HeroStat";
import { ComponentEquipmentInfo } from "./equipment";
import userInput from "./userInput";
import { customSelect } from "./Select";
import { customCheckbox } from "./Checkbox";
import { Multiplier_Info, Multiplier_Info_Template } from "./multiplier";
import { ComponentSDSimulator } from "./SDSimulator";
import { ComponentDataOverview } from "./Data-Overview";
import { ComponentEquipmentLoadout } from "./Equipment-Loadout";

export default function () {
  document.body.innerHTML += Multiplier_Info_Template;
  customElements.define("equipment-info", ComponentEquipmentInfo);
  customElements.define("equipment-loadout", ComponentEquipmentLoadout);
  customElements.define("multiplier-info", Multiplier_Info);
  customElements.define("custom-checkbox", customCheckbox);
  customElements.define("hero-stat", ComponentHeroStat);
  customElements.define("sd-simulator", ComponentSDSimulator);
  customElements.define("user-input", userInput);
  customElements.define("custom-select", customSelect);
  customElements.define("data-overview", ComponentDataOverview);
}
