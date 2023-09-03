// http://127.0.0.1:3000/test/html/tab1.html

xhook.before(function (request, callback) {
  //asynchronously...
  if (request.url == "./html/tab2.html") {
    setTimeout(function () {
      //callback with a fake response
      callback({
        status: 200,
        data: "this is the third text file example (example3.txt)" + localStorage.getItem("vertical"),
      });
    }, 100);
  } else {
    return callback({});
  }
});

// xhook.after(function (request, response) {
//   console.log(request);
//   console.log(response);
//   if (request.url.match(/\.\/html\/tab1\.html$/g)) response.data = "hooked";
// });

// const intercept = (urlmatch, callback) => {
//   let send = XMLHttpRequest.prototype.send;
//   XMLHttpRequest.prototype.send = function () {
//     this.addEventListener(
//       "readystatechange",
//       function () {
//         if (this.responseURL.includes(urlmatch) && this.readyState === 4) {
//           callback(this);
//         }
//       },
//       false
//     );
//     send.apply(this, arguments);
//   };
// };
// intercept("html/tab1.html", name2);

// function name2(params) {
//   console.log("przchwycona");
// }
// (function (send) {
//   XMLHttpRequest.prototype.send = function (data) {
//     this.addEventListener("readystatechange", function () {}, false);

//     console.log(data);
//     alert(data);
//   };
// })(XMLHttpRequest.prototype.send);

// XMLHttpRequest = new Proxy(XMLHttpRequest, {
//   construct(target) {
//     return new Proxy(new target(), {
//       get(target, propname, ref) {
//         console.log(`hooked get: prop: ${propname}`);
//         if (propname == open) {
//           console.log("-----------------------------------");
//         }
//         let temp = target[propname];
//         // The below if statement prevents some errors
//         if (temp instanceof Function) {
//           console.log("got function");
//           temp = temp.bind(target);
//         }
//         return temp;
//       },
//       set(target, prop, val, rec) {
//         console.log(`hooked set: ${prop}`);
//         return Reflect.set(target, prop, val);
//       },
//     });
//   },
// });
// console.log("-----------");
// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// const product = urlParams.get("test");
// if (product == "vertical") {
//   console.log("sukcess");
// }
// console.log(product);
// console.log("api", localStorage.getItem(product));
// if (product) {
//   document.clear();
// }
