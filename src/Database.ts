export class Database {
  name: string;
  watch: { prop: string; callback: Function }[] = [];
  table;
  isProxy = new WeakMap();

  constructor(name: string) {
    this.name = name;
    this.Load();

    if (name == "app") {
      // for (const [key, value] of Object.entries(this.table)) {
      //   this.isProxy.set(key, value)
      // }
      // Object.entries(this.table).map((a, b) => this.isProxy.set(a, b));
      // this.isProxy.set(this.table)
    }
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

  Get(key: string) {
    return new Proxy(this.table[key], this.Proxy());
  }

  Watch(prop: string, callback: Function) {
    this.watch.push({ prop: prop, callback: callback });
  }

  Proxy() {
    const THIS = this;
    const handler = {
      get(target, prop, receiver) {
        // console.log(util.types.isProxy(target));

        // if (typeof target[prop] === "object" && THIS.isProxy.has(target)) {
        //   return THIS.isProxy.get(target);
        // }

        if (typeof target[prop] === "object" && target[prop] !== null) {
          const proxy = new Proxy(target[prop], handler);

          if (THIS.isProxy.has(target[prop])) {
            // console.log("returning existing proxy", prop, THIS.isProxy);
            return THIS.isProxy.get(target[prop]);
          } else {
            THIS.isProxy.set(target[prop], proxy);
            // if (prop == "perWA") console.log("returning new proxy", prop);
            return new Proxy(target[prop], handler);
          }
        }

        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        Reflect.set(target, prop, value, receiver);
        // console.log("Proxy set");

        this.Save();
        THIS.watch.forEach((watch) => {
          if (watch.prop == prop) watch.callback();
        });
        return true;
      },

      Save() {},
    };
    handler.Save = this.Save.bind(this);
    // handler.get.bind(this);
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
