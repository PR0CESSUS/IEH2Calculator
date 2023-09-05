export function onClick(event) {
  console.log(event);
  console.log(event.target.id);

  let children = document.getElementsByClassName("tab")[0].children;
  for (let index = 0; index < children.length; index++) {
    const element = children[index];
    //@ts-ignore
    if (event.target.id != element.id) {
      document.getElementById(element.id + "-content").classList.add("hide");
      console.log(document.getElementById(element.id + "-content").classList);
    } else {
      document.getElementById(element.id + "-content").classList.remove("hide");
    }
    // element.addEventListener("clic k", this.event.onTabChange.bind(this));
    //@ts-ignore
    // console.log(element.onclick);
  }
}
