import { Enums } from "../../Enums";
import { NumberType } from "../../type/NumberType";
import { HeroKind } from "../../type/HeroKind";
import { Util } from "../../Util";

export function renderSkill() {
  let endpoint = new Util.Endpoint();
  let str = `<h3>Skills</h3>`;
  str += `<div class="block">`;
  for (let index = 0; index < Enums.HeroKind; index++) {
    str += `<multiplier-info  ${endpoint.new(`skill.skillLevelBonus[${index}]`)} data-type=${NumberType.Normal}>${HeroKind[index]} Skill Level Bonus</multiplier-info>`;
  }
  for (let index = 0; index < Enums.HeroKind; index++) {
    str += `<multiplier-info ${endpoint.new(`skill.skillRangeMultiplier[${index}]`)} data-type=${NumberType.Percent}>${HeroKind[index]}'s Class Skills Range</multiplier-info>`;
  }
  str += `</div>`;
  str += `<div class="block">`;
  for (let index = 0; index < Enums.HeroKind; index++) {
    str += `<multiplier-info  ${endpoint.new(`skill.skillEffectRangeMultiplier[${index}]`)} data-type=${NumberType.Percent}>${
      HeroKind[index]
    }'s Class Skills Area of Effect</multiplier-info>`;
  }
  str += `</div>`;
  return { html: str, endpoints: endpoint.list };
}
