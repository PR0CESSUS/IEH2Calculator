export function onhashchange() {
  //   console.log(location.hash);
  this.router.load(location.hash);
}
