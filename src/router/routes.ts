import { PageBattle } from "./../page/Battle/index";
import { PageHelp } from "../page/Help";
import { PageGuild } from "../page/Guild";
import { PageHome } from "../page/Home";
import { PageData } from "../page/Data";
import { PageDropChance } from "../page/Drop-Chance";
import { PageRubyShard } from "../page/Ruby-Shard";
import { PageEquipment } from "../page/Equipment";
import { PageTest } from "../page/Test";
import { PageTalisman } from "../page/Talisman";

export function getRoutes() {
  return {
    404: {
      template: "/templates/404.html",
      title: "404",
      description: "Page not found",
    },
    "/": {
      template: new PageHome(),
      title: "Home",
      description: "Home",
    },
    data: {
      template: new PageData(),
      title: "Data",
      description: "Data",
    },
    battle: {
      template: new PageBattle(),
      title: "Battle Simulator",
      description: "Battle",
    },
    equipment: {
      template: new PageEquipment(),
      title: "Equipment Calculator",
      description: "Equipment",
    },
    guild: {
      template: new PageGuild(),
      title: "Guild Calculator",
      description: "Guild",
    },
    talisman: {
      template: new PageTalisman(),
      title: "Talisman Fragments",
      description: "Talisman",
    },
    "drop-chance": {
      template: new PageDropChance(),
      title: "Drop Chance Calculator",
      description: "Drop Chance",
    },
    "ruby-shard": {
      template: new PageRubyShard(),
      title: "Ruby Shards Calculator",
      description: "Ruby Shard",
    },
    help: {
      template: new PageHelp(),
      title: "Help",
      description: "Help",
    },

    // test: {
    //   template: new PageTest(),
    //   title: "TEST",
    //   description: "Test",
    // },
  };
}
