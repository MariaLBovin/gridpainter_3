import createImage from "./painter.js";
import { socket } from "./main.js";
const facit = [];


export function renderGameBoard(gridDiv, currentUser){
//console.log('test');
//let lastClicked;
socket.on('paint', (facit) => {
    console.log(facit);
});
// socket.on('paint', (facit) {
//     clickableGrid}
//     );

//console.log(currentUser);
let selectedColor = currentUser.color;

const grid = clickableGrid(15, 15, function(el, row, col, i) {
    //console.log("Klick på nummer ", i);

    


    // Hämta in i + color till en array för att spara?

    // el.classList.add('clicked');
    // if (lastClicked) lastClicked.classList.remove('clicked');
    // lastClicked = el;
    el.style.backgroundColor = selectedColor;
    facit.push(i, selectedColor);
    //console.log(facit);
    
    //socket.emit('paint', facit);


});

gridDiv.append(grid);

function clickableGrid( rows, cols, callback ){
    //console.log('test');
    let i=0;
    const grid = document.createElement('table');
    grid.className = 'grid';
    for (let r=0;r<rows;++r){
        const tr = grid.appendChild(document.createElement('tr'));
        for (let c=0;c<cols;++c){
            const cell = tr.appendChild(document.createElement('td'));
            i++;
            cell.addEventListener('click',(function(el,r,c,i){

                return function(){
                    callback(el,r,c,i);
                    socket.emit('paint', facit);
                    // console.log(callback);
                };
            })(cell,r,c,i),false);
        }

    }
    return grid;
}

clickableGrid();
//createImage(grid);

}