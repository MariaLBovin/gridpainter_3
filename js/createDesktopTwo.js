import createDesktopThree from "./createDesktopThree.js";
import { socket } from "./main.js";
import { printChatMessage, printUsers } from "./createChat.js";
import fetchImage from "./fetchImage.js";


export default function createDesktopTwo() {
  const contentContainer = document.querySelector(".contentContainer");
  contentContainer.innerHTML = "";

  function desktopTwoInnerHTML(data) {
    const containerDiv = document.createElement("div");

    const playerHeader = document.createElement("h2");
    playerHeader.innerHTML = "Antal spelare " + data.length;

    const h3 = document.createElement("h3");
    h3.innerText = "Spelets regler:";

    const textArticle = document.createElement("article");
    textArticle.innerText = `När spelet börjar blir du tilldelad en färg (grön, gul, blå eller grön). Färgen kommer visas på nästa sida. 
                    I början på spelet kommer en bild att visas i 10 sekunder och sedan försvinner bilden. Du och tillsammans med 3 andra spelar har i uppgift att rita av den tidigare visade bilden.
                    Tänk även på att rätt färg ska vara i rätt ruta.`;
    const p = document.createElement("p");
    p.innerHTML = "Lycka till!";

    const startGameBtn = document.createElement("button");
    startGameBtn.innerText = "Starta spelet";

    contentContainer.appendChild(containerDiv);
    containerDiv.append(playerHeader, h3, textArticle, p, startGameBtn);

    startGameBtn.addEventListener("click", (e) => {
        e.preventDefault();
      
        socket.emit('joinGame', ({ data }));

        // socket.on('message', message => {
        //   //printChatMessage(message);
        //   console.log('printchatmessage', message);
      
        //   // scroll down
        //     //chatMessages.scrollTop = chatMessages.scrollHeight;
        //     });
        // socket.on('gameUsers', (data) => {
        //   //console.log('gameUser', data);
        //   printUsers(data);
        //   //fetchImage();
        // });
        // createDesktopThree(data);
    });
    
  }

  socket.on('gameUsers', (data) => {
    createDesktopThree(data, );
    printUsers(data);
  });

  

  function handleUpdateUsers(data) {
    contentContainer.innerHTML = "";
    desktopTwoInnerHTML(data);
  }

  socket.on("updateUsers", handleUpdateUsers);

  socket.on("fullGame", () => {
    contentContainer.innerText = "Spelet är fullt, försök igen senare";
    const backButton = document.createElement("button");
    backButton.innerText = "Tillbaka till startsidan";

    backButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });

    contentContainer.appendChild(backButton);
  });
  
}



