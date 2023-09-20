import { SaveFileDencrypt } from "./SaveFileDencrypt";

export class Settings {
  constructor() {
    this.setEvents();
    // console.log("new Settings class object");
  }

  reader(file, callback) {
    const fr = new FileReader();
    fr.onload = () => callback(null, fr.result);
    fr.onerror = (err) => callback(err);
    fr.readAsText(file);
  }

  setEvents() {
    // document.getElementById('');
    //@ts-ignore
    document.getElementById("settings.loadFromSaveFile").addEventListener("change", (event) => {
      // No files, do nothing.
      //@ts-ignore
      if (!event.target.files) {
        return;
      }
      //@ts-ignore
      this.reader(event.target.files[0], (err, res) => {
        // console.log(res); // Base64 `data:image/...` String result.

        // data = new SaveFileReader(res);
        //@ts-ignore
        // document.getElementById("output").innerHTML = err;
        //@ts-ignore
        // document.getElementById("output").innerHTML += "succes";

        console.log("succes");
      });
    });
    //@ts-ignore
    document.getElementById("settings.saveToFile").addEventListener("click", this.exportFile);
    // Export File button
  }

  exportFile() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(localStorage)], {
        type: "text/plain",
      })
    );
    a.setAttribute("download", "IEH2Calculator-data.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
