import { watch } from "vue";
import { DATA } from "./Data";
import { Util } from "./Util";

type ReplacePrimitives<T> = T extends Record<any, any>
  ? { [K in keyof T]: T[K] extends Function ? T[K] : ReplacePrimitives<T[K]> }
  : { value: T; snap: T; diff: { raw: T; digit: string; percent: string }; class: string };

export class Game {
  // watch: { prop: string; callback: Function }[] = [];

  isProxy = new WeakMap();
  data: DATA;
  snap: DATA;
  compare: ReplacePrimitives<DATA>;

  constructor(main: DATA, snap: DATA) {
    this.snap = snap;
    this.data = main;
    this.compare = new Proxy(this.data, this.Proxy());
    // this.data = createPathProxy(test);

    // this.data.Snapshot();
    this.Synchronization();
    // console.log(this);
    // this.Worker();
  }

  // Watch(prop: string, callback: Function) {
  //   this.watch.push({ prop: prop, callback: callback });
  // }

  Proxy() {
    const ComparePercent = (main: number, snap: number, track: boolean = false) => {
      if ((snap == 0 || snap == undefined) && track) return "(NEW)";
      if ((main == 0 || main == undefined) && track) return "(MISSING)";

      if (snap > main) {
        if (snap / main - 1 < 0.0001) return;
        return `(-${Util.percent(snap / main - 1, 2)})`;
      }

      if (snap < main) {
        if (main / snap - 1 < 0.0001) return;
        return `(+${Util.percent(main / snap - 1, 2)})`;
      }
    };
    let targetSnap = this.snap;

    const handler = {
      isProxy: new WeakMap(),
      $snap: new WeakMap(),
      get(target, prop, receiver) {
        if (this.$snap.has(target)) {
          targetSnap = this.$snap.get(target);
        }
        // targetSnap = this.$snap.get(target[prop]);
        // console.log("target", target);
        // console.log("snap", targetSnap);
        // console.log("reciver", receiver);
        // console.log("-----------------------------");

        if (typeof target[prop] === "object" && target[prop] !== null) {
          if (this.isProxy.has(target[prop])) {
            return this.isProxy.get(target[prop]);
          } else {
            const proxy = new Proxy(Reflect.get(target, prop, receiver), handler);
            // console.log("new proxy");
            this.isProxy.set(target[prop], proxy);
            this.$snap.set(target[prop], targetSnap[prop]);
            return proxy;
          }
        } else {
          if (typeof target[prop] === "function") {
            console.log("target is function", Reflect.apply(target[prop], target, []));

            return () => {
              return Reflect.apply(target[prop], target, []);
            };
          }
          if (Array.isArray(target)) return Reflect.get(target, prop, receiver);

          // if (typeof target[prop] === "function") return Reflect.get(target, prop, receiver);
          // if (typeof target[prop] === "function") return Reflect.get(target, prop, receiver);

          const value = target[prop];
          const snap = targetSnap[prop];
          const diff = value - snap;
          return {
            value: value,
            snap: snap,
            diff: {
              raw: diff,
              digit: diff > 0 ? `Difference: +${diff}` : `Difference: ${diff}`,
              percent: ComparePercent(value, snap),
            },
            class: diff > 0 ? "green" : diff < 0 ? "red" : "",
          };
        }
      },

      // set(target, prop, value, receiver) {
      //   Reflect.set(target, prop, value, receiver);
      //   console.log("Proxy set");

      //   this.watch.forEach((watch) => {
      //     if (watch.prop == prop) watch.callback();
      //   });
      //   return true;
      // },
    };

    return handler;
  }

  Synchronization() {
    watch(this.data.source, (newValue, oldValue) => {
      console.log("watch data.source");

      this.data.requireUpdate.value = true;
    });

    watch(
      () => this.data.source.isSuperDungeon,
      (newValue, oldValue) => {
        this.snap.source.isSuperDungeon = newValue;
        // console.log("this.snap.source.isSuperDungeon", this.snap.source.isSuperDungeon);

        this.snap.SuperDungeonToggle();
        this.data.SuperDungeonToggle();
      }
    );
    watch(
      () => this.data.source.currentHero,
      (newValue, oldValue) => {
        this.snap.source.currentHero = newValue;
      }
    );

    watch(this.data.source.equipmentLoadoutIds, (newValue, oldValue) => {
      this.snap.source.equipmentLoadoutIds = newValue;
      this.data.inventory.Update();
      this.snap.inventory.Update();
    });
    watch(
      () => this.data.source.enemyColor,
      (newValue, oldValue) => (this.snap.source.enemyColor = newValue)
    );
    watch(
      () => this.data.source.enemySpecies,
      (newValue, oldValue) => (this.snap.source.enemySpecies = newValue)
    );
    watch(
      () => this.data.source.enemyLevel,
      (newValue, oldValue) => (this.snap.source.enemyLevel = newValue)
    );
    watch(
      () => this.data.source.enemyChallenge,
      (newValue, oldValue) => (this.snap.source.enemyChallenge = newValue)
    );
  }

  Worker() {}
}
