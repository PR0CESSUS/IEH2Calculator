import { Element } from "../../type/Element";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { HeroKind } from "../../type/HeroKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { SDModifierKind } from "../../type/SDModifierKind";
import { CHALLENGE_BATTLE } from "../Battle/CHALLENGE_BATTLE";
import { MONSTER_BATTLE } from "../Battle/MONSTER_BATTLE";
import { Equipment } from "./Equipment";
import { EquipmentParameter } from "./EquipmentParameter";

export function EnchantmentOptimizer(enemy: CHALLENGE_BATTLE | MONSTER_BATTLE, equipment: Equipment, optionId: number) {
  // const enemy = this.data.battle.Enemy();
  // type optymalizacja dla czego?
  const data = enemy.data;
  let finalList = [];

  const info = enemy.AttackedInfo();
  const species = addKnowledge(enemy.species);
  const element = addElement(info.element);
  const basicStat = addBasicStat(enemy.data.source.isActiveSdModifiers[950 + SDModifierKind.SwapATKWithDEF]);
  const blessing = addBlessing();
  const skill = addSkill(equipment.heroKind);
  const rest = addRest();
  if (data.source.isBlessing) finalList = [...finalList, ...blessing];

  finalList = [...finalList, ...species, ...element, ...basicStat, ...skill, ...rest];
  // console.log("rest:", rest);
  // console.log("blessing:", blessing);
  // console.log("element:", element);
  // console.log("species:", species);
  // console.log("basicStat:", basicStat);
  // console.log("skill:", skill);
  // console.log("finalList:", finalList);
  console.log("EnchantmentOptimizer: debug");

  let dps = 0;
  let bestDps = 0;
  let bestKind = 0;

  for (let index = 0; index < finalList.length; index++) {
    const enchantKind = finalList[index];
    if (EquipmentParameter.RequiredLevelIncrement(enchantKind, 1) > equipment.data.source.enemyLevel) continue;
    equipment.optionEffects[optionId].kind = enchantKind;
    dps = enemy.AttackedInfo().dps;
    if (bestDps < dps) {
      bestDps = dps;
      bestKind = enchantKind;
    }
    // if (dps > orginalDPS) list.push(`EquipmentEffectKind.${EquipmentEffectKind[index]}`);
    console.log("enchant kind:", EquipmentEffectKind[enchantKind], "dps:", dps);
  }
  equipment.optionEffects[optionId].kind = bestKind;
  // console.log("info:", info);

  console.log("bestDps:", bestDps);
  console.log("bestKind:", bestKind);
}

function addBasicStat(isSwapATKWithDEF: boolean) {
  let result = [EquipmentEffectKind.SPDAdder, EquipmentEffectKind.SPDMultiplier, EquipmentEffectKind.SPDAfter];
  if (isSwapATKWithDEF) {
    result = [
      ...result,
      ...[
        EquipmentEffectKind.DEFAdder,
        EquipmentEffectKind.MDEFAdder,
        EquipmentEffectKind.DEFMultiplier,
        EquipmentEffectKind.MDEFMultiplier,
        EquipmentEffectKind.DEFPropotion,
        EquipmentEffectKind.MDEFPropotion,
        EquipmentEffectKind.DEFAfter,
        EquipmentEffectKind.MDEFAfter,
      ],
    ];
  } else {
    result = [
      ...result,
      ...[
        EquipmentEffectKind.ATKAdder,
        EquipmentEffectKind.MATKAdder,
        EquipmentEffectKind.ATKMultiplier,
        EquipmentEffectKind.MATKMultiplier,
        EquipmentEffectKind.ATKPropotion,
        EquipmentEffectKind.MATKPropotion,
        EquipmentEffectKind.ATKAfter,
        EquipmentEffectKind.MATKAfter,
      ],
    ];
  }

  return result;
}

function addBlessing() {
  return [EquipmentEffectKind.BlessingEffect, EquipmentEffectKind.BlessingEffectMultiplier];
}

