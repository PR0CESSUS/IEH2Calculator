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
    }
  }

  // console.log("class constructor aka Init");

  update() {
    for (let i in this.app.data.custom.dungeon) {
      let perhour = 3600 / this.app.data.custom.dungeon[i].time;
      let reward = this.getReward(this.app.data.custom.dungeon[i].name);
      // console.log(i, perhour, reward);

      this.app.data.custom.dungeon[i].reward = Math.round(perhour * reward * this.app.data.custom.dungeon[i].diff * this.app.data.misc.nitroSpeed);
      this.app.data.custom.dungeon[i].orb = Math.round(perhour * this.app.data.misc.nitroSpeed);
      // this.app.data.custom.dungeon[i].x = "xyz";
    }
  }

  getReward(name) {
    switch (name) {
      case "herolevel":
      case "requiredability":
        return 5;

      case "herolevel2":
      case "requiredability2":
        return 10;

      case "proficiencygain":
        return 1;

      case "equipmenteffect":
        return 0.1;

      case "purifyofcursedeffect":
        return 0.01;

      case "proficiencygain2":
        return 2;

      case "equipmenteffect2":
        return 0.2;
    }
  }
}
