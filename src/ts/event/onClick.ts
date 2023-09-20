export function onClick(event: Event & { target: HTMLInputElement | HTMLSelectElement; srcElement: HTMLInputElement }) {
  // console.log(event);
  // console.log(this);

  if (event.target.id == "settings.saveToFile") this.event.downloadCustomData();
  if (event.target.id == "settings.restart") {
    localStorage.clear();
    window.alert("Data cleared");
    location.reload();
  }
}
