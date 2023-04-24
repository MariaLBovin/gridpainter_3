import { socket } from "./main.js";
const facit = [];


export function renderGameBoard(gridDiv, currentUser){

    socket.on('paint', (facit) => {
        //console.log(facit);
            facit.forEach(item => {
                //console.log(item.color);
                const color = item.color;
                const position = item.position;
                const cell = document.querySelector(`#cell-${position}`);
                cell.style.backgroundColor = color;
            });
    });

    const selectedColor = currentUser.color;


    const grid = clickableGrid(15, 15, function(el, row, col, i) {
        
        el.style.backgroundColor = selectedColor;
        facit.push({position:i, color:selectedColor});

    });

    gridDiv.append(grid);

    function clickableGrid( rows, cols, callback ){

        let i=0;
        const grid = document.createElement('table');

        grid.className = 'grid';
        for (let r=0;r<rows;++r){
            const tr = grid.appendChild(document.createElement('tr'));
            for (let c=0;c<cols;++c){
                const cell = tr.appendChild(document.createElement('td'));
                i++;
                cell.id = `cell-${i}`;

                cell.addEventListener('click',(function(el,r,c,i){
                    return function(){
                        callback(el,r,c,i);
                        socket.emit('paint', facit);
                        
                    };
                })(cell,r,c,i),false);
            }
        }
        return grid;
    }
    clickableGrid();

}


  