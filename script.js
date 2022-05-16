let categoryBtns = document.getElementById("category-btns");
let displayTxt = document.getElementById("drink-display");
let menuBtns = document.querySelectorAll(".mbtn");
let curDiv = document.getElementById("milkfoam-btns");
let startBtn = document.getElementById("rand-btn");
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
    if (displayTxt.textContent === btn.textContent) {
      document.body.classList.remove("wrong");
      document.body.classList.add("correct");

      // wait for 0.5sec then random item
      setTimeout(() => {
        document.body.classList.remove("correct");
        randItem();
      }, 500);
    } else {
      document.body.classList.remove("correct");
      document.body.classList.add("wrong");
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
