import { SuperDungeonGlobalController } from ".";
import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { SuperDungeonUpgradeKind } from "../../type/SuperDungeonUpgradeKind";
import { SuperDungeonUpgrade } from "./SuperDungeonUpgrade";
import { SDU_AlchemyPointGainMul } from "./SDU/SDU_AlchemyPointGainMul";
import { SDU_ArmoredFuryMultiplier } from "./SDU/SDU_ArmoredFuryMultiplier";
import { SDU_ATKMultiplier } from "./SDU/SDU_ATKMultiplier";
import { SDU_AutoBuyPowerups } from "./SDU/SDU_AutoBuyPowerups";
import { SDU_AutoDodge } from "./SDU/SDU_AutoDodge";
import { SDU_AutoLeaveAndRetry } from "./SDU/SDU_AutoLeaveAndRetry";
import { SDU_AutoProgress } from "./SDU/SDU_AutoProgress";
import { SDU_AutoUseRefreshTicket } from "./SDU/SDU_AutoUseRefreshTicket";
import { SDU_BoostStartGoodRNG } from "./SDU/SDU_BoostStartGoodRNG";
import { SDU_CriticalDamageMultiplier } from "./SDU/SDU_CriticalDamageMultiplier";
import { SDU_CrystalGain } from "./SDU/SDU_CrystalGain";
import { SDU_CrystalResearchPowerMul } from "./SDU/SDU_CrystalResearchPowerMul";
import { SDU_DamageToChallengeBossMultiplier } from "./SDU/SDU_DamageToChallengeBossMultiplier";
import { SDU_DamageToRegularMonstersMultiplier } from "./SDU/SDU_DamageToRegularMonstersMultiplier";
import { SDU_DebuffResistance } from "./SDU/SDU_DebuffResistance";
import { SDU_DEFMultiplier } from "./SDU/SDU_DEFMultiplier";
import { SDU_ElementResistanceMultiplier } from "./SDU/SDU_ElementResistanceMultiplier";
import { SDU_EquipmentProficiencyGainMultiplier } from "./SDU/SDU_EquipmentProficiencyGainMultiplier";
import { SDU_FameGain } from "./SDU/SDU_FameGain";
import { SDU_FlexibleDodge } from "./SDU/SDU_FlexibleDodge";
import { SDU_GoldCap } from "./SDU/SDU_GoldCap";
import { SDU_GoldGain } from "./SDU/SDU_GoldGain";
import { SDU_GuildExpMultiplier } from "./SDU/SDU_GuildExpMultiplier";
import { SDU_HeroExpGainMultiplier } from "./SDU/SDU_HeroExpGainMultiplier";
import { SDU_HPMultiplier } from "./SDU/SDU_HPMultiplier";
import { SDU_LeafGain } from "./SDU/SDU_LeafGain";
import { SDU_LeafResearchPowerMul } from "./SDU/SDU_LeafResearchPowerMul";
import { SDU_LeaveAndRetry } from "./SDU/SDU_LeaveAndRetry";
import { SDU_LoyaltyPointGainMul } from "./SDU/SDU_LoyaltyPointGainMul";
import { SDU_MagicalCriticalChanceMultiplier } from "./SDU/SDU_MagicalCriticalChanceMultiplier";
import { SDU_MagicalDamageMultiplier } from "./SDU/SDU_MagicalDamageMultiplier";
import { SDU_MATKMultiplier } from "./SDU/SDU_MATKMultiplier";
import { SDU_MDEFMultiplier } from "./SDU/SDU_MDEFMultiplier";
import { SDU_MorePowerups } from "./SDU/SDU_MorePowerups";
import { SDU_MPMultiplier } from "./SDU/SDU_MPMultiplier";
import { SDU_PetCriticalDamageMultiplier } from "./SDU/SDU_PetCriticalDamageMultiplier";
import { SDU_PetDebuffResistance } from "./SDU/SDU_PetDebuffResistance";
import { SDU_PetEXPGainMul } from "./SDU/SDU_PetEXPGainMul";
import { SDU_PetMagicalCriticalChanceMultiplier } from "./SDU/SDU_PetMagicalCriticalChanceMultiplier";
import { SDU_PetPhysicalCriticalChanceMultiplier } from "./SDU/SDU_PetPhysicalCriticalChanceMultiplier";
import { SDU_PhysicalCriticalChanceMultiplier } from "./SDU/SDU_PhysicalCriticalChanceMultiplier";
import { SDU_PhysicalDamageMultiplier } from "./SDU/SDU_PhysicalDamageMultiplier";
import { SDU_PowerupFilterSlot } from "./SDU/SDU_PowerupFilterSlot";
import { SDU_SDArmoredFury } from "./SDU/SDU_SDArmoredFury";
import { SDU_SDChallengeBossDamageCutMultiplier } from "./SDU/SDU_SDChallengeBossDamageCutMultiplier";
import { SDU_SDChallengeBossDamageMultiplier } from "./SDU/SDU_SDChallengeBossDamageMultiplier";
import { SDU_SDDamageCutMultiplier } from "./SDU/SDU_SDDamageCutMultiplier";
import { SDU_SDDamageMultiplier } from "./SDU/SDU_SDDamageMultiplier";
import { SDU_SDDungeonCoinBoostStart } from "./SDU/SDU_SDDungeonCoinBoostStart";
import { SDU_SDMPGainEveryFloor } from "./SDU/SDU_SDMPGainEveryFloor";
import { SDU_SDPowerupBoostStart } from "./SDU/SDU_SDPowerupBoostStart";
import { SDU_SDUpgreadeSuperQueue } from "./SDU/SDU_SDUpgreadeSuperQueue";
import { SDU_SDWardedFury } from "./SDU/SDU_SDWardedFury";
import { SDU_SkillProficiencyGainMultiplier } from "./SDU/SDU_SkillProficiencyGainMultiplier";
import { SDU_SlimeCoinCap } from "./SDU/SDU_SlimeCoinCap";
import { SDU_SPDMultiplier } from "./SDU/SDU_SPDMultiplier";
import { SDU_StoneGain } from "./SDU/SDU_StoneGain";
import { SDU_StoneResearchPowerMul } from "./SDU/SDU_StoneResearchPowerMul";
import { SDU_TamingPointGainMul } from "./SDU/SDU_TamingPointGainMul";
import { SDU_TownMatGainMul } from "./SDU/SDU_TownMatGainMul";
import { SDU_WardedFuryMultiplier } from "./SDU/SDU_WardedFuryMultiplier";

