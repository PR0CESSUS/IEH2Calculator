export class LogicSlimeBank {
  name = "slimeBank";
  data;
  constructor(data) {
    this.data = data;
  }

  update() {
    this.data.set("custom.slimeCoinCapTotal", this.getSlimeCoinCapTotal());
  }

  display() {
    // document.getElementById("researchStoneLevel").value = this.data.researchStoneLevel;
    // document.getElementById("researchStoneValue").innerHTML = this.getResearchStoneValue();
    // document.getElementById("researchLeafLevel").value = this.data.researchLeafLevel;
    // document.getElementById("researchLeafValue").innerHTML = this.getResearchLeafValue();
    // document.getElementById("slimeCoinCap2Level").value = this.data.slimeCoinCap2Level;
    // document.getElementById("slimeCoinCap2Cost").innerHTML = convert(this.getSlimeCoinCap2Cost());
    // document.getElementById("slimeCoinCap2Value").innerHTML = this.getSlimeCoinCap2Value();
    // document.getElementById("slimeCoinCap1Level").value = convert(this.data.slimeCoinCap1Level);
    // document.getElementById("slimeCoinCap1Value").innerHTML = convert(this.getSlimeCoinCap1Value());
    // document.getElementById("slimeCoinCap1Cost").innerHTML = convert(this.getSlimeCoinCap1Cost());
    // document.getElementById("slimeCoinIntrest").innerHTML = convert(this.getSlimeCoinIntrest());
    // document.getElementById("slimeCoinCapTotal").innerHTML = convert(this.getSlimeCoinCapTotal());
    // document.getElementById("slimeCoinCap1Multiplier").innerHTML = this.getMultiplier();
    // document.getElementById("pet1Passive").innerHTML = this.getPet1Passive();
    // document.getElementById("pet1Rank").value = this.data.pet1Rank;
    // document.getElementById("pet1Loyalty").value = this.data.pet1Loyalty;
    // document.getElementById("milestone1800").checked = this.data.milestone1800;
    // document.getElementById("milestone2700").checked = this.data.milestone2700;
  }

  getSlimeCoinCapTotal() {
    let slimecap1value = this.getSlimeCoinCap1Value();
    let slimecap2value = this.getSlimeCoinCap2Value() / 100;
    let researchleafvalue = this.getResearchLeafValue() / 100;
    let pet1passive = this.getPet1Passive() / 100;
    // console.log(pet1passive);

    let formula = slimecap1value * researchleafvalue * slimecap2value * pet1passive;

    return formula;
  }

  getMultiplier() {
    let intrest = this.getSlimeCoinIntrest();
    let cost = this.getSlimeCoinCap1Cost();
    let formula = Math.floor(intrest / cost);
    return formula - Math.floor(formula * 0.15);
  }

  getSlimeCoinIntrest() {
    let intrestPercent = this.data.researchStoneLevel * 0.001;

    if (this.data.milestone1800) {
      intrestPercent += 0.025;
    }
    if (this.data.milestone2700) {
      intrestPercent += 0.05;
    }
    return intrestPercent * this.getSlimeCoinCapTotal();
  }

  getSlimeCoinCap1Cost() {
    let level = this.data.slimeCoinCap1Level;
    // 500T
    if (level >= 500000000000000) {
      return 1.0e27;
    }
    if (level >= 100000000000000) {
      return 1.0e26;
    }
    if (level >= 50000000000000) {
      return 1.0e25;
    }
    if (level >= 10000000000000) {
      return 1.0e24;
    }
    if (level >= 5000000000000) {
      return 1.0e23;
    }
    if (level >= 1000000000000) {
      return 1.0e22;
    }
    if (level >= 500000000000) {
      return 1.0e21;
    }
    if (level >= 100000000000) {
      return 1.0e20;
    }
    if (level >= 50000000000) {
      return 1.0e19;
    }
    if (level >= 10000000000) {
      return 1.0e18;
    }
    if (level >= 5000000000) {
      return 1.0e17;
    }
    if (level >= 1000000000) {
      return 1.0e16;
    }
    if (level >= 500000000) {
      return 1.0e15;
    }
    if (level >= 100000000) {
      return 100000000000000;
    }
    if (level >= 50000000) {
      return 10000000000000;
    }
    if (level >= 10000000) {
      return 1000000000000;
    }

    return level * 10000 + 10000;
  }

  getResearchStoneValue() {
    return +(this.data.researchStoneLevel * 0.1).toFixed(2);
  }

  getResearchLeafValue() {
    return +(this.data.researchLeafLevel * 2).toFixed(2) + 100;
  }

  getSlimeCoinCap1Value() {
    let level = this.data.slimeCoinCap1Level;
    let formula = 10000.0 + 10000.0 * level + 10.0 * Math.pow(level, 2.0);
    return formula;
  }
  getSlimeCoinCap2Value() {
    let formula = Math.pow(this.data.slimeCoinCap2Level, 2.0) * 10 + 100;
    return formula;
  }

  getSlimeCoinCap2Cost() {
    let formula = 10000000000.0 * Math.pow(2.0, this.data.slimeCoinCap2Level);
    return formula;
  }

  getPet1Passive() {
    //
    let rank = this.data.get("pet.flametgier.red.rank");

    let loyalty = 2.5 * (this.data.get("pet.flametgier.red.loyalty") + 100) * 0.01;
    // let loyalty = 2.5 * (parseFloat(this.data.pet1Loyalty) + 100) * 0.01;
    console.log(rank, loyalty);
    return rank * loyalty + 100;
  }
}
