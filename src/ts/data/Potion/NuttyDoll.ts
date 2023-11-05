import { PotionKind } from "../../type/PotionKind"

  import { Potion } from "./Potion" 
  export default class NuttyDoll extends Potion {
        constructor() {super()}
        kind = PotionKind.NuttyDoll;
    }