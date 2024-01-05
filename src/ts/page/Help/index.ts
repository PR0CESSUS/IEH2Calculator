export class PageHelp {
  endpoint;
  constructor() {}

  Initialization() {}

  get html() {
    let html = ``;
    html += `<h3>FAQ</h3>`;
    html += `<ol>`;
    html += `<li><p>How to adjust Ruby Converter ratio without importing Save File?</p></li>`;
    html += `<div style="padding-top:10px; padding-bottom:10px;">Type into browser javascript console (TotalModifier is number)<br><textarea cols="120" rows="2" spellcheck="false" style="resize: none;overflow:hidden;">
globalThis.data.source.maxModifierCleareds[0] = TotalModifier
globalThis.data.save()
    </textarea></div>`;

    html += `<li>How to use equipment calculator?</li>`;
    html += `<div  style="padding-top:10px; padding-bottom:10px;"><ol>
    <li>Import Save File</li>
    <li>Create Stat Snapshot (for current selected hero and loadout)</li>
    <li>Modify item (item kind, enchantments or anvil values) or values in Data tab</li>
    <li>New values should be seen in statistic panel with color coding and precentage values comparing it to snapshot </li>
    </ol></div>`;
    html += `</ol>`;
    return html;
  }
}
