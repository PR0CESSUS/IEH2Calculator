import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";

export function GuildSuperAbility(kind: GuildSuperAbilityKind, text1 = "", text2 = "") {
  let str1 = "";
  let str2;
  let str3;
  switch (kind) {
    case GuildSuperAbilityKind.SuperMining:
      str2 = "Super Mining";
      str3 = "Multiply Stone by: Gain " + text1;
      str1 = "Increase level: Mining cap by " + text2;
      break;
    case GuildSuperAbilityKind.SuperSynthesizing:
      str2 = "Super Synthesizing";
      str3 = "Multiply Crystal by: Gain " + text1;
      str1 = "Increase level: Synthesizing cap by " + text2;
      break;
    case GuildSuperAbilityKind.SuperGathering:
      str2 = "Super Gathering";
      str3 = "Multiply Leaf by: Gain " + text1;
      str1 = "Increase level: Gathering cap by " + text2;
      break;
    case GuildSuperAbilityKind.SuperTraining:
      str2 = "Super Training";
      str3 = "Multiply Guild EXP by: Gain " + text1;
      str1 = "Increase level: Training cap by " + text2;
      break;
    case GuildSuperAbilityKind.SuperTrapping:
      str2 = "Super Trapping";
      str3 = "Triple Capture Chance + " + text1;
      str1 = "Increase level: Trapping cap by " + text2;
      break;
    case GuildSuperAbilityKind.SuperBanking:
      str2 = "Super Banking";
      str3 = "Multiply Gold by: Cap " + text1;
      str1 = "Increase level: Banking cap by " + text2;
      break;
    case GuildSuperAbilityKind.SuperFinancing:
      str2 = "Super Financing";
      str3 = "Decrease General Upgrade by: Cost " + text1;
      str1 = "Increase level: Financing cap by " + text2;
      break;
    case GuildSuperAbilityKind.Finding:
      str2 = "Scavenging";
      str3 = "dropped: Multiply amount of materials by " + text1;
      break;
    case GuildSuperAbilityKind.Racing:
      str2 = "Racing";
      str3 = "Multiply Nitro by: Cap " + text1;
      break;
    case GuildSuperAbilityKind.Socializing:
      str2 = "Socializing";
      str3 = "Increase Guild Level Cap (default: GLv300) by " + text1;
      break;
    case GuildSuperAbilityKind.Ritualizing:
      str2 = "Ritualizing";
      str3 = "Multiply Gem Ritual by: Speed " + text1;
      break;
    case GuildSuperAbilityKind.Artificing:
      str2 = "Artificing";
      str3 = "Multiply Artifact Proficiency by: Gain " + text1;
      break;
    case GuildSuperAbilityKind.Haggling:
      str2 = "Haggling";
      str3 = "Decrease Super Dungeon Upgrade by: Cost " + text1;
      break;
    default:
      str2 = kind;
      str3 = text1;
      str1 = text2;
      break;
  }
  return { name: str2, effect1: str3, effect2: str1 };
}
