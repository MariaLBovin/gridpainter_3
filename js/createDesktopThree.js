//import { login } from "../main.js";
import regPlayer from "./color.js";
import { renderGameBoard } from "./grid.js";
import getPlayer from "./getPlayer.js";
import cancel from "./gameButtons.js";
import { notisDiv } from "./gameButtons.js";
import { countDown } from "./setTimer.js";

 export const headerDiv = document.createElement('div');
 export const footerDiv = document.createElement("div");
 export const displayName = document.createElement("h3");
 export const colourAttached = document.createElement("p");


export default function createDesktopThree () {
    const container = document.querySelector('.contentContainer');
    container.innerHTML = ""
    console.log(container); 

    const mainDiv = document.createElement('div');
    const playDiv = document.createElement('div');
    const chatDiv = document.createElement('div');
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText="Avbryt"
    const resultBtn = document.createElement("button");
    resultBtn.innerText="Se resultat"

    colourAttached.innerHTML="färg";
    let displayTime = document.createElement("span");
    displayTime.innerText="Återstående tid kvar: ";

    resultBtn.addEventListener("click", seeResult);
    cancelBtn.addEventListener("click", cancel)

    container.appendChild(mainDiv);
    mainDiv.append(playDiv, footerDiv, chatDiv);
    playDiv.prepend(headerDiv);
    headerDiv.append(displayName, colourAttached, displayTime);
    playDiv.append(displayTime);
    displayTime.append(countDown);


    footerDiv.append(resultBtn, cancelBtn);

    getPlayer();
    renderGameBoard();
    notisDiv.remove();
    //cancel();
    
}



function seeResult(){
    //createDesktop4();
}




