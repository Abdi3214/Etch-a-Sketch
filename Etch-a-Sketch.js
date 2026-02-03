const resizeBtn = document.querySelector("#gridSizeButton");
const clearButton = document.querySelector("#clearButton");
const colorPicker = document.querySelector("#colorPicker");
const container = document.querySelector("#container");
const body = document.querySelector("body");
const btn = document.querySelectorAll("button");

body.style.maxWidth = "1000px";
body.style.margin = "24px auto";
container.style.width = "960px";
container.style.height = "960px";
container.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.15)";
container.style.borderRadius = "5px";
container.style.marginTop = "20px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.boxSizing = "border-box";

btn.forEach((button) => {
  button.style.border = "none";
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.padding = "8px 12px";
  button.style.borderRadius = "6px";
  button.style.marginRight = "8px";
});

let size = 16;
const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.style.width = container.clientWidth / size + "px";
    div.style.height = container.clientHeight / size + "px";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = colorPicker.value;
    });
    container.appendChild(div);
  }
};

createGrid(size);

clearButton.addEventListener("click", () => {
  container.innerHTML = "";
  size = 16;
  createGrid(size);
});

resizeBtn.addEventListener("click", () => {
  const newSize = Number(prompt("Enter Grid Size 1 to 100"));
  if (newSize < 1 || newSize >= 100 || isNaN(newSize)) {
    alert("Invalid size! Please enter a number between 1 and 100.");
    return;
  }
  container.innerHTML = "";
  size = newSize;
  createGrid(size);
});
