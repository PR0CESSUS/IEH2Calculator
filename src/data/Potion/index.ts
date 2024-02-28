import { AncientAngelsBadge } from "./data/AncientAngelsBadge";
import { AncientArchersBadge } from "./data/AncientArchersBadge";
import { AncientBatBadge } from "./data/AncientBatBadge";
import { AncientDevilfishBadge } from "./data/AncientDevilfishBadge";
import { AncientFairyBadge } from "./data/AncientFairyBadge";
import { AncientFlametigerBadge } from "./data/AncientFlametigerBadge";
import { AncientFoxBadge } from "./data/AncientFoxBadge";
import { AncientMagicslimeBadge } from "./data/AncientMagicslimeBadge";
import { AncientSlimeBadge } from "./data/AncientSlimeBadge";
import { AncientSpiderBadge } from "./data/AncientSpiderBadge";
import { AncientTamersBadge } from "./data/AncientTamersBadge";
import { AncientThiefsBadge } from "./data/AncientThiefsBadge";
import { AncientTreantBadge } from "./data/AncientTreantBadge";
import { AncientUnicornBadge } from "./data/AncientUnicornBadge";
import { AncientWarriorsBadge } from "./data/AncientWarriorsBadge";
import { AncientWizardsBadge } from "./data/AncientWizardsBadge";
import { AngelsBadge } from "./data/AngelsBadge";
import { ArachnettaDoll } from "./data/ArachnettaDoll";
import { ArchersBadge } from "./data/ArchersBadge";
import { AscendedFromIEH1 } from "./data/AscendedFromIEH1";
import { BasicElixirOfBrains } from "./data/BasicElixirOfBrains";
import { BasicElixirOfBrawn } from "./data/BasicElixirOfBrawn";
import { BasicElixirOfConcentration } from "./data/BasicElixirOfConcentration";
import { BasicElixirOfFortitude } from "./data/BasicElixirOfFortitude";
import { BasicElixirOfUnderstanding } from "./data/BasicElixirOfUnderstanding";
import { BatBadge } from "./data/BatBadge";
import { BerserkersStone } from "./data/BerserkersStone";
import { BlazingAuraDraught } from "./data/BlazingAuraDraught";
import { BurningDefensePotion } from "./data/BurningDefensePotion";
import { CertificateOfCompetence } from "./data/CertificateOfCompetence";
import { ChilledHealthPotion } from "./data/ChilledHealthPotion";
import { ChilledRegenerationPoultice } from "./data/ChilledRegenerationPoultice";
import { CoolHeadOintment } from "./data/CoolHeadOintment";
import { DarkRope } from "./data/DarkRope";
import { DevilfishBadge } from "./data/DevilfishBadge";
import { ElectricDefensePotion } from "./data/ElectricDefensePotion";
import { EnchantedAlembic } from "./data/EnchantedAlembic";
import { FairyBadge } from "./data/FairyBadge";
import { FierySlayersOil } from "./data/FierySlayersOil";
import { FireRope } from "./data/FireRope";
import { FlametigerBadge } from "./data/FlametigerBadge";
import { FlorzporbDoll } from "./data/FlorzporbDoll";
import { FoxBadge } from "./data/FoxBadge";
import { FrostyDefensePotion } from "./data/FrostyDefensePotion";
import { FrostySlayersOil } from "./data/FrostySlayersOil";
import { GuardianKorDoll } from "./data/GuardianKorDoll";
import { GuildMembersEmblem } from "./data/GuildMembersEmblem";
import { IceRope } from "./data/IceRope";
import { IcyAuraDraught } from "./data/IcyAuraDraught";
import { LadyEmeldaDoll } from "./data/LadyEmeldaDoll";
import { LightRope } from "./data/LightRope";
import { MagicslimeBadge } from "./data/MagicslimeBadge";
import { MasonsTrowel } from "./data/MasonsTrowel";
import { MaterialMultiplierMist } from "./data/MaterialMultiplierMist";
import { MinorHealthPotion } from "./data/MinorHealthPotion";
import { MinorManaRegenerationPoultice } from "./data/MinorManaRegenerationPoultice";
import { MinorRegenerationPoultice } from "./data/MinorRegenerationPoultice";
import { MinorResourcePoultice } from "./data/MinorResourcePoultice";
import { NariSuneDoll } from "./data/NariSuneDoll";
import { NostroDoll } from "./data/NostroDoll";
import { OctobaddieDoll } from "./data/OctobaddieDoll";
import { ShockingSlayersOil } from "./data/ShockingSlayersOil";
import { SlickerShoeSolution } from "./data/SlickerShoeSolution";
import { SlickShoeSolution } from "./data/SlickShoeSolution";
import { SlightlyStickySalve } from "./data/SlightlyStickySalve";
import { SlimeBadge } from "./data/SlimeBadge";
import { SpiderBadge } from "./data/SpiderBadge";
import { TamersBadge } from "./data/TamersBadge";
import { ThiefsBadge } from "./data/ThiefsBadge";
import { ThrowingNet } from "./data/ThrowingNet";
import { ThunderRope } from "./data/ThunderRope";
import { TrackersMap } from "./data/TrackersMap";
import { TrappersTag } from "./data/TrappersTag";
import { TreantBadge } from "./data/TreantBadge";
import { UnicornBadge } from "./data/UnicornBadge";
import { WarriorsBadge } from "./data/WarriorsBadge";
import { WhirlingAuraDraught } from "./data/WhirlingAuraDraught";
import { WizardsBadge } from "./data/WizardsBadge";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { Potion } from "./Potion";
import { Talisman } from "./Talisman";
import { PotionGlobalInformation } from "./PotionGlobalInformation";
import { DATA } from "..";

