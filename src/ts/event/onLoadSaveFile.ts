export function onLoadSaveFile(event) {
  switch (event.detail.type) {
    case "source":
      // console.log(event.detail);

      // this.data.isInitialized = false;
      this.data.source = event.detail.data;
      // this.data.initialization();
      // this.data.isInitialized = true;
      this.data.save();
      location.reload();
      break;
    case "custom":
      // console.log("custom onLoadSaveFile");
      // console.log(event.detail.data.custom);
      this.data.custom = JSON.parse(event.detail.data.custom);
      // console.log(this.data.custom);

      this.data.save();
    default:
      break;
  }
  // this.load();
}