export class SuperDungeonUpgradeController {
  sdgCtrl: SuperDungeonGlobalController;
  automationList: SuperDungeonUpgrade[] = [];
  upgrade1ist: SuperDungeonUpgrade[] = [];
  upgrade2ist: SuperDungeonUpgrade[] = [];
  upgrade3ist: SuperDungeonUpgrade[] = [];
  upgrade4ist: SuperDungeonUpgrade[] = [];
  upgradeList: SuperDungeonUpgrade[] = [];
  upgradeListArray = [];
  costReduction: Multiplier;
  availableSuperQueue: Multiplier;

  constructor(sdgCtrl: SuperDungeonGlobalController) {
    this.sdgCtrl = sdgCtrl;
    this.availableSuperQueue = new Multiplier();
    this.SetUpgrade();
    this.costReduction = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0), () => 0.99, null);
  }

  SetUpgrade() {
    this.automationList.push(new SDU_LeaveAndRetry(this.sdgCtrl));
    this.automationList.push(new SDU_AutoProgress(this.sdgCtrl));
    this.automationList.push(new SDU_AutoLeaveAndRetry(this.sdgCtrl));
    this.automationList.push(new SDU_AutoBuyPowerups(this.sdgCtrl));
    this.automationList.push(new SDU_AutoUseRefreshTicket(this.sdgCtrl));
    this.automationList.push(new SDU_PowerupFilterSlot(this.sdgCtrl));
    this.automationList.push(new SDU_FlexibleDodge(this.sdgCtrl));
    this.automationList.push(new SDU_AutoDodge(this.sdgCtrl));
    this.automationList.push(new SDU_SDUpgreadeSuperQueue(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDDamageMultiplier(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDDamageCutMultiplier(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDChallengeBossDamageMultiplier(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDChallengeBossDamageCutMultiplier(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDArmoredFury(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDWardedFury(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_MorePowerups(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDMPGainEveryFloor(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDDungeonCoinBoostStart(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_SDPowerupBoostStart(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_BoostStartGoodRNG(this.sdgCtrl));
    this.upgrade1ist.push(new SDU_FameGain(this.sdgCtrl));
    this.upgrade2ist.push(new SDU_HeroExpGainMultiplier(this.sdgCtrl));
    this.upgrade2ist.push(new SDU_GoldCap(this.sdgCtrl));
    this.upgrade2ist.push(new SDU_GoldGain(this.sdgCtrl));
    this.upgrade2ist.push(new SDU_StoneGain(this.sdgCtrl));
    this.upgrade2ist.push(new SDU_CrystalGain(this.sdgCtrl));
    this.upgrade2ist.push(new SDU_LeafGain(this.sdgCtrl));
    this.upgrade2ist.push(new SDU_SlimeCoinCap(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_HPMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_MPMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_ATKMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_MATKMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_DEFMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_MDEFMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_SPDMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_PhysicalCriticalChanceMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_MagicalCriticalChanceMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_CriticalDamageMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_PhysicalDamageMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_MagicalDamageMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_ArmoredFuryMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_WardedFuryMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_ElementResistanceMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_DebuffResistance(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_PetPhysicalCriticalChanceMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_PetMagicalCriticalChanceMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_PetCriticalDamageMultiplier(this.sdgCtrl));
    this.upgrade3ist.push(new SDU_PetDebuffResistance(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_DamageToRegularMonstersMultiplier(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_DamageToChallengeBossMultiplier(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_SkillProficiencyGainMultiplier(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_EquipmentProficiencyGainMultiplier(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_GuildExpMultiplier(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_TamingPointGainMul(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_PetEXPGainMul(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_LoyaltyPointGainMul(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_AlchemyPointGainMul(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_StoneResearchPowerMul(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_CrystalResearchPowerMul(this.sdgCtrl));
    this.upgrade4ist.push(new SDU_LeafResearchPowerMul(this.sdgCtrl));
    this.upgradeList = [...this.upgrade1ist, ...this.upgrade2ist, ...this.upgrade3ist, ...this.upgrade4ist];
    this.upgradeListArray[0] = this.automationList;
    this.upgradeListArray[1] = this.upgrade1ist;
    this.upgradeListArray[2] = this.upgrade2ist;
    this.upgradeListArray[3] = this.upgrade3ist;
    this.upgradeListArray[4] = this.upgrade4ist;
  }

  Start() {
    for (let index = 0; index < this.upgradeList.length; index++) this.upgradeList[index].Start();
  }

  Upgrade(kind: SuperDungeonUpgradeKind): SuperDungeonUpgrade {
    for (let index = 0; index < this.upgradeList.length; index++) {
      if (this.upgradeList[index].kind == kind) return this.upgradeList[index];
    }
    return this.upgradeList[0];
  }
}
