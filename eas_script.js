let perRowBoxes = 120;
const container = document.getElementById("container");
const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;

boxWidth = containerWidth / perRowBoxes;
boxHeight = containerHeight / perRowBoxes;
for (let i = 0; i < perRowBoxes; i++) {
  for (let j = 0; j < perRowBoxes; j++) {
    const div = document.createElement("div");
    div.style.width = boxWidth + "px";
    div.style.height = boxHeight + "px";
    container.appendChild(div);
  }
}
