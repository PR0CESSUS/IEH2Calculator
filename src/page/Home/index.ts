export class PageHome {
  constructor() {}

  get html() {
    let html = `Website is using data from save file to operate in full capacity but it is not required.<br>`;
    html += `It also uses browser localStorage mechanism to store data. You can use Hard Reset button to clear it.`;
    return html;
  }
}
