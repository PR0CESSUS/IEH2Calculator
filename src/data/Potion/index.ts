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
import { NullPotion } from "./data/NullPotion";
import { OctobaddieDoll } from "./data/OctobaddieDoll";
import { ShockingSlayersOil } from "./data/ShockingSlayersOil";
import { SlickerShoeSolution } from "./data/SlickerShoeSolution";
import { SlickShoeSolution } from "./data/SlickShoeSolution";
import { SlightlyStickSalve } from "./data/SlightlyStickSalve";
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

import { PotionKind } from "../../type/PotionKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { Potion } from "./Potion";
import { Talisman } from "./Talisman";
import { PotionGlobalInformation } from "./PotionGlobalInformation";

export class DataPotion {
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

  // AlchemyController alchemyCtrl => globalThis.data.stat.alchemyCtrl;
  constructor() {
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
      new NullPotion(),
      new MinorHealthPotion(),
      new MinorRegenerationPoultice(),
      new MinorResourcePoultice(),
      new SlickShoeSolution(),
      new MinorManaRegenerationPoultice(),
      new MaterialMultiplierMist(),
      new BasicElixirOfBrawn(),
      new BasicElixirOfBrains(),
      new BasicElixirOfFortitude(),
      new BasicElixirOfConcentration(),
      new BasicElixirOfUnderstanding(),
      new ChilledHealthPotion(),
      new ChilledRegenerationPoultice(),
      new FrostyDefensePotion(),
      new IcyAuraDraught(),
      new SlightlyStickSalve(),
      new SlickerShoeSolution(),
      new CoolHeadOintment(),
      new FrostySlayersOil(),
      new BurningDefensePotion(),
      new BlazingAuraDraught(),
      new FierySlayersOil(),
      new ElectricDefensePotion(),
      new WhirlingAuraDraught(),
      new ShockingSlayersOil(),
    ];
    this.traps = [new ThrowingNet(), new IceRope(), new ThunderRope(), new FireRope(), new LightRope(), new DarkRope()];
    this.talismans = [
      new GuildMembersEmblem(),
      new CertificateOfCompetence(),
      new MasonsTrowel(),
      new EnchantedAlembic(),
      new TrackersMap(),
      new BerserkersStone(),
      new TrappersTag(),
      new FlorzporbDoll(),
      new ArachnettaDoll(),
      new GuardianKorDoll(),
      new SlimeBadge(),
      new MagicslimeBadge(),
      new SpiderBadge(),
      new BatBadge(),
      new FairyBadge(),
      new FoxBadge(),
      new DevilfishBadge(),
      new TreantBadge(),
      new FlametigerBadge(),
      new UnicornBadge(),
      new AscendedFromIEH1(),
      new WarriorsBadge(),
      new WizardsBadge(),
      new AngelsBadge(),
      new ThiefsBadge(),
      new ArchersBadge(),
      new TamersBadge(),
      new NostroDoll(),
      new LadyEmeldaDoll(),
      new NariSuneDoll(),
      new OctobaddieDoll(),
      new AncientWarriorsBadge(),
      new AncientWizardsBadge(),
      new AncientAngelsBadge(),
      new AncientThiefsBadge(),
      new AncientArchersBadge(),
      new AncientTamersBadge(),
      new AncientSlimeBadge(),
      new AncientMagicslimeBadge(),
      new AncientSpiderBadge(),
      new AncientBatBadge(),
      new AncientFairyBadge(),
      new AncientFoxBadge(),
      new AncientDevilfishBadge(),
      new AncientTreantBadge(),
      new AncientFlametigerBadge(),
      new AncientUnicornBadge(),
    ];
    this.globalInformations = [...this.potions, ...this.traps, ...this.talismans];
    // this.globalInformations.forEach((potion) => {
    //   potion.SetPassiveEffect();
    // });
  }
}
