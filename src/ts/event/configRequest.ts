export function configRequest(event) {
  // console.log("-----------------------------------------------");
  // console.log("tab-content", event.detail);
  let hash = location.hash ? location.hash.slice(1) : "";
  let page = hash.includes("-") ? hash.split("-")[0] : hash;
  let tab = hash.includes("-") ? hash.split("-")[1] : "";
  // console.log("request hash", hash);
  // if (tab != "tablist") {
  //   console.log("not tablist", hash, event.detail.path, page, "[", tab, "]");
  //   history.pushState("", "", "#" + event.detail.path.replace(/.*\/(.*)\.html$/, "$1"));
  // }

  if (hash && event.detail.elt.id == "content") {
    event.detail.path = "html/" + page + ".html";
    // console.log("content target");
  }
  if (tab && event.detail.elt.id == "tab-content") {
    // console.log(event.detail);

    event.detail.path = "html/" + hash + ".html";
    // console.log("source tab-content");
  }

  // console.log(hash, page, tab);

  // console.log(event.detail);
}
