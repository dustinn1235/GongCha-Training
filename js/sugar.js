import {
  basicDrinks,
  milkFoam,
  freshMT,
  milkTea,
  smoothie,
  fruitTea,
  sparkling,
  allDrinks,
} from "./helper.js";
import { sugarLevel, sugarPer } from "./helper.js";
import { randItemSugar } from "./helper.js";

const modeBtns = document.querySelectorAll(".cbtn");
const sugarBtns = document.querySelectorAll(".mbtn");
const displayTxt = document.querySelector("#drink-display");
let curArr = []; // use to track the current array mode
let item = []; // use to store name, size and sugar level

let curModeBtn = document.createElement("button");
modeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // change color
    curModeBtn.style.backgroundColor = " rgb(241, 241, 241)";
    btn.style.backgroundColor = "rgb(182, 182, 182)";
    curModeBtn = btn;

    // random item in categories
    switch (btn.textContent) {
      case "16 Drinks":
        curArr = basicDrinks;
        break;
      case "Milk Foam":
        curArr = milkFoam;
        break;
      case "Fresh MT":
        curArr = freshMT;
        break;
      case "Milk Tea":
        curArr = milkTea;
        break;
      case "Smoothie":
        curArr = smoothie;
        break;
      case "Fruit Tea":
        curArr = fruitTea;
        break;
      case "Sparkling":
        curArr = sparkling;
        break;
      case "All Drinks":
        curArr = allDrinks;
        break;
    }
    // update item and format display
    item = randItemSugar(curArr);
    const [name, size, sugar] = item;
    displayTxt.textContent = `${name}${size ? ` - ${size}` : ""}${
      sugar ? ` / ${sugar}` : ""
    }`;
    displayTxt.classList.remove("wrong"); // reset display color
  });
});

sugarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // if default skip
    if (displayTxt.textContent === "Please pick a mode!") return;
    // if correct sugar then random another one
    if (btn.textContent === checkSugar(...item)) {
      displayTxt.classList.remove("wrong");
      displayTxt.classList.add("correct");

      // wait for 0.25sec then random item
      setTimeout(() => {
        displayTxt.classList.remove("correct");
        // update item and format display
        item = randItemSugar(curArr);
        const [name, size, sugar] = item;
        displayTxt.textContent = `${name}${size ? ` - ${size}` : ""}${
          sugar ? ` / ${sugar}` : ""
        }`;
      }, 250);
    }
    // else make screen red
    else {
      displayTxt.classList.remove("correct");
      displayTxt.classList.add("wrong");
    }
  });
});

// function to verify sugar level answer
const checkSugar = (name, size, sugar) => {
  const sugarBtnsArr = Array.from(sugarBtns);
  let ans = sugarLevel[name];
  let ansIndex = sugarBtnsArr.indexOf(
    sugarBtnsArr.find((btn) => btn.textContent == ans)
  );
  // if large size then increase by 1 level of sugar. Ex: 3-4 -> 4-4, 1-1 -> 2-1
  if (size) {
    ansIndex++;
    ans = sugarBtnsArr[ansIndex].textContent;
  }
  console.log(`Based ${ans}`);
  // check sugar level
  if (sugar) {
    for (let i = 0; i < sugarPer.indexOf(sugar); i++) {
      ansIndex = ansIndex - 4 < 0 ? ansIndex - 1 : ansIndex - 4;
    }
  }
  ans = ansIndex < 0 ? "No Sugar" : sugarBtnsArr[ansIndex].textContent;
  console.log(`=> ${ans}`);
  return ans;
};
