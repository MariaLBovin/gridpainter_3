
//import regPlayer from "./color.js";
import { renderGameBoard } from "./grid.js";
//import getPlayer from "./getPlayer.js";
//import cancel from "./gameButtons.js";
//import { notisDiv } from "./gameButtons.js";
//import { countDown } from "./setTimer.js";
import { socket } from "./main.js";

export default function createDesktopThree ( data ) {
    //console.log(data);
    createGameHtml(data);
    
    function createGameHtml(data) {
        console.log(data);
        const container = document.querySelector('.contentContainer');
        container.innerHTML = "";
        console.log(container);
    
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main-div');
    
        const playDiv = document.createElement('div');
        playDiv.classList.add('play-div');
    
        const chatDiv = document.createElement('div');
        chatDiv.classList.add('chat-div');
    
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header-div');
    
        const colourAttached = document.createElement("p");
        colourAttached.classList.add('färg-p');
        colourAttached.innerText = data[0].color;
    
        const displayTime = document.createElement("span");
        displayTime.classList.add('time-span');
        displayTime.innerText = "Återstående tid kvar: ";
    
        const displayName = document.createElement("h3");
        displayName.classList.add('name-h3');
        displayName.innerText = data[0].userName;
    
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
    
    
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div');
    
        const cancelBtn = document.createElement("button");
        cancelBtn.innerText = "Avbryt";
    
        const resultBtn = document.createElement("button");
        resultBtn.innerText = "Se resultat";
    
    
        // resultBtn.addEventListener("click", seeResult);
        // cancelBtn.addEventListener("click", cancel);
        container.appendChild(mainDiv);
        mainDiv.append(playDiv, chatDiv);
        playDiv.append(headerDiv, gridDiv, footerDiv);
        headerDiv.append(displayName, colourAttached, displayTime);
        //displayTime.append(countDown);
        footerDiv.append(resultBtn, cancelBtn);

        renderGameBoard(gridDiv);

    }

}

// export default function createDesktopThree () {
//     createGameHtml();


//     function createGameHtml() {
//         const container = document.querySelector('.contentContainer');
//         container.innerHTML = "";
//         console.log(container);
    
//         const mainDiv = document.createElement('div');
//         mainDiv.classList.add('main-div');
    
//         const playDiv = document.createElement('div');
//         playDiv.classList.add('play-div');
    
//         const chatDiv = document.createElement('div');
//         chatDiv.classList.add('chat-div');
    
//         const headerDiv = document.createElement('div');
//         headerDiv.classList.add('header-div');
    
//         const colourAttached = document.createElement("p");
//         colourAttached.classList.add('färg-p');
//         colourAttached.innerHTML = "färg";
    
//         const displayTime = document.createElement("span");
//         displayTime.classList.add('time-span');
//         displayTime.innerText = "Återstående tid kvar: ";
    
//         const displayName = document.createElement("h3");
//         displayName.classList.add('name-h3');
//         displayName.innerText = 'Namn';
    
//         const gridDiv = document.createElement('div');
//         gridDiv.classList.add('grid-div');
    
    
//         const footerDiv = document.createElement('div');
//         footerDiv.classList.add('footer-div');
    
//         const cancelBtn = document.createElement("button");
//         cancelBtn.innerText = "Avbryt";
    
//         const resultBtn = document.createElement("button");
//         resultBtn.innerText = "Se resultat";
    
    
//         // resultBtn.addEventListener("click", seeResult);
//         // cancelBtn.addEventListener("click", cancel);
//         container.appendChild(mainDiv);
//         mainDiv.append(playDiv, chatDiv);
//         playDiv.append(headerDiv, gridDiv, footerDiv);
//         headerDiv.append(displayName, colourAttached, displayTime);
//         //displayTime.append(countDown);
//         footerDiv.append(resultBtn, cancelBtn);

//         socket.emit('getUsers');
    
//         socket.on('users', (users) => {
//             console.log(users);
//             renderGameBoard(gridDiv, users);
//         });

        
    
//     }
    
    
// }





