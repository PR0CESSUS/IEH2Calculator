import { App } from "./App";

export class Page {
  app: App;
  name: string = "";
  url: string = "";
  constructor(app: App) {
    this.app = app;
    app.router.register(
      () => this.url,
      () => this.name,
      () => this.html
    );
  }

  get html() {
    return "Missing html";
  }
}
