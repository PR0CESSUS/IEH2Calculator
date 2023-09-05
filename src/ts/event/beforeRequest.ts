export function beforeRequest(event) {
  let hash = location.hash ? location.hash.slice(1) : false;

  if (hash && event.target.id == "content") {
    let path = hash.includes("-") ? hash.split("-")[0] : hash;
    console.log("beforeRequest PATH ORGINAL: ", event.detail.requestConfig.path);
    let finalpath = "html/" + path + ".html";
    event.detail.requestConfig.path = finalpath;
    console.log("beforeRequest PATH: ", event.detail.requestConfig.path);

    // console.log(path);
    // event.detail.pathInfo.requestPath = finalpath;
    // event.detail.pathInfo.finalRequestPath = finalpath;
    // event.detail.pathInfo.responsePath = "/" + finalpath;
    // event.detail.path = event.detail.path.replace(/[^\/]+(?=\.)/, hash.slice(1));
    //       let requestPath = event.detail.pathInfo.requestPath;
    //   let newPath = "html/" + this.tab + ".html";
    //   requestPath = newPath;
    // console.log(hash);
    console.log(event.detail);
  }

  //   console.log(event.detail);
  //   if (event.target.id == "tab-content") {
  //     let requestPath = event.detail.pathInfo.requestPath;
  //     let newPath = "html/" + this.tab + ".html";
  //     requestPath = newPath;
  //     console.log(event.detail.pathInfo);

  //     // console.log();
  //   }
}
