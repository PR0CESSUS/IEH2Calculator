import { ChallengeHandicap_ArachnettaLv150 } from "./ChallengeHandicap_ArachnettaLv150";
import { ChallengeHandicap_ArachnettaLv250 } from "./ChallengeHandicap_ArachnettaLv250";
import { ChallengeHandicap_ArachnettaLv350 } from "./ChallengeHandicap_ArachnettaLv350";
import { ChallengeHandicap_ArachnettaLv450 } from "./ChallengeHandicap_ArachnettaLv450";
import { ChallengeHandicap_FlorzporbLv100 } from "./ChallengeHandicap_FlorzporbLv100";
import { ChallengeHandicap_FlorzporbLv200 } from "./ChallengeHandicap_FlorzporbLv200";
import { ChallengeHandicap_FlorzporbLv300 } from "./ChallengeHandicap_FlorzporbLv300";
import { ChallengeHandicap_FlorzporbLv400 } from "./ChallengeHandicap_FlorzporbLv400";
import { ChallengeHandicap_GuardianKorLv200 } from "./ChallengeHandicap_GuardianKorLv200";
import { ChallengeHandicap_GuardianKorLv300 } from "./ChallengeHandicap_GuardianKorLv300";
import { ChallengeHandicap_GuardianKorLv400 } from "./ChallengeHandicap_GuardianKorLv400";
import { ChallengeHandicap_GuardianKorLv500 } from "./ChallengeHandicap_GuardianKorLv500";
import { ChallengeHandicap_LadyEmeldaLv300 } from "./ChallengeHandicap_LadyEmeldaLv300";
import { ChallengeHandicap_LadyEmeldaLv400 } from "./ChallengeHandicap_LadyEmeldaLv400";
import { ChallengeHandicap_LadyEmeldaLv500 } from "./ChallengeHandicap_LadyEmeldaLv500";
import { ChallengeHandicap_LadyEmeldaLv600 } from "./ChallengeHandicap_LadyEmeldaLv600";
import { ChallengeHandicap_NariSuneLv350 } from "./ChallengeHandicap_NariSuneLv350";
import { ChallengeHandicap_NariSuneLv450 } from "./ChallengeHandicap_NariSuneLv450";
import { ChallengeHandicap_NariSuneLv550 } from "./ChallengeHandicap_NariSuneLv550";
import { ChallengeHandicap_NariSuneLv650 } from "./ChallengeHandicap_NariSuneLv650";
import { ChallengeHandicap_NostroLv250 } from "./ChallengeHandicap_NostroLv250";
import { ChallengeHandicap_NostroLv350 } from "./ChallengeHandicap_NostroLv350";
import { ChallengeHandicap_NostroLv450 } from "./ChallengeHandicap_NostroLv450";
import { ChallengeHandicap_NostroLv550 } from "./ChallengeHandicap_NostroLv550";
import { ChallengeHandicap_OctobaddieLv400 } from "./ChallengeHandicap_OctobaddieLv400";
import { ChallengeHandicap_OctobaddieLv500 } from "./ChallengeHandicap_OctobaddieLv500";
import { ChallengeHandicap_OctobaddieLv600 } from "./ChallengeHandicap_OctobaddieLv600";
import { ChallengeHandicap_OctobaddieLv700 } from "./ChallengeHandicap_OctobaddieLv700";

import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { ChallengeSuperDungeon_Slime } from "./ChallengeSuperDungeon_Slime";
import { ChallengeSuperDungeon_Spider } from "./ChallengeSuperDungeon_Spider";
import { ChallengeSuperDungeon_BatTreant } from "./ChallengeSuperDungeon_BatTreant";
import { ChallengeSuperDungeon_FairyFlametiger } from "./ChallengeSuperDungeon_FairyFlametiger";
import { ChallengeSuperDungeon_SlimeMslime } from "./ChallengeSuperDungeon_SlimeMslime";
import { ChallengeSoloBoss_ArachnettaLv150 } from "./data/ChallengeSoloBoss_ArachnettaLv150";
import { ChallengeSoloBoss_FlorzporbLv100 } from "./data/ChallengeSoloBoss_FlorzporbLv100";
import { ChallengeSoloBoss_GuardianKorLv200 } from "./data/ChallengeSoloBoss_GuardianKorLv200";
import { ChallengeSoloBoss_LadyEmeldaLv300 } from "./data/ChallengeSoloBoss_LadyEmeldaLv300";
import { ChallengeSoloBoss_NariSuneLv350 } from "./data/ChallengeSoloBoss_NariSuneLv350";
import { ChallengeSoloBoss_NostroLv250 } from "./data/ChallengeSoloBoss_NostroLv250";
import { ChallengeSoloBoss_OctobaddieLv400 } from "./data/ChallengeSoloBoss_OctobaddieLv400";

export class DataChallenge {
  raidbossList = [];
  solobossList = [];
  handicapList = [];
  superdungeonList = [];
  challengeList = [];
  permanentRewardMultiplier: Multiplier;
  sdStatRewardMultiplier: Multiplier;

  constructor() {
    this.permanentRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.sdStatRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    // console.log(globalThis.data.challenge);
    // this.solobossList.push(new ChallengeSoloBoss_ArachnettaLv150());
    this.solobossList.push(new ChallengeSoloBoss_FlorzporbLv100());
    this.solobossList.push(new ChallengeSoloBoss_GuardianKorLv200());
    this.solobossList.push(new ChallengeSoloBoss_LadyEmeldaLv300());
    this.solobossList.push(new ChallengeSoloBoss_NariSuneLv350());
    this.solobossList.push(new ChallengeSoloBoss_NostroLv250());
    this.solobossList.push(new ChallengeSoloBoss_OctobaddieLv400());
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv100());
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv200());
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv300());
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv400());
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv150());
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv250());
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv350());
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv450());
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv200());
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv300());
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv400());
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv500());
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv300());
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv400());
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv500());
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv600());
    this.handicapList.push(new ChallengeHandicap_NostroLv250());
    this.handicapList.push(new ChallengeHandicap_NostroLv350());
    this.handicapList.push(new ChallengeHandicap_NostroLv450());
    this.handicapList.push(new ChallengeHandicap_NostroLv550());
    this.handicapList.push(new ChallengeHandicap_NariSuneLv350());
    this.handicapList.push(new ChallengeHandicap_NariSuneLv450());
    this.handicapList.push(new ChallengeHandicap_NariSuneLv550());
    this.handicapList.push(new ChallengeHandicap_NariSuneLv650());
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv400());
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv500());
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv600());
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv700());
    this.superdungeonList.push(new ChallengeSuperDungeon_Slime());
    this.superdungeonList.push(new ChallengeSuperDungeon_Spider());
    this.superdungeonList.push(new ChallengeSuperDungeon_BatTreant());
    this.superdungeonList.push(new ChallengeSuperDungeon_FairyFlametiger());
    this.superdungeonList.push(new ChallengeSuperDungeon_SlimeMslime());
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
