import { Multiplier } from "../../Multiplier";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";

import { SDS_StatBonus_ArtifactEffectModifier } from "./SDS/SDS_StatBonus_ArtifactEffectModifier";
import { SDS_StatBonus_GoldCap } from "./SDS/SDS_StatBonus_GoldCap";
import { SDS_StatBonus_GoldGain } from "./SDS/SDS_StatBonus_GoldGain";
import { SDS_StatBonus_GuildEXPGain } from "./SDS/SDS_StatBonus_GuildEXPGain";
import { SDS_StatBonus_LoyaltyPointGain } from "./SDS/SDS_StatBonus_LoyaltyPointGain";
import { SDS_StatBonus_ResearchPower } from "./SDS/SDS_StatBonus_ResearchPower";
import { SDS_StatBonus_SDStatRewardMultiplier } from "./SDS/SDS_StatBonus_SDStatRewardMultiplier";
import { SDS_StatBonus_SlimeCoinCap } from "./SDS/SDS_StatBonus_SlimeCoinCap";
import { SDS_StatBonus_TamingPointGain } from "./SDS/SDS_StatBonus_TamingPointGain";
import { SuperDungeonShop_StatBonus } from "./SuperDungeonShop_StatBonus";
import { SuperDungeonShop } from "./SuperDungeonShop";

export class SuperDungeonShopController {
  itemList: SuperDungeonShop[] = [];
  //   itemArtifactList: SuperDungeonShop_Artifact[] = [];
  //   itemScrollList: SuperDungeonShop_Scroll[] = [];
  //   itemAnvilList: SuperDungeonShop_Anvil[] = [];
  //   itemTalismanList: SuperDungeonShop_Talisman[] = [];
  //   itemSpecialList: SuperDungeonShop_Special[] = [];
  itemStatBonusList: SuperDungeonShop_StatBonus[] = [];

  rubyConverterPieceOfRubyCost: Multiplier;
  pieceOfRubyConverterPieceOfRubyGain: Multiplier;

  constructor() {
    this.rubyConverterPieceOfRubyCost = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50000.0));
    this.pieceOfRubyConverterPieceOfRubyGain = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 5000.0));
  }

  Start() {
    this.SetItem();
    for (let index = 0; index < this.itemList.length; index++) this.itemList[index].Start();
  }

  SetItem() {
    this.itemStatBonusList.push(new SDS_StatBonus_ArtifactEffectModifier(27));
    this.itemStatBonusList.push(new SDS_StatBonus_SDStatRewardMultiplier(57));
    this.itemStatBonusList.push(new SDS_StatBonus_GoldCap(58));
    this.itemStatBonusList.push(new SDS_StatBonus_GoldGain(59));
    this.itemStatBonusList.push(new SDS_StatBonus_SlimeCoinCap(60));
    this.itemStatBonusList.push(new SDS_StatBonus_GuildEXPGain(61));
    this.itemStatBonusList.push(new SDS_StatBonus_TamingPointGain(62));
    this.itemStatBonusList.push(new SDS_StatBonus_LoyaltyPointGain(63));
    this.itemStatBonusList.push(new SDS_StatBonus_ResearchPower(64));

    this.itemList = [...this.itemStatBonusList];
  }

  Item(id) {
    for (let index = 0; index < this.itemList.length; index++) {
      if (this.itemList[index].id == id) return this.itemList[index];
    }
    return null;
  }
}
