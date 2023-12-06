//@ts-nocheck
// import { Enums } from "../../Enums";
// import { MultiplierInfo } from "../../Multiplier";
// import { MultiplierKind } from "../../type/MultiplierKind";
// import { SkillKindTamer } from "../../type/SkillKindTamer";
// import { SkillKindWarrior } from "../../type/SkillKindWarrior";
// import { SkillKindWizard } from "../../type/SkillKindWizard";
// import { SkillKindAngel } from "../../type/SkillKindAngel";
// import { SkillKindArcher } from "../../type/SkillKindArcher";
// import { SkillKindThief } from "../../type/SkillKindThief";
// import { HeroKind } from "../../type/HeroKind";

// function test(value) {
//   switch (true) {
//     case value in SkillKindWarrior:
//       return HeroKind.Warrior;
//     case value in SkillKindWizard:
//       return HeroKind.Wizard;
//     case value in SkillKindAngel:
//       return HeroKind.Angel;
//     case value in SkillKindThief:
//       return HeroKind.Thief;
//     case value in SkillKindArcher:
//       return HeroKind.Archer;
//     case value in SkillKindTamer:
//       return HeroKind.Tamer;
//     default:
//       break;
//   }
//   // console.log(value in SkillKindWarrior)
//   // console.log(value in SkillKindTamer)
// }

// // AnthemOfEnthusiasm
// // gdzie w source czyli jaki heroes
// // który to skill

// SkillKindTamer.AnthemOfEnthusiasm;

// this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, BasicStatsKind.MP, MultiplierType.Add, 250.0));

// for (let index = 0; index < Enums.HeroKind; index++) {
//   let multiplierInfo = new MultiplierInfo(
//     MultiplierKind.SkillPassive,
//     this.multiplierType,
//     () => this.EffectValue(index),
//     () => this.IsActivated
//   );
//   globalThis.data.stats.BasicStats(index, this.basicStatsKind).RegisterMultiplier(multiplierInfo);
// }
