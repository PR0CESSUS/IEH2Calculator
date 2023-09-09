export function onLoadSaveFile(event) {
  switch (event.detail.type) {
    case "source":
      location.hash = "";
      this.data.isInitialized = false;
      this.data.source = event.detail.data.source;
      this.data.initialization();
      this.data.isInitialized = true;
      this.data.save();
      location.reload();
      break;
    case "custom":
      // console.log("custom onLoadSaveFile");
      this.data.custom = JSON.parse(event.detail.data.custom);
      this.data.save();
    default:
      break;
  }
  // this.load();
}
