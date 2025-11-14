// ====== GLOBAL VARIABLES ======
const DEFAULT_SIZE = 16;
let perRowboxes = DEFAULT_SIZE;
let mouseDown = false;
let uniqueColorMode = true;

// ====== DOM ELEMENTS ======
const nRowsButton = document.getElementById("nRowsButton");
const container = document.getElementById("container");
const colorPicker = document.querySelector("#colorPicker");
const uniqueColorButton = document.getElementById("uniqueColorButton");
const randomColorButton = document.getElementById("randomColorButton");
const clearButton = document.getElementById("clearButton");
const h2 = document.getElementsByTagName("h2").item(0);
const h3 = document.getElementsByTagName("h3").item(0);

// ====== EVENT DECLARATION ======
document.addEventListener(
  "mousedown",
  () => {
    console.log("mouseDown = true");
    mouseDown = true;
  },
  true
);
document.addEventListener("mouseup", () => {
  console.log("mouseDown = false");
  mouseDown = false;
});
nRowsButton.addEventListener("click", setNewGrid);
uniqueColorButton.addEventListener("click", () => {
  uniqueColorMode = true;
});
randomColorButton.addEventListener("click", () => {
  uniqueColorMode = false;
});
clearButton.addEventListener("click", clearGrid);

// ====== FUNCTION DECLARATION ======
function makeGrid(perRowboxes, colorPicker) {
  container.innerHTML = "";
  if (between(perRowboxes, 0, 100)) {
    h2.textContent = "Number of pixels in grid";
    h3.textContent = `(${perRowboxes} x ${perRowboxes})`;
  }
  const boxSize = 100 / perRowboxes; // percentage width/height of each box
  for (let i = 0; i < perRowboxes; i++) {
    for (let j = 0; j < perRowboxes; j++) {
      const div = document.createElement("div");
      div.style.width = boxSize + "%";
      div.style.height = boxSize + "%";
      div.addEventListener("mousedown", changeColor);
      div.addEventListener("mouseover", changeColor);
      container.appendChild(div);
    }
  }
}

function changeColor(event) {
  console.log("mouseDown" + mouseDown);
  if (mouseDown) {
    console.log("changing color");
    if (uniqueColorMode) event.target.style.backgroundColor = colorPicker.value;
    else event.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

function setNewGrid() {
  perRowboxes = parseInt(prompt("How many boxes should be in the grid (choose a number under 100)"));
  if (typeof perRowboxes === "number" && between(perRowboxes, 0, 100)) {
    makeGrid(perRowboxes);
  } else {
    alert("Please enter a number between 1 and 99");
    makeGrid(0);
  }
}

function between(x, min, max) {
  return x > min && x < max;
}

function clearGrid() {
  makeGrid(perRowboxes);
}

// ====== CALLS ======
makeGrid(perRowboxes);
