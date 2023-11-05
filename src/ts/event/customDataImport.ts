export function customDataImport(event: Event & { target: HTMLInputElement }) {
  // console.log(event);

  if (!event.target.files) {
    return;
  }
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
