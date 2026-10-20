const container = document.querySelector("div.container");
const startBtn = document.querySelector("button");

startBtn.addEventListener("click", () => {
    const gridDim = prompt("What should the dimensions be?");
    if (gridDim < 100) {
        container.innerHTML = "";
        for (let i = 0; i < gridDim * gridDim; i ++) {
            const gridbox = document.createElement("div");
            container.appendChild(gridbox);
            gridbox.setAttribute("class", "box");
                  
            let dimensions = 100 / gridDim;
            gridbox.style.setProperty("width", `${dimensions}%`);
            gridbox.addEventListener("mouseover", (e) => {
                let opacity = Number(e.target.style.opacity) || 0;
                gridbox.setAttribute("class","pixelate");
                if (opacity < 1) {
                    e.target.style.opacity = opacity + 0.1;
                }
            })
        }
    } else {
        alert("Too many squares!");
    }
})