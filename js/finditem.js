import { oneSize } from "./helper.js";
import { milkFoam, freshMT, milkTea, smoothie, fruitTea } from "./helper.js";

const milkfoamDiv = document.getElementById("milkfoam-btns");
const freshmtDiv = document.getElementById("freshmt-btns");
const milkteaDiv = document.getElementById("milktea-btns");
const fruitteaDiv = document.getElementById("fruittea-btns");
const smoothieDiv = document.getElementById("smoothie-btns");

let categoryBtns = document.getElementById("category-btns");
let displayTxt = document.getElementById("drink-display");
let startBtn = document.getElementById("rand-btn");
let displayControl = document.querySelector(".controls");
let menuItems = new Array();
let curDiv = milkfoamDiv;

// display all drink of categories
let html = "";
Object.keys(milkFoam).forEach((item) => {
  html = `<button class="mbtn">${item}</button>`;
  milkfoamDiv.insertAdjacentHTML("beforeend", html);

  // if item has one size => only 1 button
  if (oneSize.includes(item)) return;

  html = `<button class="mbtn">${item} - Large</button>`;
  milkfoamDiv.insertAdjacentHTML("beforeend", html);
});
Object.keys(freshMT).forEach((item) => {
  html = `<button class="mbtn">${item}</button>`;
  freshmtDiv.insertAdjacentHTML("beforeend", html);

  // if item has one size => only 1 button
  if (oneSize.includes(item)) return;

  html = `<button class="mbtn">${item} - Large</button>`;
  freshmtDiv.insertAdjacentHTML("beforeend", html);
});
Object.keys(milkTea).forEach((item) => {
  let style = "";
  if (item == "MT - PEARLS") style = 'style="color:red"';
  html = `<button class="mbtn" ${style}>${item}</button>`;
  milkteaDiv.insertAdjacentHTML("beforeend", html);

  // if item has one size => only 1 button
  if (oneSize.includes(item)) return;

  html = `<button class="mbtn" ${style}>${item} - Large</button>`;
  milkteaDiv.insertAdjacentHTML("beforeend", html);
});
Object.keys(fruitTea).forEach((item) => {
  html = `<button class="mbtn">${item}</button>`;
  fruitteaDiv.insertAdjacentHTML("beforeend", html);

  // if item has one size => only 1 button
  if (oneSize.includes(item)) return;

  html = `<button class="mbtn">${item} - Large</button>`;
  fruitteaDiv.insertAdjacentHTML("beforeend", html);
});
Object.keys(smoothie).forEach((item) => {
  html = `<button class="mbtn">${item}</button>`;
  smoothieDiv.insertAdjacentHTML("beforeend", html);

  // if item has one size => only 1 button
  if (oneSize.includes(item)) return;

  html = `<button class="mbtn">${item} - Large</button>`;
  smoothieDiv.insertAdjacentHTML("beforeend", html);
});
let menuBtns = document.querySelectorAll(".mbtn");

// function to change category page according to respective category
categoryBtns.addEventListener("click", (event) => {
  // check if is button click
  const isBtn = event.target.nodeName === "BUTTON";
  if (!isBtn) return;

  // reset scroll top top
  curDiv.scrollTop = 0;

  // hide/display category
  let className = "";
  className = event.target.textContent;
  className = className.toLowerCase().replace(/\s/g, "").concat("-btns");

  let divName = document.getElementById(className);

  curDiv.classList.add("hide");
  divName.classList.remove("hide");
  curDiv = divName;
});

// event listener for menu item btns
menuBtns.forEach((btn) => {
  if (!btn.textContent.includes("Large")) menuItems.push(btn.textContent);
  btn.addEventListener("click", () => {
    if (!displayTxt.textContent) return;
    if (displayTxt.textContent === btn.textContent) {
      displayControl.classList.remove("wrong");
      displayControl.classList.add("correct");

      // wait for 0.25sec then random item
      setTimeout(() => {
        displayControl.classList.remove("correct");
        randItem();
      }, 250);
    } else {
      displayControl.classList.remove("correct");
      displayControl.classList.add("wrong");
    }
  });
});

// event listener for start button
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hide");
  displayTxt.classList.remove("hide");

  // call randItem
  randItem();
});

// function to pick a random item from menu to display
const randItem = () => {
  const randNum = Math.floor(Math.random() * menuItems.length);
  displayTxt.textContent = menuItems[randNum];
};

let menuBtnsArr = Array.from(menuBtns);
menuBtnsArr = menuBtnsArr.filter(
  (btn) =>
    !btn.textContent.includes("Large") && !btn.textContent.includes("Hot")
);
let x = "";
menuBtnsArr.forEach((btn) => (x = x + `'${btn.textContent}',` + "\n"));
console.log(x);
