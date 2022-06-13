let categoryBtns = document.getElementById("category-btns");
let displayTxt = document.getElementById("drink-display");
let menuBtns = document.querySelectorAll(".mbtn");
let curDiv = document.getElementById("milkfoam-btns");
let startBtn = document.getElementById("rand-btn");
let displayControl = document.querySelector(".controls");
let menuItems = new Array();

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
  menuItems.push(btn.textContent);
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

// let menuBtnsArr = Array.from(menuBtns);
// menuBtnsArr = menuBtnsArr.filter(
//   (btn) =>
//     !btn.textContent.includes("Large") && !btn.textContent.includes("Hot")
// );
// let x = "";
// menuBtnsArr.forEach((btn) => (x = x + `'${btn.textContent}',` + "\n"));
// console.log(x);
