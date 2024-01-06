export class Database {
  name: string;
  table = {};

  constructor(name: string) {
    this.name = name;
    this.Load();
  }
  Connect<T>(key: string, defaultData: T): T {
    if (this.table[key] == undefined) {
      this.table[key] = defaultData;
    } else {
      this.table[key] = { ...defaultData, ...this.table[key] };
    }
    return this.table[key];
  }

  Save() {
    localStorage.setItem(this.name, JSON.stringify(this.table));
  }

  Load() {
    if (localStorage.getItem(this.name) != null) this.table = JSON.parse(localStorage.getItem(this.name));
  }
}
