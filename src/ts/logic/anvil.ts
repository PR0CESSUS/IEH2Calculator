export class LogicAnvil {
  name = "anvil";
  app;
  default = [
    {
      name: "herolevel",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "proficiencygain",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "herolevel",
      diff: 3,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "herolevel",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "herolevel",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "herolevel",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "herolevel",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "herolevel",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
    {
      name: "herolevel",
      diff: 1,
      time: 1,
      reward: 18000,
      orb: 3600,
    },
  ];
  constructor(app) {
    this.app = app;
    // console.log(this.app.data.custom?.dungeon);

    if (!this.app.data.custom?.dungeon) {
      this.app.data.custom.dungeon = this.default;
      //   console.log(this.app.data.custom.dungeon);
      this.app.data.save();
      console.log("brak danych");
    }
  }

  // console.log("class constructor aka Init");

  update() {
    for (let i in this.app.data.custom.dungeon) {
      let perhour = 3600 / this.app.data.custom.dungeon[i].time;
      let reward = this.getReward(this.app.data.custom.dungeon[i].name);
      this.app.data.custom.dungeon[i].reward = Math.round(perhour * reward * this.app.data.custom.dungeon[i].diff * this.app.data.misc.nitroSpeed);
      this.app.data.custom.dungeon[i].orb = Math.round(perhour * this.app.data.misc.nitroSpeed);
    }
  }

  getReward(name) {
    let reward = 0;
    switch (name) {
      case "herolevel":
      case "requiredability":
        reward = 5;
        break;
      case "herolevel2":
      case "requiredability2":
        reward = 10;
        break;
      case "proficiencygain":
        reward = 1;
        break;
      case "equipmenteffect":
        reward = 0.1;
        break;
      case "purifyofcursedeffect":
        reward = 0.01;
        break;
      case "proficiencygain2":
        reward = 2;
        break;
      case "equipmenteffect2":
        reward = 0.2;
        break;
    }

    return reward;
  }
}
