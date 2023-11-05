import { PotionKind } from "../../type/PotionKind"

  import { Potion } from "./Potion" 
  export default class Nothing extends Potion {
        constructor() {super()}
        kind = PotionKind.Nothing;
    }