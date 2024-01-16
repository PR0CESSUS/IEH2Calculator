import { Enums } from "../../Enums";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierInfo } from "../../Multiplier";
import { HeroKind } from "../../type/HeroKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MonsterColor } from "../../type/MonsterColor";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { PetActiveEffectKind } from "../../type/PetActiveEffectKind";
import { PetPassiveEffectKind } from "../../type/PetPassiveEffectKind";
import { Stats } from "../../type/Stats";
import { MonsterGlobalInformation } from "./MonsterGlobalInformation";
import { MonsterParameter } from "./MonsterParameter";

export class MonsterPet {
  globalInfo: MonsterGlobalInformation;
  species: MonsterSpecies;
  color: MonsterColor;
  challengeMonsterKind: ChallengeMonsterKind = 0;
  rank: number;
  level: number;
  //   exp: MonsterPetExp;
  loyalty: number;
  //   loyaltyExp: MonsterPetLoyaltyExp;
  //   MonsterPetTamingPotamingPoint;
  //   unlockActiveEffectImprovement: Unlock;

  constructor(globalInfo: MonsterGlobalInformation, species: MonsterSpecies, color: MonsterColor) {
    this.globalInfo = globalInfo;
    this.species = species;
    this.color = color;
    if (this.species == MonsterSpecies.ChallengeBoss) this.challengeMonsterKind = color as any;
    // this.rank = new MonsterPetRank(species, color, new Func<long>(this.MaxRank));

    this.level = globalThis.data.source.monsterPetLevels[this.color + 10 * this.species + this.challengeMonsterKind];
    this.rank = globalThis.data.source.monsterPetRanks[this.color + 10 * this.species + this.challengeMonsterKind];
    this.loyalty = globalThis.data.source.monsterPetLoyalty[this.color + 10 * this.species + this.challengeMonsterKind];
    // this.level = new MonsterPetLevel(species, color, new Func<long>(this.MaxLevel));
    // this.exp = new MonsterPetExp(species, color, new Func<long, double>(this.RequiredExp), (INTEGER) this.level);
    // this.loyalty = new MonsterPetLoyalty(species, color);
    // this.loyaltyExp = new MonsterPetLoyaltyExp(species, color, new Func<long, double>(this.LoyaltyRequiredExp), (INTEGER) this.loyalty);
    // this.tamingPo= new MonsterPetTamingPoint(species, color, (INTEGER) this.rank, new Func<long, double>(this.RequiredTamingPoint));
    // this.unlockActiveEffectImprovement = new Unlock();
    // this.unlockActiveEffectImprovement.isLockedInDefault = true;
  }

  unlockActiveEffectImprovement;

  MonsterPet(globalInfo: MonsterGlobalInformation, challengeMonsterKind: ChallengeMonsterKind) {
    this.globalInfo = globalInfo;
    this.species = MonsterSpecies.ChallengeBoss;
    this.challengeMonsterKind = challengeMonsterKind;
    // this.rank = new MonsterPetRank(challengeMonsterKind);
    // this.level = new MonsterPetLevel(challengeMonsterKind, new Func<long>(this.MaxLevel));
    // this.exp = new MonsterPetExp(challengeMonsterKind, new Func<long, double>(this.RequiredExp), (INTEGER) this.level);
    // this.loyalty = new MonsterPetLoyalty(challengeMonsterKind);
    // this.loyaltyExp = new MonsterPetLoyaltyExp(challengeMonsterKind, new Func<long, double>(this.LoyaltyRequiredExp), (INTEGER) this.loyalty);
    // this.tamingPo= new MonsterPetTamingPoint(challengeMonsterKind, (INTEGER) this.rank, new Func<long, double>(this.RequiredTamingPoint));
    // this.unlockActiveEffectImprovement = new Unlock();
    // this.unlockActiveEffectImprovement.isLockedInDefault = true;
  }

  Start() {
    this.SetEffect();
  }

  IsUnlocked() {
    return this.rank > 0;
  }

  Level() {
    return this.level;
  }

  MaxLevel() {
    return this.rank * 10;
  }

  MaxRank() {
    return globalThis.data.monster.petRankCap.Value();
  }

  get saveId() {
    return this.color + 10 * this.species + this.challengeMonsterKind;
  }

