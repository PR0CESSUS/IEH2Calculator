export function SDShopString(id, text1 = "", text2 = "", text3 = "") {
  switch (id) {
    case 0:
      return "Ruby Converter";
    case 1:
      return "Convert " + text1 + ' <sprite="PieceOfRuby" index=0> PieceOfRuby to 1 <sprite="Ruby" index=0> Ruby';
    case 2:
      return "Piece of Ruby Converter";
    case 3:
      return 'Convert 1 <sprite="Ruby" index=0> Ruby to ' + text1 + ' <sprite="PieceOfRuby" index=0> PieceOfRuby';
    case 4:
      return "Artifact Effect";
    case 5:
      return (
        text1 +
        ' of "Equipment Effect" stats applies to Artifacts  ( + ' +
        text2 +
        " / Lv )\n- Current Equipment Effect for Artifacts : " +
        text3
      );
    case 6:
      return "SD Max Floor Reward Multiplier";
    case 7:
      return "Multiplies the SD Max Floor Reached Reward by " + text1 + "  ( + " + text2 + " / Lv )";
    case 8:
      return "Gold Cap";
    case 9:
      return "Multiplies Gold Cap by " + text1 + "  ( + " + text2 + " / Lv )";
    case 10:
      return "Gold Gain";
    case 11:
      return "Multiplies Gold Gain by " + text1 + "  ( + " + text2 + " / Lv )";
    case 12:
      return "Slime Coin Cap";
    case 13:
      return "Multiplies Slime Coin Cap by " + text1 + "  ( + " + text2 + " / Lv )";
    case 14:
      return "Guild EXP Gain";
    case 15:
      return "Multiplies Guild EXP Gain by " + text1 + "  ( + " + text2 + " / Lv )";
    case 16:
      return "Taming Point Gain";
    case 17:
      return "Multiplies Taming Point Gain by " + text1 + "  ( + " + text2 + " / Lv )";
    case 18:
      return "Loyalty Point Gain";
    case 19:
      return "Multiplies Loyalty Point Gain by " + text1 + "  ( + " + text2 + " / Lv )";
    case 20:
      return "Town Research Power";
    case 21:
      return "Multiplies Town Research Power by " + text1 + "  ( + " + text2 + " / Lv )";
    default:
      return text1;
  }
}
