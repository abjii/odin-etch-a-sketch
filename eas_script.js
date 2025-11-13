// ====== GLOBAL VARIABLES ======
const DEFAULT_SIZE = 16;
let perRowboxes = DEFAULT_SIZE;
let mouseDown = false;

// ====== DOM ELEMENTS ======
const nRowsButton = document.getElementById("nRowsButton");
const container = document.getElementById("container");
const uniqueColorButton = document.getElementById("uniqueColorButton");
const randomColorButton = document.getElementById("randomColorButton");
const clearButton = document.getElementById("clearButton");
const h2 = document.getElementsByTagName("h2").item(0);
const h3 = document.getElementsByTagName("h3").item(0);
const colorPicker = document.querySelector("#colorPicker");

console.log(colorPicker.value);
// ====== EVENT DECLARATION ======
nRowsButton.addEventListener("click", setNewGrid);
document.addEventListener("mousedown", () => {
  mouseDown = true;
});
document.addEventListener("mouseup", () => {
  mouseDown = false;
  console.log("mouseDown = false;");
});

clearButton.addEventListener("click", clearGrid);

uniqueColorButton.addEventListener("click", () => {});
// ====== FUNCTION DECLARATION ======
function makeGrid(perRowboxes) {
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
      div.addEventListener("mouseover", hoverColor);
      container.appendChild(div);
    }
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = colorPicker.value;
  console.log("mouse down so colouring");
}

function hoverColor(event) {
  if (mouseDown) {
    event.target.style.backgroundColor = colorPicker.value;
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
