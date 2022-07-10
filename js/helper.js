const sugarPer = ["", "70%", "50%", "30%"];
const oneSize = [
  "MF Black Forest",
  "MF Black Coffee",
  "Dalgona Coffee",
  "Dalgona Coffee - Pearls",
  "Coffee Frappe",
  "Caramel Frappe",
];
const wmelonDrinks = [
  "MF Wintermelon",
  "Wintermelon",
  "Lemon Wmelon-Basil",
  "Wmelon Fresh Milk T",
  // "MF Wintermelon-AiYu",
  // "Kumquat-wintermelon",
];
const basicDrinks = [
  "MT - PEARLS",
  "Earl Grey MT - 2J",
  "Earl Grey MT - 3J",
  "PANDA-MT",
  "MT-Grass Jelly",
  "Caramel MT",
  "MT - Coconut",
  "Taro MT",
  "Matcha MT",
  "MF Green T",
  "MF Oolong",
  "MF Black T",
  "MF PANDA",
  "Lychee Oolong",
  "Mango Green T",
  "Lychee & Mango Green T",
  "QQ Passion Green T",
  "Lemon Ai-Yu - White Pearl",
];
const milkFoam = {
  "MF Green T": "3-4",
  "MF Wintermelon": "No Sugar",
  "MF Oolong": "3-4",
  "MF PANDA": "3-3",
  Wintermelon: "No Sugar",
  "MF Black T": "3-4",
  "MF Black Forest": "",
  "MF Black Coffee": "",
  "MF Wintermelon-AiYu": "No Sugar",
  "MF Brown Sugar Oolong": "No Sugar",
  "MF Wintermelon Oolong": "1-4",
  "MF Panda-White only": "3-3",
  "MF Coconut Green T": "3-4",
  "MF Pineapple Green T w coco": "No Sugar",
  "MF Pina Colada Green T": "No Sugar",
  "MF Peppermint Blk-Green": "",
  "MF Peppermint Choco": "",
};
const freshMT = {
  "Wmelon Fresh Milk T": "No Sugar",
  "Fresh Milk-Pudding-Red Bean": "No Sugar",
  "Fresh Milk-Grass Jelly": "No Sugar",
  "Dirty Brown Sugar Fresh Milk-pearl": "No Sugar",
  "Matcha - MANGO": "No Sugar",
  "Mango Latte - MANGO": "No Sugar",
  "Strawberry Taro": "No Sugar",
  "Strawberry Matcha": "No Sugar",
  "Caramel Earl Grey Latte": "",
  "Dalgona Coffee": "1-4",
  "Dalgona Coffee - Pearls": "1-4",
  "Honeydew Matcha": "",
  "Cream Brulee Strawberry Latte": "1-4",
  "Creme Brulee Fresh MT": "3-4",
  "Strawberry Coconut Milk": "",
  "Hong Kong Mango Drink": "No Sugar",
  "Dirty Brown-SOY - pearls": "No Sugar",
};
const milkTea = {
  "Earl Grey MT - 2J": "3-4",
  "Earl Grey MT - 3J": "3-2",
  "Caramel MT": "1-4",
  "MT - Coconut": "3-2",
  MT: "3-4",
  "MT - PEARLS": "3-4",
  "MT-Pudding": "3-4",
  "MT-Grass Jelly": "3-2",
  "Early Grey MT-Pearls": "3-4",
  "Earl Grey MT": "3-4",
  "PANDA-MT": "3-4",
  "Coffee MT": "3-4",
  "Brown Sugar Milk Tea-pearls": "No Sugar",
  "Honey MT": "No Sugar",
  "Strawberry Milk Green T": "1-4",
  "Milk Green T": "3-4",
  "Lychee MT": "1-4",
  "Sesame MT": "1-4",
  "Panda MT-white only": "3-4",
  "Honeydew MT": "1-4",
  "Chocolate MT": "3-4",
  "Matcha MT": "1-4",
  "Taro MT": "1-1",
  "Matcha MT-bean": "1-4",
  "Taro MT-bean": "1-1",
  "Strawberry Earl MT-pearl": "1-3",
  "Peppermint Matcha MT": "",
};
const fruitTea = {
  "Mango Green T": "1-4",
  "QQ Passion Green T": "1-4",
  "Lemon Wmelon-Basil": "No Sugar",
  "Peach Drink": "1-4",
  "Lychee Oolong": "1-4",
  "Lychee & Mango Green T": "1-4",
  "Lemon Ai-Yu - White Pearl": "1-2",
  "Peach Green T": "1-4",
  "QQ Grapefruit Green T": "1-4",
  "Grapefruit Drink": "1-4",
  "Honey Green T": "No Sugar",
  "Strawberry Green T": "1-4",
  "Lemon Honey Green T": "No Sugar",
  "Lychee Honey Green T": "No Sugar",
  "Mango Green T - MANGO": "1-4",
  "Peach Oolong T": "1-4",
  "Passion Fruit Green T": "1-4",
  "Kumquat-aloe-mango GT": "1-4",
  "Kumquat-aloe-honey GT": "",
  "Kumquat-lemon juice": "No Sugar",
  "Kumquat-wintermelon": "",
  "Kumquat-AiYu-Lime GT": "",
  "Kumquat Lime GT": "",
  "Peach Yogurt": "1-4",
  "Mango Yogurt": "1-4",
  "Strawberry Yogurt": "1-4",
  "Grapefruit Mango GT": "1-4",
  "Grape Yogurt w pearl": "",
  "Lychee GT": "",
  "Straw-Passion Earl Tea w white": "1-3",
};
const sparkling = {
  "Peach Sparkling": "1-4",
  "Lime Sparkling": "1-4",
  "Lychee Oolong Sparkling": "1-4",
  "Straw Lime Sparkling": "No Sugar",
  "Lime Grape Sparkling - coco": "1-2",
};
const smoothie = {
  "Mango Smoothie": "1-4",
  "Matcha Smoothie": "3-4",
  "Peach Smoothie": "1-4",
  "Strawberry Smoothie": "1-4",
  "Taro Smoothie": "1-4",
  "Red Bean Smoothie": "1-4",
  "Coffee Frappe": "No Sugar",
  "Caramel Frappe": "No Sugar",
  "Strawberry-Mango Smoothie": "1-4",
  "Peach Strawberry Smoothie": "1-4",
  "Peach Mango Smoothie": "1-4",
  "Lychee Smoothie": "1-4",
  "Honeydew Smoothie": "1-4",
  "Mango Yogurt Smoothie": "1-1",
  "Peach Yogurt Smoothie": "No Sugar",
  "Chocolate Smoothie": "3-4",
  "Avocado Smoothie": "3-4",
  "Strawberry Creme Brulee Smoothie": "1-4",
  "Coconut Smoothie": "3-4",
  "Pineapple Passionfruit Smoothie": "1-4",
  "Pina Colada GT Crush": "2-4",
  "Mango Grapefruit Smoothie": "1-4",
  "Grape Passion Crush - coco": "1-4",
  "Grape Yogurt Smoothie - white": "3-4",
  "Strawberry Cookie Smoothie": "",
};
const sugarLevel = {
  ...milkFoam,
  ...freshMT,
  ...milkTea,
  ...smoothie,
  ...fruitTea,
  ...sparkling,
};

