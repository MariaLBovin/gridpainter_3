export default function createDesktop3 () {
    const container = document.querySelector('.contentContainer');
    container.innerHTML = ""
    console.log(container);

    const mainDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    headerDiv.innerText = 'headerdiv';
    const playDiv = document.createElement('div');
    playDiv.innerText = 'spel-div'
    const chatDiv = document.createElement('div');
    chatDiv.innerText = 'chat-div'
    container.appendChild(mainDiv);
    mainDiv.append(playDiv,chatDiv);
    playDiv.prepend(headerDiv);
    let table = document.createElement('table');
    table.className = 'table';
    document.body.appendChild(table);

    function renderGameBoard(){
        let lastClicked;
        let grid = clickableGrid(15,15,function(element,row,col,i){
            console.log("Klick på nummer ",i);
            element.className='clicked';
            if (lastClicked) lastClicked.className='';
            lastClicked = element;
        });
        document.body.appendChild(grid); 
        function clickableGrid( rows, cols, callback ){
            let i=0;        
            let grid = document.createElement('table');        
            grid.className = 'grid';        
            for (let r=0;r<rows;++r){        
                let tr = grid.appendChild(document.createElement('tr'));        
                for (let c=0;c<cols;++c){        
                    let cell = tr.appendChild(document.createElement('td'));        
                    i++;        
                    cell.addEventListener('click',(function(el,r,c,i){        
                        return function(){        
                            callback(el,r,c,i);        
                        }        
                    })(cell,r,c,i),false);        
                }        
            }        
            return grid;        
        }        
        clickableGrid();
    }
renderGameBoard();
}