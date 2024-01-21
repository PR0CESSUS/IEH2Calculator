export class Endpoint {
  list: string[] = [];
  constructor() {}

  new(endpoint: string, raw: boolean = false) {
    this.list.push(endpoint);
    if (!raw) return `data-endpoint="${endpoint}"`;

    return endpoint;
  }
}
