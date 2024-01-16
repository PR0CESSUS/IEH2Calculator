import { ComponentHeroStat } from "./Hero-Stat";
import { ComponentEquipmentInfo } from "./Equipment-Info";
import { ComponentCustomInput } from "./Input";
import { ComponentCustomSelect } from "./Select";
import { ComponentCustomCheckbox } from "./Checkbox";
import { ComponentMultiplierInfo } from "./Multiplier-Info";
import { ComponentBattleSimulator } from "./Battle-Simulator";
import { ComponentDataOverview } from "./Data-Overview";
import { ComponentEquipmentLoadout } from "./Equipment-Loadout";
import { ComponentCustomDialog } from "./Dialog";
import { ComponentCustomTooltip } from "./Tooltip";
import { ComponentPotionInfo } from "./Potion-Info";
import { ComponentCustomClipboard } from "./Clipboard";

export default function () {
  customElements.define("potion-info", ComponentPotionInfo);
  customElements.define("equipment-info", ComponentEquipmentInfo);
  customElements.define("equipment-loadout", ComponentEquipmentLoadout);
  customElements.define("multiplier-info", ComponentMultiplierInfo);
  customElements.define("hero-stat", ComponentHeroStat);
  customElements.define("battle-simulator", ComponentBattleSimulator);
  customElements.define("custom-checkbox", ComponentCustomCheckbox);
  customElements.define("custom-input", ComponentCustomInput);
  customElements.define("custom-select", ComponentCustomSelect);
  customElements.define("data-overview", ComponentDataOverview);
  customElements.define("custom-dialog", ComponentCustomDialog);
  customElements.define("custom-tooltip", ComponentCustomTooltip);
  customElements.define("custom-clipboard", ComponentCustomClipboard);
}
