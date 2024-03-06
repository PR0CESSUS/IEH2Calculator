import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { DataCatalyst } from "../Catalyst";

export class DataAlchemy {
  catalyst = new DataCatalyst();
  mysteriousWaterProductionPerSec: Multiplier;
  mysteriousWaterCap: Multiplier;
  maxMysteriousWaterExpandedCapNum: Multiplier;
  mysteriousWaterExpandedCapNum = 0;
  doubleAlchemyPointChance: Multiplier;
  alchemyPointGainMultiplier: Multiplier;
  alchemyUpgrades = [];
  maxPurificationLevel: Multiplier;
  maxWaterPreservationLevel: Multiplier;
  preventUseEssenceToCraft: Multiplier;
  nitroGainOnCraft: Multiplier;

  constructor() {
    // this.alchemyPoint = new AlchemyPoint();
    // this.talismanFragment = new TalismanFragment();
    // this.mysteriousWaterExpandedCapNum = new MysteriousWaterExpandedCapNum(() => this.maxMysteriousWaterExpandedCapNum.Value());
    // this.mysteriousWaterProgress = new MysteriousWaterProgress((NUMBER) this.mysteriousWater, () => 1.0);
    // this.mysteriousWater = new MysteriousWater(() => this.mysteriousWaterCap.Value());
    this.maxMysteriousWaterExpandedCapNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50.0));
    this.mysteriousWaterCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => this.mysteriousWaterExpandedCapNum));
    this.mysteriousWaterProductionPerSec = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.1));
    this.doubleAlchemyPointChance = new Multiplier();
    this.alchemyPointGainMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.preventUseEssenceToCraft = new Multiplier();
    this.nitroGainOnCraft = new Multiplier();
    this.maxPurificationLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50.0));
    this.maxWaterPreservationLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 5.0));
  }

  Start() {
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new Purification());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new DeeperCapacity());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new CharmedLife());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new Catalystic());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new EssenceHoarder());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new PotentPotables());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new Aurumology());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new WaterPreservation());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new MaterialThrift());
    // this.alchemyUpgrades.Add((AlchemyUpgrade) new NitrousExtraction());
  }
}
