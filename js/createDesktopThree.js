
import { renderGameBoard } from "./grid.js";
import { countDown } from "./setTimer.js";
import { socket } from "./main.js";
import { printChatMessage } from "./createChat.js";
import { chatMsg } from "./createChat.js";
import createGrid from "./createGrid.js";
import { printUsers } from "./createChat.js";
import { myInterval } from "./setTimer.js";

import displaySolution from "./createSolution.js";


export default function createDesktopThree (data) {
    
    //console.log(data);
    createGameHtml(data);
        
    function createGameHtml(data) {
        
        //console.log(data);

        const currentUser = data.find(data => data.id === socket.id);
        //console.log(currentUser);
        const container = document.querySelector('.contentContainer');
        container.innerHTML = "";
        //console.log(container);
    
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main-div');
    
        const playDiv = document.createElement('div');
        playDiv.classList.add('play-div');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-div');
        
        const chatDiv = document.createElement('div');
        chatDiv.classList.add('chat-div');
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
    
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header-div');
    
        const colourAttached = document.createElement("span");
        colourAttached.classList.add('color-span');
        colourAttached.style.backgroundColor = currentUser.color;
    
        const displayTime = document.createElement("span");
        displayTime.classList.add('time-span');
        displayTime.innerText = "Återstående tid kvar: ";
    
        const displayName = document.createElement("h3");
        displayName.classList.add('name-h3');
        displayName.innerText = 'Hej ' + currentUser.userName + ', du är färgen';
    
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-div');
    
    
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div');
    
        const cancelBtn = document.createElement("button");
        cancelBtn.id = "cancelBtn";
        cancelBtn.innerText = "Avbryt";

    
        const resultBtn = document.createElement("button");
        resultBtn.id = "resultBtn";
        resultBtn.innerText = "Se resultat";
    
        container.appendChild(mainDiv);
        mainDiv.append(playDiv, imageDiv, chatDiv);
        playDiv.append(headerDiv, gridDiv, footerDiv);
        headerDiv.append(displayName,  displayTime);
        displayName.appendChild(colourAttached);
        displayTime.append(countDown);
        footerDiv.append(resultBtn, cancelBtn);

  const chatMessages = document.querySelector('.chat-messages');
  function tillbakatillindex(){
    window.location.href = "index.html";

  }

  cancelBtn.addEventListener("click", () => {
    console.log("Avbryt");
    socket.emit("cancelGame");
    tillbakatillindex();
  });
  


  socket.on("redirect", () => {
    tillbakatillindex();
  });


    socket.on('message', message => {
    printChatMessage(message);
    // console.log(message);

    // scroll down
      chatMessages.scrollTop = chatMessages.scrollHeight;
      });

    chatMsg(currentUser);

        renderGameBoard(gridDiv, currentUser);        
        createGrid(imageDiv);
      
        resultBtn.addEventListener("click", () => {
          displaySolution(gridDiv);  
          clearInterval(myInterval);        
        });            

        socket.on('result', (similarityPercentage) => {
          gridDiv.innerHTML='';
          console.log("percentage:", similarityPercentage);
          const resultDiv = document.createElement('div');
          resultDiv.innerHTML = `Grattis! Ni fick ${similarityPercentage} rätt. Bra jobbat.`;
          gridDiv.append(resultDiv);
        });
        
        socket.emit('joinGame', ({ data }));

        socket.on('gameUsers', (data) => {
          printUsers(data);
        });
    }
  }



