export class DataStorage {
  data;
  host;

  constructor(host, data) {
    this.host = host;
    this.data = data;
    this.Load();
  }

  Load() {
    const data = JSON.parse(localStorage.getItem(this.host.constructor.name));

    if (data != null || data != undefined) this.data = { ...this.data, ...data };
    // console.log(this.data);
  }

  Save() {
    localStorage.setItem(this.host.constructor.name, JSON.stringify(this.data));
  }
}
