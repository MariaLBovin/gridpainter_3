//import { login } from "../main.js";
import regPlayer from "./color.js";
import { renderGameBoard } from "./grid.js";
import getPlayer from "./getPlayer.js";
import cancel from "./gameButtons.js";
import { notisDiv } from "./gameButtons.js";
import { countDown } from "./setTimer.js";
import { chatMsg } from "./chat.js";
import { outputMessage } from "./chat.js";

const socket = io('http://localhost:3000');


 export const headerDiv = document.createElement('div');
 export const footerDiv = document.createElement("div");
 export const displayName = document.createElement("h3");
 export const colourAttached = document.createElement("p");

export default function createDesktopThree () {
    const container = document.querySelector('.contentContainer');
    container.innerHTML = "";
    console.log(container); 

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('pagethree-wrapper');

    const playDiv = document.createElement('div');
    playDiv.classList.add("play-div");

    const chatDiv = document.createElement('div');
    chatDiv.classList.add('chat-div');
    
    chatDiv.innerHTML = ` <div class="chat-container">
    <header class="chat-header">
      <h1><i class="fas fa-smile"></i> ChatCord</h1>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3><i class="fas fa-users"></i>Spelare</h3>
        <ul id="users">
          <li>Brad</li>
          <li>John</li>
          <li>Mary</li>
          <li>Paul</li>
          <li>Mike</li>
        </ul>
      </div>
      <div class="chat-messages">
					<div class="message">
					</div>
					<div class="message">
						<p class="meta">Mary <span>9:15pm</span></p>
						<p class="text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
							repudiandae.
						</p>
					</div>
      </div>
    </main>
    <div class="chat-form-container">
      <form id="chat-form">
        <input
          id="msg"
          type="text"
          placeholder="Skriv ditt meddelande..."
          required
          autocomplete="off"
        />
        <button class="btn"><i class="fas fa-paper-plane"></i>Skicka</button>
      </form>
    </div>
  </div>`;

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText="Avbryt";
    const resultBtn = document.createElement("button");
    resultBtn.innerText="Se resultat";

    colourAttached.innerHTML="färg";
    const displayTime = document.createElement("p");
    displayTime.innerText="Återstående tid kvar: ";

    resultBtn.addEventListener("click", seeResult);
    cancelBtn.addEventListener("click", cancel);

    displayTime.append(countDown);
    headerDiv.append(displayName, colourAttached, displayTime);

    footerDiv.append(resultBtn, cancelBtn);

    container.appendChild(mainDiv);
    mainDiv.append(playDiv, chatDiv);

    playDiv.prepend(headerDiv, displayTime);
    playDiv.append(renderGameBoard(), footerDiv);

    // playDiv.append(renderGameBoard());

    getPlayer();
    // renderGameBoard();
    notisDiv.remove();
    //cancel();

    
}


function seeResult(){
    //createDesktop4();
}




