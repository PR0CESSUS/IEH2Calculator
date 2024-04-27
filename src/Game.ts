import upgrade from "@/data/upgrades.json";

type UpgradeData = {
  Addendum: number;
  Cost: number;
  Description: string;
  ID: number;
  Multiplier: number;
  Name: string;
  Sprite: string;
  V: string;
};

export class Game {
  game: string;
  upgrade: UpgradeData[];
  constructor() {
    this.game = "gra";
    this.upgrade = upgrade;
  }
}
