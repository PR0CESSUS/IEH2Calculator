import { Enums } from "../../Enums";
import { Util } from "../../Util";
import { Element } from "../../type/Element";

export function renderAttack() {
  let endpoint = new Util.Endpoint();
  let str = `<h3>Attack Stats</h3>`;
  str += `<div class="block">`;
  for (let index = 0; index < Enums.Element; index++) {
    str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].elementDamages[${index}]`)}>${Element[index]} Damage</multiplier-info>`;
  }
  // rest

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[15]`)}>Armored Fury</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[16]`)}>Warded Fury</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[6]`)}>Physical Critical Chance</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[7]`)}>Magical Critical Chance</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[8]`)}>Critical Damage</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].extraAfterDamage`)}>Extra After Damage</multiplier-info>`;

  str += `</div>`;

  return { html: str, endpoints: endpoint.list };
}
