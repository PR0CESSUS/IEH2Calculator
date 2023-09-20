export function onChange(event: Event & { target: HTMLInputElement | HTMLSelectElement; srcElement: HTMLInputElement }) {
  if (event.target.tagName == "INPUT" && event.target.type == "text") {
    // console.log(this);

    this.set(event.target.dataset.endpoint, event.target.value);
    this.updateContent();
  }
  if (event.target.tagName == "INPUT" && event.target.type == "file") {
    // console.log("change form input file");
    //@ts-ignore
    // console.log(event.target.files);
    //@ts-ignore
    // console.log(event.target.files[0]);
  }
  if (event.target.tagName == "INPUT" && event.target.type == "checkbox") {
    // console.log(this);

    // console.log("checkbox change", event.target.checked);
    //@ts-ignore
    if (event.target.checked) {
      // console.log("checked");
      this.set(event.target.dataset.endpoint, event.target.dataset.test);
    } else {
      // console.log("unckecked");
      this.set(event.target.dataset.endpoint, 0);
    }

    this.updateContent();
  }

  if (event.target.tagName == "SELECT") {
    // console.log(event.target.dataset);
    // if (event.target.id == "proficiency-rarity") {
    //   console.log("mamy to", event.target.dataset.endpoint, event.target.value);
    // }
    // console.log(event.target.dataset.endpoint, event.target.value);
    this.set(event.target.dataset.endpoint, event.target.value);
    this.updateContent();
  }

  if (event.target.id == "settings.loadFromFile") this.event.uploadCustomData(event);
  // console.log(event);
}
