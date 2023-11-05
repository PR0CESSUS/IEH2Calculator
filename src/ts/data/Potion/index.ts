import Nothing from "./Nothing";
import MinorHealthPotion from "./MinorHealthPotion";
import MinorRegenerationPoultice from "./MinorRegenerationPoultice";
import MinorResourcePoultice from "./MinorResourcePoultice";
import SlickShoeSolution from "./SlickShoeSolution";
import MinorManaRegenerationPoultice from "./MinorManaRegenerationPoultice";
import MaterialMultiplierMist from "./MaterialMultiplierMist";
import BasicElixirOfBrawn from "./BasicElixirOfBrawn";
import BasicElixirOfBrains from "./BasicElixirOfBrains";
import BasicElixirOfFortitude from "./BasicElixirOfFortitude";
import BasicElixirOfConcentration from "./BasicElixirOfConcentration";
import BasicElixirOfUnderstanding from "./BasicElixirOfUnderstanding";
import ChilledHealthPotion from "./ChilledHealthPotion";
import ChilledRegenerationPoultice from "./ChilledRegenerationPoultice";
import FrostyDefensePotion from "./FrostyDefensePotion";
import IcyAuraDraught from "./IcyAuraDraught";
import SlightlyStickySalve from "./SlightlyStickySalve";
import SlickerShoeSolution from "./SlickerShoeSolution";
import CoolHeadOintment from "./CoolHeadOintment";
import FrostySlayersOil from "./FrostySlayersOil";
import BurningDefensePotion from "./BurningDefensePotion";
import BlazingAuraDraught from "./BlazingAuraDraught";
import FierySlayersOil from "./FierySlayersOil";
import ElectricDefensePotion from "./ElectricDefensePotion";
import WhirlingAuraDraught from "./WhirlingAuraDraught";
import ShockingSlayersOil from "./ShockingSlayersOil";
import ThrowingNet from "./ThrowingNet";
import IceRope from "./IceRope";
import ThunderRope from "./ThunderRope";
import FireRope from "./FireRope";
import LightRope from "./LightRope";
import DarkRope from "./DarkRope";
import GuildMembersEmblem from "./GuildMembersEmblem";
import CertificateOfCompetence from "./CertificateOfCompetence";
import MasonsTrowel from "./MasonsTrowel";
import EnchantedAlembic from "./EnchantedAlembic";
import TrackersMap from "./TrackersMap";
import BerserkersStone from "./BerserkersStone";
import TrappersTag from "./TrappersTag";
import HitanDoll from "./HitanDoll";
import RingoldDoll from "./RingoldDoll";
import NuttyDoll from "./NuttyDoll";
import MorkylDoll from "./MorkylDoll";
import FlorzporbDoll from "./FlorzporbDoll";
import ArachnettaDoll from "./ArachnettaDoll";
import GuardianKorDoll from "./GuardianKorDoll";
import SlimeBadge from "./SlimeBadge";
import MagicslimeBadge from "./MagicslimeBadge";
import SpiderBadge from "./SpiderBadge";
import BatBadge from "./BatBadge";
import FairyBadge from "./FairyBadge";
import FoxBadge from "./FoxBadge";
import DevilfishBadge from "./DevilfishBadge";
import TreantBadge from "./TreantBadge";
import FlametigerBadge from "./FlametigerBadge";
import UnicornBadge from "./UnicornBadge";
import AscendedFromIEH1 from "./AscendedFromIEH1";
import WarriorsBadge from "./WarriorsBadge";
import WizardsBadge from "./WizardsBadge";
import AngelsBadge from "./AngelsBadge";
import ThiefsBadge from "./ThiefsBadge";
import ArchersBadge from "./ArchersBadge";
import TamersBadge from "./TamersBadge";
import NostroDoll from "./NostroDoll";
import LadyEmeldaDoll from "./LadyEmeldaDoll";
import NariSuneDoll from "./NariSuneDoll";
import OctobaddieDoll from "./OctobaddieDoll";
import BananoonDoll from "./BananoonDoll";
import GlorbliorbusDoll from "./GlorbliorbusDoll";
import DistortionSlimeDoll from "./DistortionSlimeDoll";
import { PotionKind } from "../../type/PotionKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Multiplier, MultiplierInfo } from "../../Multiplier";

export class DataPotion {
  potions: any[] = [
    new Nothing(),
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
    new SlightlyStickySalve(),
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
  traps: any[] = [new ThrowingNet(), new IceRope(), new ThunderRope(), new FireRope(), new LightRope(), new DarkRope()];
  talismans: any[] = [
    new GuildMembersEmblem(),
    new CertificateOfCompetence(),
    new MasonsTrowel(),
    new EnchantedAlembic(),
    new TrackersMap(),
    new BerserkersStone(),
    new TrappersTag(),
    new HitanDoll(),
    new RingoldDoll(),
    new NuttyDoll(),
    new MorkylDoll(),
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
    new BananoonDoll(),
    new GlorbliorbusDoll(),
    new DistortionSlimeDoll(),
  ];
  globalInformations = [...this.potions, ...this.traps, ...this.talismans];
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

  GlobalInfo(potionKind) {
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
    this.globalInformations.forEach((potion) => {
      potion.SetPassiveEffect();
    });
  }

  get html() {
    let html = "";
    html += globalThis.data.menu;
    html += `
    <table>  
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Level</th>
        <th scope="col">Disassembled</th>
        <th scope="col">Effect</th>
        <th scope="col">Effect Passive</th>
      </tr>
    </thead>`;

    const noPercent = ["EnchantedAlembic", "SlimeBadge", "MagicslimeBadge", "SpiderBadge", "BatBadge", "FairyBadge", "FoxBadge", "MinorHealthPotion"];
    for (let index = 0; index < Object.entries(PotionKind).length / 2; index++) {
      const potion = PotionKind[index];
      html += `<tr>`;
      html += `<td>${potion}</td>`;
      html += `<td><input type='text' data-endpoint='potion.${potion}.level' size="4"></td>`;
      html += `<td><input type='text' data-endpoint='potion.${potion}.disassembled' size="12"></td>`;
      if (noPercent.includes(potion)) {
        html += `<td data-endpoint='potion.${potion}.effectValue' data-precision='2' data-type="number"></td>`;
      } else {
        html += `<td data-endpoint='potion.${potion}.effectValue' data-precision='2' data-type="percent"></td>`;
      }
      if (noPercent.includes(potion)) {
        html += `<td data-endpoint='potion.${potion}.passiveEffectValue' data-precision='2' data-type="number"></td>`;
      } else {
        html += `<td data-endpoint='potion.${potion}.passiveEffectValue' data-precision='2' data-type="percent"></td>`;
      }
      html += `</tr>`;
    }

    html += "</table>";

    return html;
  }
}
