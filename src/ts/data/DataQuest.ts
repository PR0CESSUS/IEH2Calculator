import { Statistic } from "../Statistic";
import { DataType } from "../type/DataType";
import { statisticModifierKind } from "../type/StatisticModifierKind";
import { statisticModifierType } from "../type/StatisticModifierType";

export class DataQuest {
  data: DataType;

  constructor(data: DataType) {
    this.data = data;
    // 0-13 globalQuestListTutorial
    // 14-25 globalQuestListUpgrade
    // 26-39 globalQuestListNitro
    // 40-51 globalQuestListCapture
    // 52-58 globalQuestListAlchemy
    // console.log(this.data.source.isClearedQuestsGlobal);

    // if (this.data.source.isClearedQuestsGlobal[53]) {
    //   this.data.stat.nitro.add({
    //     type: statisticModifierType.add,
    //     kind: statisticModifierKind.quest,
    //     value: 1000,
    //   });
    // }
    const list = {
      GlobalQuest_Nitro2: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 1000,
        });
      },
      GlobalQuest_Nitro3: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 2000,
        });
      },
      GlobalQuest_Nitro4: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 3000,
        });
      },
      GlobalQuest_Nitro5: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 4000,
        });
      },
      GlobalQuest_Nitro6: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 5000,
        });
      },
      GlobalQuest_Nitro7: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 6000,
        });
      },
      GlobalQuest_Nitro8: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 7000,
        });
      },
      GlobalQuest_Nitro9: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 8000,
        });
      },
      GlobalQuest_Nitro10: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 9000,
        });
      },
      GlobalQuest_Nitro11: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 10000,
        });
      },
      GlobalQuest_Nitro12: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 20000,
        });
      },
      GlobalQuest_Nitro13: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 30000,
        });
      },
      GlobalQuest_Nitro14: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 40000,
        });
      },
      GlobalQuest_Nitro15: () => {
        return this.data.stat.nitro.add({
          type: statisticModifierType.add,
          kind: statisticModifierKind.quest,
          value: 50000,
        });
      },
    };

    if (this.data.source.isClearedQuestsGlobal[61]) {
      list.GlobalQuest_Nitro2();
      list.GlobalQuest_Nitro3();
      list.GlobalQuest_Nitro4();
      list.GlobalQuest_Nitro5();
      list.GlobalQuest_Nitro6();
      list.GlobalQuest_Nitro7();
      list.GlobalQuest_Nitro8();
      list.GlobalQuest_Nitro9();
      list.GlobalQuest_Nitro10();
      list.GlobalQuest_Nitro11();
      list.GlobalQuest_Nitro12();
      list.GlobalQuest_Nitro13();
      list.GlobalQuest_Nitro14();
    }
    if (this.data.source.isClearedQuestsGlobal[60]) {
    }
  }

  quest() {}

  html() {
    let html = "";

    html += `Total Cleared Mission: <span data-endpoint="misc.ClearedMission"></span><br>`;
    html += "<hr>";

    return html;
  }
}
