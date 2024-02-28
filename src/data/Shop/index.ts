import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Multiplier, MultiplierInfo } from "../Multiplier";

export class DataShop {
  shopItemList = [];
  shop_MaterialList = [];
  shop_TrapList = [];
  shop_BlessingList = [];
  shop_TownMaterialList = [];
  materialStockNum: Multiplier;
  trapStockNum: Multiplier;
  blessingStockNum: Multiplier;
  sellPriceRate: Multiplier;
  restockTimesec: Multiplier;
  restockNumMaterial: Multiplier;
  restockNumTrap: Multiplier;
  restockNumBlessing: Multiplier;
  convertTownMaterialAmount: Multiplier;

  Start() {
    // for (let index = 0; index < this.shop_MaterialList.Count; index++)
    //   this.shop_MaterialList[index].Start();
    // for (let index = 0; index < this.shop_TrapList.Count; index++)
    //   this.shop_TrapList[index].Start();
    // for (let index = 0; index < this.shop_BlessingList.Count; index++)
    //   this.shop_BlessingList[index].Start();
  }

  constructor() {
    this.materialStockNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.trapStockNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 20.0));
    this.blessingStockNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.sellPriceRate = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.1));
    this.restockTimesec = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 600.0));
    this.restockNumMaterial = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.restockNumTrap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.restockNumBlessing = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.convertTownMaterialAmount = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    // for (let kind = 0; kind <= 16; kind++)
    //   this.shop_MaterialList.Add(new Shop_Material(this, (MaterialKind) kind));
    // this.shop_TrapList.Add(new Shop_Trap(this, PotionKind.ThrowingNet));
    // this.shop_TrapList.Add(new Shop_Trap(this, PotionKind.IceRope));
    // this.shop_TrapList.Add(new Shop_Trap(this, PotionKind.ThunderRope));
    // this.shop_TrapList.Add(new Shop_Trap(this, PotionKind.FireRope));
    // this.shop_TrapList.Add(new Shop_Trap(this, PotionKind.LightRope));
    // this.shop_TrapList.Add(new Shop_Trap(this, PotionKind.DarkRope));
    // for (let index = 0; index < Enums.BlessingKind); index++)
    //   this.shop_BlessingList.Add(new Shop_Blessing(this, (BlessingKind) index));
    // for (let index = 0; index < Enums.TownMaterialKind); index++) {
    //   TownMaterialKind kind = (TownMaterialKind) index;
    //   if (kind % 5 != 4)
    //     this.shop_TownMaterialList.Add(new Shop_TownMaterial(this, kind));
    // }
    // this.shopItemList.AddRange((IEnumerable<SHOPITEM>) this.shop_MaterialList);
    // this.shopItemList.AddRange((IEnumerable<SHOPITEM>) this.shop_TrapList);
    // this.shopItemList.AddRange((IEnumerable<SHOPITEM>) this.shop_BlessingList);
    // this.shopItemList.AddRange((IEnumerable<SHOPITEM>) this.shop_TownMaterialList);
  }

  //   Shop_Material Material(MaterialKind kind) {
  //     for (let index = 0; index < this.shop_MaterialList.Count; index++) {
  //       if (this.shop_MaterialList[index].materialKind == kind)
  //         return this.shop_MaterialList[index];
  //     }
  //     return this.shop_MaterialList[0];
  //   }

  //   Shop_Trap Trap(PotionKind kind) {
  //     for (let index = 0; index < this.shop_TrapList.Count; index++) {
  //       if (this.shop_TrapList[index].potionKind == kind)
  //         return this.shop_TrapList[index];
  //     }
  //     return this.shop_TrapList[0];
  //   }

  //   Shop_Blessing Blessing(BlessingKind kind) {
  //     for (let index = 0; index < this.shop_BlessingList.Count; index++) {
  //       if (this.shop_BlessingList[index].blessingKind == kind)
  //         return this.shop_BlessingList[index];
  //     }
  //     return this.shop_BlessingList[0];
  //   }

  //   Shop_TownMaterial TownMaterial(TownMaterialKind kind) {
  //     for (let index = 0; index < this.shop_TownMaterialList.Count; index++) {
  //       if (this.shop_TownMaterialList[index].materialKind == kind)
  //         return this.shop_TownMaterialList[index];
  //     }
  //     return this.shop_TownMaterialList[0];
  //   }
}
