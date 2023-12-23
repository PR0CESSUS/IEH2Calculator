import { Enums } from "../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { RebirthUpgradeKind } from "../../type/RebirthUpgradeKind";
import { RebirthParameter } from "./RebirthParameter";

// TODO list of rebirt bonuses

export function SetRebirthBonuses() {
  for (let index = 0; index < Enums.RebirthUpgradeKind; index++) {
    for (let i = 0; i < Enums.HeroKind; i++) {
      SetBonus(index, i);
    }
  }
}

function SetBonus(kind: RebirthUpgradeKind, heroKind: HeroKind) {
  switch (kind) {
    case RebirthUpgradeKind.EQWeaponSlot:
      globalThis.data.inventory.equipWeaponUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => effectValue(kind, getLevel(kind, heroKind)))
      );
      break;
    case RebirthUpgradeKind.EQArmorSlot:
      globalThis.data.inventory.equipArmorUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => effectValue(kind, getLevel(kind, heroKind)))
      );
      break;
    case RebirthUpgradeKind.EQJewelrySlot:
      globalThis.data.inventory.equipJewelryUnlockedNum[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => effectValue(kind, getLevel(kind, heroKind)))
      );
      break;
    default:
      break;
  }
}

function effectValue(kind: RebirthUpgradeKind, level) {
  return RebirthParameter.Upgrade(kind, level)[4];
}

function getLevel(kind: RebirthUpgradeKind, heroKind: HeroKind) {
  switch (heroKind) {
    case HeroKind.Warrior:
      return globalThis.data.source.rebirthUpgradeLevelsWarrior[kind];
    case HeroKind.Wizard:
      return globalThis.data.source.rebirthUpgradeLevelsWizard[kind];
    case HeroKind.Angel:
      return globalThis.data.source.rebirthUpgradeLevelsAngel[kind];
    case HeroKind.Thief:
      return globalThis.data.source.rebirthUpgradeLevelsTamer[kind];
    case HeroKind.Archer:
      return globalThis.data.source.rebirthUpgradeLevelsArcher[kind];
    case HeroKind.Tamer:
      return globalThis.data.source.rebirthUpgradeLevelsTamer[kind];

    default:
      return 0;
  }
}
