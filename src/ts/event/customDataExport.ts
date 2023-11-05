export function customDataExport() {
  this.data.save();
  const element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data.custom)));
  element.setAttribute("download", "IEH2Calculator-CustomData.json");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
