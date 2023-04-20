//import { login } from "../main.js";
import regPlayer from "./color.js";
import { renderGameBoard } from "./grid.js";
//import getPlayer from "./getPlayer.js";
//import cancel from "./gameButtons.js";
//import { notisDiv } from "./gameButtons.js";

 export const headerDiv = document.createElement('div');
 export const footerDiv = document.createElement("div");


export default function createDesktopThree () {
    const container = document.querySelector('.contentContainer');
    container.innerHTML = ""
    console.log(container); 

    const mainDiv = document.createElement('div');
    const playDiv = document.createElement('div');
    playDiv.innerText = 'spel-div'
    const chatDiv = document.createElement('div');
    chatDiv.innerText = 'chat-div'
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText="Avbryt"
    const resultBtn = document.createElement("button");
    resultBtn.innerText="Se resultat"


    resultBtn.addEventListener("click", seeResult);
    cancelBtn.addEventListener("click", cancel)
    container.appendChild(mainDiv);
    mainDiv.append(playDiv,footerDiv, chatDiv);
    playDiv.prepend(headerDiv);

    footerDiv.append(resultBtn, cancelBtn);

    getPlayer();
    renderGameBoard();
    notisDiv.remove();
    //cancel();
    
}

const startingMinutes = 5;
let time = startingMinutes * 60;
let countDown = document.createElement("span");
let myInterval = setInterval(setTimer, 1000)
function setTimer(){
    let displayTime = document.createElement("span");
    displayTime.innerText="Återstående tid kvar: ";


    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10? "0" + seconds : seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;
    time --;
    time = time < -1 ? -1 : time;
    
if (time === -1) {
    clearInterval(myInterval);
    countDown.innerHTML = "STOP";
} 
displayTime.append(countDown);
//headerDiv.append(displayTime);
}

function seeResult(){
    //createDesktop4();
}

//export default 
function getPlayer(){ 
    const inputName = document.getElementById("inputName");
    const displayName = document.createElement("h3");
    displayName.innerHTML = "Välkommen " + inputName;
    const colourAttached = document.createElement("p");
    colourAttached.innerHTML="färg";

    console.log(displayName, colourAttached);
    headerDiv.append(displayName,colourAttached);
    //regPlayer();
}



let notisDiv = document.createElement("div");

//export default 
function cancel(){
    let yesBtn = document.createElement("button");
    let noBtn = document.createElement("button");

    notisDiv.innerHTML="Är du säker på att du vill avsluta spelet?"
    yesBtn.innerText="Ja"
    noBtn.innerText="Nej";
    footerDiv.append(notisDiv);
    notisDiv.append(yesBtn, noBtn);

    yesBtn.addEventListener("click", ()=>{
    login();
    footerDiv.innerHTML="";
    headerDiv.innerHTML="";})

    noBtn.addEventListener("click", ()=>{
        notisDiv.innerHTML="";
    })
}