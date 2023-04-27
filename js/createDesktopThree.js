import checkPercentage from "./checkpercentage.js";
import { renderGameBoard } from "./grid.js";
//import cancel from "./gameButtons.js";
//import { notisDiv } from "./gameButtons.js";
import { countDown } from "./setTimer.js";
import { socket } from "./main.js";
import { printChatMessage } from "./createChat.js";
import { chatMsg } from "./createChat.js";
import createGrid from "./createGrid.js";
import { printUsers } from "./createChat.js";

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
        cancelBtn.innerText = "Avbryt";
    
        const resultBtn = document.createElement("button");
        resultBtn.id = "resultBtn";
        resultBtn.innerText = "Se resultat";
    
    
        resultBtn.addEventListener("click", async () => {
          console.log(img1);
            // const similarityPercentage = checkPercentage(img1, conclusionPic);
            // console.log(similarityPercentage);
          });

        // cancelBtn.addEventListener("click", cancel);
        container.appendChild(mainDiv);
        mainDiv.append(playDiv, imageDiv, chatDiv);
        playDiv.append(headerDiv, gridDiv, footerDiv);
        headerDiv.append(displayName,  displayTime);
        displayName.appendChild(colourAttached);
        displayTime.append(countDown);
        footerDiv.append(resultBtn, cancelBtn);

  const chatMessages = document.querySelector('.chat-messages');
            
    socket.on('message', message => {
    printChatMessage(message);
    // console.log(message);

    // scroll down
      chatMessages.scrollTop = chatMessages.scrollHeight;
      });

    chatMsg(currentUser);

        renderGameBoard(gridDiv, currentUser);
        createGrid(imageDiv);



        //FIXME: this is for making conclusion picture and save it db
        // resultBtn.addEventListener("click", () => {
        //   const gridContainer = document.querySelector(".grid");
        //   const conclusionPic = [];

        //   // loop through each row in the grid
        //   for (let i = 0; i < gridContainer.rows.length; i++) {
        //     const row = gridContainer.rows[i];
        //     const rowArray = [];

        //     // loop through each cell in the current row
        //     for (let j = 0; j < row.cells.length; j++) {
        //       const cell = row.cells[j];

        //       // create an object to store the cell data
        //       const cellObject = {
        //         id: cell.id,
        //         style: cell.style.backgroundColor,
        //       };
              
        //       rowArray.push(cellObject);
        //     }

        //     // add the row array to the conclusion pic array
        //     conclusionPic.push(rowArray);
        //   }

        //   // flatten the conclusion pic array into a one array with method concat
        //   const conclusionFlat = [].concat(...conclusionPic);

          // create an object with the grid data and a name for the conclusion pic
          const dbConclusionPic = {name: "flower", grid: conclusionFlat};
          socket.emit("grid-data", dbConclusionPic);
        });   
        
        socket.emit('joinGame', ({ data }));

        socket.on('gameUsers', (data) => {
          printUsers(data);
          // fetchImage();
        });
    }
}


