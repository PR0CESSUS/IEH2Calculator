export class Database {
  name: string;
  table;

  constructor(name: string) {
    this.name = name;
    this.Load();
  }
  Connect<T>(...args): T {
    // const data = localStorage.getItem(this.name) != null ? JSON.parse(localStorage.getItem(this.name)) : undefined;
    // standalone
    if (arguments.length == 1) {
      // console.log(data);
      // console.log(this.table, arguments[0], this.name);

      this.table = this.table == undefined ? arguments[0] : { ...arguments[0], ...this.table };
      // console.log(new Proxy(this.table, this.Proxy()));
      return new Proxy(this.table, this.Proxy());
    } else {
      if (this.table == undefined) this.table = {};
      this.table[arguments[0]] = this.table[arguments[0]] == undefined ? arguments[1] : { ...arguments[1], ...this.table[arguments[0]] };
      return new Proxy(this.table[arguments[0]], this.Proxy());
    }
  }

  Proxy() {
    const handler = {
      get(target, prop, receiver) {
        // if (prop === "equipment1stOptionLevels") {
        //   // return "world";
        //   // console.log("get trap for guild", prop);
        // }

        if (typeof target[prop] === "object" && target[prop] !== null) {
          return new Proxy(target[prop], handler);
        }
        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        Reflect.set(target, prop, value, receiver);
        // console.log("set trap", prop, value);
        // target[prop] = value
        this.Save();
        return true;
      },

      Save() {},
    };
    handler.Save = this.Save.bind(this);
    // if (this.name == "SaveFileData") console.log(this.name, handler.set);

    return handler;
  }

  Save() {
    localStorage.setItem(this.name, JSON.stringify(this.table));
  }

  Load() {
    if (localStorage.getItem(this.name) != null) this.table = JSON.parse(localStorage.getItem(this.name));
  }
}
