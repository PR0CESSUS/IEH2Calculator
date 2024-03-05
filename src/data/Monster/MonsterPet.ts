import { DATA } from "..";
import { Enums } from "../../Enums";
import { MultiplierInfo } from "../Multiplier";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { MonsterColor } from "../../type/MonsterColor";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { PetPassiveEffectKind } from "../../type/PetPassiveEffectKind";
import { Stats } from "../../type/Stats";
import { MonsterGlobalInformation } from "./MonsterGlobalInformation";
import { MonsterParameter } from "./MonsterParameter";
import { Localization } from "../../localization";

export class MonsterPet {
  #data: DATA;
  globalInfo: MonsterGlobalInformation;
  species: MonsterSpecies;
  color: MonsterColor;
  challengeMonsterKind: ChallengeMonsterKind = 0;
  unlockActiveEffectImprovement;
  saveId: number;
  //   loyaltyExp: MonsterPetLoyaltyExp;
  //   MonsterPetTamingPotamingPoint;
  //   unlockActiveEffectImprovement: Unlock;

  constructor(DATA: DATA, globalInfo: MonsterGlobalInformation, species: MonsterSpecies, color: MonsterColor) {
    this.globalInfo = globalInfo;
    this.#data = DATA;
    this.species = species;
    this.color = color;
    if (this.species == MonsterSpecies.ChallengeBoss) this.challengeMonsterKind = color as any;

    this.saveId = this.color + 10 * this.species + this.challengeMonsterKind;
    // this.rank = new MonsterPetRank(species, color, new Func<long>(this.MaxRank));
  }
  // get saveId() {
  //   return this.color + 10 * this.species + this.challengeMonsterKind;
  // }
  get level() {
    return this.#data.source.monsterPetLevels[this.saveId];
  }
  set level(value: number) {
    this.#data.source.monsterPetLevels[this.saveId] = value;
  }
  get rank() {
    return this.#data.source.monsterPetRanks[this.saveId];
  }
  set rank(value: number) {
    this.#data.source.monsterPetRanks[this.saveId] = value;
  }
  get loyalty() {
    return this.#data.source.monsterPetLoyalty[this.saveId];
  }
  set loyalty(value: number) {
    this.#data.source.monsterPetLoyalty[this.saveId] = value;
  }

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
    return this.#data.monster.petRankCap.Value();
  }

  //   isActive {
  //     get => this.#data.source.monsterPetIsActives[this.saveId];
  //     set => this.#data.source.monsterPetIsActives[this.saveId] = value;
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
        this.#data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.PotionEffect:
        this.#data.potion.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.TamingPointGain:
        this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.GoldCap:
        this.#data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.GoldGain:
        this.#data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ExpGain:
        this.#data.stats.SetEffectStats(Stats.ExpGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.DoubleMaterialChance:
        // this.#data.material.doubleMaterialChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.GoldGainOnDisassemblePotion:
        this.#data.potion.disassembleGoldGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.DisassembleTownMatGain:
        this.#data.equipment.disassembleMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.TownMatGainFromDungeonReward:
        this.#data.area.townMaterialDungeonRewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.OilOfSlimeDropChance:
        this.#data.monster.speciesMaterialDropChance[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EnchantedClothDropChance:
        this.#data.monster.speciesMaterialDropChance[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SpiderSilkDropChance:
        this.#data.monster.speciesMaterialDropChance[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.BatWingDropChance:
        this.#data.monster.speciesMaterialDropChance[3].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.FairyDustDropChance:
        this.#data.monster.speciesMaterialDropChance[4].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.FoxTailDropChance:
        this.#data.monster.speciesMaterialDropChance[5].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.FishScalesDropChance:
        this.#data.monster.speciesMaterialDropChance[6].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.CarvedBranchDropChance:
        this.#data.monster.speciesMaterialDropChance[7].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ThickFurDropChance:
        this.#data.monster.speciesMaterialDropChance[8].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.UnicornHornDropChance:
        this.#data.monster.speciesMaterialDropChance[9].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EquipProfGain:
        this.#data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.MysteriousWaterGain:
        this.#data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ChestPortalOrbChance:
        this.#data.area.chestPortalOrbChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SkillProfGain:
        this.#data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.TownMatGain:
        this.#data.town.SetEffectTownMatGain(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ResearchPowerStone:
        this.#data.town.researchPower[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ResearchPowerCrystal:
        this.#data.town.researchPower[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ResearchPowerLeaf:
        this.#data.town.researchPower[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.CatalystCriticalChance:
        this.#data.alchemy.catalyst.criticalChanceMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.MysteriousWaterCap:
        this.#data.alchemy.maxMysteriousWaterExpandedCapNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.BlessingEffect:
        this.#data.blessingInfo.SetEffectMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.LoyaltyPointGain:
        for (let index = 0; index < Enums.HeroKind; index++)
          this.#data.stats.heroes[index].loyaltyPoingGain.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.PetExpGain:
        for (let index = 0; index < Enums.HeroKind; index++)
          this.#data.stats.heroes[index].petExpGainPerDefeat.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.ExpeditionExpGain:
        this.#data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EssenceConversionRate:
        this.#data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Add, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SlimeCoinEfficiency:
        this.#data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.SlimeCoinCap:
        this.#data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.EquipmentEffect:
        this.#data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
      case PetPassiveEffectKind.AlchemyPointGain:
        this.#data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Pet, MultiplierType.Mul, () => this.effectValue));
        break;
    }
  }

  get effectValue() {
    return Math.min(
      this.maxEffectValue,
      MonsterParameter.PetPassiveEffectValue(this.passiveEffectKind, this.rank) * (1.0 + this.loyalty / 100.0) * this.#data.monster.petPassiveEffectMultiplier.Value()
    );
  }

  get effectIncrementValue() {
    return (
      (MonsterParameter.PetPassiveEffectValue(this.passiveEffectKind, this.rank + 1) - MonsterParameter.PetPassiveEffectValue(this.passiveEffectKind, this.rank)) *
      (1.0 + this.loyalty / 100.0) *
      this.#data.monster.petPassiveEffectMultiplier.Value()
    );
  }

  get maxEffectValue() {
    return MonsterParameter.PetPassiveEffectMaxValue(this.passiveEffectKind);
  }

  MaxTPGAmongHeroes() {
    return this.BaseTamingPointGainPerCapture() * this.#data.stats.MaxTPGAmongHeroes();
  }

  BaseTamingPointGainPerCapture() {
    return this.TPGByLevel() + this.TPGByDefeat() + this.TPGByCapture();
  }

  TPGByLevel() {
    return 1.0 + 0.02 * this.level;
  }

  TPGByDefeat() {
    return Math.log2(1.0 + this.globalInfo.DefeatedNum() / 10000.0);
  }

  TPGByCapture() {
    return Math.log2(1.0 + this.globalInfo.CapturedNum() / 10000.0);
  }

  PassiveEffectString() {
    return Localization.MonsterPetPassiveEffectString(this);
  }
}
