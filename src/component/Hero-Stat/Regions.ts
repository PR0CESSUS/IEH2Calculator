import { Enums } from "../../Enums";
import { Util } from "../../Util";
import { MonsterSpecies } from "../../type/MonsterSpecies";

export function renderRegions() {
  let endpoint = new Util.Endpoint();
  let str = `<h3>Region Stats</h3>`;
  str += `<div class="block">`;
  for (let index = 0; index < Enums.MonsterSpecies; index++) {
    if (index == MonsterSpecies.Mimic) continue;
    str += `<multiplier-info  ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].monsterDamages[${index}]`)}>Damage to ${MonsterSpecies[index]}</multiplier-info>`;
  }

  str += `</div>`;
  return { html: str, endpoints: endpoint.list };
}
