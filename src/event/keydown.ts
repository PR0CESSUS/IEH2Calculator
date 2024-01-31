export function onKeyDown(event: KeyboardEvent) {
  if (event.ctrlKey && event.key == "v") {
    console.log("keydown event body");
    //@ts-ignore
    // console.log(event.target.tagName);
    // console.log(event.composedPath());
    // console.log(document.activeElement);

    // let e = document.createEvent("MouseEvent");
    // console.log(e);
    // document.dispatchEvent(e);
  }
}

//& { target: HTMLInputElement | HTMLSelectElement; srcElement: HTMLInputElement }
