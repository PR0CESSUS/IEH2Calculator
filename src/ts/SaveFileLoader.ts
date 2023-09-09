import { SaveFileReader } from "./SaveFileReader";

export function SaveFileLoader(event) {
  // No files, do nothing.
  //@ts-ignore
  if (!event.target.files) {
    return;
  }

  const filereader = new FileReader();
  filereader.readAsText(event.target.files[0]);
  filereader.onloadend = () => {
    // console.log(filereader.result);

    let event = new CustomEvent("onLoadSaveFile", {
      detail: { type: "source", data: new SaveFileReader(filereader.result) },
    });
    document.body.dispatchEvent(event);
    // location.reload();
    // console.log("DONE", filereader.readyState); // readyState will be 2
  };
  //   filereader.onload = () => callback(null, fr.result);
  //   filereader.onerror = (err) => callback(err);
  //   filereader.readAsText(file);
  //   filereader.onloadend = () => {
  //     console.log("DONE", filereader.readyState); // readyState will be 2
  //   };
  //@ts-ignore
}
// more realiable way
if (document.getElementById("loadFromSaveFile")) {
  //@ts-ignore
  document.getElementById("loadFromSaveFile").addEventListener("change", SaveFileLoader);
  console.log("loader script loaded!");
}
