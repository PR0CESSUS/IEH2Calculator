import { ComponentHeroStat } from "./HeroStat";
import equipmentInfo from "./equipment";
import userInput from "./userInput";
import { customSelect } from "./Select";
import { customCheckbox } from "./Checkbox";
import { Multiplier_Info, Multiplier_Info_Template } from "./multiplier";
import { ComponentSDSimulator } from "./SDSimulator";
import { ComponentDataOverview } from "./Data-Overview";

export default function () {
  document.body.innerHTML += Multiplier_Info_Template;
  customElements.define("multiplier-info", Multiplier_Info);
  customElements.define("equipment-info", equipmentInfo);
  customElements.define("sd-simulator", ComponentSDSimulator);
  customElements.define("hero-stat", ComponentHeroStat);
  customElements.define("user-input", userInput);
  customElements.define("custom-select", customSelect);
  customElements.define("custom-checkbox", customCheckbox);
  customElements.define("data-overview", ComponentDataOverview);
}
