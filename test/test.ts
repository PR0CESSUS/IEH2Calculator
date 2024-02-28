const testData = {
  a: {
    b: [
      {
        c: 1,
      },
      {
        c: 2,
      },
    ],
  },
};

const testData2 = {
  a: {
    b: [
      {
        c: 3,
      },
      {
        c: 4,
      },
    ],
  },
};

const handler = {
  test: testData2,
  get(target, prop, receiver) {
    if (target == testData) this.test = testData2;
    // console.log("prop", prop);

    if (typeof target[prop] === "object" && target[prop] !== null) {
      const proxy = new Proxy(Reflect.get(target, prop, receiver), handler);
      this.test = this.test[prop];
      return proxy;
    } else {
      if (!Array.isArray(target)) console.log("orginal value:", Reflect.get(target, prop, receiver), "second value", this.test[prop]);

      return Reflect.get(target, prop, receiver);
    }
  },
};

const test = new Proxy(testData, handler) as typeof testData;

// case 1
/* console.log(test.a.b); */
// case 2 works fine
// console.log(test.a.b[0].c); // return 1 and 3
// case 3

// for (const property in test.a.b) {
//   console.log(`${property}: ${test.a.b[property]}`);
// }

for (let index = 0; index < test.a.b.length; index++) {
  console.log("index", index, "value", test.a.b[index].c);
}
