import { MultiplierInfo } from "../../Multiplier";
import { SDGem } from "./SDGem";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
import { SDGemKind } from "../../type/SDGemKind";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";

export class SDModifierMilestoneController {
  //   mMList: SDMM[] = [];

  Total() {
    return globalThis.data.source.maxModifierCleareds.reduce((a, b) => {
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
    globalThis.data.sdg.upgradeCtrl.availableSuperQueue.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(10)
      )
    );

    globalThis.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(30)
      )
    );

    globalThis.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(60)
      )
    );

    globalThis.data.sdg.powerupFilterLoadoutSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(100)
      )
    );
    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(110)
      )
    );

    globalThis.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(130)
      )
    );

    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(150)
      )
    );

    globalThis.data.sdg.lootGainOnDie.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 0.25,
        () => this.isCleared(170)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(180)
      )
    );

    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(240)
      )
    );

    globalThis.data.sdg.powerupMaxRank.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 25.0,
        () => this.isCleared(300)
      )
    );
    globalThis.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(320)
      )
    );

    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(360)
      )
    );

    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(400)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(420)
      )
    );
    globalThis.data.sdg.modifierLoadoutSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(440)
      )
    );

    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(480)
      )
    );
    globalThis.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(500)
      )
    );

    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.CriticalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(550)
      )
    );

    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(600)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(625)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(650)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(675)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(700)
      )
    );
    globalThis.data.sdg.powerupMaxRank.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 25.0,
        () => this.isCleared(725)
      )
    );

    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageCutMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(825)
      )
    );

    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(875)
      )
    );
    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(900)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DungeonCoinGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(925)
      )
    );
    globalThis.data.sdg.upgradeCtrl.availableSuperQueue.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(950)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(975)
      )
    );
    globalThis.data.quest.sdRefreshTicketFromDailyQuest.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(1000)
      )
    );
    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1025)
      )
    );
    globalThis.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(1050)
      )
    );
    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1075)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.FameGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1100)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalAbsorption).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1125)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalAbsorption).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1150)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.SkillCastSpeed).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1175)
      )
    );

    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1225)
      )
    );

    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1275)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.SkillHitCount).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1300)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ExtraAfterDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(1325)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1350)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalDamage).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1375)
      )
    );
    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1425)
      )
    );
    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1475)
      )
    );

    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1550)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1575)
      )
    );
    globalThis.data.sdg.powerupFilterSlot.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 1.0,
        () => this.isCleared(1600)
      )
    );
    globalThis.data.sdg.shopCtrl.pieceOfRubyConverterPieceOfRubyGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => 500.0,
        () => this.isCleared(1625)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DungeonCoinGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1650)
      )
    );
    globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Add,
        () => -1000.0,
        () => this.isCleared(1675)
      )
    );

    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.FameGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1750)
      )
    );

    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageCutMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.3,
        () => this.isCleared(1850)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.DamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(1900)
      )
    );

    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.EquipmentDropChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.2,
        () => this.isCleared(2100)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.ChallengeBossDamageMultiplier).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(2200)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.PhysicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(2250)
      )
    );
    globalThis.data.sdg.PowerupEffectMultiplier(SuperDungeonPowerupKind.MagicalCriticalChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.SDModifierMilestone,
        MultiplierType.Mul,
        () => 0.5,
        () => this.isCleared(2300)
      )
    );

    globalThis.data.quest.sdRefreshTicketFromDailyQuest.RegisterMultiplier(
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
  //       globalThis.data.sdg.shopCtrl.Item(ids[index]).unlock.RegisterCondition(condition, lockString);
  //   }

  //   SetUnlockModifier(
  //     kinds: SDModifierKind[],
  //     Func<bool> condition,
  //     Func<string> lockString)
  //   {
  //     for (let index = 0; index < kinds.length; index++)
  //       globalThis.data.sdg.SetUnlockModifier(kinds[index], condition, lockString);
  //   }
}
