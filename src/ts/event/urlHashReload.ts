// export class EventUrlHashReload {
//   constructor(event = null) {
//     //@ts-ignore

//     event.detail.path = event.detail.path.replace(/[^\/]+(?=\.)/, location.hash.slice(1));
//     // event.detail.elt.id = event.detail.path.replace(/.*\/(.*)\..*/, "$1");

//     console.log("urlHashReload");
//   }
// }
export function urlHashReload(event) {
  if (location.hash) {
    event.detail.path = event.detail.path.replace(/[^\/]+(?=\.)/, location.hash.slice(1));
  }

  // event.detail.elt.id = event.detail.path.replace(/.*\/(.*)\..*/, "$1");

  // console.log("urlHashReload");
}
