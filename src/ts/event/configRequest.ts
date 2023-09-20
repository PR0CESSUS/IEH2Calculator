export function configRequest(event) {
  // console.log("-----------------------------------------------");

  // this.tab = tab;
  let hash = location.hash ? location.hash.slice(1) : "";

  let page = hash.includes("-") ? hash.split("-")[0] : hash;

  let tab = hash.includes("-") ? hash.split("-")[1] : "";
  // console.log(hash, "page:", page, this.page, "|", tab, this.tab);
  // console.log(this);

  // console.log("initial", event.detail.path, hash);
  // Import Required
  // if (!this.data.isInitialized) {
  //   // console.log("configRequest : this.data.isInitialized:", this.data.isInitialized);

  //   if (event.detail.path != "data/default.json") {
  //     event.detail.path = "html/import.html";
  //   }
  //   if (!document.getElementById("saveFileloader")) {
  //     var script = document.createElement("script");
  //     script.src = "SaveFileLoader.bundle.js";
  //     script.id = "saveFileloader";
  //     document.head.appendChild(script);
  //   }
  // } else {
  if (event.detail.elt.id == "content") {
    if (!hash) {
      hash = "data-overview";
    }
    // console.log("----- configRequest:content ----");
    // console.log("hash:", hash);
    // console.log("page:", page);
    // console.log("tab:", tab);
    event.detail.path = "html/" + hash + ".html";

    // history.pushState("", "", "#" + page);
    // console.log("content target");
  }

  // console.log(event.detail);
  // }
  if (event.detail.path != "data/default.json") {
    history.pushState("", "", "#" + event.detail.path.replace(/.*\/(.*)\.html$/, "$1"));
    let hash = location.hash ? location.hash.slice(1) : "";
    this.page = hash.includes("-") ? hash.split("-")[0] : hash;
    this.tab = hash.includes("-") ? hash.split("-")[1] : "";
  }

  if (page == "settings") {
    if (!document.getElementById("saveFileloader")) {
      var script = document.createElement("script");
      script.src = "SaveFileLoader.bundle.js";
      script.id = "saveFileloader";
      document.head.appendChild(script);
    }
  }
  // if (event.detail.path != "data/default.json") {
  //   history.pushState("", "", "#" + event.detail.path.replace(/.*\/(.*)\.html$/, "$1"));
  //   this.page = page;
  //   this.highlight();
  // }
  // console.log("request hash", hash);
  // if (tab != "tablist") {
  //   console.log("not tablist", hash, event.detail.path, page, "[", tab, "]");
  //   history.pushState("", "", "#" + event.detail.path.replace(/.*\/(.*)\.html$/, "$1"));
  // }

  // console.log(hash, page, tab);

  // console.log(event.detail);
}
