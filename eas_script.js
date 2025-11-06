const perRowBoxes = 10;
const container = document.getElementById("container");
const boxSize = 100 / perRowBoxes; //percentage of box width and height

function makeGrid() {
  for (let i = 0; i < perRowBoxes; i++) {
    for (let j = 0; j < perRowBoxes; j++) {
      const div = document.createElement("div");
      div.style.width = boxSize + "%";
      div.style.height = boxSize + "%";
      container.appendChild(div);

      div.addEventListener("mouseover", changeColor);

      function changeColor(event) {
        event.target.style.backgroundColor = "black";
        console.log(event);
      }
    }
  }
}

makeGrid();
