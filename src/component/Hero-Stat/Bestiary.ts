import { Util } from "../../Util";

export function renderBestiary() {
  let endpoint = new Util.Endpoint();
  let str = ``;
  str += `<h3>Bestiary Stats</h3>
  <div class="block">`;

  str += `<multiplier-info ${endpoint.new(`monster.doubleCaptureChance[${globalThis.data.source.currentHero}]`)}>Double Capture Chance</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`monster.captureTripleChance[${globalThis.data.source.currentHero}]`)}>Triple Capture  Chance</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].petExpGainPerDefeat`)}>Pet EXP Gain</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[13]`)}>Taming Point Gain</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].loyaltyPoingGain`)}>Loyalty Point Gain</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[17]`)}>Pet Base Physical Critial Chance</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[18]`)}>Pet Base Magical Critial Chance</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[19]`)}>Pet Base Critial Damage</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[20]`)}>Pet Debuff Resistance</multiplier-info>`;

  str += `<multiplier-info ${endpoint.new(`monster.petPassiveEffectMultiplier`)}>Pet Passive Effect</multiplier-info>`;
  str += `</div>`;

  return { html: str, endpoints: endpoint.list };
}