function addSkill(heroKind: HeroKind) {
  switch (heroKind) {
    case HeroKind.Warrior:
      return [EquipmentEffectKind.WarriorSkillLevel];
    case HeroKind.Wizard:
      return [EquipmentEffectKind.WizardSkillLevel];
    case HeroKind.Angel:
      return [EquipmentEffectKind.AngelSkillLevel];
    case HeroKind.Thief:
      return [EquipmentEffectKind.ThiefSkillLevel];
    case HeroKind.Archer:
      return [EquipmentEffectKind.ArcherSkillLevel];
    case HeroKind.Tamer:
      return [EquipmentEffectKind.TamerSkillLevel];

    default:
      break;
  }
}

function addRest() {
  return [
    EquipmentEffectKind.ArmoredFury,
    EquipmentEffectKind.AllSkillLevel,
    EquipmentEffectKind.CriticalDamage,
    EquipmentEffectKind.WardedFury,
    EquipmentEffectKind.CriticalDamageMultiplier,

    EquipmentEffectKind.CriticalDamageAfter,

    EquipmentEffectKind.ExtraAfterDamage,
  ];
}

function addElement(element: Element) {
  switch (element) {
    case Element.Physical:
      return [EquipmentEffectKind.PhysicalDamage, EquipmentEffectKind.PhysicalDamageMultiplier, EquipmentEffectKind.PhysicalDamageAfter];
    case Element.Fire:
      return [EquipmentEffectKind.FireDamage, EquipmentEffectKind.FireDamageMultiplier, EquipmentEffectKind.FireDamageAfter];
    case Element.Thunder:
      return [EquipmentEffectKind.ThunderDamage, EquipmentEffectKind.ThunderDamageMultiplier, EquipmentEffectKind.ThunderDamageAfter];
    case Element.Ice:
      return [EquipmentEffectKind.IceDamage, EquipmentEffectKind.IceDamageMultiplier, EquipmentEffectKind.IceDamageAfter];
    case Element.Light:
      return [EquipmentEffectKind.LightDamage, EquipmentEffectKind.LightDamageMultiplier, EquipmentEffectKind.LightDamageAfter];
    case Element.Dark:
      return [EquipmentEffectKind.DarkDamage, EquipmentEffectKind.DarkDamageMultiplier, EquipmentEffectKind.DarkDamageAfter];

    default:
      break;
  }
}

function addKnowledge(species: MonsterSpecies) {
  switch (species) {
    case MonsterSpecies.Slime:
      return [EquipmentEffectKind.SlimeKnowledge, EquipmentEffectKind.SlimeKnowledgeAfter];
    case MonsterSpecies.MagicSlime:
      return [EquipmentEffectKind.MagicSlimeKnowledge, EquipmentEffectKind.MagicSlimeKnowledgeAfter];
    case MonsterSpecies.Spider:
      return [EquipmentEffectKind.SpiderKnowledge, EquipmentEffectKind.SpiderKnowledgeAfter];
    case MonsterSpecies.Bat:
      return [EquipmentEffectKind.BatKnowledge, EquipmentEffectKind.BatKnowledgeAfter];
    case MonsterSpecies.Fairy:
      return [EquipmentEffectKind.FairyKnowledge, EquipmentEffectKind.FairyKnowledgeAfter];
    case MonsterSpecies.Fox:
      return [EquipmentEffectKind.FoxKnowledge, EquipmentEffectKind.FoxKnowledgeAfter];
    case MonsterSpecies.DevilFish:
      return [EquipmentEffectKind.DevilFishKnowledge, EquipmentEffectKind.DevilFishKnowledgeAfter];
    case MonsterSpecies.Treant:
      return [EquipmentEffectKind.TreantKnowledge, EquipmentEffectKind.TreantKnowledgeAfter];
    case MonsterSpecies.FlameTiger:
      return [EquipmentEffectKind.FlameTigerKnowledge, EquipmentEffectKind.FlameTigerKnowledgeAfter];
    case MonsterSpecies.Unicorn:
      return [EquipmentEffectKind.UnicornKnowledge, EquipmentEffectKind.UnicornKnowledgeAfter];
    case MonsterSpecies.ChallengeBoss:
      return [EquipmentEffectKind.ChallengeBossKnowledge, EquipmentEffectKind.ChallengeBossKnowledgeAfter];
    default:
      break;
  }
}
