export function onChange(event) {
  if (event.target.tagName == "INPUT" && event.target.type == "text") {
    // console.log(this);
    //@ts-ignore
    // let endpoint = this.get(event.target.dataset.endpoint);
    // console.log("before", endpoint);

    // endpoint = event.target.value;
    // console.log(event.target);

    // console.log("after", endpoint);
    // console.log(this.data.source.guildLevel);
    // console.log(event.target.type);

    this.set(event.target.dataset.endpoint, event.target.value);
    this.updateContent();
    // add precision and type
    // event.target.value = this.convertTo(event.target.value);
    // update based on current page logic
    // console.log(event.target.tagName);
    // console.log(event.target.dataset.endpoint);
    // console.log(event.target.value);
  }
}