// function to random an item with size and sugar level
const randItemSugar = (randArr) => {
  const level = sugarPer[Math.floor(Math.random() * sugarPer.length)];

  let item = randItem(randArr);

  // filter out all drink without sugar.
  while (
    sugarLevel[item[0]] == "No Sugar" ||
    sugarLevel[item[0]] == "" ||
    !sugarLevel.hasOwnProperty(item[0])
  ) {
    item = randItem(randArr);
  }
  return [...item, level];
  //   return level ? `${randItem(randArr)} / ${level}` : randItem(randArr);
};

// fucntion random an item with size in arr
const randItem = (randArr) => {
  let size = Math.round(Math.random()) ? "Large" : "";
  let keys = Object.keys(randArr);
  let name = randArr[Math.floor(Math.random() * keys.length)];
  if (oneSize.includes(name)) size = "";
  return [name, size];
};

// // function to convert string to camel case
// const toCamel = (text) => {
//   text = text.replace(/\s/g, "");
//   text = text[0].toLowerCase() + text.slice(1);
//   return text;
// };

export {
  basicDrinks,
  milkFoam,
  freshMT,
  milkTea,
  smoothie,
  fruitTea,
  sparkling,
  wmelonDrinks,
};
export { sugarLevel, sugarPer };
export { oneSize };
export { randItem, randItemSugar };
