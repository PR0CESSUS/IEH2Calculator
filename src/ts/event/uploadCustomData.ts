export function uploadCustomData(event) {
  // console.log(event);

  if (!event.target.files) {
    return;
  }
  //@ts-ignore
  let reader = new FileReader();
  reader.addEventListener(
    "load",
    function (e) {
      this.data.custom = JSON.parse(e.target.result);
      this.data.save();
      location.reload();
    }.bind(this)
  );
  reader.readAsText(event.target.files[0]);
}
