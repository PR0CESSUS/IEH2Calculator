import { Util } from "../Util";

export function SDShopEffectValueString(id, text1 = 0, text2 = 0, text3 = 0) {
  switch (id) {
    case 27:
      return (
        Util.percent(text1) +
        ' of "Equipment Effect" stats applies to Artifacts  ( + ' +
        Util.percent(text2) +
        " / Lv )\n- Current Equipment Effect for Artifacts : " +
        Util.percent(text3)
      );
    case 57:
      return "Multiplies the SD Max Floor Reached Reward by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";

    case 58:
      return "Multiplies Gold Cap by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";

    case 59:
      return "Multiplies Gold Gain by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";

    case 60:
      return "Multiplies Slime Coin Cap by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";

    case 61:
      return "Multiplies Guild EXP Gain by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";

    case 62:
      return "Multiplies Taming Point Gain by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";

    case 63:
      return "Multiplies Loyalty Point Gain by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";

    case 64:
      return "Multiplies Town Research Power by " + Util.percent(text1) + "  ( + " + Util.percent(text2) + " / Lv )";
    default:
      return Util.percent(text1);
  }
}
