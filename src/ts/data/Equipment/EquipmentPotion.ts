import { PotionKind } from "../../type/PotionKind";
import { EquipmentSet } from "./EquipmentSet";

export class EquipmentPotion {
  set: EquipmentSet;
  kind: PotionKind = 0;
  stack: number = 0;
  index: number = 0;
  slotType = "Utility";
  constructor(set: EquipmentSet, kind: PotionKind, stack: number) {
    this.set = set;
    this.kind = kind;
    this.stack = stack;
  }

  get level() {
    return globalThis.data.potion.GlobalInfo(this.kind).level;
  }

  Edit() {
    // console.log("edit", this.kind, this.stack);
    let html = "";
    html += `<div id="modal">
        <div class="modal-underlay" onclick="window.app.router.load()"></div>
        <div id="modal-content" class="modal-content" data-endpoint="globalThis.app.page['equipment'].set.${this.set.hero}.items.Utility[${this.index}].html">`;
    html += this.HTML(true);
    html += `</div></div>`;
    document.getElementById("content").innerHTML += html;
    // console.log(globalThis.data.potion.GlobalInfo(this.kind).effectValue);
  }

  onchange(event) {}

  HTML(edit: boolean = false) {
    const endpoint = `globalThis.app.page['equipment'].set.${this.set.hero}.items.Utility[${this.index}]`;
    let html = "";
    html += `<table><tr>`;
    html += `<td rowspawn="2"><img class="icon96" data-type="image" src="img/equip/${PotionKind[this.kind]}.png"></td>`;
    html += `<td style="vertical-align: top;">`;
    //data-endpoint="globalThis.app.page['equipment'].set.${this.set.hero}.items.Utility[${this.index}].kind"
    // console.log(document.getElementById("modal").ch);

    if (edit) {
      html += `<select style="width: 300px"  onchange="${endpoint}.kind = this.value; document.getElementById('modal-content').innerHTML = globalThis.app.page['equipment'].set.${this.set.hero}.items.Utility[${this.index}].HTML(true)">`;
      for (let index = 0; index < Object.entries(PotionKind).length / 2; index++) {
        html += `<option value="${index}" ${index == this.kind ? "selected" : ""}>${PotionKind[index]}</option>`;
      }
      html += `</select>`;
    } else {
      html += `${PotionKind[this.kind]}`;
    }

    html += ` &lt;<span class="green">Lv ${this.level}</span>&gt; <br><br>`;

    if (edit) {
      html += `<p>Amount: <input type="text" size="6" value="${this.stack}"></p></td></tr>`;
    } else {
      html += `<p>Stack # : ${this.stack} / 30</p></td></tr>`;
    }

    // console.log(this.set.custom.items.Utility[equipment.index].amount);

    // html += `<tr><td data-endpoint="calculator.equipment.set.custom.items.${part}[${equipment.index}].effect"></td></tr>`;
    html += `</table>`;
    html += `<p>Effect: ${globalThis.data.potion.GlobalInfo(this.kind).effectValue}</p>`;
    return html;
  }

  get html() {
    return this.HTML();
  }
}
