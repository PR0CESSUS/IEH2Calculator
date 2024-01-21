import { Enums } from "../../Enums";
import { Util } from "../../Util";
import { Element } from "../../type/Element";

export function renderDefense() {
  let str = `<h3>Defense Stats</h3>`;
  let endpoint = new Util.Endpoint();
  str += `<div class="block">`;
  // resistance
  for (let index = 1; index < Enums.Element; index++) {
    str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[${index}]`)}>${Element[index]} Resistance</multiplier-info>`;
  }
  // debuff resistance

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[5]`)}>Debuff Resistance</multiplier-info>`;
  // absoptions
  for (let index = 0; index < Enums.Element; index++) {
    str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].elementAbsoptions[${index}]`)}>${Element[index]} Absorption</multiplier-info>`;
  }
  str += `</div>`;
  str += `<div class="block">`;
  // nullify
  for (let index = 0; index < Enums.Element; index++) {
    str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].elementInvalids[${index}]`)}>${Element[index]} Nullify Chance</multiplier-info>`;
  }
  str += `</div>`;
  return { html: str, endpoints: endpoint.list };
}
