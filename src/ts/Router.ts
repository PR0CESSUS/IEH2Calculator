import { App } from "./App";

type Route = {
  url: Function;
  name: Function;
  html: Function;
};

export class Router {
  app: App;
  routes: Route[] = [];
  constructor(app: App) {
    this.app = app;

    //@ts-ignore

    // app.data.test.test();
    // app.updateContent();
    // window.onhashchange = function () {
    //   //blah blah blah
    //   console.log(location.hash);
    // };
  }

  renderRoutes() {
    const html = document.getElementById("menu");
    html.innerHTML = "";
    this.routes.forEach((element) => {
      html.innerHTML += `<button data-url="${element.url()}" class="menu-button">${element.name()}</button>`;
    });
    if (location.hash) {
      document.querySelectorAll("[data-url]").forEach((element) => element.classList.remove("highlight"));
      document.querySelectorAll(`[data-url="${location.hash}"]`).forEach((element) => element.classList.add("highlight"));
      // if (location.hash.includes("-")) document.querySelector(`[data-url="${location.hash.split("-")[0]}"]`).classList.add("highlight");
    }
  }

  initialization() {
    this.load(location.hash);
    this.renderRoutes();
  }

  register(url: Function, name: Function, html: Function) {
    this.routes.push({ url: url, name: name, html: html });
  }

  load(url: string = location.hash) {
    // console.log(url);
    history.pushState("", "", url);

    let html = `Website is using data from save file to operate in full capacity but it is not required.<br><br>`;
    html += `If you encounter any bug or missing/incorrect modifier feel free to send me a DM on Discord .processus<br><br>`;
    html += `FAQ<hr>`;
    html += `<p>How to adjust Ruby Converter ratio without importing Save File?</p>`;
    html += `type into console<br>                <textarea cols="120" rows="2" spellcheck="false" style="resize: none;overflow:hidden;">
globalThis.data.source.maxModifierCleareds[0] = TotalModifier
globalThis.data.save()
    </textarea><br>where TotalModifier is number`;
    let name = ``;

    // if (url != "") this.app.page[url.slice(1)].Load();
    this.routes.forEach((route) => {
      if (route.url() == location.hash) {
        html = route.html();
        name = route.name();
      }
    });
    //

    document.getElementById("content").innerHTML = html;
    if (name == "") {
      document.getElementById("title").innerHTML = `<a href="./">IEH2Calculator</a>`;
    } else {
      document.getElementById("title").innerHTML = `<a href="./">IEH2Calculator</a> &#8674; ${name}`;
    }
    this.renderRoutes();
    this.app.update();
    // this.app.page[url.slice(1)].logic.AfterLoad();
  }
}
