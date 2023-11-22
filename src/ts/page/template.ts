import { App } from "../../App";
import { Page } from "../Page";

export class Template extends Page {
  constructor(app: App) {
    super(app);
    this.url = "#template";
    this.name = "Template";
  }
}
