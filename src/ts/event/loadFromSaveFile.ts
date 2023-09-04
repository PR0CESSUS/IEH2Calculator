import { SaveFileReader } from "../SaveFileReader";

export function loadFromSaveFile(event) {
  // No files, do nothing.
  //@ts-ignore
  if (!event.target.files) {
    return;
  }
  //   console.log(event.target.files);

  const filereader = new FileReader();
  filereader.readAsText(event.target.files[0]);
  filereader.onloadend = () => {
    // console.log(filereader.result);
    // console.log(this);
    //@ts-ignore
    let custom = JSON.parse(localStorage.getItem("data"));
    let data = {
      ...custom,
      ...new SaveFileReader(filereader.result),
    };
    localStorage.setItem("data", JSON.stringify(data));
    console.log("succes");
    location.reload();
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

console.log("loader loaded");
//@ts-ignore
document.getElementById("loadFromSaveFile").addEventListener("change", loadFromSaveFile);
