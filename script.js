const container = document.querySelector("div.container");
console.log(container);

const dimensions = 16;

for (let i = 0; i < dimensions * dimensions; i ++) {
    const gridbox = document.createElement("div");
    container.appendChild(gridbox);
    gridbox.setAttribute("class", "box");
    gridbox.textContent = "Grid box";
    console.log("Added a box");
}
