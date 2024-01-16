export class PageEquipment {
  constructor() {}

  get html() {
    let html = ``;
    // html += `<custom-checkbox data-endpoint="data.custom.isSuperDungeon">Super Dungeon</custom-checkbox>`;
    html += `<equipment-loadout></equipment-loadout>`;
    html += `<hero-stat></hero-stat>`;

    return html;
  }
}
