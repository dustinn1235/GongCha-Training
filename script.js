let categoryBtns = document.getElementById("category-btns");

let curDiv = document.getElementById("milkfoam-btns");
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

let displayTxt = document.getElementById("drink-display");
let menuBtns = document.querySelectorAll(".mbtn");
let menuItems = new Array();
menuBtns.forEach((btn) => {
  menuItems.push(btn.textContent);
  btn.addEventListener("click", async () => {
    if (displayTxt.textContent === btn.textContent) {
      document.body.classList.remove("wrong");
      document.body.classList.add("correct");

      await new Promise((r) => setTimeout(r, 500));
      document.body.classList.remove("correct");
      randItem();
    } else {
      document.body.classList.remove("correct");
      document.body.classList.add("wrong");
    }
  });
});

let startBtn = document.getElementById("rand-btn");
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hide");
  displayTxt.classList.remove("hide");

  // call randItem
  randItem();
});

const randItem = () => {
  // pick random item to display
  const randNum = Math.floor(Math.random() * menuItems.length);
  displayTxt.textContent = menuItems[randNum];
};