  //   isActive {
  //     get => globalThis.data.source.monsterPetIsActives[this.saveId];
  //     set => globalThis.data.source.monsterPetIsActives[this.saveId] = value;
  //   }

  get activeEffectKind() {
    return 0;
  }

  get passiveEffectKind(): PetPassiveEffectKind {
    if (this.species == MonsterSpecies.ChallengeBoss || this.species == MonsterSpecies.Mimic) return 0;
    return MonsterParameter.petPassiveEffectKinds[this.species][this.color];
  }

  SetEffect() {
    switch (this.passiveEffectKind) {
      case PetPassiveEffectKind.ResourceGain:
        globalThis.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.PotionEffect:
        globalThis.data.potion.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.TamingPointGain:
        globalThis.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.GoldCap:
        globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.GoldGain:
        globalThis.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ExpGain:
        globalThis.data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.DoubleMaterialChance:
        // globalThis.data.material.doubleMaterialChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.GoldGainOnDisassemblePotion:
        globalThis.data.potion.disassembleGoldGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.DisassembleTownMatGain:
        globalThis.data.equipment.disassembleMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.TownMatGainFromDungeonReward:
        globalThis.data.area.townMaterialDungeonRewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.OilOfSlimeDropChance:
        globalThis.data.monster.speciesMaterialDropChance[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EnchantedClothDropChance:
        globalThis.data.monster.speciesMaterialDropChance[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SpiderSilkDropChance:
        globalThis.data.monster.speciesMaterialDropChance[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.BatWingDropChance:
        globalThis.data.monster.speciesMaterialDropChance[3].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.FairyDustDropChance:
        globalThis.data.monster.speciesMaterialDropChance[4].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.FoxTailDropChance:
        globalThis.data.monster.speciesMaterialDropChance[5].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.FishScalesDropChance:
        globalThis.data.monster.speciesMaterialDropChance[6].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.CarvedBranchDropChance:
        globalThis.data.monster.speciesMaterialDropChance[7].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ThickFurDropChance:
        globalThis.data.monster.speciesMaterialDropChance[8].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.UnicornHornDropChance:
        globalThis.data.monster.speciesMaterialDropChance[9].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EquipProfGain:
        globalThis.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.MysteriousWaterGain:
        globalThis.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ChestPortalOrbChance:
        globalThis.data.area.chestPortalOrbChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SkillProfGain:
        globalThis.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.TownMatGain:
        globalThis.data.town.SetEffectTownMatGain(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ResearchPowerStone:
        globalThis.data.town.researchPower[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ResearchPowerCrystal:
        globalThis.data.town.researchPower[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ResearchPowerLeaf:
        globalThis.data.town.researchPower[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.CatalystCriticalChance:
        globalThis.data.alchemy.catalyst.criticalChanceMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.MysteriousWaterCap:
        globalThis.data.alchemy.maxMysteriousWaterExpandedCapNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.BlessingEffect:
        globalThis.data.blessingInfo.SetEffectMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.LoyaltyPointGain:
        for (let index = 0; index < Enums.HeroKind; index++)
          globalThis.data.stats.heroes[index].loyaltyPoingGain.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.PetExpGain:
        for (let index = 0; index < Enums.HeroKind; index++)
          globalThis.data.stats.heroes[index].petExpGainPerDefeat.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ExpeditionExpGain:
        globalThis.data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EssenceConversionRate:
        globalThis.data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SlimeCoinEfficiency:
        globalThis.data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SlimeCoinCap:
        globalThis.data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EquipmentEffect:
        globalThis.data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.AlchemyPointGain:
        globalThis.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
    }
  }

  get effectValue() {
    return Math.min(
      this.maxEffectValue,
      MonsterParameter.PetPassiveEffectValue(this.passiveEffectKind, this.rank) * (1.0 + this.loyalty / 100.0) * globalThis.data.monster.petPassiveEffectMultiplier.Value()
    );
  }

  get effectIncrementValue() {
    return (
      (MonsterParameter.PetPassiveEffectValue(this.passiveEffectKind, this.rank + 1) - MonsterParameter.PetPassiveEffectValue(this.passiveEffectKind, this.rank)) *
      (1.0 + this.loyalty / 100.0) *
      globalThis.data.monster.petPassiveEffectMultiplier.Value()
    );
  }

  get maxEffectValue() {
    return MonsterParameter.PetPassiveEffectMaxValue(this.passiveEffectKind);
  }
}
