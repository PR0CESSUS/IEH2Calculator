export class PageHelp {
  endpoint;
  constructor() {}

  Initialization() {}

  get html() {
    let html = ``;
    html += `<h3>FAQ</h3>`;
    html += `Most function require using Import Save File otherwise it would require manually adding hundreds of values`;
    html += `<ol>`;
    html += `<li><p>How to adjust Ruby Converter ratio without importing Save File?</p></li>`;
    html += `<div style="padding-top:10px; padding-bottom:10px;">Type into browser javascript console (TotalModifier is number)<br><textarea cols="120" rows="2" spellcheck="false" style="resize: none;overflow:hidden;">
globalThis.data.source.maxModifierCleareds[0] = TotalModifier</textarea></div>`;

    html += `<li>How to use equipment calculator?</li>`;
    html += `<div  style="padding-top:10px; padding-bottom:10px;"><ol>
    <li>Create Stat Snapshot (for current selected hero and loadout)</li>
    <li>Modify item (item kind, enchantments or anvil values) or values in Data tab</li>
    <li>You can use Copy All Enchantments on Anvil button to copy values to internal clipboard and use CTRL+V while hovering on another item to paste them</li>
    <li>New values should be seen in statistic panel with color coding and percentage values comparing it to snapshot </li>
    </ol></div>`;
    html += `<li>How to use battle simulator?</li>`;
    html += `<div  style="padding-top:10px; padding-bottom:10px;"><ol>
    <li>Choose enemy Species, Color and Level</li>
    <li>Enemy stats should be shown</li>
    <li>Super Dungeon checkbox for now has hardcoded DEF/MDEF swap</li>
    <li>Powerup checkbox apply Powerups from Data->SD Powerup->Level entry. You have to enter these manually</li>
    <li>Damage values for basic skill should be shown</li>
    </ol></div>`;
    html += `</ol>`;
    return html;
  }
}
