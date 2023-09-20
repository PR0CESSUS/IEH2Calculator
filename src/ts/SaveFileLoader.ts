import { SaveFileDencrypt } from "./SaveFileDencrypt";

export function SaveFileLoader(event) {
  // console.log(event.srcElement.id);
  // No files, do nothing.
  //@ts-ignore
  if (!event.target.files || event.srcElement.id != "loadFromSaveFile") {
    return;
  }

  const filereader = new FileReader();
  filereader.readAsText(event.target.files[0]);
  filereader.onloadend = () => {
    let event = new CustomEvent("onLoadSaveFile", {
      detail: { type: "source", data: new SaveFileDencrypt(filereader.result as string).data },
    });
    document.body.dispatchEvent(event);
  };
}
// more realiable way
if (document.getElementById("loadFromSaveFile")) {
  //@ts-ignore
  document.body.addEventListener("change", SaveFileLoader);
  console.log("loader script Event Listener added!");
}
