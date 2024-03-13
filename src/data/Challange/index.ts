import { MultiplierInfo, Multiplier } from "../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { DATA } from "..";
import { ChallengeKind } from "../../type/ChallengeKind";
import { CHALLENGE } from "./CHALLENGE";

export class DataChallenge {
  #data: DATA;
  raidbossList: CHALLENGE[] = [];
  solobossList: CHALLENGE[] = [];
  handicapList: CHALLENGE[] = [];
  superdungeonList: CHALLENGE[] = [];
  challengeList: CHALLENGE[] = [];
  permanentRewardMultiplier: Multiplier;
  sdStatRewardMultiplier: Multiplier;

  constructor(DATA: DATA) {
    this.#data = DATA;
    this.permanentRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.sdStatRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    // console.log(globalThis.data.challenge);
    // this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloArachnetta150));
    this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloFlorzporb100));
    this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloGuardianKor200));
    this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloLadyEmelda300));
    this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloLadyEmelda400));
    this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloNariSune350));
    this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloNostro250));
    this.solobossList.push(new CHALLENGE(this.#data, ChallengeKind.SoloOctobaddie400));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCFlorzporb100));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCFlorzporb200));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCFlorzporb300));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCFlorzporb400));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCArachnetta150));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCArachnetta250));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCArachnetta350));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCArachnetta450));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCGuardianKor200));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCGuardianKor300));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCGuardianKor400));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCGuardianKor500));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCLadyEmelda300));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCLadyEmelda400));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCLadyEmelda500));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCLadyEmelda600));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNostro250));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNostro350));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNostro450));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNostro550));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNariSune350));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNariSune450));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNariSune550));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCNariSune650));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCOctobaddie400));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCOctobaddie500));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCOctobaddie600));
    this.handicapList.push(new CHALLENGE(this.#data, ChallengeKind.HCOctobaddie700));
    this.superdungeonList.push(new CHALLENGE(this.#data, ChallengeKind.SDSlime));
    this.superdungeonList.push(new CHALLENGE(this.#data, ChallengeKind.SDSpider));
    this.superdungeonList.push(new CHALLENGE(this.#data, ChallengeKind.SDBatTreant));
    this.superdungeonList.push(new CHALLENGE(this.#data, ChallengeKind.SDFairyFlametiger));
    this.superdungeonList.push(new CHALLENGE(this.#data, ChallengeKind.SDSlimeMslime));
  }

  Start() {
    this.handicapList.forEach((challange) => {
      challange.Start();
    });
    this.superdungeonList.forEach((challange) => {
      challange.Start();
    });
    this.solobossList.forEach((challange) => {
      challange.Start();
    });
  }
}
