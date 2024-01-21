import { Util } from "../../Util";

export function renderGains() {
  let endpoint = new Util.Endpoint();
  let str = `<h3>Gain Stats</h3>`;
  const isLog = globalThis.data.custom.isSuperDungeon ? 'data-isLog="true"' : "";
  str += `<div class="block">`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[14]`)}>EXP Gain</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[11]`)}>Skill Proficiency Gain</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[12]`)}>Equipment Proficiency Gain</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[21]`)}>Artifact Proficiency Gain</multiplier-info>`;

  str += `</div>`;

  return { html: str, endpoints: endpoint.list };
}
