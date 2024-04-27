import { MonsterPet } from "@/Data/Monster/MonsterPet";
import { Util } from "@/Util";
import { PetPassiveEffectKind2 } from "@/type/PetPassiveEffectKind2";

export function MonsterPetPassiveEffectString2(pet: MonsterPet) {
  switch (pet.passiveEffectKind2) {
    case PetPassiveEffectKind2.GoldGain2:
      return " Gold Gain Multiplier + " + Util.percent(pet.effectValue2);
    case PetPassiveEffectKind2.TamingPointGain2:
      return " Taming Point Gain Multiplier + " + Util.percent(pet.effectValue2);
    case PetPassiveEffectKind2.RareMatChanceForBlueSlime2:
      return " Rare Material Drop Chance + " + Util.percent(pet.effectValue2);
    case PetPassiveEffectKind2.RareMatChance2:
      return " Rare Material Drop Chance + " + Util.percent(pet.effectValue2);
    case PetPassiveEffectKind2.ChestPortalOrbNumber2:
      return " Max Portal Orbs in Chests + " + Util.tDigit(Math.floor(pet.effectValue2));
    default:
      return "";
  }
}
