export function afterSettle(event) {
  // console.log(event.detail.pathInfo.requestPath);
  // if (event.detail.pathInfo.requestPath != "data/default.json") {
  //   history.pushState("", "", "#" + event.detail.pathInfo.requestPath.replace(/.*\/(.*)\.html$/, "$1"));
  // }
  // console.log(this);
  // console.log(event);
  // setting new URL with hash
  // history.pushState("", "", "#" + event.detail.pathInfo.requestPath.replace(/.*\/(.*)\.html$/, "$1"));
  //@ts-ignore
  let requestPath = event.detail.pathInfo.requestPath.replace(/.*\/(.*)\..*/, "$1");
  // console.log(requestPath);
  // console.log("hash", location.hash);
  // console.log(requestPath);

  // console.log("afterSettle ------------------");
  // console.log(this.page);
  // console.log(this.tab);
  // if (this.tab) {
  //   // console.log(this.tab);
  //   // console.log(event);
  //   let newPath = "html/" + this.tab + ".html";
  //   document.getElementById("tab-content")["htmx-internal-data"].path = newPath;
  //   // console.log(document.getElementById("tab-content")["htmx-internal-data"]);
  //   //@ts-ignore
  //   // console.log();
  // }
  // console.log(requestPath);
  if (this.page == "test") {
    const content = document.getElementById("content");
    // if (content) content.innerHTML = this.data.town.html();
    // if (content) console.log(this.data.town.html());
  }
  this.highlight();
  this.updateContent();
}
