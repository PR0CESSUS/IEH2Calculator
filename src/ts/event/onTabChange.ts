export function onTabChange(event) {
  console.log(event);
  console.log(event.target.id);

  let children = document.getElementsByClassName("tab")[0].children;
  for (let index = 0; index < children.length; index++) {
    const element = children[index];
    //@ts-ignore
    if (event.target.id == element.id) {
      element.classList.add();
    }
    element.addEventListener("click", this.event.onTabChange.bind(this));
    //@ts-ignore
    console.log(element.onclick);
  }
}
