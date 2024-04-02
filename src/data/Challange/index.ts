import { DATA } from "..";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { CHALLENGE } from "./CHALLENGE";
import { CHALLENGE_SUPERDUNGEON } from "./CHALLENGE_SUPERDUNGEON";
import { ChallengeHandicap_ArachnettaLv150 } from "./challange/ChallengeHandicap_ArachnettaLv150";
import { ChallengeHandicap_ArachnettaLv250 } from "./challange/ChallengeHandicap_ArachnettaLv250";
import { ChallengeHandicap_ArachnettaLv350 } from "./challange/ChallengeHandicap_ArachnettaLv350";
import { ChallengeHandicap_ArachnettaLv450 } from "./challange/ChallengeHandicap_ArachnettaLv450";
import { ChallengeHandicap_ArachnettaLv550 } from "./challange/ChallengeHandicap_ArachnettaLv550";
import { ChallengeHandicap_FlorzporbLv100 } from "./challange/ChallengeHandicap_FlorzporbLv100";
import { ChallengeHandicap_FlorzporbLv200 } from "./challange/ChallengeHandicap_FlorzporbLv200";
import { ChallengeHandicap_FlorzporbLv300 } from "./challange/ChallengeHandicap_FlorzporbLv300";
import { ChallengeHandicap_FlorzporbLv400 } from "./challange/ChallengeHandicap_FlorzporbLv400";
import { ChallengeHandicap_FlorzporbLv500 } from "./challange/ChallengeHandicap_FlorzporbLv500";
import { ChallengeHandicap_GuardianKorLv200 } from "./challange/ChallengeHandicap_GuardianKorLv200";
import { ChallengeHandicap_GuardianKorLv300 } from "./challange/ChallengeHandicap_GuardianKorLv300";
import { ChallengeHandicap_GuardianKorLv400 } from "./challange/ChallengeHandicap_GuardianKorLv400";
import { ChallengeHandicap_GuardianKorLv500 } from "./challange/ChallengeHandicap_GuardianKorLv500";
import { ChallengeHandicap_GuardianKorLv600 } from "./challange/ChallengeHandicap_GuardianKorLv600";
import { ChallengeHandicap_LadyEmeldaLv300 } from "./challange/ChallengeHandicap_LadyEmeldaLv300";
import { ChallengeHandicap_LadyEmeldaLv400 } from "./challange/ChallengeHandicap_LadyEmeldaLv400";
import { ChallengeHandicap_LadyEmeldaLv500 } from "./challange/ChallengeHandicap_LadyEmeldaLv500";
import { ChallengeHandicap_LadyEmeldaLv600 } from "./challange/ChallengeHandicap_LadyEmeldaLv600";
import { ChallengeHandicap_LadyEmeldaLv700 } from "./challange/ChallengeHandicap_LadyEmeldaLv700";
import { ChallengeHandicap_NariSuneLv350 } from "./challange/ChallengeHandicap_NariSuneLv350";
import { ChallengeHandicap_NariSuneLv450 } from "./challange/ChallengeHandicap_NariSuneLv450";
import { ChallengeHandicap_NariSuneLv550 } from "./challange/ChallengeHandicap_NariSuneLv550";
import { ChallengeHandicap_NariSuneLv650 } from "./challange/ChallengeHandicap_NariSuneLv650";
import { ChallengeHandicap_NariSuneLv750 } from "./challange/ChallengeHandicap_NariSuneLv750";
import { ChallengeHandicap_NostroLv250 } from "./challange/ChallengeHandicap_NostroLv250";
import { ChallengeHandicap_NostroLv350 } from "./challange/ChallengeHandicap_NostroLv350";
import { ChallengeHandicap_NostroLv450 } from "./challange/ChallengeHandicap_NostroLv450";
import { ChallengeHandicap_NostroLv550 } from "./challange/ChallengeHandicap_NostroLv550";
import { ChallengeHandicap_NostroLv650 } from "./challange/ChallengeHandicap_NostroLv650";
import { ChallengeHandicap_OctobaddieLv400 } from "./challange/ChallengeHandicap_OctobaddieLv400";
import { ChallengeHandicap_OctobaddieLv500 } from "./challange/ChallengeHandicap_OctobaddieLv500";
import { ChallengeHandicap_OctobaddieLv600 } from "./challange/ChallengeHandicap_OctobaddieLv600";
import { ChallengeHandicap_OctobaddieLv700 } from "./challange/ChallengeHandicap_OctobaddieLv700";
import { ChallengeHandicap_OctobaddieLv800 } from "./challange/ChallengeHandicap_OctobaddieLv800";
import { ChallengeSoloBoss_ArachnettaLv150 } from "./challange/ChallengeSoloBoss_ArachnettaLv150";
import { ChallengeSoloBoss_FlorzporbLv100 } from "./challange/ChallengeSoloBoss_FlorzporbLv100";
import { ChallengeSoloBoss_GuardianKorLv200 } from "./challange/ChallengeSoloBoss_GuardianKorLv200";
import { ChallengeSoloBoss_LadyEmeldaLv300 } from "./challange/ChallengeSoloBoss_LadyEmeldaLv300";
import { ChallengeSoloBoss_NariSuneLv350 } from "./challange/ChallengeSoloBoss_NariSuneLv350";
import { ChallengeSoloBoss_NostroLv250 } from "./challange/ChallengeSoloBoss_NostroLv250";
import { ChallengeSoloBoss_OctobaddieLv400 } from "./challange/ChallengeSoloBoss_OctobaddieLv400";
import { ChallengeSuperDungeon_BatTreant } from "./challange/ChallengeSuperDungeon_BatTreant";
import { ChallengeSuperDungeon_FairyFlametiger } from "./challange/ChallengeSuperDungeon_FairyFlametiger";
import { ChallengeSuperDungeon_Slime } from "./challange/ChallengeSuperDungeon_Slime";
import { ChallengeSuperDungeon_SlimeMslime } from "./challange/ChallengeSuperDungeon_SlimeMslime";
import { ChallengeSuperDungeon_Spider } from "./challange/ChallengeSuperDungeon_Spider";

