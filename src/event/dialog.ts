export function dialogBackdropClose(event) {
  let rect = this.getBoundingClientRect();
  let isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  if (!isInDialog && event.target.tagName === "DIALOG") {
    this.close();
  }
}
