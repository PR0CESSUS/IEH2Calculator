export class DataStorage {
  data;
  host;
  name;

  constructor(host, name, data) {
    this.host = host;
    this.name = name;
    this.data = data;
    this.Load();
  }

  Load() {
    const data = JSON.parse(localStorage.getItem(this.name));

    if (data != null || data != undefined) this.data = { ...this.data, ...data };
    // console.log(this.data);
  }

  Save() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }
}
