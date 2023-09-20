export function downloadCustomData() {
  // console.log(this.app);
  this.data.save();
  let text = JSON.stringify(this.data.custom);
  // console.log(text);

  // console.log(text);

  const element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", "IEH2Calculator-CustomData.json");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);

  //
  // const a = document.createElement("a");
  // a.href = URL.createObjectURL(
  //   new Blob([JSON.stringify(localStorage, null, 2)], {
  //     type: "text/plain",
  //   })
  // );
  // a.setAttribute("download", "IEH2calc-data.json");
  // document.body.appendChild(a);
  // a.click();
  // document.body.removeChild(a);
}
