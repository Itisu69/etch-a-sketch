function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid() {
  const div = document.querySelector("#container");

  // Clearing the grid before re-drawing
  div.innerHTML = "";

  const gridSize = document.querySelector("#gridSize").value;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.style.width = `${960 / gridSize}px`;
    cell.style.height = `${960 / gridSize}px`;
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = getRandomColor();
    });
    cell.style.setProperty('--random-opacity', (Math.random() * 0.8 + 0.2).toFixed(2));
    
    while (true) {
      cell.hideTimeout = setTimeout(() => {
          cell.style.backgroundColor = "white";
      }, 1000);
    }
    div.appendChild(cell);
  }

}

//   Drawing grid whenever page loads
drawGrid();