export class DataChallenge {
  data: DATA;
  raidbossList: CHALLENGE[] = [];
  solobossList: CHALLENGE[] = [];
  handicapList: CHALLENGE[] = [];
  superdungeonList: CHALLENGE_SUPERDUNGEON[] = [];
  challengeList: CHALLENGE[] = [];
  permanentRewardMultiplier: Multiplier;
  sdStatRewardMultiplier: Multiplier;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.permanentRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.sdStatRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));

    this.solobossList.push(new ChallengeSoloBoss_FlorzporbLv100(this.data));
    this.solobossList.push(new ChallengeSoloBoss_GuardianKorLv200(this.data));
    this.solobossList.push(new ChallengeSoloBoss_LadyEmeldaLv300(this.data));
    this.solobossList.push(new ChallengeSoloBoss_NariSuneLv350(this.data));
    this.solobossList.push(new ChallengeSoloBoss_NostroLv250(this.data));
    this.solobossList.push(new ChallengeSoloBoss_OctobaddieLv400(this.data));
    this.solobossList.push(new ChallengeSoloBoss_ArachnettaLv150(this.data));

    this.handicapList.push(new ChallengeHandicap_FlorzporbLv100(this.data));
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv200(this.data));
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv300(this.data));
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv400(this.data));
    this.handicapList.push(new ChallengeHandicap_FlorzporbLv500(this.data));
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv150(this.data));
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv250(this.data));
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv350(this.data));
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv450(this.data));
    this.handicapList.push(new ChallengeHandicap_ArachnettaLv550(this.data));
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv200(this.data));
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv300(this.data));
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv400(this.data));
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv500(this.data));
    this.handicapList.push(new ChallengeHandicap_GuardianKorLv600(this.data));
    this.handicapList.push(new ChallengeHandicap_NostroLv250(this.data));
    this.handicapList.push(new ChallengeHandicap_NostroLv350(this.data));
    this.handicapList.push(new ChallengeHandicap_NostroLv450(this.data));
    this.handicapList.push(new ChallengeHandicap_NostroLv550(this.data));
    this.handicapList.push(new ChallengeHandicap_NostroLv650(this.data));
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv300(this.data));
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv400(this.data));
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv500(this.data));
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv600(this.data));
    this.handicapList.push(new ChallengeHandicap_LadyEmeldaLv700(this.data));
    this.handicapList.push(new ChallengeHandicap_NariSuneLv350(this.data));
    this.handicapList.push(new ChallengeHandicap_NariSuneLv450(this.data));
    this.handicapList.push(new ChallengeHandicap_NariSuneLv550(this.data));
    this.handicapList.push(new ChallengeHandicap_NariSuneLv650(this.data));
    this.handicapList.push(new ChallengeHandicap_NariSuneLv750(this.data));
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv400(this.data));
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv500(this.data));
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv600(this.data));
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv700(this.data));
    this.handicapList.push(new ChallengeHandicap_OctobaddieLv800(this.data));

    this.superdungeonList.push(new ChallengeSuperDungeon_Slime(this.data));
    this.superdungeonList.push(new ChallengeSuperDungeon_Spider(this.data));
    this.superdungeonList.push(new ChallengeSuperDungeon_BatTreant(this.data));
    this.superdungeonList.push(new ChallengeSuperDungeon_FairyFlametiger(this.data));
    this.superdungeonList.push(new ChallengeSuperDungeon_SlimeMslime(this.data));
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
