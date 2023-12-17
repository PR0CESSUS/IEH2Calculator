export function SDName(id, text = "") {
  switch (id) {
    case 0:
      return "The Slime Hideout";
    case 1:
      return "The Spider Underground Apartment";
    case 2:
      return "The Darkest Forest";
    case 3:
      return "The Burning Garden";
    case 4:
      return "The Kor Lecture Hall";
    default:
      return text;
  }
}
