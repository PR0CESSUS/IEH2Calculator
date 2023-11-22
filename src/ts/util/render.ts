import { convertTo } from "./convertTo";
import { Multiplier } from "../Multiplier";
import { Enums } from "../Enums";
import { EquipmentPart } from "../type/EquipmentPart";
import { EquipmentKind } from "../type/EquipmentKind";
import { PotionKind } from "../type/PotionKind";
import { Localization } from "../localization";

export const render = {
  Statistic(multiplier: Multiplier, name: string, type = null) {
    if (multiplier.isDirty) multiplier.Calculate();
    let html = `<div class="tooltip statistic">${name}<span style="float:right">${convertTo(multiplier.value, 2, type)}</span>`;

    html += /*html*/ `<div class="tooltip-text"><table>`;
    html += /*html*/ `<tr><td class="equipment-heading">Additive:</td> <td></td></tr>`;
    for (const [key, value] of Object.entries(multiplier.additiveKind)) {
      html += `<tr><td>-${key}</td> <td>${convertTo(value, 2, type)}</td></tr>`;
    }
    html += /*html*/ `<tr><td></td></tr>`;
    html += /*html*/ `<tr><td></td></tr>`;
    html += /*html*/ `<tr><td class="equipment-heading">Multiplicative:</td> <td></td></tr>`;
    for (const [key, value] of Object.entries(multiplier.multiplicativeKind)) {
      html += `<tr><td>-${key}</td> <td>${convertTo(value, 2, "%")}</td></tr>`;
    }
    html += /*html*/ `<tr><td></td></tr>`;
    html += /*html*/ `<tr><td></td></tr>`;
    html += /*html*/ `<tr><td class="equipment-heading">Total:</td> <td>${convertTo(multiplier.Value(), 2, type)}</td></tr>`;
    html += /*html*/ `</table></div>`;
    html += /*html*/ `</div>`;
    return html;
  },

  Select(kind) {
    let html = "";

    const EnumType = kind == "Utility" ? Enums.PotionKind : Enums.EquipmentKind;

    for (let index = 1; index < EnumType; index++) {
      switch (kind) {
        case "Armor":
          if (globalThis.data.equipment.globalInformations[index].part != EquipmentPart.Armor) continue;
          break;
        case "Weapon":
          if (globalThis.data.equipment.globalInformations[index].part != EquipmentPart.Weapon) continue;
          break;
        case "Jewelry":
          if (globalThis.data.equipment.globalInformations[index].part != EquipmentPart.Jewelry) continue;
          break;

        default:
          break;
      }
      html +=
        kind == "Utility"
          ? `<option value="${index}">${PotionKind[index]}</option>`
          : `<option value="${index}">${Localization.EquipmentName(index)}</option>`;
    }

    return html;
  },
};
