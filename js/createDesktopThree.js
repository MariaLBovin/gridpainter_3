//import { login } from "../main.js";
import regPlayer from "./color.js";
import { renderGameBoard } from "./grid.js";
import getPlayer from "./getPlayer.js";
import cancel from "./gameButtons.js";
import { notisDiv } from "./gameButtons.js";
import { countDown } from "./setTimer.js";
import { chatMsg, printUsers } from "./chat.js";
import { printChatMessage } from "./chat.js";

const socket = io('http://localhost:3000');

 export const headerDiv = document.createElement('div');
 export const footerDiv = document.createElement("div");
 export const displayName = document.createElement("h3");
 export const colourAttached = document.createElement("p");

export default function createDesktopThree (data) {
    console.log(data);
    const container = document.querySelector('.contentContainer');
    container.innerHTML = "";
    console.log(container); 

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('pagethree-wrapper');

    const playDiv = document.createElement('div');
    playDiv.classList.add("play-div");

    const chatDiv = document.createElement('div');
    chatDiv.classList.add('chat-div');

    // const usersListItems = data.map(user => `<li>${user.userName}</li>`).join('');

    
    chatDiv.innerHTML = ` <div class="chat-container">
    <header class="chat-header">
      <h1>Spelchat</h1>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3>Spelare</h3>
        <ul id="users">
        </ul>
      </div>
      <div class="chat-messages">
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
        <button class="btn"></i>Skicka</button>
      </form>
    </div>
  </div>`;

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText="Avbryt";
    const resultBtn = document.createElement("button");
    resultBtn.innerText="Se resultat";

    colourAttached.innerHTML="färg";
    const displayTime = document.createElement("span");
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

    const chatMessages = document.querySelector('.chat-messages');
            
            socket.on('message', message => {
                printChatMessage(message);
                console.log(message);

                // scroll down
                chatMessages.scrollTop = chatMessages.scrollHeight;
            });
    
    chatMsg(data);
    getPlayer();
    printUsers(data);
    notisDiv.remove();  
}


function seeResult(){
    //createDesktop4();
}




