const container = document.querySelector("div.container");
const startBtn = document.querySelector("button");



startBtn.addEventListener("click", () => {
    const gridDim = prompt("What should the dimensions be?");
    if (gridDim < 100) {
        container.innerHTML = "";
        for (let i = 0; i < gridDim * gridDim; i ++) {
            const gridbox = document.createElement("div");
            container.appendChild(gridbox);
            gridbox.textContent = "Grid box";
            gridbox.setAttribute("class", "box");
            const dimensions = 100/gridDim;
            gridbox.setAttribute("style", `width: ${dimensions}%; height: 100px`);
            
            gridbox.addEventListener("mouseover", (e) => {
                gridbox.setAttribute("class","pixelate");
            })
        }
    } else {

    }
})