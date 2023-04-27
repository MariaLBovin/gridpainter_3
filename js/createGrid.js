import fetchImage from "./fetchImage.js";

export default function createGrid (imageDiv, ) {

//const container = document.querySelector(".image-div");

  const table = document.createElement("table");
  table.classList.add("table");
  //container.appendChild(table);

    for (let i = 0; i < 15; i++) {
      const row = document.createElement("tr");
      table.appendChild(row);
      for (let j = 0; j < 15; j++) {
        const cell = document.createElement("td");
        cell.classList.add("cell");
        cell.id = `square-cell-${i * 15 + j + 1}`;   
        //console.log(cell);
        row.appendChild(cell);

        // fetchImage(cell);
      }
    }
    imageDiv.appendChild(table);

   
    fetchImage();

}



//cell.id = `cell-${i}`;
//(i * 15 + j + 1).toString();