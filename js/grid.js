
export function renderGameBoard(gridDiv){
//console.log('test');
let lastClicked;

const grid = clickableGrid(15, 15, function(el, row, col, i) {
    console.log("Klick på nummer ", i);

    el.classList.add('clicked');
    if (lastClicked) lastClicked.classList.remove('clicked');
    lastClicked = el;
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
                };
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

clickableGrid();

}