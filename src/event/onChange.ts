import { SaveFileDencrypt } from "../SaveFileDencrypt";

export function onChange(event: Event & { target: HTMLInputElement }) {
  if (event.target.dataset.endpoint) this.set(event.target);

  if (event.target.id == "customDataImport") this.event.customDataImport(event);
  // console.log(event);

  if (event.target.id == "find") {
    this.data.test.find = event.target.value;
    localStorage.setItem("find", JSON.stringify(event.target.value));
    // console.log(this.data.test.find);
  }

  if (event.target.id == "saveFileImport") {
    if (!event.target.files) return;

    const filereader = new FileReader();
    filereader.readAsText(event.target.files[0]);
    filereader.onloadend = () => {
      this.data.source = new SaveFileDencrypt(filereader.result as string).data;
      this.data.save();
      window.alert("Save File loaded!");
      location.reload();
    };
  }
}
