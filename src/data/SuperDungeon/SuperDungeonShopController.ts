import { Multiplier } from "../Multiplier";
import { MultiplierInfo } from "../Multiplier";
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
import { DATA } from "..";

export class SuperDungeonShopController {
  data: DATA;
  itemList: SuperDungeonShop[] = [];
  //   itemArtifactList: SuperDungeonShop_Artifact[] = [];
  //   itemScrollList: SuperDungeonShop_Scroll[] = [];
  //   itemAnvilList: SuperDungeonShop_Anvil[] = [];
  //   itemTalismanList: SuperDungeonShop_Talisman[] = [];
  //   itemSpecialList: SuperDungeonShop_Special[] = [];
  itemStatBonusList: SuperDungeonShop_StatBonus[] = [];

  rubyConverterPieceOfRubyCost: Multiplier;
  pieceOfRubyConverterPieceOfRubyGain: Multiplier;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.rubyConverterPieceOfRubyCost = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50000.0));
    this.pieceOfRubyConverterPieceOfRubyGain = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 5000.0));
  }

  Start() {
    this.SetItem();
    for (let index = 0; index < this.itemList.length; index++) this.itemList[index].Start();
  }

  SetItem() {
    this.itemStatBonusList.push(new SDS_StatBonus_ArtifactEffectModifier(this.data, 27));
    this.itemStatBonusList.push(new SDS_StatBonus_SDStatRewardMultiplier(this.data, 57));
    this.itemStatBonusList.push(new SDS_StatBonus_GoldCap(this.data, 58));
    this.itemStatBonusList.push(new SDS_StatBonus_GoldGain(this.data, 59));
    this.itemStatBonusList.push(new SDS_StatBonus_SlimeCoinCap(this.data, 60));
    this.itemStatBonusList.push(new SDS_StatBonus_GuildEXPGain(this.data, 61));
    this.itemStatBonusList.push(new SDS_StatBonus_TamingPointGain(this.data, 62));
    this.itemStatBonusList.push(new SDS_StatBonus_LoyaltyPointGain(this.data, 63));
    this.itemStatBonusList.push(new SDS_StatBonus_ResearchPower(this.data, 64));

    this.itemList = [...this.itemStatBonusList];
  }

  Item(id) {
    for (let index = 0; index < this.itemList.length; index++) {
      if (this.itemList[index].id == id) return this.itemList[index];
    }
    return null;
  }
}
