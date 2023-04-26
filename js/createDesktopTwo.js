import createDesktopThree from "./createDesktopThree.js";
import { socket } from "./main.js";
import { printUsers } from "./createChat.js";


export default function createDesktopTwo() {
  const contentContainer = document.querySelector(".contentContainer");
  contentContainer.innerHTML = "";

  function updateContent(data) {
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
    startGameBtn.disabled = true;

    contentContainer.appendChild(containerDiv);
    containerDiv.append(playerHeader, h3, textArticle, p, startGameBtn);

    startGameBtn.addEventListener("click", (e) => {
        e.preventDefault();

        socket.emit('joinGame', ({ data }));

        socket.on('gameUsers', (data) => {
          printUsers(data);
        });
        console.log(data);
        createDesktopThree(data);
    } );
    console.log('inloggade i spelet' + data);

    socket.emit('startGame', (data));

    socket.on('activateStartGameBtn', () => {
      startGameBtn.disabled = false; // Aktivera knappen 
    });
  }

  function handleUpdateUsers(data) {
    contentContainer.innerHTML = "";
    updateContent(data);
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

