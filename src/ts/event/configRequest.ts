export function configRequest(event) {
  // console.log("-----------------------------------------------");
  // console.log("tab-content", event.detail);
  let hash = location.hash ? location.hash.slice(1) : "";
  let page = hash.includes("-") ? hash.split("-")[0] : hash;
  let tab = hash.includes("-") ? hash.split("-")[1] : "";
  // Import Required
  if (!this.data.isInitialized) {
    // console.log("configRequest : this.data.isInitialized:", this.data.isInitialized);

    if (event.detail.path != "data/default.json") {
      event.detail.path = "html/import.html";
    }
    if (!document.getElementById("saveFileloader")) {
      var script = document.createElement("script");
      script.src = "SaveFileLoader.bundle.js";
      script.id = "saveFileloader";
      document.head.appendChild(script);
    }
  } else {
    if (hash && event.detail.elt.id == "content") {
      event.detail.path = "html/" + page + ".html";
      // console.log("content target");
    }
    if (tab && event.detail.elt.id == "tab-content") {
      // console.log(event.detail);
      // if (tab != "tablist") {
      // }
      event.detail.path = "html/" + hash + ".html";
      // console.log("source tab-content");
    }
  }

  // console.log("request hash", hash);
  // if (tab != "tablist") {
  //   console.log("not tablist", hash, event.detail.path, page, "[", tab, "]");
  //   history.pushState("", "", "#" + event.detail.path.replace(/.*\/(.*)\.html$/, "$1"));
  // }

  // console.log(hash, page, tab);

  // console.log(event.detail);
}