export class DataPotion {
  #data: DATA;
  potions: any[];
  traps: any[];
  talismans: Talisman[];
  globalInformations;
  maxStackNum: Multiplier;
  preventConsumeChance: Multiplier;
  effectMultiplier: Multiplier;
  talismanPassiveEffectMultiplier: Multiplier;
  trapEffectMultiplier: Multiplier;
  trapCooltimeReduction: Multiplier[] = Array(6);
  disassembleGoldGainMultiplier: Multiplier;
  potionMaxLevel: Multiplier;
  availableQueue: Multiplier;

  // AlchemyController alchemyCtrl => this.#data.stat.alchemyCtrl;
  constructor(DATA: DATA) {
    this.#data = DATA;
    this.maxStackNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 10.0));
    this.preventConsumeChance = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0));
    this.effectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.talismanPassiveEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    for (let index = 0; index < this.trapCooltimeReduction.length; index++) {
      this.trapCooltimeReduction[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
        () => 10.0,
        () => 1.0
      );
      this.trapCooltimeReduction[index].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 10.0));
    }
    this.trapEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.disassembleGoldGainMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.potionMaxLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 100));
    this.availableQueue = new Multiplier();
  }

  GlobalInfo(potionKind): PotionGlobalInformation & Potion {
    for (let index = 0; index < this.globalInformations.length; index++) {
      if (this.globalInformations[index].kind == potionKind) return this.globalInformations[index];
    }
    return this.globalInformations[0];
  }

  TalismanGlobalInfo(talismanKind) {
    for (let index = 0; index < this.talismans.length; index++) {
      if (this.talismans[index].kind == talismanKind) return this.talismans[index];
    }
  }

  Start() {
    this.potions = [
      new MinorHealthPotion(this.#data),
      new MinorRegenerationPoultice(this.#data),
      new MinorResourcePoultice(this.#data),
      new SlickShoeSolution(this.#data),
      new MinorManaRegenerationPoultice(this.#data),
      new MaterialMultiplierMist(this.#data),
      new BasicElixirOfBrawn(this.#data),
      new BasicElixirOfBrains(this.#data),
      new BasicElixirOfFortitude(this.#data),
      new BasicElixirOfConcentration(this.#data),
      new BasicElixirOfUnderstanding(this.#data),
      new ChilledHealthPotion(this.#data),
      new ChilledRegenerationPoultice(this.#data),
      new FrostyDefensePotion(this.#data),
      new IcyAuraDraught(this.#data),
      new SlightlyStickySalve(this.#data),
      new SlickerShoeSolution(this.#data),
      new CoolHeadOintment(this.#data),
      new FrostySlayersOil(this.#data),
      new BurningDefensePotion(this.#data),
      new BlazingAuraDraught(this.#data),
      new FierySlayersOil(this.#data),
      new ElectricDefensePotion(this.#data),
      new WhirlingAuraDraught(this.#data),
      new ShockingSlayersOil(this.#data),
    ];
    this.traps = [new ThrowingNet(this.#data), new IceRope(this.#data), new ThunderRope(this.#data), new FireRope(this.#data), new LightRope(this.#data), new DarkRope(this.#data)];
    this.talismans = [
      new GuildMembersEmblem(this.#data),
      new CertificateOfCompetence(this.#data),
      new MasonsTrowel(this.#data),
      new EnchantedAlembic(this.#data),
      new TrackersMap(this.#data),
      new BerserkersStone(this.#data),
      new TrappersTag(this.#data),
      new FlorzporbDoll(this.#data),
      new ArachnettaDoll(this.#data),
      new GuardianKorDoll(this.#data),
      new SlimeBadge(this.#data),
      new MagicslimeBadge(this.#data),
      new SpiderBadge(this.#data),
      new BatBadge(this.#data),
      new FairyBadge(this.#data),
      new FoxBadge(this.#data),
      new DevilfishBadge(this.#data),
      new TreantBadge(this.#data),
      new FlametigerBadge(this.#data),
      new UnicornBadge(this.#data),
      new AscendedFromIEH1(this.#data),
      new WarriorsBadge(this.#data),
      new WizardsBadge(this.#data),
      new AngelsBadge(this.#data),
      new ThiefsBadge(this.#data),
      new ArchersBadge(this.#data),
      new TamersBadge(this.#data),
      new NostroDoll(this.#data),
      new LadyEmeldaDoll(this.#data),
      new NariSuneDoll(this.#data),
      new OctobaddieDoll(this.#data),
      new AncientWarriorsBadge(this.#data),
      new AncientWizardsBadge(this.#data),
      new AncientAngelsBadge(this.#data),
      new AncientThiefsBadge(this.#data),
      new AncientArchersBadge(this.#data),
      new AncientTamersBadge(this.#data),
      new AncientSlimeBadge(this.#data),
      new AncientMagicslimeBadge(this.#data),
      new AncientSpiderBadge(this.#data),
      new AncientBatBadge(this.#data),
      new AncientFairyBadge(this.#data),
      new AncientFoxBadge(this.#data),
      new AncientDevilfishBadge(this.#data),
      new AncientTreantBadge(this.#data),
      new AncientFlametigerBadge(this.#data),
      new AncientUnicornBadge(this.#data),
    ];
    this.globalInformations = [...this.potions, ...this.traps, ...this.talismans];
    // this.globalInformations.forEach((potion) => {
    //   potion.SetPassiveEffect();
    // });
  }
}
