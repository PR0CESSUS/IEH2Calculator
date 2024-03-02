// import { Game } from "./data";

// const game = new Game();

// console.log("game", game);
// console.log("game.data.children1.value", game.data.children1.value);
// console.log("game.snap.children1.value", game.snap.children1.value);
// console.log("game.data.children2.value", game.data.children2.value);
// console.log("game.data.Test()", game.data.Test());

const obj1 = {
  base: 1,
  ability: 10,
  talisman: 4,
};

const obj2 = {
  base: 1,
  ability: 20,
};

console.log({ ...obj1, ...obj2 });
