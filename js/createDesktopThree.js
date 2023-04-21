import login from "../main.js";
import regPlayer from "./color.js";
import createChat from "./createChat.js";

const headerDiv = document.createElement('div');
const timer=document.createElement("span");
const nameInLS = localStorage.getItem("userName");
const footerDiv = document.createElement("div");



let sec= 100;


export default function createDesktop3 () {
    const container = document.querySelector('.contentContainer');
    container.innerHTML = "";
    console.log(container);

    const mainDiv = document.createElement('div');
    mainDiv.classList.add("desktop-three-div");
    const playDiv = document.createElement('div');
    playDiv.classList.add('play-div');
    const chatDiv = document.createElement('div');
    chatDiv.classList.add('div-chat');
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game-div');
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText="Avbryt";
    const resultBtn = document.createElement("button");
    resultBtn.innerText="Se resultat";

    resultBtn.addEventListener("click", seeResult);
    cancelBtn.addEventListener("click", cancel);
    
    container.appendChild(mainDiv);
    mainDiv.append(playDiv, chatDiv);
    playDiv.append(headerDiv, gameDiv, footerDiv);
    footerDiv.append(resultBtn, cancelBtn);

    getPlayer();
    createChat();
    notisDiv.remove();
    
}

export function getPlayer(){ 
    const displayName = document.createElement("h3");
    displayName.innerHTML = "Välkommen " + nameInLS;
    const colourAttached = document.createElement("p");
    colourAttached.innerHTML="färg";

    let displayTime = document.createElement("span");
    displayTime.innerText="Återstående tid kvar: ";
    let countDown=document.createElement("p");
    countDown=(setInterval(setTimer, 1000));

    console.log(displayName, colourAttached);
    headerDiv.append(displayName,colourAttached, displayTime);
    displayTime.append(countDown)
    regPlayer();
}

function setTimer(){
    if (sec < 0) {
        clearInterval(timer);
    }
    timer.innerHTML= sec + ' seconds remaining';
    sec--;
    headerDiv.append(timer);
}

function seeResult(){
    //createDesktop4();
}

let notisDiv = document.createElement("div");

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