import heroStat from "./heroStat";
import equipmentInfo from "./equipment";
import userInput from "./userInput";

export default function () {
  customElements.define("equipment-info", equipmentInfo);
  customElements.define("hero-stat", heroStat);
  customElements.define("user-input", userInput);
}
