import { wmelonDrinks, sugarPer } from "./helper.js";
const btns = document.body.querySelectorAll(".mbtn");
const displayTxt = document.querySelector("#drink-display");
const infoBtn = document.querySelector(".fa");
const overlay = document.querySelector(".overlay");
const infoModal = document.querySelector("#info-modal");

// function to make a random wmelon item
const randItem = (drinks) => {
  let item = {};
  item.name = drinks[Math.floor(Math.random() * drinks.length)];
  item.size = Math.round(Math.random()) ? "" : "Large";
  item.sugar = sugarPer[Math.floor(Math.random() * sugarPer.length)];
  item.ice = Math.round(Math.random()) ? "" : "No Ice";
  return item;
};

// function to check the sugar level of wmelon drink, return the answer
const checkSugar = ({ name, size, sugar, ice }) => {
  let ans = 0.25 * sugarPer.indexOf(sugar);
  // if no ice
  if (ice) ans += 0.5;
  // if no mf
  if (name === "Wintermelon") ans += 0.5;
  // small max = 1; large max = 2
  ans = Math.min(1, ans);
  // if large then double the water
  size && (ans = ans * 2);
  // if 0 then no water
  if (ans == 0) ans = "No Water";

  console.log(ans);
  return ans;
};

let item = randItem(wmelonDrinks);
item.sugar = item.sugar ? item.sugar : "50%";
displayTxt.textContent = `${item.name}${item.size ? ` - ${item.size}` : ""}
${item.sugar ? `+) ${item.sugar}` : ""}
${item.ice ? `+) ${item.ice}` : ""}`;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == checkSugar(item)) {
      displayTxt.classList.remove("wrong");
      displayTxt.classList.add("correct");

      // wait for 0.25sec then random item
      setTimeout(() => {
        displayTxt.classList.remove("correct");
        // update item and format display
        item = randItem(wmelonDrinks);
        item.sugar = item.sugar ? item.sugar : "50%";
        displayTxt.textContent = `${item.name}${
          item.size ? ` - ${item.size}` : ""
        }
        ${item.sugar ? `+) ${item.sugar}` : ""}
        ${item.ice ? `+) ${item.ice}` : ""}`;
      }, 250);
    }
    // else make screen red
    else {
      displayTxt.classList.remove("correct");
      displayTxt.classList.add("wrong");
    }
  });
});

infoBtn.addEventListener("click", () => {
  overlay.classList.remove("hide");
  infoModal.classList.remove("hide");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hide");
  infoModal.classList.add("hide");
});
