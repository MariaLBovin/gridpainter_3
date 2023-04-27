import { socket } from "./main.js";
import checkPercentage from "./checkpercentage.js";
import { img1 } from "./fetchImage.js";


export default function displaySolution (gridDiv) {
    socket.on('result', (similarityPercentage) => {
        console.log("percetage:", similarityPercentage);

      });

        const gridContainer = document.querySelector(".grid");
        const conclusionPic = [];

        // loop through each row in the grid
        for (let i = 0; i < gridContainer.rows.length; i++) {
            const row = gridContainer.rows[i];
            const rowArray = [];

            // loop through each cell in the current row
            for (let j = 0; j < row.cells.length; j++) {
                const cell = row.cells[j];

                // create an object to store the cell data
                const cellObject = {
                    id: cell.id,
                    style: cell.style.backgroundColor,
                };

                rowArray.push(cellObject);
            }

            // add the row array to the conclusion pic array
            conclusionPic.push(rowArray);
        }

        // flatten the conclusion pic array into a one array with method concat
        const conclusionFlat = [].concat(...conclusionPic);

        const similarityPercentage = checkPercentage(img1.grid, conclusionFlat);
        //console.log("percetage:", similarityPercentage);
        socket.emit('result', (similarityPercentage));
    }
