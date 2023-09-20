import { DataType } from "../type/DataType";

export class CalculatorSlimeBank {
  data: DataType;
  constructor(data: DataType) {
    this.data = data;
  }

  get slimeCoinCapTotal() {
    return (
      this.data.upgrade.SlimeBank.SlimeCoinCap.effect *
      this.data.town.SlimeBank.research.leaf.effect *
      this.data.upgrade.SlimeBank.SlimeCoinCap2.effect *
      this.data.pet.FlameTiger.Red.effect
    );
  }
  get slimeCoinCapMultiplier() {
    let intrest = this.slimeCoinIntrest;
    let cost = this.data.upgrade.SlimeBank.SlimeCoinCap.cost;
    let formula = Math.floor(intrest / cost);
    return formula - Math.floor(formula * 0.15);
  }

  get slimeCoinIntrest() {
    let intrestPercent = this.data.town.SlimeBank.research.stone.effect;

    if (this.data.misc.ClearedMission >= 1800) {
      intrestPercent += 0.025;
    }
    if (this.data.misc.ClearedMission >= 2700) {
      intrestPercent += 0.05;
    }

    return intrestPercent * this.slimeCoinCapTotal;
  }

  html() {
    let html = "";
    html += `    
    <h3>Slime Coin Queue Multiplier Calculator</h3>

        <ul>
            <li>
                <p>Slime Coin Cap Total: <span id="slimeCoinCapTotal" data-endpoint="calculator.slimeBank.slimeCoinCapTotal"
                        data-precision="2" style="float:right;"></span></p>
                        
            </li>
            <li>
                <p>Slime Coin Intrest: <span style="float:right;" id="slimeCoinIntrest"
                        data-endpoint="calculator.slimeBank.slimeCoinIntrest" data-precision="2"></span></p>
            </li>
            <li>
                <p>Multiplier: <span style="float:right;" id="slimeCoinCap1Multiplier"
                        data-endpoint="calculator.slimeBank.slimeCoinCapMultiplier" data-precision="0"></span></p>
            </li>
        </ul>
    </div>
`;

    return html;
  }
}
