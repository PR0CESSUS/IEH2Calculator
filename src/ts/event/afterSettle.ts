export function afterSettle(event) {
  // console.log(this);

  // setting new URL with hash
  history.pushState("", "", "#" + event.detail.pathInfo.requestPath.replace(/.*\/(.*)\.html$/, "$1"));
  //@ts-ignore
  let requestPath = event.detail.pathInfo.requestPath.replace(/.*\/(.*)\..*/, "$1");
  // console.log(requestPath);
  this.logic.switchLogic(requestPath);
  this.updateContent();
  switch (requestPath) {
    case "equip":
      // console.log("equip");

      break;
    case "guild":
      // console.log("guild");
      break;
    case "settings":
      // console.log("settings");

      break;
    default:
      break;
  }
}
