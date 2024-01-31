import { Equipment } from "./../data/Equipment/Equipment";
import { CopyKind } from "../type/CopyKind";
import { ComponentHeroStat } from "../component/Hero-Stat";
import { ComponentEquipmentLoadout } from "../component/Equipment-Loadout";
import { Util } from "../Util";
import { ComponentCustomClipboard } from "../component/Clipboard";
import brotliPromise from "brotli-wasm"; // Import the default export
export function paste(event: ClipboardEvent) {
  const clipboardComponent = document.querySelector("custom-clipboard") as ComponentCustomClipboard;
  const data = event.clipboardData.getData("text/plain");
  const loaderIcon = document.getElementById("loading");
  loaderIcon.style.display = "block";

  let clipboard;

  try {
    console.log("try parse clipboard");
    clipboard = JSON.parse(data);
    loaderIcon.style.display = "block";
    if (clipboard && typeof clipboard === "object" && clipboard.type == CopyKind.EquipmentLoadout) {
      if (clipboardComponent.data) {
        console.log("using internal clipboard");
        setTimeout(() => {
          globalThis.data.inventory.PasteLoadout(clipboardComponent.data);
          document.getElementById("loading").style.display = "none";
          (document.querySelector("equipment-loadout") as ComponentEquipmentLoadout).Update();
        }, 1000);
      } else {
        console.log("using external clipboard");
        setTimeout(() => {
          brotliPromise.then((brotli) => {
            console.log("brotli decompression");
            const textDecoder = new TextDecoder();
            const uncompressedData = brotli.decompress(Util.decoder(clipboard.data));
            globalThis.data.inventory.PasteLoadout(JSON.parse(textDecoder.decode(uncompressedData)));
            (document.querySelector("equipment-loadout") as ComponentEquipmentLoadout).Update();
            document.getElementById("loading").style.display = "none";
          });
        }, 1000);
      }
    }
  } catch (error) {
  } finally {
    // console.log("finnaly");
    // loaderIcon.style.display = "none";
  }
}
