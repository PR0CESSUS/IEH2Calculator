export function onClick(event: Event & { target: HTMLInputElement | HTMLSelectElement; srcElement: HTMLInputElement }) {
  // console.log(event);
  // console.log(this);

  if (event.target.id == "customDataExport") this.event.customDataExport();
  if (event.target.id == "data-restart") {
    if (window.confirm("Clear data?")) {
      localStorage.clear();
      window.alert("Data cleared");
      location.reload();
    }
  }

  // if (event.target.dataset.url) {
  //   this.router.load(event.target.dataset.url);
  //   // console.log("url clicked");
  // }

  // if (event.target.id.includes("equipment") && location.hash == "#equip") {
  //   const string = event.target.id.split("-");
  //   const part = string[1];
  //   const id = string[2];
  //   // console.log(part, id);

  //   // console.log(id);

  //   document.getElementById("content").innerHTML += this.data.calculator.equipment.itemEdit(part, id);
  //   this.update();
  // }
  // console.log("click");
}
