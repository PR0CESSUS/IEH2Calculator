import { CalculatorMainframe } from "../CalculatorMainframe";

export class LogicSlimeBank {
  name = "slimeBank";
  app: CalculatorMainframe;
  constructor(app: CalculatorMainframe) {
    this.app = app;
  }

  update() {
    this.app.set("custom.slimeCoinCapTotal", this.getSlimeCoinCapTotal());
    this.app.set("custom.slimeCoinCapIntrest", this.getSlimeCoinIntrest());
    this.app.set("custom.slimeCoinCapMultiplier", this.getMultiplier());
  }

  display() {
    // document.getElementById("researchStoneLevel").value =this.app.researchStoneLevel;
    // document.getElementById("researchStoneValue").innerHTML = this.getResearchStoneValue();
    // document.getElementById("researchLeafLevel").value =this.app.researchLeafLevel;
    // document.getElementById("researchLeafValue").innerHTML = this.getResearchLeafValue();
    // document.getElementById("slimeCoinCap2Level").value =this.app.slimeCoinCap2Level;
    // document.getElementById("slimeCoinCap2Cost").innerHTML = convert(this.getSlimeCoinCap2Cost());
    // document.getElementById("slimeCoinCap2Value").innerHTML = this.getSlimeCoinCap2Value();
    // document.getElementById("slimeCoinCap1Level").value = convert(this.data.slimeCoinCap1Level);
    // document.getElementById("slimeCoinCap1Value").innerHTML = convert(this.getSlimeCoinCap1Value());
    // document.getElementById("slimeCoinCap1Cost").innerHTML = convert(this.getSlimeCoinCap1Cost());
    // document.getElementById("slimeCoinIntrest").innerHTML = convert(this.getSlimeCoinIntrest());
    // document.getElementById("slimeCoinCapTotal").innerHTML = convert(this.getSlimeCoinCapTotal());
    // document.getElementById("slimeCoinCap1Multiplier").innerHTML = this.getMultiplier();
    // document.getElementById("pet1Passive").innerHTML = this.getPet1Passive();
    // document.getElementById("pet1Rank").value =this.app.pet1Rank;
    // document.getElementById("pet1Loyalty").value =this.app.pet1Loyalty;
    // document.getElementById("milestone1800").checked =this.app.milestone1800;
    // document.getElementById("milestone2700").checked =this.app.milestone2700;
  }

  getSlimeCoinCapTotal() {
    let slimecap1value = this.app.data.upgrade.SlimeBank.SlimeCoinCap.effect;

    let slimecap2value = this.app.data.upgrade.SlimeBank.SlimeCoinCap2.effect;
    // let researchleafvalue = this.getResearchLeafValue() / 100;
    let researchleafvalue = this.app.data.town.SlimeBank.research.leaf.effect;
    // let pet1passive = this.getPet1Passive() / 100;
    let pet1passive = this.app.data.pet.FlameTiger.Red.effect;
    // console.log(pet1passive);

    let formula = slimecap1value * researchleafvalue * slimecap2value * pet1passive;

    return formula;
  }

  getMultiplier() {
    let intrest = this.getSlimeCoinIntrest();
    // let cost = this.getSlimeCoinCap1Cost();
    let cost = this.app.data.upgrade.SlimeBank.SlimeCoinCap.cost;
    let formula = Math.floor(intrest / cost);
    return formula - Math.floor(formula * 0.15);
  }

  getSlimeCoinIntrest() {
    let intrestPercent = this.app.data.town.SlimeBank.research.stone.effect;

    if (this.app.data.misc.ClearedMission >= 1800) {
      intrestPercent += 0.025;
    }
    if (this.app.data.misc.ClearedMission >= 2700) {
      intrestPercent += 0.05;
    }
    return intrestPercent * this.getSlimeCoinCapTotal();
  }
}
