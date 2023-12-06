import heroStat from "./heroStat";
import equipmentInfo from "./equipment";
import userInput from "./userInput";
import { customSelect } from "./Select";
import { customCheckbox } from "./Checkbox";
import { Multiplier_Info, Multiplier_Info_Template } from "./multiplier";

export default function () {
  document.body.innerHTML += Multiplier_Info_Template;
  customElements.define("multiplier-info", Multiplier_Info);
  customElements.define("equipment-info", equipmentInfo);
  customElements.define("hero-stat", heroStat);
  customElements.define("user-input", userInput);
  customElements.define("custom-select", customSelect);
  customElements.define("custom-checkbox", customCheckbox);
}
