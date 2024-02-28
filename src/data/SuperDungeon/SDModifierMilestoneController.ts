import { DATA } from "..";
import { MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";

export class SDModifierMilestoneController {
  //   mMList: SDMM[] = [];
  data: DATA;

  constructor(DATA: DATA) {
    this.data = DATA;
  }

  Total() {
    return this.data.source.maxModifierCleareds.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  Start() {
    this.SetModifierMilestones();
  }

  isCleared(value) {
    return this.Total() >= value;
  }

  SetModifierMilestones() {
    this.data.sdg.upgradeCtrl.availableSuperQueue.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(10)
      )
    );

    this.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(30)
      )
    );

    this.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(60)
      )
    );

    this.data.sdg.powerupFilterLoadoutSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(100)
      )
    );
    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(110)
      )
    );

    this.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(130)
      )
    );

    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(150)
      )
    );

    this.data.sdg.lootGainOnDie.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 0.25,
        () => this.isCleared(170)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(180)
      )
    );

    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(240)
      )
    );

    this.data.sdg.powerupMaxRank.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 25.0,
        () => this.isCleared(300)
      )
    );
    this.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(320)
      )
    );

    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(360)
      )
    );

    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(400)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(420)
      )
    );
    this.data.sdg.modifierLoadoutSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(440)
      )
    );

    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(480)
      )
    );
    this.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(500)
      )
    );

    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.CriticalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(550)
      )
    );

    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(600)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(625)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(650)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(675)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(700)
      )
    );
    this.data.sdg.powerupMaxRank.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 25.0,
        () => this.isCleared(725)
      )
    );

    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageCutMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(825)
      )
    );

    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(875)
      )
    );
    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(900)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DungeonCoinGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(925)
      )
    );
    this.data.sdg.upgradeCtrl.availableSuperQueue.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(950)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(975)
      )
    );
    this.data.quest.sdRefreshTicketFromDailyQuest.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(1000)
      )
    );
    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1025)
      )
    );
    this.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(1050)
      )
    );
    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1075)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.FameGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1100)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalAbsorption).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1125)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalAbsorption).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1150)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.SkillCastSpeed).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1175)
      )
    );

    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1225)
      )
    );

    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1275)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.SkillHitCount).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1300)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ExtraAfterDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1325)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1350)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1375)
      )
    );
    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1425)
      )
    );
    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1475)
      )
    );

    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1550)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1575)
      )
    );
    this.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(1600)
      )
    );
    this.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1625)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DungeonCoinGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1650)
      )
    );
    this.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1675)
      )
    );

    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.FameGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1750)
      )
    );

    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageCutMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1850)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(1900)
      )
    );

    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.EquipmentDropChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(2100)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(2200)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(2250)
      )
    );
    this.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(2300)
      )
    );

    this.data.quest.sdRefreshTicketFromDailyQuest.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(3000)
      )
    );
  }

  //   SetUnlockShopItem(int[] ids, Func<bool> condition, Func<string> lockString) {
  //     for (let index = 0; index < ids.length; index++)
  //       this.data.sdg.shopCtrl.Item(ids[index]).unlock.RegisterCondition(condition, lockString);
  //   }

  //   SetUnlockModifier(
  //     kinds: SDModifierKind[],
  //     Func<bool> condition,
  //     Func<string> lockString)
  //   {
  //     for (let index = 0; index < kinds.length; index++)
  //       this.data.sdg.SetUnlockModifier(kinds[index], condition, lockString);
  //   }
}
