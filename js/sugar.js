import {
  basicDrinks,
  milkFoam,
  freshMT,
  milkTea,
  smoothie,
  fruitTea,
  sparkling,
} from "./helper.js";
import { sugarLevel, sugarPer } from "./helper.js";
import { randItemSugar } from "./helper.js";

const infoModal = document.querySelector(".info-modal");
const infoBtn = document.querySelector(".fa");
const overlay = document.querySelector(".overlay");
const searchInput = document.querySelector("#sugar-search-input");
const searchList = document.querySelector("#search-list");
const modeBtns = document.querySelectorAll(".cbtn");
const sugarBtns = document.querySelectorAll(".mbtn");
const displayTxt = document.querySelector("#drink-display");
let curArr = []; // use to track the current array mode
let item = []; // use to store name, size and sugar level

// event listener for mode buttons
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
        curArr = Object.keys(milkFoam);
        break;
      case "Fresh MT":
        curArr = Object.keys(freshMT);
        break;
      case "Milk Tea":
        curArr = Object.keys(milkTea);
        break;
      case "Smoothie":
        curArr = Object.keys(smoothie);
        break;
      case "Fruit Tea":
        curArr = Object.keys(fruitTea);
        break;
      case "Sparkling":
        curArr = Object.keys(sparkling);
        break;
      case "All Drinks":
        curArr = Object.keys(sugarLevel);
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

// event listener for each sugar level buttons
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

// filter search function. Hide all unmatch item
const filter = () => {
  const input = searchInput.value.toLowerCase();
  searchList.querySelectorAll("li").forEach((item) => {
    const name = item.querySelector(".search-name").textContent;
    if (!name.toLowerCase().includes(input)) item.classList.add("hide");
    else item.classList.remove("hide");
  });
};
searchInput.addEventListener("input", filter);

// function to toggle info button
infoBtn.addEventListener("click", () => {
  overlay.classList.remove("hide");
  infoModal.classList.remove("hide");
  searchInput.focus();
});

// function to toggle overlay
overlay.addEventListener("click", () => {
  overlay.classList.add("hide");
  infoModal.classList.add("hide");

  // reset search filter
  searchInput.value = "";
  filter();
});

// display item and sugar level on info modal
for (let key in sugarLevel) {
  const sugarL = parseInt(sugarLevel[key][0]) + 1 + sugarLevel[key].slice(1);

  const html = `
  <li>
    <div class="search-name">${key}</div>
    <div class="search-sugar">${sugarLevel[key]} / ${sugarL}</div>
  </li>`;

  // filter out drink with no sugar
  sugarLevel[key] &&
    sugarLevel[key] !== "No Sugar" &&
    searchList.insertAdjacentHTML("beforeend", html);
}
