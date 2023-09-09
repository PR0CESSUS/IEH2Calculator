export class LogicSettings {
  name = "settings";
  app;
  constructor(app) {
    // console.log(app);

    this.app = app;
    // console.log(app.data);

    // console.log("LogicSettings constructor");

    if (!document.getElementById("saveFileloader")) {
      var script = document.createElement("script");
      script.src = "SaveFileLoader.bundle.js";
      script.id = "saveFileloader";
      document.head.appendChild(script);
    }
    document.getElementById("settings.restart").addEventListener("click", () => {
      localStorage.clear();
      window.alert("Data cleared");
      location.reload();
    });

    document.getElementById("settings.saveToFile").addEventListener("click", this.downloadCustomData.bind(this));
    document.getElementById("settings.loadFromFile").addEventListener("change", this.loadCustomData.bind(this));
    // console.log("script added");
    //@ts-ignore
  }

  downloadCustomData() {
    console.log(this.app);

    let text = JSON.stringify(this.app.data.custom);

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", "IEH2Calculator-CustomData.json");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    //
    // const a = document.createElement("a");
    // a.href = URL.createObjectURL(
    //   new Blob([JSON.stringify(localStorage, null, 2)], {
    //     type: "text/plain",
    //   })
    // );
    // a.setAttribute("download", "IEH2calc-data.json");
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
  }
  // console.log("class constructor aka Init");

  uploadCustomData() {
    //@ts-ignore
    let file = document.getElementById("settings.loadFromFile").files[0];
    let reader = new FileReader();
    reader.addEventListener("load", this.loadCustomData.bind(this));
    reader.readAsText(file);
  }

  loadCustomData() {
    //@ts-ignore
    let file = document.getElementById("settings.loadFromFile").files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function (e) {
      //@ts-ignore
      // console.log(JSON.parse(e.target.result));
      // console.log(this);

      let event = new CustomEvent("onLoadSaveFile", {
        detail: { type: "custom", data: { custom: e.target.result } },
      });
      document.body.dispatchEvent(event);
      // for (const [key, value] of Object.entries({ ...JSON.parse(text) })) {
      //   localStorage.setItem(key, value);
      // }
      // location.reload();
    });
    reader.readAsText(file);
  }

  update() {
    // console.log("LogicSettings update()");
    //@ts-ignore
    // console.log(loadFromSaveFile);
  }
}
