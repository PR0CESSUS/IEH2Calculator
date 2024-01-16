import { getRoutes } from "./routes";

export class Router {
  routes: ReturnType<typeof getRoutes>;
  constructor() {
    this.routes = getRoutes();

    for (const [route, value] of Object.entries(this.routes)) {
      if (route == "/" || route == "404") continue;
      const link = document.createElement("a");
      if (window.location.hash.replace("#", "") == route) link.classList.add("yellow");
      link.href = `#${route}`;
      link.innerHTML = value.description;
      link.onclick = (event: Event & { target: EventTarget & HTMLAnchorElement } & MouseEvent) => {
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        this.locationHandler();
      };
      document.querySelector("nav").appendChild(link);
    }

    // create a function that watches the hash and calls the urlLocationHandler
    window.addEventListener("hashchange", this.locationHandler.bind(this));
    // call the urlLocationHandler to load the page
    this.locationHandler();
  }
  locationHandler() {
    let location = window.location.hash.replace("#", "");
    if (location.length == 0) location = "/";

    // get the route object from the routes object
    const route = this.routes[location] || this.routes["404"];
    document.title = route.title;

    // render
    if (location != "/" && route.title != "404") {
      document.querySelectorAll("nav a.yellow").forEach((element) => element.classList.remove("yellow"));
      document.querySelector(`nav a[href*="${location}"]`).classList.add("yellow");
      document.getElementById("title").innerHTML = `<a href="./">IEH2Calculator</a> &#8674; ${route.description}`;
      document.getElementById("content").innerHTML = route.template.html;
    } else {
      document.getElementById("title").innerHTML = `<a href="./">IEH2Calculator</a>`;
      document.getElementById("content").innerHTML = route.template.html;
    }

    // set the title of the document to the title of the route
  }

  Load() {
    this.locationHandler();
  }
}
