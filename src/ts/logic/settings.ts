export class LogicSettings {
  name = "settings";
  data;
  constructor(data) {
    this.data = data;
    // console.log("LogicSettings constructor");

    if (!document.getElementById("saveFileloader")) {
      var script = document.createElement("script");
      script.src = "loader.bundle.js";
      script.id = "saveFileloader";
      document.head.appendChild(script);
    }

    // console.log("script added");
    //@ts-ignore
  }

  // console.log("class constructor aka Init");

  update() {
    // console.log("LogicSettings update()");
    //@ts-ignore
    // console.log(loadFromSaveFile);
  }
}
